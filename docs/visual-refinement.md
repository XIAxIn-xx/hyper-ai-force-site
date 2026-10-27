# Hyper AIForce 视觉精修交付记录

日期：2026-10-27。修改位于现有 Next.js 项目；尚未提交、推送或发布线上。

## 视觉变化

- Header / Footer：石墨黑与碳黑表面、中性灰分隔线、统一品牌橙导航状态；滚动后增强深色层次。Logo 图片保持原样。
- Hero：蓝黑色遮罩改为中性石墨黑；保留现有视频和海报；辅助文字采用钛银灰，CTA 统一橙底深字。材质背景位于视频底层，不向真实产品叠加反光。
- Product Matrix：首页仍为 Hero 后第一模块。保留双列及手机单列，增加浅钛灰底座、细边缘反射与轻量阴影。图片保持 object-contain，无滤镜，取消 Hover 图片变暗。
- Applications / Why / Field：首页采用统一软白、纯白、中性灰与深色正文；应用图片边框简化，价值图标使用钢灰。案例保留真实摄影与现有指标，不做金属字。
- Technology：首页真实 RSP 截图容器增加定向窄反射、低对比拉丝与局部上沿高光；内页媒体容器沿用相同边缘规则。
- Philosophy：AI 白、Force 品牌橙、You 钛银，细金属分隔；Mission / Vision 与现有文案完整保留。
- Final CTA：独立碳黑材质面板，橙底深字主按钮；手机面板采用更小内边距。
- 产品目录、两款产品详情、技术、解决方案、合作、关于、联系、资料及法律页面：原蓝黑表面绑定共享语义 Tokens；表单与 Cookie 浮层同步颜色。
- 解决方案示意图：蓝色装饰与数据线改为低亮度银灰；原有流程功能、异常与成功状态色保留。
- 合作内页：移除循环扫光、橙色光晕与放大特效。

## Tokens

保留现有 HSL 变量与 Tailwind API，在 app/globals.css 扩展语义值。

| Token | 值 / 用途 |
| --- | --- |
| --brand-orange / --brand-orange-rgb | #F37021 / 243 112 33，主品牌色 |
| --brand-orange-deep | #C74B12，保留候选值；未用于浅底小字 |
| --brand-link-light | #AD400D，浅色背景小字链接 |
| --brand-hover | #F58542，按钮 Hover |
| --bg-dark / --surface-dark / --surface-steel | #0F1113 / #171A1E / #252A30 |
| --bg-light / --surface-light / --surface-titanium | #F5F6F7 / #FFFFFF / #E6E9EC |
| --metal-highlight / --steel-muted | #C9CDD2 / #727A84 |
| --text-primary-dark / --text-primary-light | #FFFFFF / #171A1E |
| --text-secondary-dark / --text-secondary-light | #B4BAC2 / #535B65 |
| --border-light / --border-dark / --border-metal | #DDE1E5 / #394149 / 钛银 28% |
| --focus-ring | 品牌橙 |
| --card-radius / --motion-duration | 12px / 280ms |
| --metal-reflection / --metal-edge | 定向窄反射 / 非均匀上沿高光 |

Tailwind 既有 orange 工具类统一映射品牌橙（透明度保留），slate 改为中性灰阶。主按钮改为 brand-button，普通 Card 使用中性边框和轻阴影；材质容器显式使用以下类。

## 可复用材质

- metallic-surface：深色基底与局部窄反射；不覆盖内容。
- metallic-brushed：1.2% 不透明度的细密纹理，仅用于关键技术及产品面板。
- metallic-edge：1px 钛银边框、局部上沿亮部与微弱内阴影。
- metallic-hover：仅鼠标 Hover 时轻微增强边缘，280ms；触控保留静态材质。
- 所有材质使用 CSS，不新增贴图、动画库或持续扫光。

## 检查结果

- TypeScript：pnpm typecheck 通过；最终 pnpm exec tsc --noEmit --incremental false 通过。
- 14 个代表路由 HTTP 200 且包含 main-content，见下表。此项不等同于完整功能回归。
- 桌面实际 CSS 视口 1309px：首页双列、产品完整比例、无横向溢出。
- 手机实际 CSS 视口 390px：英文与简体首页无横向溢出；产品单列、品牌哲学三列正常；联系页无横向溢出。
- 手机导航展开/关闭正常，当前页显示品牌橙。
- 产品图片计算样式为 object-fit: contain、filter: none；抽查图片加载成功。
- 联系表单字段深色背景及主按钮颜色正常；浏览器抽查无 console error。未提交真实询盘，未验证邮件送达。
- 焦点：统一 focus-visible 轮廓；保留按钮及表单原有 focus ring。
- Reduced motion：Hero / Reveal 使用既有 Framer Motion 的偏好检测；CSS 降低动画与过渡，新材质本身为静态。未做系统偏好模拟验收。
- 性能：没有新增依赖、网络素材或 JS 反光计算；移除了部分模糊光晕与循环扫光。未做 Lighthouse、低端真机或生产性能测量，不能据此确认性能指标无回退。
- 未运行 pnpm build 或 git diff --check。

