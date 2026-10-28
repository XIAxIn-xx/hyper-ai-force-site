# 加载与路由性能修复（2026-10-28）

## 定位到的问题

1. 线上 HTML 返回 `Cache-Control: private, no-cache, no-store`、`x-vercel-cache: MISS`。根布局通过 `next/headers` 读取路径，令本可静态生成的营销页面变成逐请求渲染。
2. Hero 与手机联系 CTA 使用普通站内 `<a>`，跳转重新加载整个文档。
3. 产品图库首次渲染全部高分辨率图片，缩略图再次引用同一大图。
4. 技术与案例视频在挂载后即自动加载 / 播放，屏外媒体争用带宽。
5. 多张内容 PNG 为 1.7–2.6MB；首页视频 9.70MB，巡检视频 11.28MB。部分图片依赖服务器首次编码。
6. 全屏路由 fallback 将三种语言的 Loading 拼在一起；Reveal / Hero 的初始透明度又让已返回的正文等待 JS 才能看见。
7. 联系表单整体包在依赖 useSearchParams 的 Suspense 中，静态页面首次正文缺少整个表单。

## 实施

- 英文路由移动至不改变 URL 的 `(en)` route group；英文、简中、繁中各自提供静态根布局，共用 `components/site/SiteDocument.tsx`。保留服务端正确的 html lang、SEO 及所有公开 URL。
- 三个布局使用 `dynamic = "error"`，防止今后再次无意引入动态渲染；原有 generateStaticParams 保留。
- Middleware 不再读取 / 注入请求路径，不再拦截图片、视频、字体。保留预览环境 noindex。
- Hero / 手机联系 CTA 改为 Next Link，关键导航完整预取。不同语言仍通过原有语言链接加载对应文档。
- 删除 6 个路由 loading.tsx；转场继续显示当前页面，提交新页面后再替换。等待超过 350ms 才显示顶部 2px 进度条，辅助文本仅显示当前语言。
- 图库只渲染当前图和正在替换的上一张图；缩略图用独立 96px 文件。上一张图保留至新图加载完成。
- 新增 `BackgroundVideo`：接近可视区才附加 URL；屏外 / 后台暂停；尊重 Reduced Motion 与 Save Data；首帧就绪前保留海报。
- 生成内容哈希命名的 WebP 与 H.264 MP4；首页使用桌面 / 手机视频；视频均采用 faststart，海报与文字先显示。
- 生成后的媒体直接输出，绕过首次动态图片编码；优化目录配置一年 immutable 浏览器 / CDN 缓存。文件内容改变会生成新 URL。
- 正文取消初始 opacity: 0，避免 hydration 前空白。
- 联系表单先输出完整 HTML，仅将查询参数同步放进小型 Suspense；保留产品预选、CAPTCHA 和提交流程。
- 原始图片、视频、品牌文案、产品型号和页面视觉结构保持不变。

## 素材体积（十进制 MB）

| 素材 | 原始 | 当前交付 |
| --- | ---: | ---: |
| 首页视频，桌面 | 9.70MB | 3.02MB，1280×720 |
| 首页视频，手机 | 9.70MB | 1.68MB，854×480 |
| 自主巡检视频 | 11.28MB | 2.82MB，854×480 |
| 案例视频 | 4.65MB | 3.07MB，1280×720 |
| RSP 截图 | 1.72MB | 0.13MB |
| 远程操作截图 | 2.08MB | 0.12MB |
| 社区场景 | 2.62MB | 0.23MB |
| 图库缩略图 | 引用约 0.19–0.43MB 原图 | 约 0.7–1.6KB |

视频未裁剪内容，24fps 转码后时长差小于 0.1 秒；删除背景视频本来就静音的音轨。原件保留，便于未来做更高质量版本。

## 验证与边界

- 最终 TypeScript 检查通过：`pnpm exec tsc --noEmit --incremental false`。
- 8 个代表路径返回 200；英文 / 简中 / 繁中 html lang 正确；不存在路径返回 404。
- 原始响应 HTML 已包含联系表单；三语并排 Loading 文案消失。
- 浏览器首次 FORCE 01 图库为 1 张大图 + 5 张独立小缩略图，均加载成功；切换视图正常。
- 浏览器导航可到技术、应用页；应用页屏外案例视频 src 为 null，可视范围内巡检视频正常播放。
- `contact?product=force-05` 客户端预选 FORCE 05 正常，未提交真实询盘。
- 手机 390px 实际 currentSrc 指向 heroMobile，未使用桌面视频；无横向溢出，首屏标题直接可见。
- 40 个生成媒体引用全部对应现有文件；4 个 MP4 均经 ffprobe 校验，moov 位于 mdat 前。
- 浏览器抽查无 console error。
- 未运行 build / diff check；未安装依赖；未提交、推送或发布。
- 本地 dev 首次访问仍可能进行按路由编译，且 dev 不等同于生产预取 / 缓存行为。静态生成结果、CDN HIT 与生产冷启动 / 弱网时间需部署后复测；这里不承诺首次联网访问零等待。

## 后续维护

使用现有 ffmpeg 执行 `python3 scripts/optimize-media.py` 可重建媒体映射；原始素材不被覆盖。不要手改生成的哈希文件名和 `lib/media.ts` 映射。

核心文件：`components/site/SiteDocument.tsx`、`components/site/PageLoading.tsx`、`components/site/BackgroundVideo.tsx`、`components/products/ProductVisual.tsx`、`components/sections/HeroSection.tsx`、`components/sections/ContactSection.tsx`、`lib/media.ts`、`middleware.ts`、`next.config.mjs`。
