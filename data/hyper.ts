import {
  Activity,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Building2,
  CloudCog,
  Cpu,
  Flame,
  Globe2,
  Handshake,
  Map,
  Network,
  PackageCheck,
  Radio,
  RadioTower,
  Route,
  ShieldAlert,
  Siren,
  Wrench
} from "lucide-react";

export type Locale = "en" | "zh-hk" | "zh-cn";

export type HyperContent = ReturnType<typeof getHyperContent>;

const iconMap = {
  Activity,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Building2,
  CloudCog,
  Cpu,
  Flame,
  Globe2,
  Handshake,
  Map,
  Network,
  PackageCheck,
  Radio,
  RadioTower,
  Route,
  ShieldAlert,
  Siren,
  Wrench
};

export function getIcon(name: keyof typeof iconMap) {
  return iconMap[name];
}

const content = {
  en: {
    lang: "en",
    localeName: "English",
    switchLabel: "繁中",
    switchHref: "/zh-hk",
    nav: [
      { label: "Technology", href: "#technology" },
      { label: "Solutions", href: "#solutions" },
      { label: "Applications", href: "#applications" },
      { label: "Service", href: "#service" },
      { label: "About us", href: "#about" }
    ],
    seo: {
      title:
        "Hyper AIForce Limited | Robotic Security Solutions",
      description:
        "Hyper AIForce Limited provides deployable robotic security solutions for fire response, campus security, warehouse logistics and community security.",
      keywords: [
        "Hyper AIForce",
        "AI Robotics",
        "Embodied Intelligence",
        "Autonomous Patrol Robot",
        "Physical Security",
        "Security Patrol",
        "Robotic Intelligence Platform"
      ]
    },
    hero: {
      eyebrow: "Hyper AIForce Limited",
      slogan: "AI Force Be With You",
      title: "Robotic Inspection Solutions for Physical Security",
      subtitle:
        "We combine RSP scheduling, autonomous patrol, AI perception, modular payloads and teleoperation to provide deployable robotic solutions for fire response, campus security, warehouse logistics and community security.",
      primaryCta: "Request a Demo",
      secondaryCta: "Explore Technology",
      stats: [
  { value: "Autonomous Patrol", label: "Autonomous navigation and intelligent patrol execution" },

  { value: "Teleoperation", label: "Remote control and real-time robotic operation" },

  { value: "AI +", label: "Perception, decision-making and edge intelligence" },

  { value: "24/7", label: "Continuous operation readiness and always-on deployment" }
]
    },
    market: {
      eyebrow: "WHY ROBOTIC SECURITY",
      title: "Night-time, wide-area patrols are difficult to sustain with traditional security.",
      copy:
        "Traditional security still depends on shift-based patrols, manual observation and fragmented incident handling. Hyper AIForce brings robots, an operating platform and remote operations into one deployable model.",
      points: [
        "Night-time and wide-area patrols depend on continuous staffing, driving up labor cost.",
        "Perimeters, warehouse blind spots and equipment areas are difficult to cover continuously.",
        "Hazardous areas, night scenes and unexpected incidents increase personnel exposure.",
        "Detection, reporting, recording and response are often disconnected."
      ]
    },
    strengths: {
      eyebrow: "THE OPERATING MODEL",
      title: "From autonomous patrol to remote intervention, one operating loop for physical security.",
      copy:
        "Autonomous patrol, teleoperation, AI perception and modular payloads work together as a repeatable security operation.",
      items: [
        {
          icon: "BrainCircuit",
          title: "Autonomous Patrol",
          text:
            "Route planning, perception and obstacle avoidance for repeatable patrol missions."
        },
        {
          icon: "Bot",
          title: "Teleoperation",
          text:
            "Real-time control and exception intervention across sites and operating areas."
        },
        {
          icon: "Activity",
          title: "AI Perception",
          text:
            "Environmental recognition, risk judgment and anomaly alerts from multi-sensor data."
        },
        {
          icon: "PackageCheck",
          title: "Modular Payloads",
          text:
            "Perception, communication, task and edge-computing modules for different security work."
        }
      ]
    },
    technology: {
      eyebrow: "ROBOT SCHEDULING PLATFORM",
      title: "RSP: one operating layer for every robot, mission and review",
      copy:
        "From mission creation and robot queues to remote commands and data review, RSP gives multiple robots one operating workflow.",
      imageTitle: "RSP Command View",
      imageText:
        "Mission scheduling, robot queues, remote instructions and data review in one operating layer.",
      capabilities: [
        "Mission scheduling",
        "Robot queue management",
        "Remote command delivery",
        "Data review"
      ]
    },
    solutions: {
      eyebrow: "Products & Solutions",
      title: "Build the complete loop from mission to execution",
      labels: {
        problem: "Task",
        solution: "Capability",
        value: "Result"
      },
      items: [
        {
          icon: "Route",
          title: "Autonomous Patrol",
          problem: "Run repeatable patrol missions with stable execution.",
          solution:
            "LiDAR-inertial SLAM, route planning, perception and dynamic obstacle avoidance support repeatable patrols and local operation.",
          value:
            "Less night-time manual patrol work, lower personnel exposure, and improved safety and operating efficiency."
        },
        {
          icon: "Radio",
          title: "Teleoperation",
          problem: "Complex or abnormal scenes need timely human intervention.",
          solution:
            "Synchronized video and control, multi-network communication and remote takeover support real-time intervention across sites.",
          value:
            "Operators can handle exceptions without sending people into the scene."
        },
        {
          icon: "Activity",
          title: "AI Perception",
          problem: "Field anomalies need early detection and traceable evidence.",
          solution:
            "Vision, thermal imaging and multi-sensor data analysis support environmental recognition, risk assessment and anomaly alerts.",
          value:
            "Earlier fire, smoke and intrusion alerts, with field data that can be reviewed."
        },
        {
          icon: "PackageCheck",
          title: "Modular AI Payloads",
          problem: "Different security tasks need different sensing, communication and task interfaces.",
          solution:
            "Configure perception, communication, task and edge-computing payloads, with support for existing devices or systems.",
          value:
            "One robotic system can adapt to fire response, campus security, warehouse logistics and community security."
        }
      ]
    },
    applications: {
      eyebrow: "Applications",
      title: "Four physical-security scenarios built for repeatable deployment.",
      items: [
        { icon: "Flame", label: "Fire & Emergency", detail: "Hazardous-area entry, situational feeds and thermal checks." },
        { icon: "Building2", label: "Campus Security", detail: "Perimeter patrol and anomaly detection across large sites." },
        { icon: "Map", label: "Warehouse & Logistics", detail: "Warehouse patrols and yard risk checks." },
        { icon: "Siren", label: "Community Security", detail: "Community patrols and resident safety checks." }
      ]
    },
    caseStudy: {
      eyebrow: "Case Study",
      title: "GLP logistics park\nnight-time security patrol deployment",
      labels: {
        challenge: "Challenge",
        solution: "Solution"
      },
      imageTitle: "Autonomous Inspection Workflow",
      imageText:
        "Route execution, anomaly detection and remote monitoring for high-value facilities.",
      challenge:
        "GLP needed reliable fire-safety and security patrol coverage across roads, warehouse surroundings, perimeter areas and night-time routine checks at a logistics park.",
      solution:
        "Hyper AIForce supported the deployment of robotic dogs for scheduled park patrols, teleoperation, abnormal-event awareness and on-site evidence capture across daily security routes.",
      outcomes: [
        "Expanded night-time patrol coverage across the logistics park",
        "Improved fire-safety and security visibility",
        "Reduced night-time repetitive perimeter patrol workload"
      ],
      cta: "Start a deployment conversation"
    },
    service: {
      eyebrow: "COLLABORATION & DEPLOYMENT",
      title: "Three collaboration models for different deployment needs.",
      copy:
        "Choose between RaaS leasing, module enablement or full-stack purchase based on project stage, site requirements and operating model. Hyper AIForce supports the full path from solution design and deployment to ongoing operations.",
      items: [
        { icon: "PackageCheck", label: "RaaS Leasing", description: "Use robots and RSP by month or operating period for pilots and ongoing patrols." },
        { icon: "Cpu", label: "Module Enablement", description: "Configure AI perception, communication, task and edge modules for existing systems." },
        { icon: "Handshake", label: "Full-Stack Procurement", description: "Procure the robot, platform, deployment and operations support as one system." }
      ]
    },
    about: {
      eyebrow: "COMPANY POSITIONING",
      title: "More than a robot supplier: a new operating model for physical security.",
      copy:
        "Hyper AIForce focuses on physical-security operations across fire response, campus security, warehouse logistics and community security. We combine robots, RSP and remote teleoperation to help customers validate a scene, deploy a repeatable patrol workflow and scale operations. Robots take on night-time, repetitive and high-risk tasks, reducing personnel exposure and improving safety.",
      bullets: [
        "Robots + RSP + remote operations",
        "From pilot validation to scaled operations",
        "RaaS leasing / module enablement / full-stack procurement"
      ]
    },
    deployment: {
      eyebrow: "DEPLOYMENT PATH",
      title: "From scene validation to scaled security operations",
      copy:
        "A staged deployment path turns a first patrol route into a repeatable operating model.",
      steps: [
        { title: "Scene screening", description: "Identify patrol routes, risk points and suitable operating areas." },
        { title: "Solution design", description: "Plan robots, routes, RSP rules, communication and power conditions." },
        { title: "Pilot validation", description: "Test patrol stability, exception response and operating templates." },
        { title: "Multi-robot rollout", description: "Assign missions across robots and supervise multiple areas remotely." },
        { title: "Scaled operations", description: "Standardize patrol tasks and keep improving through field data." }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Plan a robotics deployment for your site.",
      copy:
        "Tell us about your facility, patrol workload or inspection scenario, and we will match the right solution.",
      button: "Contact Us / Request a Demo",
      navButton: "Contact us",
      address:
        "Building 19W, No.19 Science Park West Avenue, Hong Kong Science Park, Pak Shek Kok, New Territories, Hong Kong",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        countryCode: "Country / region code",
        interest: "Interest / Product category",
        message: "Message"
      },
      options: [
        "Autonomous Patrol",
        "Teleoperation",
        "AI Perception",
        "Modular AI Payloads",
        "RSP Platform",
        "Others"
      ],
      countryCodes: [
        { value: "+852", label: "Hong Kong (+852)" },
        { value: "+86", label: "Mainland China (+86)" },
        { value: "+1", label: "United States / Canada (+1)" },
        { value: "+44", label: "United Kingdom (+44)" },
        { value: "+81", label: "Japan (+81)" },
        { value: "+82", label: "South Korea (+82)" },
        { value: "+65", label: "Singapore (+65)" },
        { value: "+61", label: "Australia (+61)" },
        { value: "+886", label: "Taiwan (+886)" },
        { value: "+91", label: "India (+91)" },
        { value: "+971", label: "United Arab Emirates (+971)" },
        { value: "+33", label: "France (+33)" },
        { value: "+49", label: "Germany (+49)" },
        { value: "+39", label: "Italy (+39)" },
        { value: "+34", label: "Spain (+34)" },
        { value: "+7", label: "Russia / Kazakhstan (+7)" },
        { value: "+55", label: "Brazil (+55)" },
        { value: "+52", label: "Mexico (+52)" },
        { value: "+27", label: "South Africa (+27)" },
        { value: "+64", label: "New Zealand (+64)" },
        { value: "+66", label: "Thailand (+66)" },
        { value: "+60", label: "Malaysia (+60)" },
        { value: "+62", label: "Indonesia (+62)" },
        { value: "+84", label: "Vietnam (+84)" },
        { value: "+90", label: "Türkiye (+90)" },
        { value: "+966", label: "Saudi Arabia (+966)" }
      ],
      privacy:
        "I agree that Hyper AIForce may use my information to respond to this inquiry.",
      captcha: "Security verification"
    },
    footerCompany: "Hyper AIForce Limited",
    footer: "",
    footerRights: "All rights reserved."
  },
  "zh-hk": {
    lang: "zh-HK",
    localeName: "繁體中文",
    switchLabel: "EN",
    switchHref: "/",
    nav: [
      { label: "技術能力", href: "#technology" },
      { label: "解決方案", href: "#solutions" },
      { label: "應用場景", href: "#applications" },
      { label: "服務支持", href: "#service" },
      { label: "關於我們", href: "#about" }
    ],
    seo: {
      title: "Hyper AIForce Limited | 超流智能有限公司",
      description:
        "超流智能有限公司面向消防應急、園區安防、倉儲物流與社區安防場景，提供機器人安防解決方案",
      keywords: [
        "超流智能有限公司",
        "Hyper AIForce",
        "AI Robotics",
        "具身智能",
        "自主巡邏機器人",
        "安防巡邏"
      ]
    },
    hero: {
      eyebrow: "超流智能有限公司",
      slogan: "AI Force Be With You",
      title: "面向物理安全的機器人\n智能巡檢解決方案",
      subtitle:
        "我們將 RSP調度、自主巡航、AI感知、模組化載荷與遠程遙操組合，為消防應急、園區安防、倉儲物流與社區安防提供可部署的機器人解決方案。",
      primaryCta: "預約演示",
      secondaryCta: "了解技術",
      stats: [
        { value: "自主巡航", label: "自主巡邏與智能巡檢執行能力" },
        { value: "遠程接管", label: "低延遲遠程操控與緊急介入能力" },
        { value: "AI感知", label: "異常識別與多傳感器融合能力" },
        { value: "7×24 運行", label: "持續運行與全天候覆蓋能力" }
      ]
    },
    market: {
      eyebrow: "為什麼需要機器人安防",
      title: "夜間、大範圍巡邏，傳統安防難以持續覆蓋",
      copy:
        "傳統安防依賴持續排班、人工觀察與分散的事件處理。超流智能將機器人、RSP平台與遠程運營組合成可部署的安防運營模式。",
      points: [
        "夜間與大範圍巡邏依賴持續排班，人力成本高",
        "園區邊界、倉儲死角與設備區域難以長時間連續覆蓋",
        "危險區域、夜間場景與突發事件增加人員暴露",
        "異常發現、上報、記錄與處置難以形成閉環"
      ]
    },
    strengths: {
      eyebrow: "安防運營模式",
      title: "從自主巡航到遠程介入，形成安防能力閉環",
      copy:
        "自主巡航、遠程遙操、AI感知與模組化載荷協同工作，形成可複製的機器人安防運營能力。",
      items: [
        {
          icon: "BrainCircuit",
          title: "自主巡航",
          text:
            "路徑規劃、感知避障與路線復用，穩定執行重複巡邏任務。"
        },
        {
          icon: "Radio",
          title: "遠程遙操",
          text:
            "實時控制與異常介入，支援跨區域遠程執行任務。"
        },
        {
          icon: "Activity",
          title: "AI感知",
          text:
            "環境識別、風險判斷與異常告警，形成可追溯的現場數據。"
        },
        {
          icon: "PackageCheck",
          title: "模組化載荷",
          text:
            "按需配置感知、通信、任務與邊緣計算模組，適配不同安防任務。"
        }
      ]
    },
    technology: {
      eyebrow: "機器人調度平台",
      title: "RSP平台：讓多台機器人統一管理、統一調度",
      copy:
        "從任務創建、機器人隊列到遠程指令與數據復盤，RSP讓多台機器人具備可調度、可管理、可復盤的運營能力。",
      imageTitle: "RSP Command View",
      imageText:
        "任務調度、機器人隊列、遠程指令與數據復盤集中在同一個運營平台。",
      capabilities: [
        "任務調度",
        "機器人隊列管理",
        "遠程指令下發",
        "數據復盤"
      ]
    },
    solutions: {
      eyebrow: "產品與方案",
      title: "構建從任務到執行的機器人能力閉環",
      labels: {
        problem: "任務",
        solution: "能力",
        value: "結果"
      },
      items: [
        {
          icon: "Route",
          title: "自主巡航",
          problem: "穩定執行重複巡檢任務",
          solution: "基於 LiDAR-Inertial SLAM，結合定位、路徑規劃、感知避障與本地運行能力，支援路線復用與定點巡檢",
          value: "減少夜間人工巡邏，降低人員暴露，在提升安全性的同時降低運營成本"
        },
        {
          icon: "Radio",
          title: "遠程遙操",
          problem: "複雜或異常場景需要及時人工介入",
          solution: "同步現場畫面與控制，支援移動網絡及 Wi-Fi 多鏈路通信，讓操作人員跨區域遠程處理任務",
          value: "無需人員進入現場，也能完成異常處理與安全升級"
        },
        {
          icon: "Activity",
          title: "AI感知",
          problem: "現場異常需要及早發現並留存證據",
          solution: "通過視覺、熱成像與多傳感器數據分析識別環境與風險，輸出異常告警及任務數據",
          value: "支持煙火、入侵等異常提前預警，形成可復盤的現場數據"
        },
        {
          icon: "CloudCog",
          title: "模組化載荷",
          problem: "不同安防任務需要不同的感知、通信與任務接口",
          solution: "按需配置感知、通信、任務與邊緣計算載荷，並可接入現有設備或系統",
          value: "同一套機器人系統適配消防應急、園區安防、倉儲物流與社區安防"
        }
      ]
    },
    applications: {
      eyebrow: "應用場景",
      title: "四類可規模化部署的物理安全場景",
      items: [
        { icon: "Flame", label: "消防應急", detail: "危險區域進入、現場態勢回傳與熱成像排查" },
        { icon: "Building2", label: "園區安防", detail: "周界巡邏與異常發現" },
        { icon: "Map", label: "倉儲物流", detail: "倉內巡查與堆場風險排查" },
        { icon: "Siren", label: "社區安防", detail: "社區巡邏與住戶巡護" }
      ]
    },
    caseStudy: {
      eyebrow: "案例場景",
      title: "普洛斯物流園區\n機器狗巡邏部署",
      labels: {
        challenge: "挑戰",
        solution: "方案"
      },
      imageTitle: "自主巡檢工作流程",
      imageText:
        "為高價值設施提供路線執行、異常識別與遠程監看能力。",
      challenge:
        "普洛斯需要在物流園區道路、倉庫周邊、周界區域及夜間例行巡查中，獲得更穩定的消防與安防巡邏覆蓋",
      solution:
        "超流智能支持部署機器狗執行園區定時巡邏、遠程監看、異常事件感知與現場證據採集，服務日常安防巡邏路線",
      outcomes: ["擴大夜間物流園區巡邏覆蓋", "提升消防與安防可視性", "減少夜間重複性周界巡邏工作"],
      cta: "開啟部署溝通"
    },
    service: {
      eyebrow: "合作與部署方式",
      title: "三種合作方式，匹配不同部署需求",
      copy:
        "客戶可根據自身運營階段，選擇 RaaS租賃、模組賦能或全棧式採購。超流智能提供從方案設計、部署交付到持續營運的支持。",
      items: [
        { icon: "PackageCheck", label: "RaaS租賃", description: "按月或按週期使用機器人與RSP，適合試點驗證及持續巡邏。" },
        { icon: "Cpu", label: "模組賦能", description: "按需配置 AI感知、通信、任務與邊緣計算模組，可接入現有系統。" },
        { icon: "Handshake", label: "全棧式採購", description: "一次性採購機器人、平台、部署與運維服務，長期自持運行。" }
      ]
    },
    about: {
      eyebrow: "公司定位",
      title: "不只提供機器人設備，而是重構安防運營模式",
      copy:
        "超流智能面向消防應急、園區安防、倉儲物流與社區安防，提供由機器人、RSP平台與遠程遙操組成的安防解決方案。不只交付機器人設備，也協助客戶完成場景驗證、部署運營與後續複製，讓機器人逐步替代高風險、重複性及大範圍巡邏中的人工值守。",
      bullets: [
        "機器人 + RSP平台 + 遠程運營",
        "從試點驗證到規模化運營",
        "RaaS租賃 / 模組賦能 / 全棧式採購"
      ]
    },
    deployment: {
      eyebrow: "合作與部署流程",
      title: "從場景驗證到規模化安防運營",
      copy:
        "通過分階段部署，將第一條巡邏路線逐步沉澱為可複製的運營模式。",
      steps: [
        { title: "場景篩選與風險識別", description: "判斷適合機器人巡檢的區域，明確風險點與難點。" },
        { title: "部署方案設計", description: "規劃機器人數量、路線、RSP策略、通信與供電條件。" },
        { title: "小規模試運行", description: "驗證巡檢穩定性、異常響應與可複製運行模板。" },
        { title: "多機器人協同部署", description: "分配多機器人任務，支持夜間及多區域並行巡檢。" },
        { title: "規模化安防運營", description: "形成標準巡檢任務體系，持續降低人工巡邏依賴。" }
      ]
    },
    contact: {
      eyebrow: "聯絡我們",
      title: "為您的場地規劃機器人部署",
      copy:
        "告訴我們您的設施、巡邏工作量或巡檢場景，我們將為您匹配合適的解決方案",
      button: "聯絡我們 / 預約演示",
      navButton: "聯絡我們",
      address: "香港新界白石角香港科學園科技大道西19號19W大樓",
      fields: {
        name: "姓名",
        company: "公司",
        email: "電郵",
        phone: "電話",
        countryCode: "國家 / 地區號碼",
        interest: "感興趣的產品 / 方案",
        message: "需求描述"
      },
      options: ["自主巡航", "遠程遙操", "AI感知", "模組化載荷", "RSP平台", "其他"],
      countryCodes: [
        { value: "+852", label: "香港（+852）" },
        { value: "+86", label: "中國內地（+86）" },
        { value: "+1", label: "美國 / 加拿大（+1）" },
        { value: "+44", label: "英國（+44）" },
        { value: "+81", label: "日本（+81）" },
        { value: "+82", label: "韓國（+82）" },
        { value: "+65", label: "新加坡（+65）" },
        { value: "+61", label: "澳洲（+61）" },
        { value: "+886", label: "台灣（+886）" },
        { value: "+91", label: "印度（+91）" },
        { value: "+971", label: "阿聯酋（+971）" },
        { value: "+33", label: "法國（+33）" },
        { value: "+49", label: "德國（+49）" },
        { value: "+39", label: "意大利（+39）" },
        { value: "+34", label: "西班牙（+34）" },
        { value: "+7", label: "俄羅斯 / 哈薩克斯坦（+7）" },
        { value: "+55", label: "巴西（+55）" },
        { value: "+52", label: "墨西哥（+52）" },
        { value: "+27", label: "南非（+27）" },
        { value: "+64", label: "紐西蘭（+64）" },
        { value: "+66", label: "泰國（+66）" },
        { value: "+60", label: "馬來西亞（+60）" },
        { value: "+62", label: "印度尼西亞（+62）" },
        { value: "+84", label: "越南（+84）" },
        { value: "+90", label: "土耳其（+90）" },
        { value: "+966", label: "沙特阿拉伯（+966）" }
      ],
      privacy: "我同意超流智能使用以上資料回覆此查詢。",
      captcha: "安全驗證"
    },
    footerCompany: "超流智能有限公司",
    footer: "",
    footerRights: "版權所有。"
  },
  "zh-cn": {
    lang: "zh-CN",
    localeName: "简体中文",
    switchLabel: "EN",
    switchHref: "/",
    nav: [
      { label: "技术能力", href: "#technology" },
      { label: "解决方案", href: "#solutions" },
      { label: "应用场景", href: "#applications" },
      { label: "服务支持", href: "#service" },
      { label: "关于我们", href: "#about" }
    ],
    seo: {
      title: "Hyper AIForce Limited | 超流智能有限公司",
      description:
        "超流智能有限公司面向消防应急、园区安防、仓储物流与社区安防场景，提供机器人安防解决方案",
      keywords: [
        "超流智能有限公司",
        "Hyper AIForce",
        "AI Robotics",
        "具身智能",
        "自主巡逻机器人",
        "安防巡逻"
      ]
    },
    hero: {
      eyebrow: "超流智能有限公司",
      slogan: "AI Force Be With You",
      title: "面向物理安全的机器人\n智能巡检解决方案",
      subtitle:
        "我们将 RSP调度、自主巡航、AI感知、模块化载荷与远程遥操组合，为消防应急、园区安防、仓储物流与社区安防提供可部署的机器人解决方案。",
      primaryCta: "预约演示",
      secondaryCta: "了解技术",
      stats: [
        { value: "自主巡航", label: "自主巡逻与智能巡检执行能力" },
        { value: "远程接管", label: "低延迟远程操控与紧急介入能力" },
        { value: "AI感知", label: "异常识别与多传感器融合能力" },
        { value: "7×24 运行", label: "持续运行与全天候覆盖能力" }
      ]
    },
    market: {
      eyebrow: "为什么需要机器人安防",
      title: "夜间、大范围巡逻，传统安防难以持续覆盖",
      copy:
        "传统安防依赖持续排班、人工观察与分散的事件处理。超流智能将机器人、RSP平台与远程运营组合成可部署的安防运营模式。",
      points: [
        "夜间与大范围巡逻依赖持续排班，人力成本高",
        "园区边界、仓储死角与设备区域难以长时间连续覆盖",
        "危险区域、夜间场景与突发事件增加人员暴露",
        "异常发现、上报、记录与处置难以形成闭环"
      ]
    },
    strengths: {
      eyebrow: "安防运营模式",
      title: "从自主巡航到远程介入，形成安防能力闭环",
      copy:
        "自主巡航、远程遥操、AI感知与模块化载荷协同工作，形成可复制的机器人安防运营能力。",
      items: [
        {
          icon: "BrainCircuit",
          title: "自主巡航",
          text:
            "路径规划、感知避障与路线复用，稳定执行重复巡逻任务。"
        },
        {
          icon: "Radio",
          title: "远程遥操",
          text:
            "实时控制与异常介入，支持跨区域远程执行任务。"
        },
        {
          icon: "Activity",
          title: "AI感知",
          text:
            "环境识别、风险判断与异常告警，形成可追溯的现场数据。"
        },
        {
          icon: "PackageCheck",
          title: "模块化载荷",
          text:
            "按需配置感知、通信、任务与边缘计算模块，适配不同安防任务。"
        }
      ]
    },
    technology: {
      eyebrow: "机器人调度平台",
      title: "RSP平台：让多台机器人统一管理、统一调度",
      copy:
        "从任务创建、机器人队列到远程指令与数据复盘，RSP让多台机器人具备可调度、可管理、可复盘的运营能力。",
      imageTitle: "RSP Command View",
      imageText:
        "任务调度、机器人队列、远程指令与数据复盘集中在同一个运营平台。",
      capabilities: [
        "任务调度",
        "机器人队列管理",
        "远程指令下发",
        "数据复盘"
      ]
    },
    solutions: {
      eyebrow: "产品与方案",
      title: "构建从任务到执行的机器人能力闭环",
      labels: {
        problem: "任务",
        solution: "能力",
        value: "结果"
      },
      items: [
        {
          icon: "Route",
          title: "自主巡航",
          problem: "稳定执行重复巡检任务",
          solution: "基于 LiDAR-Inertial SLAM，结合定位、路径规划、感知避障与本地运行能力，支持路线复用与定点巡检",
          value: "减少夜间人工巡逻，降低人员暴露，在提升安全性的同时降低运营成本"
        },
        {
          icon: "Radio",
          title: "远程遥操",
          problem: "复杂或异常场景需要及时人工介入",
          solution: "同步现场画面与控制，支持移动网络及 Wi-Fi 多链路通信，让操作人员跨区域远程处理任务",
          value: "无需人员进入现场，也能完成异常处理与安全升级"
        },
        {
          icon: "Activity",
          title: "AI感知",
          problem: "现场异常需要及早发现并留存证据",
          solution: "通过视觉、热成像与多传感器数据分析识别环境与风险，输出异常告警及任务数据",
          value: "支持烟火、入侵等异常提前预警，形成可复盘的现场数据"
        },
        {
          icon: "CloudCog",
          title: "模块化载荷",
          problem: "不同安防任务需要不同的感知、通信与任务接口",
          solution: "按需配置感知、通信、任务与边缘计算载荷，并可接入现有设备或系统",
          value: "同一套机器人系统适配消防应急、园区安防、仓储物流与社区安防"
        }
      ]
    },
    applications: {
      eyebrow: "应用场景",
      title: "四类可规模化部署的物理安全场景",
      items: [
        { icon: "Flame", label: "消防应急", detail: "危险区域进入、现场态势回传与热成像排查" },
        { icon: "Building2", label: "园区安防", detail: "周界巡逻与异常发现" },
        { icon: "Map", label: "仓储物流", detail: "仓内巡查与堆场风险排查" },
        { icon: "Siren", label: "社区安防", detail: "社区巡逻与住户巡护" }
      ]
    },
    caseStudy: {
      eyebrow: "案例场景",
      title: "普洛斯物流园区\n机器狗巡逻部署",
      labels: {
        challenge: "挑战",
        solution: "方案"
      },
      imageTitle: "自主巡检工作流程",
      imageText:
        "为高价值设施提供路线执行、异常识别与远程监看能力。",
      challenge:
        "普洛斯需要在物流园区道路、仓库周边、周界区域及夜间例行巡查中，获得更稳定的消防与安防巡逻覆盖",
      solution:
        "超流智能支持部署机器狗执行园区定时巡逻、远程监看、异常事件感知与现场证据采集，服务日常安防巡逻路线",
      outcomes: ["扩大夜间物流园区巡逻覆盖", "提升消防与安防可视性", "减少夜间重复性周界巡逻工作"],
      cta: "开启部署沟通"
    },
    service: {
      eyebrow: "合作与部署方式",
      title: "三种合作方式，匹配不同部署需求",
      copy:
        "客户可根据自身运营阶段，选择 RaaS租赁、模块赋能或全栈式采购。超流智能提供从方案设计、部署交付到持续运营的支持。",
      items: [
        { icon: "PackageCheck", label: "RaaS租赁", description: "按月或按周期使用机器人与RSP，适合试点验证及持续巡逻。" },
        { icon: "Cpu", label: "模块赋能", description: "按需配置 AI感知、通信、任务与边缘计算模块，可接入现有系统。" },
        { icon: "Handshake", label: "全栈式采购", description: "一次性采购机器人、平台、部署与运维服务，长期自持运行。" }
      ]
    },
    about: {
      eyebrow: "公司定位",
      title: "不只提供机器人设备，而是重构安防运营模式",
      copy:
        "超流智能面向消防应急、园区安防、仓储物流与社区安防，提供由机器人、RSP平台与远程遥操组成的安防解决方案。不只交付机器人设备，也协助客户完成场景验证、部署运营与后续复制，让机器人逐步替代高风险、重复性及大范围巡逻中的人工值守。",
      bullets: [
        "机器人 + RSP平台 + 远程运营",
        "从试点验证到规模化运营",
        "RaaS租赁 / 模块赋能 / 全栈式采购"
      ]
    },
    deployment: {
      eyebrow: "合作与部署流程",
      title: "从场景验证到规模化安防运营",
      copy:
        "通过分阶段部署，将第一条巡逻路线逐步沉淀为可复制的运营模式。",
      steps: [
        { title: "场景筛选与风险识别", description: "判断适合机器人巡检的区域，明确风险点与难点。" },
        { title: "部署方案设计", description: "规划机器人数量、路线、RSP策略、通信与供电条件。" },
        { title: "小规模试运行", description: "验证巡检稳定性、异常响应与可复制运行模板。" },
        { title: "多机器人协同部署", description: "分配多机器人任务，支持夜间及多区域并行巡检。" },
        { title: "规模化安防运营", description: "形成标准巡检任务体系，持续降低人工巡逻依赖。" }
      ]
    },
    contact: {
      eyebrow: "联系我们",
      title: "为您的场地规划机器人部署",
      copy:
        "告诉我们您的设施、巡逻工作量或巡检场景，我们将为您匹配合适的解决方案",
      button: "联系我们 / 预约演示",
      navButton: "联系我们",
      address: "香港新界白石角香港科学园科技大道西19号19W大楼",
      fields: {
        name: "姓名",
        company: "公司",
        email: "电邮",
        phone: "电话",
        countryCode: "国家 / 地区号",
        interest: "感兴趣的产品 / 方案",
        message: "需求描述"
      },
      options: ["自主巡航", "远程遥操", "AI感知", "模块化载荷", "RSP平台", "其他"],
      countryCodes: [
        { value: "+852", label: "香港（+852）" },
        { value: "+86", label: "中国内地（+86）" },
        { value: "+1", label: "美国 / 加拿大（+1）" },
        { value: "+44", label: "英国（+44）" },
        { value: "+81", label: "日本（+81）" },
        { value: "+82", label: "韩国（+82）" },
        { value: "+65", label: "新加坡（+65）" },
        { value: "+61", label: "澳大利亚（+61）" },
        { value: "+886", label: "中国台湾（+886）" },
        { value: "+91", label: "印度（+91）" },
        { value: "+971", label: "阿联酋（+971）" },
        { value: "+33", label: "法国（+33）" },
        { value: "+49", label: "德国（+49）" },
        { value: "+39", label: "意大利（+39）" },
        { value: "+34", label: "西班牙（+34）" },
        { value: "+7", label: "俄罗斯 / 哈萨克斯坦（+7）" },
        { value: "+55", label: "巴西（+55）" },
        { value: "+52", label: "墨西哥（+52）" },
        { value: "+27", label: "南非（+27）" },
        { value: "+64", label: "新西兰（+64）" },
        { value: "+66", label: "泰国（+66）" },
        { value: "+60", label: "马来西亚（+60）" },
        { value: "+62", label: "印度尼西亚（+62）" },
        { value: "+84", label: "越南（+84）" },
        { value: "+90", label: "土耳其（+90）" },
        { value: "+966", label: "沙特阿拉伯（+966）" }
      ],
      privacy: "我同意超流智能使用以上信息回复本次咨询。",
      captcha: "安全验证"
    },
    footerCompany: "超流智能有限公司",
    footer: "",
    footerRights: "版权所有。"
  }
} as const;

export function getHyperContent(locale: Locale) {
  return content[locale];
}