### 对比度抽查

按 WCAG 相对亮度公式计算，以下正常文字组合均超过 AA 的 4.5:1。

| 组合 | 对比度 |
| --- | --- |
| 主按钮深字 / 品牌橙 | 5.94:1 |
| 浅底链接 #AD400D / #F5F6F7 | 5.52:1 |
| 深色次要文字 / Deep Steel | 7.40:1 |
| 浅色次要文字 / Soft White | 6.36:1 |
| 品牌橙 / Deep Steel | 4.92:1 |

候选 #C74B12 在 #F5F6F7 上仅 4.37:1，因此浅底小字使用独立的深色链接 Token。未对所有视频帧、透明叠层、状态及全部页面做自动化无障碍审计。

### 路由抽查

- `/`：200
- `/zh-cn`：200
- `/zh-hk`：200
- `/products`：200
- `/products/force-01`：200
- `/products/force-05`：200
- `/technology`：200
- `/solutions`：200
- `/applications`：200
- `/collaboration`：200
- `/about`：200
- `/contact`：200
- `/resources`：200
- `/privacy`：200

## 截图

桌面产品区：

![桌面产品区](/Users/edy/Desktop/hyper-ai-force-site/.artifacts/visual-refinement/desktop-products.png)

手机品牌哲学：

![手机品牌哲学](/Users/edy/Desktop/hyper-ai-force-site/.artifacts/visual-refinement/mobile-philosophy.png)

## 修改文件

- `app/globals.css`
- `components/layout/Footer.tsx`
- `components/layout/Header.tsx`
- `components/products/ProductDetail.tsx`
- `components/products/ProductVisual.tsx`
- `components/sections/AboutSection.tsx`
- `components/sections/ApplicationsSection.tsx`
- `components/sections/CapabilitySystemSection.tsx`
- `components/sections/CaseStudyMedia.tsx`
- `components/sections/CaseStudySection.tsx`
- `components/sections/ContactSection.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/HomeStory.module.css`
- `components/sections/HomeStory.tsx`
- `components/sections/MarketSection.tsx`
- `components/sections/PatrolMap.tsx`
- `components/sections/PatrolStatusCard.tsx`
- `components/sections/ProductsSection.tsx`
- `components/sections/Reveal.tsx`
- `components/sections/RspControlPanel.tsx`
- `components/sections/RspPatrolClosedLoop.tsx`
- `components/sections/ServiceNetworkSection.tsx`
- `components/sections/StackOverviewSection.tsx`
- `components/site/CookiePreferences.tsx`
- `components/site/SitePage.tsx`
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/input.tsx`
- `components/ui/select.tsx`
- `components/ui/textarea.tsx`
- `tailwind.config.ts`
- `docs/visual-refinement.md`（本交付记录）

## 待确认

- 本轮无需补充素材。
- 完整宽窄屏页面巡检、真机及 Reduced Motion 模拟仍需补充；目前为代表页面抽查。
- 未改动发布配置，未发布 haiforce.ai。既有 SEO 默认地址为 https://haif.ai；正式发布时需确认生产 NEXT_PUBLIC_SITE_URL 指向用户指定域名。


## 第二轮：增强金属感、改善内页明暗（2026-10-27）

本节为最新状态，覆盖上文相应页面的第一轮配色说明。

- 新增 `--metal-silver-base`、`--metal-silver-grain`、`--metal-silver-reflection`；新增 `interior-hero`、`titanium-section`、`titanium-card` 与局部浅色文字规则。
- 内页标题区域由纯黑改为钢灰金属，增加静态定向反射；技术内容按浅灰 / 钢灰交替。
- 产品目录外层、产品详情的优势 / 参数 / 应用、应用场景、关于、联系及法律正文改为浅色阅读区；产品展示面板与联系表单保持深色仪器质感。
- 合作卡片、资料卡片、参数载荷面板、关联导航带采用银色拉丝表面与明暗倒角；首页只增强产品底座及已有材质，不改结构。
- TypeScript 最终检查通过。1440px 桌面检查技术页明暗与正文颜色、合作卡片材质正常；390px 手机抽查产品目录、FORCE 01 详情、解决方案、关于、联系、简体技术及隐私页均无横向溢出，浏览器无 console error。
- 未提交表单；未执行 build、diff check、安装依赖或发布线上。

![技术页第二轮](/Users/edy/Desktop/hyper-ai-force-site/.artifacts/visual-refinement/technology-silver.png)

![合作页第二轮](/Users/edy/Desktop/hyper-ai-force-site/.artifacts/visual-refinement/collaboration-silver.png)
