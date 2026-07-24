import {
  Activity,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Building2,
  CloudCog,
  Cpu,
  Factory,
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
  Factory,
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
      { label: "Collaboration", href: "#collaboration" },
      { label: "About us", href: "#about" }
    ],
    seo: {
      title:
        "Hyper AIForce Limited | Robotic Security Solutions",
      description:
        "Hyper AIForce Limited develops robotic systems for physical security, autonomous patrol and facility operations.",
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
        "We combine AI perception, autonomous patrol, teleoperation, motion control and service delivery to provide deployable robotic solutions for security patrol and other physical-security applications.",
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
      title: "Deploy robotic systems into high-risk, repetitive and blind-spot operational environments.",
      copy:
        "Security patrol still depends on high-cost patrol labor, manual observation and delayed response. Hyper AIForce combines autonomous patrol, AI perception and teleoperation into a deployable robotic operating platform.",
      points: [
        "Labor-intensive patrols are costly and hard to scale.",
        "Repetitive night patrols and perimeter checks make it harder to maintain consistent attention.",
        "Hazardous, remote or weather-exposed sites increase personnel risk.",
        "Critical incidents need real-time alerts, evidence and teleoperation."
      ]
    },
    strengths: {
      eyebrow: "Core Strengths",
      title: "Designed for real-world operations",
      items: [
        {
          icon: "BrainCircuit",
          title: "Full-stack AI autonomy",
          text:
            "AI perception, anomaly detection, sensor fusion and task-level decision logic support autonomous patrol."
        },
        {
          icon: "Bot",
          title: "Robot fleet coordination",
          text:
            "Quadruped and wheeled robots can operate as a coordinated fleet, with unified task assignment, status awareness and field execution."
        },
        {
          icon: "Route",
          title: "Adaptive navigation",
          text:
            "Navigation, obstacle avoidance and route planning help robots operate across campuses, perimeters, utilities and outdoor facilities."
        },
        {
          icon: "Radio",
          title: "Teleoperation",
          text:
            "Low-latency remote operation keeps operators in the loop for real-time supervision, emergency takeover and precise field intervention."
        }
      ]
    },
    technology: {
      eyebrow: "Robotic Operations Platform",
      title: "A unified operating platform for autonomous inspection robot fleets",
      copy:
        "Operators can assign missions from a browser or tablet, monitor live data, review alerts and supervise multiple robots. The platform connects edge AI, cloud monitoring and human takeover to keep the robot fleet running.",
      imageTitle: "Multi-robot Mission Layer",
      imageText:
        "Mission planning, robot telemetry, abnormal-event alerts and operator supervision in one deployable workflow.",
      capabilities: [
        "AI perception and threat detection",
        "Autonomous navigation and path planning",
        "Multi-sensor fusion",
        "Motion control and terrain adaptation",
        "Edge computing and cloud monitoring",
        "Teleoperation and fleet management"
      ]
    },
    solutions: {
      eyebrow: "Products & Solutions",
      title: "Capability packages for real security environments",
      labels: {
        problem: "Problem",
        solution: "Solution",
        value: "Value"
      },
      items: [
        {
          icon: "Route",
          title: "Autonomous Patrol",
          problem: "Security patrols need robots that can run continuously with minimal manual intervention.",
          solution:
            "AI-driven autonomous navigation, patrol route planning, real-time environmental perception and edge deployment support continuous campus and perimeter patrols.",
          value:
            "Reduces night-time and high-risk-area manual patrols, lowers personnel exposure, and improves safety and operating efficiency."
        },
        {
          icon: "Radio",
          title: "Teleoperation",
          problem: "Robots in complex sites still need human-in-the-loop decisions and emergency takeover.",
          solution:
            "Teleoperation enables low-latency real-time robot control, with Remote Control support for assisted operation and emergency intervention.",
          value:
            "Keeps operators in control when judgment, safety escalation or precise remote action is required."
        },
        {
          icon: "Activity",
          title: "AI Inspection",
          problem: "Security patrols are repetitive and generate dispersed field data; incidents need to be identified early.",
          solution:
            "Robots perform automated patrol inspection, combining AI perception with data analysis from backpack sensors and other devices to flag fire, smoke and intrusion risks early.",
          value:
            "Improves the timeliness of fire and intrusion alerts, reduces night-time manual review and creates traceable inspection data."
        },
        {
          icon: "CloudCog",
          title: "Robot Scheduling Platform (RSP)",
          problem: "Multi-robot deployments need a central platform for scheduling, dispatch and coordinated operation.",
          solution:
            "The RSP platform manages multi-robot task scheduling, fleet management, remote task distribution and workflow automation.",
          value:
            "Connects hardware, AI and teleoperation as a central platform for scalable robot operations."
        }
      ]
    },
    applications: {
      eyebrow: "Applications",
      title: "Designed for facilities where uptime, safety and coverage matter.",
      items: [
        { icon: "Map", label: "Warehouse & Logistics" },
        { icon: "Building2", label: "Campus Security" },
        { icon: "Flame", label: "Fire & Emergency" },
        { icon: "Siren", label: "Community Security" }
      ]
    },
    caseStudy: {
      eyebrow: "Featured Case · Logistics & Warehousing",
      title: "GLP Logistics Park Robotic Inspection Project",
      labels: {
        background: "Project Background",
        solution: "Solution"
      },
      intro:
        "An integrated deployment combining quadruped robots, the RSP cloud control platform and data acquisition infrastructure to support task scheduling, autonomous inspection, live monitoring and data-driven optimisation.",
      mediaAlt: "Quadruped robot conducting an inspection at a GLP logistics park",
      background:
        "Manual patrols across roads, warehouse edges and boundaries were repetitive, costly and hard to cover consistently.",
      solution:
        "Quadruped robots, RSP and data acquisition unified scheduling, live data and anomaly tracking.",
      metrics: [
        { value: "60%", label: "Reduction in manual inspection costs" },
        { value: "80%", label: "Shorter anomaly response time" },
        { value: "40%", label: "Improvement in inspection efficiency" }
      ],
    },
    service: {
      title: "Flexible Collaboration, Deployed to Fit Your Needs",
      copy:
        "Choose leasing, modular enablement or full-stack delivery based on your project stage, application scenario and operating model, with support from deployment delivery through ongoing operations and maintenance.",
      items: [
        { icon: "PackageCheck", label: "RaaS Leasing", description: "Robots + RSP platform provided as one service; monthly or periodic billing; low-barrier rapid deployment" },
        { icon: "Cpu", label: "Modular Enablement", description: "Procure AI perception, dispatch or communications payloads separately; connect to existing equipment or systems; enhance established operations" },
        { icon: "Handshake", label: "Full-Stack Delivery", description: "Purchase a complete robotic security solution upfront; includes robots, platform and operations tools; retain the assets for long-term operation" }
      ]
    },
    about: {
      eyebrow: "About Hyper AIForce",
      title: "Integrated Provider of Robotic Security Solutions",
      copy: [
        "Hyper AIForce focuses on applying robots to security patrol, campus inspection and facility operations. Centered on autonomous patrol, teleoperation and multi-robot scheduling, we provide an integrated service covering scenario assessment, solution configuration, deployment and commissioning, and ongoing operations and maintenance.",
        "We use robots to take on night-time, repetitive and high-risk tasks, while enabling remote human intervention in complex situations. This helps customers expand inspection coverage, reduce personnel exposure, improve operational efficiency and achieve cost savings, while keeping projects operating reliably over the long term."
      ],
      bullets: [
        "Embodied intelligence for physical-world industries",
        "AI-enabled integrated hardware and software delivery",
        "Innovative Robotics Leasing Solution"
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
        "AI Inspection",
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
      { label: "合作模式", href: "#collaboration" },
      { label: "關於我們", href: "#about" }
    ],
    seo: {
      title: "Hyper AIForce Limited | 超流智能有限公司",
      description:
        "超流智能有限公司專注 AI Robotics、具身智能、自主巡航與巡邏巡檢系統，服務物理安全、設施運維與關鍵基礎設施場景",
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
        "我們將 AI 感知、自主巡航、遠程遙操、運動控制與場景交付能力相結合，為安防巡邏等物理安全領域提供可部署的機器人解決方案。",
      primaryCta: "預約演示",
      secondaryCta: "了解技術",
      stats: [
        { value: "自主巡航", label: "自主巡邏與智能巡檢執行能力" },
        { value: "遠程接管", label: "低延遲遠程操控與緊急介入能力" },
        { value: "AI 感知", label: "異常識別與多傳感器融合能力" },
        { value: "7×24 運行", label: "持續運行與全天候覆蓋能力" }
      ]
    },
    market: {
      eyebrow: "為什麼需要機器人安防",
      title: "將機器人部署至高風險、重複性及有視野盲區的作業環境中",
      copy:
        "安防巡邏仍高度依賴人工巡邏、現場觀察和事後處置。超流智能將自主巡航、AI 異常識別與遠程接管結合，形成可持續運行的機器人巡邏能力。",
      points: [
        "大範圍巡邏依賴人力，成本高且難以長期覆蓋",
        "人在夜間、周界與重複檢查容易出現注意力下降",
        "高風險、偏遠或戶外環境增加人員暴露",
        "突發事件需要及時告警、證據留存與遠程處置"
      ]
    },
    strengths: {
      eyebrow: "核心優勢",
      title: "面向真實場景，服務實際營運",
      items: [
        {
          icon: "BrainCircuit",
          title: "AI 自主巡檢能力",
          text:
            "結合環境感知、異常識別、多傳感器融合與任務決策，實現機器人自主完成巡邏與巡檢任務。"
        },
        {
          icon: "Bot",
          title: "多機器人協同",
          text:
            "四足與輪式機器人可接入統一任務體系，支援任務分配、狀態監控與現場協同執行。"
        },
        {
          icon: "Route",
          title: "自適應導航",
          text:
            "提供地圖構建、導航、避障與路徑規劃能力，支援工廠、園區、能源設施及戶外場地運行。"
        },
        {
          icon: "Radio",
          title: "遠程接管能力",
          text:
            "通過低延遲遠程操控，讓操作人員持續掌握現場狀態，並在異常情況下快速接管和精準介入。"
        }
      ]
    },
    technology: {
      eyebrow: "機器人運營平台",
      title: "自主巡檢機器人隊伍的\n統一運營平台",
      copy:
        "操作人員可通過瀏覽器或平板分配任務、查看實時數據、接收告警，並統一監管多台機器人。平台連接邊緣 AI、雲端監控與人工接管，實現機器人隊伍持續運營。",
      imageTitle: "多機器人調度平台",
      imageText:
        "整合任務規劃、機器人遙測、異常事件警報與操作人員監督。",
      capabilities: [
        "AI感知與異常檢測",
        "自主導航與路徑規劃",
        "多傳感器融合",
        "運動控制與地形適應",
        "邊緣計算與雲端監控",
        "遠程接管與隊伍管理"
      ]
    },
    solutions: {
      eyebrow: "產品與方案",
      title: "面向真實安防環境的能力組合",
      labels: {
        problem: "問題",
        solution: "方案",
        value: "價值"
      },
      items: [
        {
          icon: "Route",
          title: "自主巡航解決方案",
          problem: "安防巡邏需要機器人在較少人工干預下持續自主運行",
          solution: "AI驅動自主導航、巡邏路徑規劃、實時環境感知與邊緣端部署能力，支援園區與周界持續巡邏",
          value: "減少夜間與高風險區域的人工巡邏，降低人員暴露，兼顧安全與降本增效"
        },
        {
          icon: "Radio",
          title: "遠程遙操解決方案",
          problem: "在複雜場景下，機器人系統需具備人機協同決策與即時緊急接管能力",
          solution: "遠程遙操提供低延遲實時遠程控制，並以人工接管作為輔助操作與緊急干預方式",
          value: "在需要人工判斷、安全升級或精準遠程遙操時，讓操作人員始終保持可控"
        },
        {
          icon: "Activity",
          title: "AI巡檢解決方案",
          problem: "安防巡邏任務重複、現場數據分散，異常情況需要及早識別",
          solution: "機器人執行自動巡檢，結合AI感知與背包傳感器等設備的數據分析，對煙火、入侵等情況提前預警",
          value: "提升防火、防盜等異常預警的及時性，減少夜間人工復核，形成可追溯的巡檢數據"
        },
        {
          icon: "CloudCog",
          title: "機器人調度平台（RSP）",
          problem: "多機器人部署需要統一的任務調度、分發與協同運營中樞",
          solution: "RSP平台支援多機器人任務調度、機器人集群管理、遠程任務分發與工作流自動化",
          value: "作為連接硬件、AI 與遠程遙操的中樞平台，實現可擴展的機器人運營"
        }
      ]
    },
    applications: {
      eyebrow: "應用場景",
      title: "服務於重視安全、覆蓋與穩定運行的場景",
      items: [
        { icon: "Map", label: "倉儲物流" },
        { icon: "Building2", label: "園區安防" },
        { icon: "Flame", label: "消防應急" },
        { icon: "Siren", label: "社區安防" }
      ]
    },
    caseStudy: {
      eyebrow: "標竿案例 · 物流倉儲",
      title: "普洛斯物流園區機器人巡檢項目",
      labels: {
        background: "項目背景",
        solution: "解決方案"
      },
      intro:
        "透過四足機器人、RSP 雲端控制平台與數據採集平台協同部署，建立涵蓋任務調度、自主巡檢、即時監控與數據優化的物流園區巡檢體系。",
      mediaAlt: "普洛斯物流園區內進行巡檢的四足機器人",
      background:
        "園區道路、倉庫周邊及周界巡檢重複且耗費人力，難以保持穩定覆蓋。",
      solution:
        "以四足機器人、RSP 及數據採集平台統一調度、即時回傳數據及記錄異常。",
      metrics: [
        { value: "60%", label: "人工巡檢成本降低" },
        { value: "80%", label: "異常應變時間縮短" },
        { value: "40%", label: "巡檢效率提升" }
      ],
  
    },
    service: {
      
      title: "靈活合作，按需部署",
      copy:
        "根據項目階段、應用場景與營運方式，靈活選擇租賃、模組化賦能或全棧式交付，並獲得從部署交付到持續運維的支持。",
      items: [
        { icon: "PackageCheck", label: "RaaS 租賃", description: "機器人 + RSP 平台統一提供；客戶按月／按週期付費；低門檻快速部署" },
        { icon: "Cpu", label: "模組化賦能", description: "單獨採購 AI 感知／調度／通信等模組化載荷；可接入客戶現有設備或系統；用於既有體系能力增強" },
        { icon: "Handshake", label: "全棧式交付", description: "一次性採購完整機器人安防解決方案；包含機器人 + 平台 + 運維平台；客戶自持資產並長期運行" }
      ]
    },
    about: {
      eyebrow: "關於超流智能",
      title: "具身智能機器人安防\n解決方案集成商",
      copy: [
        "超流智能專注於機器人在安防巡邏、園區巡檢和設施運維等場景中的應用，圍繞自主巡航、遠程遙操與多機調度，提供從場景評估、方案配置、部署調試到持續運維的一體化服務。",
        "我們通過機器人承擔夜間、重複及高風險任務，並在複雜情況下由人工遠程介入，幫助客戶擴大巡檢覆蓋範圍、降低人員暴露風險，實現降本增效，保障項目長期穩定運行。"
      ],
      bullets: [
        "面向物理世界產業的具身智能",
        "基於AI能力的軟硬件一體化交付",
        "創新的機器人租賃解決方案"
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
      options: ["自主巡航", "遠程遙操", "AI巡檢", "RSP平台", "其他"],
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
      { label: "合作模式", href: "#collaboration" },
      { label: "关于我们", href: "#about" }
    ],
    seo: {
      title: "Hyper AIForce Limited | 超流智能有限公司",
      description:
        "超流智能有限公司专注 AI Robotics、具身智能、自主巡航与巡逻巡检系统，服务物理安全、设施运维与关键基础设施场景",
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
        "我们将 AI 感知、自主巡航、远程遥操、运动控制与场景交付能力相结合，为安防巡逻等物理安全领域提供可部署的机器人解决方案。",
      primaryCta: "预约演示",
      secondaryCta: "了解技术",
      stats: [
        { value: "自主巡航", label: "自主巡逻与智能巡检执行能力" },
        { value: "远程接管", label: "低延迟远程操控与紧急介入能力" },
        { value: "AI 感知", label: "异常识别与多传感器融合能力" },
        { value: "7×24 运行", label: "持续运行与全天候覆盖能力" }
      ]
    },
    market: {
      eyebrow: "为什么需要机器人安防",
      title: "将机器人部署至高风险、重复性及有视野盲区的作业环境中",
      copy:
        "安防巡逻仍高度依赖人工巡逻、现场观察和事后处置。超流智能将自主巡航、AI 异常识别与远程接管结合，形成可持续运行的机器人巡逻能力。",
      points: [
        "大范围巡逻依赖人力，成本高且难以长期覆盖",
        "人在夜间、周界与重复检查容易出现注意力下降",
        "高风险、偏远或户外环境增加人员暴露",
        "突发事件需要及时告警、证据留存与远程处置"
      ]
    },
    strengths: {
      eyebrow: "核心优势",
      title: "面向真实场景，服务实际运营",
      items: [
        {
          icon: "BrainCircuit",
          title: "AI 自主巡检能力",
          text:
            "结合环境感知、异常识别、多传感器融合与任务决策，实现机器人自主完成巡逻与巡检任务。"
        },
        {
          icon: "Bot",
          title: "多机器人协同",
          text:
            "四足与轮式机器人可接入统一任务体系，支持任务分配、状态监控与现场协同执行。"
        },
        {
          icon: "Route",
          title: "自适应导航",
          text:
            "提供地图构建、导航、避障与路径规划能力，支持工厂、园区、能源设施及户外场地运行。"
        },
        {
          icon: "Radio",
          title: "远程接管能力",
          text:
            "通过低延迟远程操控，让操作人员持续掌握现场状态，并在异常情况下快速接管和精准介入。"
        }
      ]
    },
    technology: {
      eyebrow: "机器人运营平台",
      title: "自主巡检机器人队伍的\n统一运营平台",
      copy:
        "操作人员可通过浏览器或平板分配任务、查看实时数据、接收告警，并统一监管多台机器人。平台连接边缘 AI、云端监控与人工接管，实现机器人队伍持续运营。",
      imageTitle: "多机器人调度平台",
      imageText:
        "整合任务规划、机器人遥测、异常事件警报与操作人员监督。",
      capabilities: [
        "AI感知与异常检测",
        "自主导航与路径规划",
        "多传感器融合",
        "运动控制与地形适应",
        "边缘计算与云端监控",
        "远程接管与队伍管理"
      ]
    },
    solutions: {
      eyebrow: "产品与方案",
      title: "面向真实安防环境的能力组合",
      labels: {
        problem: "问题",
        solution: "方案",
        value: "价值"
      },
      items: [
        {
          icon: "Route",
          title: "自主巡航解决方案",
          problem: "安防巡逻需要机器人在较少人工干预下持续自主运行",
          solution: "AI驱动自主导航、巡逻路径规划、实时环境感知与边缘端部署能力，支持园区与周界持续巡逻",
          value: "减少夜间与高风险区域的人工巡逻，降低人员暴露，兼顾安全与降本增效"
        },
        {
          icon: "Radio",
          title: "远程遥操解决方案",
          problem: "复杂场景下，机器人系统需要具备人机协同决策与紧急接管能力",
          solution: "远程遥操提供低延迟实时远程控制，并以人工接管作为辅助操作与紧急干预方式",
          value: "在需要人工判断、安全升级或精准远程遥操时，让操作人员始终保持可控"
        },
        {
          icon: "Activity",
          title: "AI巡检解决方案",
          problem: "安防巡逻任务重复、现场数据分散，异常情况需要及早识别",
          solution: "机器人执行自动巡检，结合AI感知与背包传感器等设备的数据分析，对烟火、入侵等情况提前预警",
          value: "提升防火、防盗等异常预警的及时性，减少夜间人工复核，形成可追溯的巡检数据"
        },
        {
          icon: "CloudCog",
          title: "机器人调度平台（RSP）",
          problem: "多机器人部署需要统一的任务调度、分发与协同运营中枢",
          solution: "RSP平台支持多机器人任务调度、机器人集群管理、远程任务分发与工作流自动化",
          value: "作为连接硬件、AI 与远程遥操的中枢平台，实现可扩展的机器人运营"
        }
      ]
    },
    applications: {
      eyebrow: "应用场景",
      title: "服务于重视安全、覆盖与稳定运行的场景",
      items: [
        { icon: "Map", label: "仓储物流" },
        { icon: "Building2", label: "园区安防" },
        { icon: "Flame", label: "消防应急" },
        { icon: "Siren", label: "社区安防" }
      ]
    },
    caseStudy: {
      eyebrow: "标杆案例 · 物流仓储",
      title: "普洛斯物流园区机器人巡检项目",
      labels: {
        background: "项目背景",
        solution: "解决方案"
      },
      intro:
        "通过四足机器人、RSP 云控平台与数采平台协同部署，构建覆盖任务调度、自主巡检、实时监控与数据优化的物流园区巡检体系。",
      mediaAlt: "普洛斯物流园区内进行巡检的四足机器人",
      background:
        "园区道路、仓库周边及周界巡检重复且耗费人力，难以保持稳定覆盖。",
      solution:
        "以四足机器人、RSP 及数采平台统一调度、实时回传数据并记录异常。",
      metrics: [
        { value: "60%", label: "人工巡检成本降低" },
        { value: "80%", label: "异常响应时间缩短" },
        { value: "40%", label: "巡检效率提升" }
      ],
    
    },
    service: {

      title: "灵活合作，按需部署",
      copy:
        "根据项目阶段、应用场景与运营方式，灵活选择租赁、模块化赋能或全栈式交付，并获得从部署交付到持续运维的支持。",
      items: [
        { icon: "PackageCheck", label: "RaaS 租赁", description: "机器人 + RSP 平台统一提供；客户按月／按周期付费；低门槛快速部署" },
        { icon: "Cpu", label: "模块化赋能", description: "单独采购 AI 感知／调度／通信等模块化载荷；可接入客户现有设备或系统；用于已有体系能力增强" },
        { icon: "Handshake", label: "全栈式交付", description: "一次性采购完整机器人安防解决方案；包含机器人 + 平台 + 运维平台；客户自持资产并长期运行" }
      ]
    },
    about: {
      eyebrow: "关于超流智能",
      title: "具身智能机器人安防\n解决方案集成商",
      copy: [
        "超流智能专注于机器人在安防巡逻、园区巡检和设施运维等场景中的应用，围绕自主巡航、远程遥操与多机调度，提供从场景评估、方案配置、部署调试到持续运维的一体化服务。",
        "我们通过机器人承担夜间、重复及高风险任务，并在复杂情况下由人工远程介入，帮助客户扩大巡检覆盖范围、降低人员暴露风险，实现降本增效，保障项目长期稳定运行。"
      ],
      bullets: [
        "面向物理世界产业的具身智能",
        "基于AI能力的软硬件一体化交付",
        "创新的机器人租赁解决方案"
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
      options: ["自主巡航", "远程遥操", "AI巡检", "RSP平台", "其他"],
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
