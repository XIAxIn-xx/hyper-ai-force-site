import type { Locale } from "@/data/hyper";

type Overview = { eyebrow: string; title: string; body: string; cta: string };
type Item = { title: string; body: string };
type HomeCopy = {
  seo: { title: string; description: string };
  hero: { title: string; body: string; primary: string; secondary: string };
  products: Overview & { items: { category: string; body: string; cta: string }[] };
  applications: Overview & { items: Item[] };
  technology: Overview & { items: Item[]; note: string; imageAlt: string; solutions: string };
  value: Omit<Overview, "cta"> & { items: (Item & { label: string })[] };
  field: Overview & { name: string; description: string; outcome: string; imageAlt: string };
  philosophy: { title: string; pillars: { word: string; label: string; verbs: string }[]; lines: string[]; body: string; mission: Item; vision: Item; missionLabel: string; visionLabel: string };
  cooperation: Overview & { items: Item[]; secondary: string };
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    seo: { title: "Hyper AIForce | Robotic Platforms for Real-World Operations", description: "Explore FORCE 01 and FORCE 05 robotic platforms for remote observation, inspection and operations. Discover applications, technology and deployment partnerships with Hyper AIForce." },
    hero: { title: "Extend Your Reach.\nStay in Control.", body: "Robotic platforms for remote observation, inspection, and operations across demanding environments.", primary: "Explore Our Robots", secondary: "Contact Sales" },
    products: {
      eyebrow: "02 / OUR ROBOTS", title: "Different Forms.\nOne Shared Purpose.", body: "Intelligent robotic platforms designed to extend human reach and enable operations across diverse environments.", cta: "Explore Our Robots",
      items: [
        { category: "Quadruped Robotic Platform", body: "A versatile quadruped robotic platform built for remote observation, inspection, and operations across challenging environments.", cta: "Explore FORCE 01" },
        { category: "Spherical Robotic Platform", body: "A spherical robotic platform offering a different approach to mobile exploration and remote observation.", cta: "Explore FORCE 05" }
      ]
    },
    applications: {
      eyebrow: "03 / APPLICATIONS", title: "Built for the Real World.", body: "From public safety to industrial operations, our robotic systems extend human presence into environments where mobility, visibility, and safety matter most.", cta: "Explore Applications",
      items: [
        { title: "Public Safety & Emergency Response", body: "Supporting remote observation and situational awareness in hazardous or uncertain environments." },
        { title: "Industrial & Remote Operations", body: "Enabling remote visibility and inspection across industrial facilities and hard-to-reach sites." },
        { title: "Logistics & Warehousing", body: "Supporting inspection and site monitoring across warehouses and logistics facilities." },
        { title: "Property & Facility Security", body: "Extending observation and security operations across commercial properties and managed facilities." }
      ]
    },
    technology: {
      eyebrow: "04 / TECHNOLOGY", title: "Beyond the Machine.", body: "More than robotic hardware. An integrated ecosystem connecting mobility, perception, communication, and human control.", cta: "Explore Technology", solutions: "Explore Solutions",
      imageAlt: "Existing RSP platform interface showing a site map and perception view", note: "Capabilities, software and payloads depend on the selected system and project configuration. Remote operation, assisted functions and autonomous modes are distinct and must be confirmed for the deployment.",
      items: [
        { title: "Robotic Platforms", body: "Mobility and modular hardware designed for real-world operations." },
        { title: "Remote Connectivity", body: "Communication and remote access capabilities that connect operators with robots in the field." },
        { title: "Intelligent Systems", body: "Perception, operational software, and mission management capabilities that support effective deployment." }
      ]
    },
    value: {
      eyebrow: "05 / WHY HYPER AIFORCE", title: "Technology That\nMakes a Difference.", body: "Intelligent robotics should do more than demonstrate technology. It should create meaningful value in real-world operations.",
      items: [
        { label: "Safety", title: "Keep People Out of Harm's Way.", body: "Reduce the need for personnel to enter hazardous or uncertain environments by enabling robotic observation and exploration." },
        { label: "Presence", title: "Be Present, From Anywhere.", body: "Extend human visibility and operational reach through real-time remote access and control." },
        { label: "Efficiency", title: "Make Every Operation Count.", body: "Support more efficient operations by reducing repetitive site visits and enabling teams to focus on higher-value tasks." }
      ]
    },
    field: {
      eyebrow: "06 / PROVEN IN THE FIELD", title: "Proven in Practice.", body: "Real-world deployment. Operational insight.", name: "GLP Logistics Park Inspection Project", description: "Connecting robotic inspection, the RSP platform and on-site operations in a logistics park environment.", outcome: "The project brings remote site visibility, inspection records and coordinated task management into one operating workflow.", cta: "View Case Study", imageAlt: "Robot at the GLP logistics park, a still from the existing site deployment video"
    },
    philosophy: {
      title: "Our Philosophy", pillars: [
        { word: "AI.", label: "The Mind.", verbs: "Perceive. Understand. Decide." },
        { word: "Force.", label: "The Action.", verbs: "Move. Reach. Act." },
        { word: "You.", label: "The Purpose.", verbs: "Empower. Protect. Control." }
      ],
      lines: ["Intelligence that understands.", "Force that acts.", "Technology that stands with you."],
      body: "At Hyper AIForce, intelligence is not the destination. It is the beginning of action. We believe technology finds its true purpose when it empowers people.",
      missionLabel: "OUR MISSION", mission: { title: "Extending Human Capabilities.", body: "Through intelligent robotics, we extend the reach of human perception and action." },
      visionLabel: "OUR VISION", vision: { title: "A World Without Boundaries.", body: "A future where distance and danger no longer define the limits of human capability." }
    },
    cooperation: {
      eyebrow: "08 / WORK WITH US", title: "Let's Bring Intelligence\nInto Action.", body: "Whether you're exploring robotic deployment, seeking integration solutions, or building new partnerships, we're ready to explore what's possible together.", cta: "Discuss Your Project", secondary: "Contact Us",
      items: [
        { title: "RaaS — Robotics as a Service", body: "Flexible robotic deployment through service-oriented models." },
        { title: "Direct Purchase", body: "Robotic platforms and supporting systems for long-term operations." },
        { title: "Integration & Partnership", body: "Collaboration opportunities for integrators, distributors, and technology partners." }
      ]
    }
  },
  "zh-cn": {
    seo: { title: "Hyper AIForce | 面向真实作业的机器人平台", description: "探索 FORCE 01 与 FORCE 05 机器人平台，了解远程观察、巡检与作业的应用场景、技术体系及部署合作方式。" },
    hero: { title: "延伸你的触达，\n掌握每一次行动。", body: "面向复杂环境的机器人平台，支持远程观察、巡检与现场作业。", primary: "探索机器人产品", secondary: "联系销售" },
    products: { eyebrow: "02 / 机器人产品", title: "不同形态，\n共同使命。", body: "以智能机器人平台延伸人的触达，支持多样环境中的现场作业。", cta: "探索机器人产品", items: [
      { category: "四足机器人平台", body: "面向复杂环境的通用四足机器人平台，支持远程观察、巡检与现场作业。", cta: "探索 FORCE 01" },
      { category: "球形机器人平台", body: "以球形移动平台，为移动探索与远程观察提供另一种方式。", cta: "探索 FORCE 05" }
    ] },
    applications: { eyebrow: "03 / 应用场景", title: "为真实世界而打造。", body: "从公共安全到工业作业，在移动能力、现场视野与人员安全至关重要的环境中，延伸人的在场能力。", cta: "探索应用场景", items: [
      { title: "公共安全与应急响应", body: "支持在危险或不确定环境中的远程观察与态势感知。" },
      { title: "工业与远程作业", body: "为工业设施与难以抵达的场地提供远程视野及巡检支持。" },
      { title: "物流与仓储", body: "支持仓库及物流设施的巡检与现场监测。" },
      { title: "物业与设施安防", body: "将观察与安防作业延伸至商业物业和受管理设施。" }
    ] },
    technology: { eyebrow: "04 / 技术体系", title: "不止于机器本身。", body: "将移动、感知、通信与人的控制相连接，构建软硬件协同的机器人体系。", cta: "探索技术能力", solutions: "探索解决方案", imageAlt: "现有 RSP 平台界面，展示场地地图与感知视图", note: "具体能力、软件及载荷取决于所选系统和项目配置。远程操作、辅助功能与自主模式有所区别，部署前需按项目确认。", items: [
      { title: "机器人平台", body: "面向真实作业的移动能力与模块化硬件。" },
      { title: "远程连接", body: "通过通信与远程访问能力，连接操作人员与现场机器人。" },
      { title: "智能系统", body: "以感知、作业软件与任务管理能力支持有效部署。" }
    ] },
    value: { eyebrow: "05 / 为什么选择 Hyper AIForce", title: "让技术，\n产生实际价值。", body: "智能机器人应当超越技术展示，为真实作业创造切实的价值。", items: [
      { label: "安全", title: "让人远离危险。", body: "通过机器人观察与探索，减少人员进入危险或不确定环境的需要。" },
      { label: "在场", title: "身处远方，依然在场。", body: "通过实时远程访问与控制，延伸人的视野与作业触达。" },
      { label: "效率", title: "让每次作业更有价值。", body: "减少重复到访，让团队将更多精力投入更高价值的任务。" }
    ] },
    field: { eyebrow: "06 / 实践验证", title: "在实践中验证。", body: "实际部署，连接现场运营。", name: "普洛斯物流园巡检项目", description: "在物流园环境中，将机器人巡检、RSP 平台与现场运营连接起来。", outcome: "项目将远程现场观察、巡检记录与协同任务管理纳入统一的作业流程。", cta: "查看项目案例", imageAlt: "普洛斯物流园现场机器人，截取自现有部署视频" },
    philosophy: {
      title: "我们的理念", pillars: [
        { word: "AI.", label: "思考之力。", verbs: "感知。理解。决策。" },
        { word: "Force.", label: "行动之力。", verbs: "移动。触达。行动。" },
        { word: "You.", label: "价值所在。", verbs: "赋能。保护。掌握。" }
      ], lines: ["理解现场的智能。", "付诸实践的力量。", "始终与你并肩的技术。"], body: "在 Hyper AIForce，智能是行动的起点。我们相信，技术在赋能人的时候，才真正找到自身的意义。",
      missionLabel: "我们的使命", mission: { title: "延伸人类能力。", body: "通过智能机器人，延伸人的感知与行动范围。" },
      visionLabel: "我们的愿景", vision: { title: "一个没有边界的世界。", body: "让距离与危险，不再定义人类能力的边界。" }
    },
    cooperation: { eyebrow: "08 / 携手合作", title: "一起，让智能\n付诸行动。", body: "无论是探索机器人部署、寻求集成方案，还是建立新的合作伙伴关系，我们期待与你共同探索。", cta: "讨论你的项目", secondary: "联系我们", items: [
      { title: "RaaS — 机器人即服务", body: "通过服务模式，灵活部署机器人。" },
      { title: "直接采购", body: "为长期作业提供机器人平台与配套系统。" },
      { title: "集成与合作", body: "面向集成商、经销商及技术伙伴的合作机会。" }
    ] }
  },
  "zh-hk": {
    seo: { title: "Hyper AIForce | 面向真實作業的機械人平台", description: "探索 FORCE 01 與 FORCE 05 機械人平台，了解遠端觀察、巡檢與作業的應用場景、技術體系及部署合作方式。" },
    hero: { title: "延伸你的觸達，\n掌握每一次行動。", body: "面向複雜環境的機械人平台，支援遠端觀察、巡檢與現場作業。", primary: "探索機械人產品", secondary: "聯絡銷售" },
    products: { eyebrow: "02 / 機械人產品", title: "不同形態，\n共同使命。", body: "以智能機械人平台延伸人的觸達，支援多樣環境中的現場作業。", cta: "探索機械人產品", items: [
      { category: "四足機械人平台", body: "面向複雜環境的通用四足機械人平台，支援遠端觀察、巡檢與現場作業。", cta: "探索 FORCE 01" },
      { category: "球形機械人平台", body: "以球形移動平台，為移動探索與遠端觀察提供另一種方式。", cta: "探索 FORCE 05" }
    ] },
    applications: { eyebrow: "03 / 應用場景", title: "為真實世界而打造。", body: "從公共安全到工業作業，在移動能力、現場視野與人員安全至關重要的環境中，延伸人的在場能力。", cta: "探索應用場景", items: [
      { title: "公共安全與應急響應", body: "支援在危險或不確定環境中的遠端觀察與態勢感知。" },
      { title: "工業與遠端作業", body: "為工業設施與難以抵達的場地提供遠端視野及巡檢支援。" },
      { title: "物流與倉儲", body: "支援倉庫及物流設施的巡檢與現場監測。" },
      { title: "物業與設施安防", body: "將觀察與安防作業延伸至商業物業和受管理設施。" }
    ] },
    technology: { eyebrow: "04 / 技術體系", title: "不止於機器本身。", body: "將移動、感知、通訊與人的控制相連接，構建軟硬件協同的機械人體系。", cta: "探索技術能力", solutions: "探索解決方案", imageAlt: "現有 RSP 平台介面，展示場地地圖與感知視圖", note: "具體能力、軟件及載荷取決於所選系統和項目配置。遠端操作、輔助功能與自主模式有所區別，部署前需按項目確認。", items: [
      { title: "機械人平台", body: "面向真實作業的移動能力與模組化硬件。" },
      { title: "遠端連接", body: "透過通訊與遠端存取能力，連接操作人員與現場機械人。" },
      { title: "智能系統", body: "以感知、作業軟件與任務管理能力支援有效部署。" }
    ] },
    value: { eyebrow: "05 / 為甚麼選擇 Hyper AIForce", title: "讓技術，\n產生實際價值。", body: "智能機械人應當超越技術展示，為真實作業創造切實的價值。", items: [
      { label: "安全", title: "讓人遠離危險。", body: "透過機械人觀察與探索，減少人員進入危險或不確定環境的需要。" },
      { label: "在場", title: "身處遠方，依然在場。", body: "透過即時遠端存取與控制，延伸人的視野與作業觸達。" },
      { label: "效率", title: "讓每次作業更有價值。", body: "減少重複到訪，讓團隊將更多精力投入更高價值的任務。" }
    ] },
    field: { eyebrow: "06 / 實踐驗證", title: "在實踐中驗證。", body: "實際部署，連接現場營運。", name: "普洛斯物流園巡檢項目", description: "在物流園環境中，將機械人巡檢、RSP 平台與現場營運連接起來。", outcome: "項目將遠端現場觀察、巡檢記錄與協同任務管理納入統一的作業流程。", cta: "查看項目案例", imageAlt: "普洛斯物流園現場機械人，截取自現有部署影片" },
    philosophy: {
      title: "我們的理念", pillars: [
        { word: "AI.", label: "思考之力。", verbs: "感知。理解。決策。" },
        { word: "Force.", label: "行動之力。", verbs: "移動。觸達。行動。" },
        { word: "You.", label: "價值所在。", verbs: "賦能。保護。掌握。" }
      ], lines: ["理解現場的智能。", "付諸實踐的力量。", "始終與你並肩的技術。"], body: "在 Hyper AIForce，智能是行動的起點。我們相信，技術在賦能人的時候，才真正找到自身的意義。",
      missionLabel: "我們的使命", mission: { title: "延伸人類能力。", body: "透過智能機械人，延伸人的感知與行動範圍。" },
      visionLabel: "我們的願景", vision: { title: "一個沒有邊界的世界。", body: "讓距離與危險，不再定義人類能力的邊界。" }
    },
    cooperation: { eyebrow: "08 / 攜手合作", title: "一起，讓智能\n付諸行動。", body: "無論是探索機械人部署、尋求整合方案，還是建立新的合作夥伴關係，我們期待與你共同探索。", cta: "討論你的項目", secondary: "聯絡我們", items: [
      { title: "RaaS — 機械人即服務", body: "透過服務模式，靈活部署機械人。" },
      { title: "直接採購", body: "為長期作業提供機械人平台與配套系統。" },
      { title: "整合與合作", body: "面向整合商、經銷商及技術夥伴的合作機會。" }
    ] }
  }
};
