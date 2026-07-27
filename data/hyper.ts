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
        "We combine AI perception, autonomous patrol, teleoperation, motion control and service delivery to provide low-barrier, rapidly deployable robotic solutions for security patrol and other physical-security scenarios.",
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
    overview: {
      eyebrow: "Solutions",
      title: "Building a robotic solution loop",
      copy:
        "Autonomous patrol and teleoperation form the core capabilities, while RSP and backpack-and-sensor integration provide the software and hardware foundation for deployment.",
      steps: [
        { icon: "PackageCheck", label: "Task Assignment" },
        { icon: "CloudCog", label: "RSP Orchestration" },
        { icon: "Route", label: "Autonomous Patrol and Execution" },
        { icon: "Activity", label: "Payload Sensing and AI Detection" },
        { icon: "Radio", label: "Remote Intervention for Exceptions" },
        { icon: "BadgeCheck", label: "Inspection Records and Data Loop" }
      ]
    },
    capabilities: [
      {
        number: "01",
        label: "Core Capability · Autonomous Patrol",
        title: "Perceive Autonomously. Navigate Anywhere.",
        description:
          "Mapping, localisation, route planning and dynamic obstacle avoidance let robots follow predefined routes for repeatable patrol and inspection.",
        capabilities: [
          "Mapping and Localisation",
          "Route Planning and Dynamic Obstacle Avoidance",
          "Predefined-Route Autonomous Execution",
          "Continuous On-Site Status Reporting"
        ],
        layout: "media-left",
        mediaType: "video",
        mediaSrc: "/videos/autonomous-patrol.mp4",
        poster: "/images/capabilities/autonomous-patrol-poster.jpg",
        mediaAlt: "Robot conducting an inspection at a logistics facility",
        mediaNote: "Autonomous patrol footage",
        mediaSlots: [],
        resourceKey: "media.autonomousPatrol",
        mediaPlaceholderText: "Approved real media can replace this asset through the field above.",
        connection: null
      },
      {
        number: "02",
        label: "Core Capability · Teleoperation",
        title: "Low-Latency Teleoperation and Exception Intervention",
        description:
          "When unexpected conditions, challenging terrain, or situations requiring human judgment arise, a remote operator can seamlessly connect to the on-site robot and take control.",
        capabilities: [
          "Remote Device Access",
          "Low-Latency Video Transmission",
          "Autonomous/Manual Mode Switching",
          "Rapid Intervention for Exceptions"
        ],
        layout: "media-right",
        mediaType: "image",
        mediaSrc: "/images/capabilities/teleoperation.png",
        poster: null,
        mediaAlt: "Remote teleoperation workstation",
        mediaNote: "Remote teleoperation workstation",
        mediaSlots: [],
        resourceKey: "media.remoteTeleoperation",
        mediaPlaceholderText: "Approved real media can replace this asset through the field above.",
        connection: null
      },
      {
        number: "03",
        label: "Software Solution · RSP",
        title: "Robot Task Orchestration and Inspection Data Management",
        description:
          "RSP is our robot scheduling platform.",
        capabilities: [
          "Map and Task Management",
          "Unified Multi-Robot Dispatch",
          "Device Status and Alert Monitoring",
          "Inspection Records and Data Management"
        ],
        layout: "media-left",
        mediaType: "image",
        mediaSrc: "/images/capabilities/rsp-platform.png",
        poster: null,
        mediaAlt: "RSP robot operations platform interface",
        mediaNote: "RSP software platform",
        mediaSlots: [],
        resourceKey: "media.rspPlatform",
        mediaPlaceholderText: "Approved real media can replace this asset through the field above.",
        connection: null
      },
      {
        number: "04",
        label: "Hardware Solution · Backpack and Sensor Integration",
        title: "Scenario-Specific Backpack and Multi-Sensor Payload Integration",
        description:
          "Hardware backpacks, sensor payloads and interface integration equip robots with the sensing, data-acquisition and task-specific hardware they need.",
        capabilities: [
          "Modular Hardware Configuration",
          "Multi-Sensor Integration",
          "On-Site Data Acquisition",
          "Scenario-Specific Payload Expansion"
        ],
        layout: "media-right",
        mediaType: "image",
        mediaSrc: "/images/capabilities/backpack-sensors.png",
        poster: null,
        mediaAlt: "Hardware backpack and sensor payloads",
        mediaNote: "Backpack and sensor integration",
        mediaSlots: [],
        resourceKey: "media.hardwareIntegration",
        mediaPlaceholderText: "Approved real media can replace this asset through the field above.",
        connection: null
      }
    ],
    applications: {
      eyebrow: "Applications",
      title: "Built for environments that prioritise safety, coverage and stable operation",
      items: [
        {
          icon: "Map",
          label: "Warehousing & Logistics",
          description: "Routine inspection across warehouse aisles, loading zones and park perimeters.",
          keywords: ["Autonomous Patrol", "Anomaly Detection"],
          image: "/images/applications/warehouse-logistics.png",
          imageAlt: "Quadruped robot outside a logistics park"
        },
        {
          icon: "Building2",
          label: "Campus Security",
          description: "Daily patrol and risk inspection for roads, perimeters and key areas.",
          keywords: ["Wide Coverage", "Stable Operation"],
          image: "/images/applications/campus-security.png",
          imageAlt: "Quadruped robot patrolling an industrial campus entrance"
        },
        {
          icon: "Flame",
          label: "Fire & Emergency",
          description: "Suitable for hazard inspection, equipment checks and emergency support.",
          keywords: ["Environmental Sensing", "Rapid Response"],
          image: "/images/applications/fire-emergency.png",
          imageAlt: "Quadruped robot inspecting fire safety equipment"
        },
        {
          icon: "Siren",
          label: "Community Security",
          description: "Daily patrol for public areas, garages and key points in residential communities.",
          keywords: ["Reduced Repetitive Patrols", "Faster Response"],
          image: "/images/applications/community-security.png",
          imageAlt: "Quadruped robot patrolling a residential community"
        }
      ]
    },
    caseStudy: {
      eyebrow: "Featured Case · Logistics & Warehousing",
      title: "GLP Logistics Park Robotic Inspection Project",
      intro:
        "An integrated deployment combining quadruped robots, the RSP cloud control platform and data acquisition infrastructure to deliver an end-to-end logistics-park inspection solution covering task scheduling, autonomous inspection, real-time monitoring and data optimisation.",
      mediaAlt: "Quadruped robot conducting an inspection at a GLP logistics park",
      metrics: [
        { value: "↓ 60%", label: "Reducing manual inspection costs" },
        { value: "↓ 80%", label: "Shortening anomaly response time" },
        { value: "↑ 40%", label: "Improving inspection efficiency" }
      ],
    },
    service: {
      title: "Built for environments that prioritize safety, comprehensive coverage, and reliable operation.",
      copy:
        "Choose leasing, modular enablement or full-stack delivery based on your project stage, application scenario and operating model, with support from deployment delivery through ongoing operations and maintenance.",
      items: [
        { icon: "PackageCheck", label: "RaaS Leasing", description: "Robots + RSP provided as one service; monthly or periodic billing; low-barrier rapid deployment" },
        { icon: "Cpu", label: "Modular Enablement", description: "Acquire AI perception, dispatch or communications modules separately; integrate with existing equipment or systems; improve existing system capabilities" },
        { icon: "Handshake", label: "Full-Stack Delivery", description: "Purchase a complete robotic security solution upfront; includes robots and RSP; retain the assets for long-term operation" }
      ]
    },
    about: {
      eyebrow: "About Hyper AIForce",
      title: "Integrated Provider of Robotic Security Solutions",
      copy: [
        "Hyper AIForce deploys robots for physical-security applications, including security patrol, warehousing and logistics, and community security. We combine autonomous patrol, teleoperation and multi-robot scheduling with end-to-end deployment and operations support.",
        "We use robots for night-time, repetitive and high-risk tasks, with remote operators intervening when needed. Customers gain wider inspection coverage, lower personnel exposure and more reliable operations."
      ],
      bullets: [
        "Embodied intelligence for physical-world industries",
        "AI-enabled integrated hardware and software delivery",
        "Innovative Robotics Leasing Solution"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Plan a rapid robotics deployment for your site.",
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
        "RSP",
        "Backpack and Sensors",
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
        "我們將 AI 感知、自主巡航、遠程遙操、運動控制與場景交付能力相結合，為安防巡邏等物理安全場景提供低門檻快速部署的機器人解決方案。",
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
    overview: {
      eyebrow: "解決方案",
      title: "構建機器人解決方案閉環",
      copy:
        "自主巡航與遠程遙操構成核心能力，RSP 與背包、傳感器集成提供軟硬件產品基礎，支援機器人部署與持續營運。",
      steps: [
        { icon: "PackageCheck", label: "任務下發" },
        { icon: "CloudCog", label: "RSP 統一調度" },
        { icon: "Route", label: "自主巡航與任務執行" },
        { icon: "Activity", label: "載荷採集與 AI 識別" },
        { icon: "Radio", label: "異常觸發遠程接管" },
        { icon: "BadgeCheck", label: "巡檢記錄與數據閉環" }
      ]
    },
    capabilities: [
      {
        number: "01",
        label: "核心能力 · 自主巡航",
        title: "自主感知，全域巡航",
        description:
          "基於地圖構建、定位、路徑規劃與動態避障，支援機器人按照預設路線持續開展巡檢與巡邏。",
        capabilities: ["地圖構建與定位", "路徑規劃與動態避障", "預設路線自主執行", "現場狀態持續回傳"],
        layout: "media-left",
        mediaType: "video",
        mediaSrc: "/videos/autonomous-patrol.mp4",
        poster: "/images/capabilities/autonomous-patrol-poster.jpg",
        mediaAlt: "在物流設施進行巡檢的機器人",
        mediaNote: "自主巡航實拍視頻",
        mediaSlots: [],
        resourceKey: "media.autonomousPatrol",
        mediaPlaceholderText: "可通過上方字段替換為已確認的真實素材。",
        connection: null
      },
      {
        number: "02",
        label: "核心能力 · 遠程遙操",
        title: "低延遲遠程遙操與異常干預",
        description:
          "當遇到突發狀況、複雜地形或需要人工判斷的情形時，遠程操作員可以無縫連接現場機器人並接管控制。",
        capabilities: ["遠程設備接入", "低延遲畫面回傳", "自主與人工模式切換", "異常情況下快速介入"],
        layout: "media-right",
        mediaType: "image",
        mediaSrc: "/images/capabilities/teleoperation.png",
        poster: null,
        mediaAlt: "遠程遙操工作台",
        mediaNote: "遠程遙操工作台",
        mediaSlots: [],
        resourceKey: "media.remoteTeleoperation",
        mediaPlaceholderText: "可通過上方字段替換為已確認的真實素材。",
        connection: null
      },
      {
        number: "03",
        label: "軟件方案 · RSP",
        title: "機器人任務調度與巡檢數據管理",
        description:
          "RSP 是我們的機器人調度平台。",
        capabilities: ["地圖與任務管理", "多機器人統一調度", "設備狀態與告警監控", "巡檢記錄與數據管理"],
        layout: "media-left",
        mediaType: "image",
        mediaSrc: "/images/capabilities/rsp-platform.png",
        poster: null,
        mediaAlt: "RSP 機器人調度平台界面",
        mediaNote: "RSP 軟件平台",
        mediaSlots: [],
        resourceKey: "media.rspPlatform",
        mediaPlaceholderText: "可通過上方字段替換為已確認的真實素材。",
        connection: null
      },
      {
        number: "04",
        label: "硬件方案 · 背包與傳感器集成",
        title: "場景化背包與多傳感器載荷集成",
        description:
          "透過硬件背包、傳感器載荷與接口集成，為機器人配置環境感知、數據採集與任務執行所需的硬件能力。",
        capabilities: ["模組化硬件組合", "多類型傳感器集成", "現場數據採集", "按場景擴展載荷"],
        layout: "media-right",
        mediaType: "image",
        mediaSrc: "/images/capabilities/backpack-sensors.png",
        poster: null,
        mediaAlt: "硬件背包與傳感器載荷",
        mediaNote: "背包與傳感器集成",
        mediaSlots: [],
        resourceKey: "media.hardwareIntegration",
        mediaPlaceholderText: "可通過上方字段替換為已確認的真實素材。",
        connection: null
      }
    ],
    applications: {
      eyebrow: "應用場景",
      title: "服務於重視安全、覆蓋與穩定運行的場景",
      items: [
        {
          icon: "Map",
          label: "倉儲物流",
          description: "面向倉庫通道、裝卸區域與園區周界的常態化巡檢。",
          keywords: ["自主巡航", "異常識別"],
          image: "/images/applications/warehouse-logistics.png",
          imageAlt: "物流園區外進行巡檢的四足機器人"
        },
        {
          icon: "Building2",
          label: "園區安防",
          description: "覆蓋道路、周界與重點區域的日常巡邏與風險排查。",
          keywords: ["大範圍覆蓋", "穩定運行"],
          image: "/images/applications/campus-security.png",
          imageAlt: "在工業園區入口巡邏的四足機器人"
        },
        {
          icon: "Flame",
          label: "消防應急",
          description: "適用於隱患排查、設備巡檢與應急響應輔助。",
          keywords: ["環境感知", "快速響應"],
          image: "/images/applications/fire-emergency.png",
          imageAlt: "檢查消防設備的四足機器人"
        },
        {
          icon: "Siren",
          label: "社區安防",
          description: "面向社區公共區域、地庫與重點點位的日常巡邏。",
          keywords: ["減少重複巡邏", "提升響應效率"],
          image: "/images/applications/community-security.png",
          imageAlt: "在住宅社區巡邏的四足機器人"
        }
      ]
    },
    caseStudy: {
      eyebrow: "標竿案例 · 物流倉儲",
      title: "普洛斯物流園區機器人巡檢項目",
      intro:
        "透過四足機器人、RSP 雲端控制平台與數據採集平台協同部署，構建涵蓋任務調度、自主巡檢、即時監控與數據優化的一體化物流園區巡檢解決方案。",
      mediaAlt: "普洛斯物流園區內進行巡檢的四足機器人",
      metrics: [
        { value: "↓ 60%", label: "降低人工巡檢成本" },
        { value: "↓ 80%", label: "縮短異常應變時間" },
        { value: "↑ 40%", label: "提升巡檢效率" }
      ],
  
    },
    service: {
      
      title: "專為注重安全、全面覆蓋與穩定運行的場景而打造。",
      copy:
        "根據項目階段、應用場景與營運方式，靈活選擇租賃、模組化賦能或全棧式交付，並獲得從部署交付到持續運維的支持。",
      items: [
        { icon: "PackageCheck", label: "RaaS 租賃", description: "機器人 + RSP 統一提供；客戶按月／按週期付費；低門檻快速部署" },
        { icon: "Cpu", label: "模組化賦能", description: "單獨採購 AI 感知／調度／通信等模組化載荷；可接入客戶現有設備或系統；用於提高既有體系能力" },
        { icon: "Handshake", label: "全棧式交付", description: "一次性採購完整機器人安防解決方案；包含機器人 + 平台；客戶自持資產並長期運行" }
      ]
    },
    about: {
      eyebrow: "關於超流智能",
      title: "機器人安防\n解決方案集成商",
      copy: [
        "超流智能專注於機器人在安防巡邏、物流倉儲及社區安防等物理安全場景中的應用，圍繞自主巡航、遠程遙操與多機調度，提供從方案配置、部署調試到持續運維的服務。",
        "超流智能通過機器人承擔夜間、重複及高風險任務，並在需要時由人工遠程介入，幫助客戶擴大巡檢覆蓋、降低人員暴露風險，實現更高效、更穩定的長期營運。"
      ],
      bullets: [
        "面向物理世界產業的具身智能",
        "基於AI能力的軟硬件一體化交付",
        "創新的機器人租賃解決方案"
      ]
    },
    contact: {
      eyebrow: "聯絡我們",
      title: "為您的場地規劃機器人快速部署",
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
      options: ["自主巡航", "遠程遙操", "RSP", "背包與傳感器", "其他"],
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
        "我们将 AI 感知、自主巡航、远程遥操、运动控制与场景交付能力相结合，为安防巡逻等物理安全场景提供低门槛快速部署的机器人解决方案。",
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
    overview: {
      eyebrow: "解决方案",
      title: "构建机器人解决方案闭环",
      copy:
        "自主巡航与远程遥操构成核心能力，RSP 与背包、传感器集成提供软硬件产品基础，支持机器人部署与持续运营。",
      steps: [
        { icon: "PackageCheck", label: "任务下发" },
        { icon: "CloudCog", label: "RSP 统一调度" },
        { icon: "Route", label: "自主巡航与任务执行" },
        { icon: "Activity", label: "载荷采集与 AI 识别" },
        { icon: "Radio", label: "异常触发远程接管" },
        { icon: "BadgeCheck", label: "巡检记录与数据闭环" }
      ]
    },
    capabilities: [
      {
        number: "01",
        label: "核心能力 · 自主巡航",
        title: "自主感知，全域巡航",
        description:
          "基于地图构建、定位、路径规划与动态避障，支持机器人按照预设路线持续开展巡检和巡逻。",
        capabilities: ["地图构建与定位", "路径规划与动态避障", "预设路线自主执行", "现场状态持续回传"],
        layout: "media-left",
        mediaType: "video",
        mediaSrc: "/videos/autonomous-patrol.mp4",
        poster: "/images/capabilities/autonomous-patrol-poster.jpg",
        mediaAlt: "在物流设施内进行巡检的机器人",
        mediaNote: "自主巡航实拍视频",
        mediaSlots: [],
        resourceKey: "media.autonomousPatrol",
        mediaPlaceholderText: "可通过上方字段替换为已确认的真实素材。",
        connection: null
      },
      {
        number: "02",
        label: "核心能力 · 远程遥操",
        title: "低延迟远程遥操与异常干预",
        description:
          "当遇到突发状况、复杂地形或需要人工判断的情形时，远程操作员可以无缝连接现场机器人并接管控制。",
        capabilities: ["远程设备接入", "低延迟画面回传", "自主与人工模式切换", "异常情况下快速介入"],
        layout: "media-right",
        mediaType: "image",
        mediaSrc: "/images/capabilities/teleoperation.png",
        poster: null,
        mediaAlt: "远程遥操工作台",
        mediaNote: "远程遥操工作台",
        mediaSlots: [],
        resourceKey: "media.remoteTeleoperation",
        mediaPlaceholderText: "可通过上方字段替换为已确认的真实素材。",
        connection: null
      },
      {
        number: "03",
        label: "软件方案 · RSP",
        title: "机器人任务调度与巡检数据管理",
        description:
          "RSP 是我们的机器人调度平台。",
        capabilities: ["地图与任务管理", "多机器人统一调度", "设备状态与告警监控", "巡检记录与数据管理"],
        layout: "media-left",
        mediaType: "image",
        mediaSrc: "/images/capabilities/rsp-platform.png",
        poster: null,
        mediaAlt: "RSP 机器人调度平台界面",
        mediaNote: "RSP 软件平台",
        mediaSlots: [],
        resourceKey: "media.rspPlatform",
        mediaPlaceholderText: "可通过上方字段替换为已确认的真实素材。",
        connection: null
      },
      {
        number: "04",
        label: "硬件方案 · 背包与传感器集成",
        title: "场景化背包与多传感器载荷集成",
        description:
          "通过硬件背包、传感器载荷与接口集成，为机器人配置环境感知、数据采集与任务执行所需的硬件能力。",
        capabilities: ["模块化硬件组合", "多类型传感器集成", "现场数据采集", "按场景扩展载荷"],
        layout: "media-right",
        mediaType: "image",
        mediaSrc: "/images/capabilities/backpack-sensors.png",
        poster: null,
        mediaAlt: "硬件背包与传感器载荷",
        mediaNote: "背包与传感器集成",
        mediaSlots: [],
        resourceKey: "media.hardwareIntegration",
        mediaPlaceholderText: "可通过上方字段替换为已确认的真实素材。",
        connection: null
      }
    ],
    applications: {
      eyebrow: "应用场景",
      title: "服务于重视安全、覆盖与稳定运行的场景",
      items: [
        {
          icon: "Map",
          label: "仓储物流",
          description: "面向仓库通道、装卸区域与园区周界的常态化巡检。",
          keywords: ["自主巡航", "异常识别"],
          image: "/images/applications/warehouse-logistics.png",
          imageAlt: "物流园区外进行巡检的四足机器人"
        },
        {
          icon: "Building2",
          label: "园区安防",
          description: "覆盖道路、周界与重点区域的日常巡逻与风险排查。",
          keywords: ["大范围覆盖", "稳定运行"],
          image: "/images/applications/campus-security.png",
          imageAlt: "在工业园区入口巡逻的四足机器人"
        },
        {
          icon: "Flame",
          label: "消防应急",
          description: "适用于隐患排查、设备巡检与应急响应辅助。",
          keywords: ["环境感知", "快速响应"],
          image: "/images/applications/fire-emergency.png",
          imageAlt: "检查消防设备的四足机器人"
        },
        {
          icon: "Siren",
          label: "社区安防",
          description: "面向社区公共区域、地库与重点点位的日常巡逻。",
          keywords: ["减少重复巡逻", "提升响应效率"],
          image: "/images/applications/community-security.png",
          imageAlt: "在住宅社区巡逻的四足机器人"
        }
      ]
    },
    caseStudy: {
      eyebrow: "标杆案例 · 物流仓储",
      title: "普洛斯物流园区机器人巡检项目",
      intro:
        "通过四足机器人、RSP 云控平台与数采平台协同部署，构建覆盖任务调度、自主巡检、实时监控与数据优化的一体化物流园区巡检解决方案。",
      mediaAlt: "普洛斯物流园区内进行巡检的四足机器人",
      metrics: [
        { value: "↓ 60%", label: "降低人工巡检成本" },
        { value: "↓ 80%", label: "缩短异常响应时间" },
        { value: "↑ 40%", label: "提升巡检效率" }
      ],
    
    },
    service: {

      title: "专为注重安全、全面覆盖与稳定运行的场景而打造。",
      copy:
        "根据项目阶段、应用场景与运营方式，灵活选择租赁、模块化赋能或全栈式交付，并获得从部署交付到持续运维的支持。",
      items: [
        { icon: "PackageCheck", label: "RaaS 租赁", description: "机器人 + RSP 统一提供；客户按月／按周期付费；低门槛快速部署" },
        { icon: "Cpu", label: "模块化赋能", description: "单独采购 AI 感知／调度／通信等模块化载荷；可接入客户现有设备或系统；用于提高已有体系能力" },
        { icon: "Handshake", label: "全栈式交付", description: "一次性采购完整机器人安防解决方案；包含机器人 + 机器人调度平台；客户自持资产并长期运行" }
      ]
    },
    about: {
      eyebrow: "关于超流智能",
      title: "机器人安防\n解决方案集成商",
      copy: [
        "超流智能专注于机器人在安防巡逻、物流仓储和社区安防等物理安全场景中的应用，围绕自主巡航、远程遥操与多机调度，提供从方案配置、部署调试到持续运维的服务。",
        "超流智能通过机器人承担夜间、重复及高风险任务，并在需要时由人工远程介入，帮助客户扩大巡检覆盖、降低人员暴露风险，实现更高效、更稳定的长期运营。"
      ],
      bullets: [
        "面向物理世界产业的具身智能",
        "基于AI能力的软硬件一体化交付",
        "创新的机器人租赁解决方案"
      ]
    },
    contact: {
      eyebrow: "联系我们",
      title: "为您的场地规划机器人快速部署",
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
      options: ["自主巡航", "远程遥操", "RSP", "背包与传感器", "其他"],
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
