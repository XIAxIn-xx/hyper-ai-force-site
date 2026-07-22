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
      { label: "Service", href: "#service" },
      { label: "About us", href: "#about" }
    ],
    seo: {
      title:
        "Hyper AIForce Limited | AI Robotics for Industrial Intelligence",
      description:
        "Hyper AIForce Limited develops embodied AI robotics, autonomous patrol and inspection systems for industrial security, facilities and critical infrastructure.",
      keywords: [
        "Hyper AIForce",
        "AI Robotics",
        "Embodied Intelligence",
        "Autonomous Patrol Robot",
        "Industrial Inspection",
        "Robotic Intelligence Platform"
      ]
    },
    hero: {
      eyebrow: "Hyper AIForce Limited",
      slogan: "AI Force Be With You",
      title: "AI-Powered Robotic Inspection Solutions for Physical Security",
      subtitle:
        "We develop autonomous robotic systems that combine AI perception, navigation, teleoperation, motion control and service delivery for physical security, inspection and facility operations.",
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
        "Physical security and industrial inspection still depend on high-cost patrol labor, manual observation and delayed response. Hyper AIForce turns autonomous naviagation, AI detection and teleoperation into a deployable operating platform.",
      points: [
        "Labor-intensive patrols are costly and hard to scale.",
        "Human attention drops during repetitive night and perimeter checks.",
        "Hazardous, remote or weather-exposed sites increase personnel risk.",
        "Critical incidents need real-time alerts, evidence and teleoperation."
      ]
    },
    strengths: {
      eyebrow: "Core Strengths",
      title: "Built for field deployment, not lab demos",
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
            "Navigation, obstacle avoidance and route planning help robots operate across factories, campuses, utilities and outdoor facilities."
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
      eyebrow: "Robotic Intelligence Platform",
      title: "A software-defined operating layer for autonomous robotic teams",
      copy:
        "Operators can assign missions from a browser or tablet, monitor live data, review alerts and supervise multiple robots. The platform connects edge AI, cloud monitoring and human-in-the-loop intervention.",
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
      title: "Capability packages for real industrial environments",
      labels: {
        problem: "Problem",
        solution: "Solution",
        value: "Value"
      },
      items: [
        {
          icon: "Route",
          title: "Autonomous Patrol",
          problem: "Industrial sites need robots that can run patrol missions with minimal manual intervention.",
          solution:
            "AI-driven autonomous navigation, patrol route planning, real-time environmental perception and edge deployment support continuous field operation.",
          value:
            "Reduces manual patrol effort while improving coverage, consistency and response readiness across industrial environments."
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
          problem: "Industrial inspections are repetitive, data-heavy and often expose workers to high-risk environments.",
          solution:
            "Robots perform automated industrial inspection with AI visual defect detection, safety monitoring, data analysis and anomaly recognition.",
          value:
            "Improves inspection reliability, safety visibility and evidence-based maintenance decisions."
        },
        {
          icon: "CloudCog",
          title: "Robot Scheduling Platform (RSP)",
          problem: "Multi-robot deployments need a central platform for scheduling, dispatch and coordinated operation.",
          solution:
            "The RSP platform manages multi-robot task scheduling, fleet management, remote task distribution and workflow automation.",
          value:
            "Acts as the hub to connect hardware, AI and Teleoperation for scalable robotic operations."
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
      eyebrow: "Case Study",
      title: "Quadruped robot patrol deployment for a GLP industrial logistics park",
      labels: {
        challenge: "Challenge",
        solution: "Solution"
      },
      imageTitle: "Autonomous Inspection Workflow",
      imageText:
        "Route execution, anomaly detection and remote monitoring for high-value facilities.",
      challenge:
        "GLP needed reliable fire-safety and security patrol coverage across an industrial park, including roads, warehouse surroundings, perimeter areas and night-time routine checks.",
      solution:
        "Hyper AIForce supported the deployment of robotic dogs for scheduled park patrols, teleoperation, abnormal-event awareness and on-site evidence capture across daily security routes.",
      outcomes: [
        "Expanded patrol coverage across the industrial park",
        "Improved fire-safety and security visibility",
        "Reduced repetitive perimeter patrol workload"
      ],
      cta: "Start a deployment conversation"
    },
    service: {
      eyebrow: "Support & Service Network",
      title: "From solution design to full-cycle support.",
      copy:
        "Hyper AIForce positions robotics as an integrated service, instead of a standalone device. Deployment includes solution design, technical support, maintenance planning, operator training, robot leasing and teleoperation.",
      items: [
        { icon: "Handshake", label: "Solution Design" },
        { icon: "Cpu", label: "Technical Support" },
        { icon: "Wrench", label: "After-sales Care" },
        { icon: "BadgeCheck", label: "Operator Training" },
        { icon: "PackageCheck", label: "Robot Leasing" },
        { icon: "Radio", label: "Teleoperation" }
      ]
    },
    about: {
      eyebrow: "About Hyper AIForce",
      title: "An AI robotics company connecting autonomous navigation and teleoperation.",
      copy:
        "Hyper AIForce focuses on core capabilities including AI perception, autonomous patrol, teleoperation, RSP platform and edge intelligence. The team helps customers deploy intelligent robotic systems into real-world application scenarios, including physical security, industrial inspection, facility patrol, and automated operations, enabling large-scale deployment and stable operation. By replacing manual operations with robotics, the system reduces labor costs, improves operational efficiency, and enhances safety, achieving significant cost reduction and productivity gains.",
      bullets: [
        "Embodied intelligence for physical-world industries",
        "Integrated hardware, software and AI delivery",
        "Innovative Robotics Leasing Solution"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Plan a robotics deployment for your site.",
      copy:
        "Tell us about your facility, patrol workload or inspection scenario. Our team will map the appropriate solutions.",
      button: "Request a Demo / Contact Us",
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
    footer:
      "AI robotics, autonomous patrol and teleoperation solutions.",
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
        "超流智能有限公司專注 AI Robotics、具身智能、自主巡航與巡邏巡檢系統，服務物理安全、設施運維與關鍵基礎設施場景",
      keywords: [
        "超流智能有限公司",
        "Hyper AIForce",
        "AI Robotics",
        "具身智能",
        "自主巡邏機器人",
        "工業巡檢"
      ]
    },
    hero: {
      eyebrow: "超流智能有限公司",
      slogan: "AI Force Be With You",
      title: "面向物理安全的\n機器人智能巡檢解決方案",
      subtitle:
        "我們將 AI 感知、自主巡航、遠程遙操、運動控制與場景交付能力相結合，為物理安全與園區巡邏巡檢提供可部署的機器人解決方案。",
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
        "物理安全與工業巡檢仍高度依賴人工巡邏、現場觀察和事後處置。超流智能將自主巡航、AI 異常識別與遠程接管結合，形成可持續運行的機器人巡檢能力。",
      points: [
        "大範圍巡邏依賴人力，成本高且難以長期覆蓋",
        "夜間、周界與重複檢查容易出現注意力下降",
        "高風險、偏遠或戶外環境增加人員暴露",
        "突發事件需要及時告警、證據留存與遠程處置"
      ]
    },
    strengths: {
      eyebrow: "核心優勢",
      title: "為真實部署而生，不止於實驗室展示",
      items: [
        {
          icon: "BrainCircuit",
          title: "AI 自主巡檢能力",
          text:
            "結合環境感知、異常識別、多傳感器融合與任務決策，支撐機器人自主完成巡邏與巡檢任務。"
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
      title: "自主機器人隊伍的\n統一運營平台",
      copy:
        "操作人員可通過瀏覽器或平板分配任務、查看實時數據、接收告警，並統一監管多台機器人。平台連接邊緣 AI、雲端監控與人工接管，支撐機器人隊伍持續運營。",
      imageTitle: "多機器人調度平台",
      imageText:
        "整合任務規劃、機器人遙測、異常事件警報與操作人員監督。",
      capabilities: [
        "AI 感知與異常檢測",
        "自主導航與路徑規劃",
        "多傳感器融合",
        "運動控制與地形適應",
        "邊緣計算與雲端監控",
        "遠程接管與隊伍管理"
      ]
    },
    solutions: {
      eyebrow: "產品與方案",
      title: "面向真實工業環境的能力組合",
      labels: {
        problem: "問題",
        solution: "方案",
        value: "價值"
      },
      items: [
        {
          icon: "Route",
          title: "自主巡航解決方案",
          problem: "工業場景需要機器人在較少人工干預下持續自主運行",
          solution: "AI 驅動自主導航、巡邏路徑規劃、實時環境感知與邊緣端部署能力，支援現場連續運行",
          value: "減少人工巡邏干預，提升工業環境中的覆蓋效率、穩定性與響應能力"
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
          problem: "工業巡檢任務重複、數據量大，且高風險環境會增加人員暴露",
          solution: "機器人執行工業場景自動巡檢，結合 AI視覺缺陷檢測、安全監測、數據分析與異常識別",
          value: "提升巡檢一致性、安全可視性與基於數據的維護決策能力"
        },
        {
          icon: "CloudCog",
          title: "機器人調度平台（RSP）",
          problem: "多機器人部署需要統一的任務調度、分發與協同運營中樞",
          solution: "RSP平台支援多機器人任務調度、機器人集群管理、遠程任務分發與工作流自動化",
          value: "作為連接硬件、AI 與遠程遙操的中樞平台，支撐可擴展的機器人運營"
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
      eyebrow: "案例場景",
      title: "普洛斯物流園區機器狗巡邏部署",
      labels: {
        challenge: "挑戰",
        solution: "方案"
      },
      imageTitle: "自主巡檢工作流程",
      imageText:
        "為高價值設施提供路線執行、異常識別與遠程監看能力。",
      challenge:
        "普洛斯需要在工業園區道路、倉庫周邊、周界區域及夜間例行巡查中，獲得更穩定的消防與安防巡邏覆蓋",
      solution:
        "超流智能支持部署機器狗執行園區定時巡邏、遠程監看、異常事件感知與現場證據採集，服務日常安防巡邏路線",
      outcomes: ["擴大工業園區巡邏覆蓋", "提升消防與安防可視性", "減少重複性周界巡邏工作"],
      cta: "開啟部署溝通"
    },
    service: {
      eyebrow: "支持與服務網絡",
      title: "從方案設計到全程支持",
      copy:
        "超流智能將機器人視為整合服務，而非單一設備。交付包括方案設計、技術支持、維護規劃、操作培訓、機器租賃與遠程代操",
      items: [
        { icon: "Handshake", label: "方案設計" },
        { icon: "Cpu", label: "技術支持" },
        { icon: "Wrench", label: "售後維護" },
        { icon: "BadgeCheck", label: "操作培訓" },
        { icon: "PackageCheck", label: "機器租賃" },
        { icon: "Radio", label: "遠程代操" }
      ]
    },
    about: {
      eyebrow: "關於超流智能",
      title: "連接自主智能與真實運營場景的 AI 機器人公司",
      copy:
        "超流智能專注 AI 感知、自主巡航、遠程遙操、 RSP 平台與邊緣智能系統等核心技術能力。團隊協助客戶將智能機器人系統部署到實際應用場景中，包括物理安全、工業巡檢、園區巡邏與自動化運維等領域，實現規模化落地與穩定運行。通過以機器人替代人工操作，有效降低人力成本，提升作業效率與安全性，實現顯著的降本增效。",
      bullets: [
        "面向物理世界產業的具身智能",
        "軟硬件與 AI 的一體化交付",
        "創新的機器人租賃解決方案"
      ]
    },
    contact: {
      eyebrow: "聯絡我們",
      title: "為您的場地規劃機器人部署",
      copy:
        "告訴我們您的設施、巡邏工作量或巡檢場景。我們將協助匹配合適的解決方案",
      button: "預約演示 / 聯絡我們",
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
    footer: "AI 機器人、自主巡航與遠程遙操方案",
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
        "超流智能有限公司专注 AI Robotics、具身智能、自主巡航与巡逻巡检系统，服务物理安全、设施运维与关键基础设施场景",
      keywords: [
        "超流智能有限公司",
        "Hyper AIForce",
        "AI Robotics",
        "具身智能",
        "自主巡逻机器人",
        "工业巡检"
      ]
    },
    hero: {
      eyebrow: "超流智能有限公司",
      slogan: "AI Force Be With You",
      title: "面向物理安全的\n机器人智能巡检解决方案",
      subtitle:
        "我们将 AI 感知、自主巡航、远程遥操、运动控制与场景交付能力相结合，为物理安全与园区巡逻巡检提供可部署的机器人解决方案。",
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
        "物理安全与工业巡检仍高度依赖人工巡逻、现场观察和事后处置。超流智能将自主巡航、AI 异常识别与远程接管结合，形成可持续运行的机器人巡检能力。",
      points: [
        "大范围巡逻依赖人力，成本高且难以长期覆盖",
        "夜间、周界与重复检查容易出现注意力下降",
        "高风险、偏远或户外环境增加人员暴露",
        "突发事件需要及时告警、证据留存与远程处置"
      ]
    },
    strengths: {
      eyebrow: "核心优势",
      title: "为真实部署而生，不止于实验室展示",
      items: [
        {
          icon: "BrainCircuit",
          title: "AI 自主巡检能力",
          text:
            "结合环境感知、异常识别、多传感器融合与任务决策，支撑机器人自主完成巡逻与巡检任务。"
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
      title: "自主机器人队伍的\n统一运营平台",
      copy:
        "操作人员可通过浏览器或平板分配任务、查看实时数据、接收告警，并统一监管多台机器人。平台连接边缘 AI、云端监控与人工接管，支撑机器人队伍持续运营。",
      imageTitle: "多机器人调度平台",
      imageText:
        "整合任务规划、机器人遥测、异常事件警报与操作人员监督。",
      capabilities: [
        "AI 感知与异常检测",
        "自主导航与路径规划",
        "多传感器融合",
        "运动控制与地形适应",
        "边缘计算与云端监控",
        "远程接管与队伍管理"
      ]
    },
    solutions: {
      eyebrow: "产品与方案",
      title: "面向真实工业环境的能力组合",
      labels: {
        problem: "问题",
        solution: "方案",
        value: "价值"
      },
      items: [
        {
          icon: "Route",
          title: "自主巡航解决方案",
          problem: "工业场景需要机器人在较少人工干预下持续自主运行",
          solution: "AI 驱动自主导航、巡逻路径规划、实时环境感知与边缘端部署能力，支持现场连续运行",
          value: "减少人工巡逻干预，提升工业环境中的覆盖效率、稳定性与响应能力"
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
          problem: "工业巡检任务重复、数据量大，且高风险环境会增加人员暴露",
          solution: "机器人执行工业场景自动巡检，结合 AI视觉缺陷检测、安全监测、数据分析与异常识别",
          value: "提升巡检一致性、安全可视性与基于数据的维护决策能力"
        },
        {
          icon: "CloudCog",
          title: "机器人调度平台（RSP）",
          problem: "多机器人部署需要统一的任务调度、分发与协同运营中枢",
          solution: "RSP平台支持多机器人任务调度、机器人集群管理、远程任务分发与工作流自动化",
          value: "作为连接硬件、AI 与远程遥操的中枢平台，支撑可扩展的机器人运营"
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
      eyebrow: "案例场景",
      title: "普洛斯物流园区机器狗巡逻部署",
      labels: {
        challenge: "挑战",
        solution: "方案"
      },
      imageTitle: "自主巡检工作流程",
      imageText:
        "为高价值设施提供路线执行、异常识别与远程监看能力。",
      challenge:
        "普洛斯需要在工业园区道路、仓库周边、周界区域及夜间例行巡查中，获得更稳定的消防与安防巡逻覆盖",
      solution:
        "超流智能支持部署机器狗执行园区定时巡逻、远程监看、异常事件感知与现场证据采集，服务日常安防巡逻路线",
      outcomes: ["扩大工业园区巡逻覆盖", "提升消防与安防可视性", "减少重复性周界巡逻工作"],
      cta: "开启部署沟通"
    },
    service: {
      eyebrow: "支持与服务网络",
      title: "从方案设计到全程支持",
      copy:
        "超流智能将机器人视为整合服务，而非单一设备。交付包括方案设计、技术支持、维护规划、操作培训、机器租赁与远程代操",
      items: [
        { icon: "Handshake", label: "方案设计" },
        { icon: "Cpu", label: "技术支持" },
        { icon: "Wrench", label: "售后维护" },
        { icon: "BadgeCheck", label: "操作培训" },
        { icon: "PackageCheck", label: "机器租赁" },
        { icon: "Radio", label: "远程代操" }
      ]
    },
    about: {
      eyebrow: "关于超流智能",
      title: "连接自主智能与真实运营场景的 AI 机器人公司",
      copy:
        "超流智能专注 AI 感知、自主巡航、远程遥操、 RSP 平台与边缘智能系统等核心技术能力。团队帮助客户将智能机器人部署到实际应用场景中，包括物理安全、工业巡检、园区巡逻与自动化运维等领域，实现规模化落地与稳定运行。通过机器人替代人工操作，有效降低人力成本，提升作业效率与安全性，实现降本增效。",
      bullets: [
        "面向物理世界产业的具身智能",
        "软硬件与 AI 的一体化交付",
        "创新的机器人租赁解决方案"
      ]
    },
    contact: {
      eyebrow: "联系我们",
      title: "为您的场地规划机器人部署",
      copy:
        "告诉我们您的设施、巡逻工作量或巡检场景。我们将协助匹配合适的解决方案",
      button: "预约演示 / 联系我们",
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
    footer: "AI 机器人、自主巡航与远程遥操方案",
    footerRights: "版权所有。"
  }
} as const;

export function getHyperContent(locale: Locale) {
  return content[locale];
}
