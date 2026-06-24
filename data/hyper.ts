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

export type Locale = "en" | "zh-hk";

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
        "Hyper AI Force Limited | AI Robotics for Industrial Intelligence",
      description:
        "Hyper AI Force Limited develops embodied AI robotics, autonomous patrol and inspection systems for industrial security, facilities and critical infrastructure.",
      keywords: [
        "Hyper AI Force",
        "AI Robotics",
        "Embodied Intelligence",
        "Autonomous Patrol Robot",
        "Industrial Inspection",
        "Robotic Intelligence Platform"
      ]
    },
    hero: {
      eyebrow: "Hyper AI Force Limited",
      title: "AI-Powered Robotics for Real-World Industrial Intelligence",
      subtitle:
        "We develop autonomous robotic systems that combine AI perception, navigation, teleoperation, motion control and service delivery for physical security, inspection and facility operations.",
      primaryCta: "Request a Demo",
      secondaryCta: "Explore Technology",
      stats: [
        { value: "24/7", label: "Autonomous patrol readiness" },
        { value: "AI +", label: "Perception, decision and edge intelligence" },
        { value: "Global", label: "Channel and service mindset" }
      ]
    },
    market: {
      eyebrow: "Market Pain & Opportunity",
      title: "Robots extend human security teams into risky, repetitive and blind-spot environments.",
      copy:
        "Physical security and industrial inspection still depend on high-cost patrol labor, manual observation and delayed response. Hyper AI Force turns robotic mobility, AI detection and teleoperation into a deployable operating platform.",
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
            "AI perception, anomaly detection, sensor fusion and task-level decision logic support autonomous patrol and inspection."
        },
        {
          icon: "Bot",
          title: "Multi-form robot matrix",
          text:
            "Quadruped, wheeled, spherical and aerial platforms can be configured for different terrain, payload and safety scenarios."
        },
        {
          icon: "Route",
          title: "Adaptive navigation",
          text:
            "Navigation, obstacle avoidance and route planning help robots operate across factories, campuses, utilities and outdoor facilities."
        },
        {
          icon: "Globe2",
          title: "Global service readiness",
          text:
            "International channel experience, remote diagnostics and service network planning reduce deployment and maintenance friction."
        }
      ]
    },
    technology: {
      eyebrow: "Robotic Intelligence Platform",
      title: "A software-defined operating layer for autonomous robotic teams.",
      copy:
        "Operators can assign missions from a browser or tablet, monitor live data, review alerts and supervise multiple robots. The platform connects edge AI, cloud monitoring and human-in-the-loop intervention.",
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
      title: "Capability packages for real industrial environments.",
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
        { icon: "Flame", label: "Fire & Emergency" },
        { icon: "Map", label: "Warehouse & Logistics" },
        { icon: "RadioTower", label: "Energy & Utilities" },
        { icon: "Factory", label: "Industrial Facilities" },
        { icon: "Building2", label: "Smart Campus" },
        { icon: "Siren", label: "Public Safety" }
      ]
    },
    caseStudy: {
      eyebrow: "Case Study",
      title: "Robotic dog patrol deployment for a GLP industrial park.",
      challenge:
        "GLP needed reliable fire-safety and security patrol coverage across an industrial park, including roads, warehouse surroundings, perimeter areas and night-time routine checks.",
      solution:
        "Hyper AI Force supported the deployment of robotic dogs for scheduled park patrols, teleoperation, abnormal-event awareness and on-site evidence capture across daily security routes.",
      outcomes: [
        "Expanded patrol coverage across the industrial park",
        "Improved fire-safety and security visibility",
        "Reduced repetitive perimeter patrol workload"
      ]
    },
    service: {
      eyebrow: "Support & Service Network",
      title: "From solution design to full-cycle support.",
      copy:
        "Hyper AI Force positions robotics as an integrated service, not a standalone device. Deployment includes solution design, technical support, maintenance planning, operator training, robot leasing and teleoperation.",
      items: [
        { icon: "Handshake", label: "Solution Design" },
        { icon: "Cpu", label: "Technical Support" },
        { icon: "Wrench", label: "After-sales Care" },
        { icon: "BadgeCheck", label: "Operator Training" },
        { icon: "PackageCheck", label: "Robot Leasing" },
        { icon: "Radio", label: "Remote Operation" }
      ]
    },
    about: {
      eyebrow: "About Hyper AI Force",
      title: "An AI robotics company connecting autonomous navigation with teleoperation.",
      copy:
        "Hyper AI Force Limited focuses on AI perception, autonomous mobility, teleoperation and edge intelligence. The team builds robotic systems for physical security, industrial inspection, facility patrol and automated operations, helping organizations deploy intelligent machines into practical, measurable workflows.",
      bullets: [
        "Embodied intelligence for physical-world industries",
        "Global market orientation from Hong Kong",
        "Integrated hardware, software and AI delivery"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Plan a robotics deployment for your site.",
      copy:
        "Tell us about your facility, patrol workload or inspection scenario. Our team will map the right robot form, AI capabilities and service model.",
      button: "Request a Demo",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        interest: "Interest / Product category",
        message: "Message"
      },
      options: [
        "Autonomous Patrol",
        "Teleoperation",
        "AI Inspection",
        "RSP Platform"
      ]
    },
    footer:
      "AI robotics, autonomous patrol and teleoperation solutions."
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
      title: "Hyper AI Force Limited | 超流智能有限公司",
      description:
        "超流智能有限公司專注 AI Robotics、具身智能、自主巡邏與工業巡檢系統，服務物理安全、設施運維與關鍵基礎設施場景",
      keywords: [
        "超流智能有限公司",
        "Hyper AI Force",
        "AI Robotics",
        "具身智能",
        "自主巡邏機器人",
        "工業巡檢"
      ]
    },
    hero: {
      eyebrow: "超流智能有限公司",
      title: "面向真實產業場景的 AI 機器人智能系統",
      subtitle:
        "我們將 AI 感知、自主巡航、遠程操縱、運動控制與場景交付能力結合，為物理安全、工業巡檢與設施運維提供可部署的機器人方案",
      primaryCta: "預約演示",
      secondaryCta: "了解技術",
      stats: [
        { value: "24/7", label: "自主巡邏與值守能力" },
        { value: "AI +", label: "感知、決策與邊緣智能" },
        { value: "全球化", label: "全球市場與服務視野" }
      ]
    },
    market: {
      eyebrow: "市場痛點",
      title: "讓機器人進入高風險、重複性與安防盲區場景",
      copy:
        "物理安全與工業巡檢仍高度依賴人工巡邏、人工觀察與事後處理。Hyper AI Force 將機器人移動能力、AI 異常識別與遠程操縱整合為可落地的運營平台",
      points: [
        "大範圍巡邏人力成本高，難以持續擴展",
        "夜間、周界與重複檢查容易出現注意力下降",
        "危險、偏遠或戶外環境會增加人員暴露風險",
        "突發事件需要即時警報、證據留存與遠程操縱"
      ]
    },
    strengths: {
      eyebrow: "核心優勢",
      title: "為真實部署而生，不止於實驗室展示",
      items: [
        {
          icon: "BrainCircuit",
          title: "全棧 AI 自主能力",
          text:
            "AI 感知、異常識別、多傳感器融合與任務級決策邏輯，支撐自主巡邏與巡檢"
        },
        {
          icon: "Bot",
          title: "多形態機器人矩陣",
          text:
            "四足、輪式、球形與空中平台可按地形、載荷與安全場景靈活配置"
        },
        {
          icon: "Route",
          title: "自適應導航",
          text:
            "導航、避障與路徑規劃能力，支援工廠、園區、能源設施與戶外場地運行"
        },
        {
          icon: "Globe2",
          title: "全球服务部署能力",
          text:
            "國際渠道經驗、遠程診斷與服務網絡規劃，降低部署與維護摩擦"
        }
      ]
    },
    technology: {
      eyebrow: "機器人智能平台",
      title: "面向自主機器人隊伍的軟件化運營層",
      copy:
        "操作人員可通過瀏覽器或平板分配任務、查看實時數據、接收警報並監督多台機器人。平台連接邊緣 AI、雲端監控與人工介入",
      capabilities: [
        "AI 感知與威脅檢測",
        "自主導航與路徑規劃",
        "多傳感器融合",
        "運動控制與地形適應",
        "邊緣計算與雲端監控",
        "遠程操縱與機隊管理"
      ]
    },
    solutions: {
      eyebrow: "產品與方案",
      title: "面向真實工業環境的能力組合",
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
          title: "遠程操控解決方案（Teleoperation）",
          problem: "複雜場地中的機器人仍需要人在回路決策與緊急接管能力",
          solution: "Teleoperation 提供低延遲實時遠程控制，並以 Remote Control 作為輔助操作與緊急干預方式",
          value: "在需要人工判斷、安全升級或精準遠程操作時，讓操作人員始終保持可控"
        },
        {
          icon: "Activity",
          title: "AI 巡檢解決方案",
          problem: "工業巡檢任務重複、數據量大，且高風險環境會增加人員暴露",
          solution: "機器人執行工業場景自動巡檢，結合 AI 視覺缺陷檢測、安全監測、數據分析與異常識別",
          value: "提升巡檢一致性、安全可視性與基於數據的維護決策能力"
        },
        {
          icon: "CloudCog",
          title: "Robot Scheduling Platform (RSP) 平台",
          problem: "多機器人部署需要統一的任務調度、分發與協同運營中樞",
          solution: "RSP平台支援多機器人任務調度、機器人集群管理、遠程任務分發與工作流自動化",
          value: "作為連接硬件、AI 與 Teleoperation 的中樞平台，支撐可擴展的機器人運營"
        }
      ]
    },
    applications: {
      eyebrow: "應用場景",
      title: "服務於重視安全、覆蓋與穩定運行的設施",
      items: [
        { icon: "Flame", label: "消防與應急" },
        { icon: "Map", label: "倉儲與物流" },
        { icon: "RadioTower", label: "能源與公用設施" },
        { icon: "Factory", label: "工業廠區" },
        { icon: "Building2", label: "智慧園區" },
        { icon: "Siren", label: "公共安全" }
      ]
    },
    caseStudy: {
      eyebrow: "案例場景",
      title: "普洛斯工業園區機器狗巡邏部署",
      challenge:
        "普洛斯需要在工業園區道路、倉庫周邊、周界區域及夜間例行巡查中，獲得更穩定的消防與安防巡邏覆蓋",
      solution:
        "Hyper AI Force 支持部署機器狗執行園區定時巡邏、遠程監看、異常事件感知與現場證據採集，服務日常安防巡邏路線",
      outcomes: ["擴大工業園區巡邏覆蓋", "提升消防與安防可視性", "減少重複性周界巡邏工作"]
    },
    service: {
      eyebrow: "支持與服務網絡",
      title: "從方案設計到全程支持",
      copy:
        "Hyper AI Force 將機器人視為整合服務，而非單一設備。交付包括方案設計、技術支持、維護規劃、操作培訓、機器租賃與遠程代操",
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
      eyebrow: "關於 Hyper AI Force",
      title: "連接自主智能與真實運營場景的 AI 機器人公司",
      copy:
        "超流智能有限公司專注 AI 感知、自主移動、遠程操縱與邊緣智能系統。團隊面向物理安全、工業巡檢、設施巡邏與自動化運維構建機器人系統，幫助組織將智能機器部署到可衡量的實際流程中",
      bullets: [
        "面向物理世界產業的具身智能",
        "以香港為起點的全球市場視野",
        "硬件、軟件與 AI 的一體化交付"
      ]
    },
    contact: {
      eyebrow: "聯絡我們",
      title: "為你的場地規劃機器人部署",
      copy:
        "告訴我們你的設施、巡邏工作量或巡檢場景。我們將協助匹配合適的機器人形態、AI 能力與服務模型",
      button: "預約演示",
      fields: {
        name: "姓名",
        company: "公司",
        email: "電郵",
        phone: "電話",
        interest: "感興趣的產品 / 方案",
        message: "需求描述"
      },
      options: ["自主巡航", "遠程操控（Teleoperation）", "AI巡檢", "RSP平台"]
    },
    footer: "AI 機器人、自主巡航與遠程操縱方案"
  }
} as const;

export function getHyperContent(locale: Locale) {
  return content[locale];
}
