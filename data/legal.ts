import type { Locale } from "@/data/hyper";
import type { Section } from "@/lib/site";

type LegalBlock = { heading: string; paragraphs: string[] };
export const legalCopy: Record<Locale, Partial<Record<Section, LegalBlock[]>>> = {
  en: {
    privacy: [
      { heading: "Information and purpose", paragraphs: ["Hyper AIForce Limited receives the name, company, email address, telephone number, selected product or interest, and message you submit. We use this information to respond to your inquiry, arrange demonstrations and discuss the services you request. Please do not include sensitive personal information in your message."] },
      { heading: "Service providers", paragraphs: ["The contact form uses Cloudflare Turnstile to check for automated abuse and Resend to deliver inquiry emails and acknowledgements. Hosting and these providers may process technical data such as IP addresses and browser information. Providers may process data outside your location, subject to their applicable service terms and safeguards.", "Google Analytics 4 is optional. When configured, it loads only after you accept analytics. Our custom measurement uses approved page paths and selected interaction identifiers; it does not include inquiry fields, URL query strings, fragments or referring URLs."] },
      { heading: "Retention and your choices", paragraphs: ["Inquiry information is retained only as needed to handle your request, maintain relevant business records and meet applicable obligations. Exact retention depends on the inquiry and those obligations. We do not use your inquiry consent as permission for unrelated marketing.", "You may request access, correction or deletion of information, or withdraw consent where applicable, by contacting contact@haiforce.ai. Some records may need to be retained to meet legal obligations. You can change analytics preferences at any time using the footer."] },
      { heading: "Contact and changes", paragraphs: ["For questions about this notice or how your information is handled, email contact@haiforce.ai. This notice may be updated when services or data practices change."] }
    ],
    terms: [
      { heading: "Using this website", paragraphs: ["This website provides information about Hyper AIForce products and services. Use it lawfully. Do not interfere with its operation, attempt unauthorized access or submit abusive or misleading requests."] },
      { heading: "Content and intellectual property", paragraphs: ["Website text, images, videos and documents are protected by applicable intellectual property rights. You may view and download materials made available for that purpose for internal evaluation and product use. Further redistribution or commercial reuse requires permission from the relevant rights holder."] },
      { heading: "Product information and transactions", paragraphs: ["Website information is for general reference. Availability, specifications, integrations, delivery and service commitments depend on the agreed configuration and written project documents. An inquiry or download does not create a purchase contract or service commitment."] },
      { heading: "Third-party services and contact", paragraphs: ["Linked services and documents may have separate terms. To the extent permitted by applicable law, we are not responsible for third-party content or interruptions outside our control. Nothing here excludes rights or liabilities that cannot lawfully be excluded. Questions: contact@haiforce.ai."] }
    ],
    cookies: [
      { heading: "Necessary storage and security", paragraphs: ["We store your cookie preference in this browser's localStorage under haiforce-cookie-preferences-v1 for up to 180 days. This is used to remember your choice. If browser storage is unavailable, the choice may not persist. Cloudflare Turnstile is used for form security and may process technical information as described in its privacy documentation."] },
      { heading: "Optional analytics", paragraphs: ["When a valid GA4 measurement ID is configured and you accept analytics, Google Analytics may set first-party cookies including _ga and _ga_*. These help measure visits and sessions. Cookie lifetimes depend on the GA4 configuration; this browser's storage tools show the actual expiry.", "Analytics is disabled by default. Advertising storage, Google Signals and advertising personalization are disabled in our integration."] },
      { heading: "Change or withdraw", paragraphs: ["Choose Accept analytics, Reject analytics or manage your choice in Cookie preferences. You may reopen preferences from the footer. Withdrawal stops our analytics integration and attempts to remove accessible Google Analytics cookies. Browser settings can also remove stored cookies and local data. Previously collected data is not automatically deleted by changing this preference."] }
    ],
    disclaimer: [
      { heading: "Specifications and demonstrations", paragraphs: ["Images, demonstrations, interface animations and example scenarios illustrate possible configurations or workflows. They do not establish certification, regulatory approval, availability or performance at your site. Product details, optional payloads and supported integrations must be confirmed for the selected configuration."] },
      { heading: "Operating conditions", paragraphs: ["Range, endurance, connectivity, sensing and protection depend on factors including terrain, temperature, payload, network conditions, maintenance and operating procedures. Follow the supplied manual, training and applicable site requirements. Website content is not a substitute for operating instructions or a site risk assessment."] },
      { heading: "Project confirmation", paragraphs: ["Final commitments are those in agreed quotations, contracts and technical documentation. Contact contact@haiforce.ai to confirm requirements. Nothing in this notice limits rights that applicable law does not allow to be limited."] }
    ],
    accessibility: [
      { heading: "Access to information", paragraphs: ["We aim to make product and company information usable across devices and input methods. The site includes semantic headings, keyboard-operable controls and reduced-motion support in selected interactive components. This statement is not a claim of certified accessibility conformance."] },
      { heading: "Report a barrier", paragraphs: ["If a page, document or interaction is difficult to use, email contact@haiforce.ai with the page address and a description of the issue. Include your browser or assistive technology if helpful. We will review the issue and discuss an alternative way to provide the information."] }
    ]
  },
  "zh-cn": {
    privacy: [
      { heading: "收集的信息与用途", paragraphs: ["超流智能接收您在表单中填写的姓名、公司、电子邮箱、电话号码、产品或方案兴趣以及需求描述，用于回复咨询、安排演示及讨论您所请求的服务。请勿在留言中填写敏感个人信息。"] },
      { heading: "服务提供商", paragraphs: ["咨询表单使用 Cloudflare Turnstile 识别自动化滥用，使用 Resend 发送咨询通知与自动回复。托管服务及上述服务商可能处理 IP 地址、浏览器信息等技术数据。服务商可能在您所在地以外处理数据，具体受其适用服务条款及保障措施约束。", "Google Analytics 4 属于可选分析服务。配置后仅在您同意分析时加载。本站自定义统计使用经批准的页面路径及交互标识，不包含咨询字段、URL 查询参数、片段或来源网址。"] },
      { heading: "保存与您的选择", paragraphs: ["咨询信息仅在处理需求、保留相关业务记录及履行适用义务所需期间保存，具体期限取决于咨询事项及相关义务。咨询授权不作为无关营销的许可。", "您可通过 contact@haiforce.ai 请求查阅、更正或删除信息，或在适用情况下撤回同意。为履行法律义务，部分记录可能需要继续保存。分析偏好可随时在页脚修改。"] },
      { heading: "联系与更新", paragraphs: ["如对本政策或信息处理有疑问，请联系 contact@haiforce.ai。服务或数据处理方式发生变化时，本政策可能更新。"] }
    ],
    terms: [
      { heading: "网站使用", paragraphs: ["本网站介绍超流智能的产品及服务。请合法使用网站，不得干扰运行、尝试未经授权的访问，或提交滥用及误导性请求。"] },
      { heading: "内容与知识产权", paragraphs: ["网站文字、图片、视频及文档受适用知识产权保护。您可为内部评估及产品使用，查看和下载明确提供的资料。进一步分发或商业使用须取得相关权利人的许可。"] },
      { heading: "产品信息与交易", paragraphs: ["网站信息供一般参考。供应情况、规格、集成、交付及服务承诺以确认的配置和书面项目文件为准。提交咨询或下载资料不构成采购合同或服务承诺。"] },
      { heading: "第三方服务与联系", paragraphs: ["外部服务和文档可能适用独立条款。在适用法律允许的范围内，我们不对第三方内容或控制范围以外的中断负责。本条款不排除依法不得排除的权利或责任。问题请联系 contact@haiforce.ai。"] }
    ],
    cookies: [
      { heading: "必要存储与安全", paragraphs: ["本站使用浏览器 localStorage，以 haiforce-cookie-preferences-v1 保存 Cookie 偏好，最长 180 天，用于记住您的选择。浏览器存储不可用时，选择可能无法保留。Cloudflare Turnstile 用于表单安全，可能按其隐私说明处理技术信息。"] },
      { heading: "可选分析", paragraphs: ["配置有效 GA4 ID 且您同意分析后，Google Analytics 可能设置 _ga、_ga_* 等第一方 Cookie，帮助统计访问与会话。期限取决于 GA4 配置，实际到期时间可在浏览器存储工具中查看。", "分析默认关闭。本站集成关闭广告存储、Google Signals 和广告个性化。"] },
      { heading: "修改或撤回", paragraphs: ["您可以接受分析、拒绝分析，或在 Cookie 偏好中选择。页脚可随时重新打开设置。撤回后，本站停止分析集成并尝试清除可访问的 GA Cookie。您也可以通过浏览器设置清除 Cookie 与本地数据。修改偏好不会自动删除此前已收集的数据。"] }
    ],
    disclaimer: [
      { heading: "规格与演示", paragraphs: ["图片、演示、界面动画及场景示例用于说明可能的配置或流程，不代表认证、监管批准、供货状态或在您场地的性能保证。产品细节、选配载荷和集成支持须按具体配置确认。"] },
      { heading: "运行条件", paragraphs: ["续航、距离、通信、感知及防护表现受地形、温度、载荷、网络、维护和操作流程等因素影响。请遵守随附手册、培训与场地规定。网站内容不能替代操作说明或现场风险评估。"] },
      { heading: "项目确认", paragraphs: ["最终承诺以双方确认的报价、合同及技术文档为准。需求确认请联系 contact@haiforce.ai。本声明不限制适用法律规定不得限制的权利。"] }
    ],
    accessibility: [
      { heading: "信息访问", paragraphs: ["我们希望产品与公司信息可在不同设备和输入方式下使用。网站使用语义化标题、可通过键盘操作的控件，并在部分交互组件中支持减少动态。本声明不表示网站已取得无障碍合规认证。"] },
      { heading: "反馈访问障碍", paragraphs: ["如页面、文档或交互存在使用困难，请将页面地址和问题描述发送至 contact@haiforce.ai，必要时注明浏览器或辅助技术。我们会评估问题，并讨论以其他方式提供信息。"] }
    ]
  },
  "zh-hk": {
    privacy: [
      { heading: "收集的資料與用途", paragraphs: ["超流智能接收您在表單填寫的姓名、公司、電郵地址、電話號碼、產品或方案興趣及需求描述，用於回覆查詢、安排演示及討論您所要求的服務。請勿在留言填寫敏感個人資料。"] },
      { heading: "服務供應商", paragraphs: ["查詢表單使用 Cloudflare Turnstile 識別自動化濫用，使用 Resend 發送查詢通知及自動回覆。託管服務及上述供應商可能處理 IP 位址、瀏覽器資料等技術數據。供應商可能在您所在地以外處理資料，具體受其適用服務條款及保障措施約束。", "Google Analytics 4 屬可選分析服務。配置後僅在您同意分析時載入。本站自訂統計使用經批准的頁面路徑及互動識別資料，不包括查詢欄位、URL 查詢參數、片段或來源網址。"] },
      { heading: "保留與您的選擇", paragraphs: ["查詢資料僅在處理需求、保留相關業務記錄及履行適用義務所需期間保存，具體期限取決於查詢事項及相關義務。查詢授權不作為無關推廣的許可。", "您可透過 contact@haiforce.ai 要求查閱、更正或刪除資料，或在適用情況下撤回同意。為履行法律義務，部分記錄可能需要繼續保存。分析偏好可隨時在頁尾修改。"] },
      { heading: "聯絡與更新", paragraphs: ["如對本政策或資料處理有疑問，請聯絡 contact@haiforce.ai。服務或資料處理方式改變時，本政策可能更新。"] }
    ],
    terms: [
      { heading: "網站使用", paragraphs: ["本網站介紹超流智能的產品及服務。請合法使用網站，不得干擾運作、嘗試未經授權的存取，或提交濫用及誤導性要求。"] },
      { heading: "內容與知識產權", paragraphs: ["網站文字、圖片、影片及文件受適用知識產權保護。您可為內部評估及產品使用，查看和下載明確提供的資料。進一步分發或商業使用須取得相關權利人的許可。"] },
      { heading: "產品資料與交易", paragraphs: ["網站資料供一般參考。供應情況、規格、整合、交付及服務承諾以確認的配置和書面項目文件為準。提交查詢或下載資料不構成採購合約或服務承諾。"] },
      { heading: "第三方服務與聯絡", paragraphs: ["外部服務及文件可能適用獨立條款。在適用法律允許的範圍內，我們不對第三方內容或控制範圍以外的中斷負責。本條款不排除依法不得排除的權利或責任。問題請聯絡 contact@haiforce.ai。"] }
    ],
    cookies: [
      { heading: "必要儲存與安全", paragraphs: ["本站使用瀏覽器 localStorage，以 haiforce-cookie-preferences-v1 保存 Cookie 偏好，最長 180 天，用於記住您的選擇。瀏覽器儲存不可用時，選擇可能無法保留。Cloudflare Turnstile 用於表單安全，可能按其私隱說明處理技術資料。"] },
      { heading: "可選分析", paragraphs: ["配置有效 GA4 ID 且您同意分析後，Google Analytics 可能設定 _ga、_ga_* 等第一方 Cookie，協助統計瀏覽與工作階段。期限取決於 GA4 配置，實際到期時間可在瀏覽器儲存工具查看。", "分析預設關閉。本站整合關閉廣告儲存、Google Signals 及廣告個人化。"] },
      { heading: "修改或撤回", paragraphs: ["您可以接受分析、拒絕分析，或在 Cookie 偏好中選擇。頁尾可隨時重新開啟設定。撤回後，本站停止分析整合並嘗試清除可存取的 GA Cookie。您亦可透過瀏覽器設定清除 Cookie 與本地資料。修改偏好不會自動刪除此前已收集的數據。"] }
    ],
    disclaimer: [
      { heading: "規格與演示", paragraphs: ["圖片、演示、介面動畫及場景示例用於說明可能的配置或流程，不代表認證、監管批准、供貨狀態或在您場地的性能保證。產品細節、選配載荷及整合支援須按具體配置確認。"] },
      { heading: "運作條件", paragraphs: ["續航、距離、通訊、感知及防護表現受地形、溫度、載荷、網絡、維護和操作流程等因素影響。請遵守隨附手冊、培訓及場地規定。網站內容不能替代操作說明或現場風險評估。"] },
      { heading: "項目確認", paragraphs: ["最終承諾以雙方確認的報價、合約及技術文件為準。需求確認請聯絡 contact@haiforce.ai。本聲明不限制適用法律規定不得限制的權利。"] }
    ],
    accessibility: [
      { heading: "資料存取", paragraphs: ["我們希望產品與公司資料可在不同裝置及輸入方式下使用。網站使用語義化標題、可透過鍵盤操作的控制項，並在部分互動元件中支援減少動態。本聲明不表示網站已取得無障礙合規認證。"] },
      { heading: "反映存取障礙", paragraphs: ["如頁面、文件或互動存在使用困難，請將頁面地址及問題描述傳送至 contact@haiforce.ai，必要時註明瀏覽器或輔助技術。我們會評估問題，並討論以其他方式提供資料。"] }
    ]
  }
};
