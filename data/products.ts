import type { Locale } from "@/data/hyper";

export type ProductSlug = "force-01" | "force-05";
export type Product = {
  slug: ProductSlug;
  model: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  views: { label: string; src: string; weight?: string }[];
  highlights: { value: string; label: string }[];
  benefits: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  note: string;
  payloads: string[];
};

const assets = {
  foot: "/images/products/force-01-foot.webp",
  wheel: "/images/products/force-01-wheel.webp",
  sphere: "/images/products/force-05-angle.webp",
  side: "/images/products/force-05-side.webp",
  rear: "/images/products/force-05-rear.webp"
};

type Catalogue = {
  eyebrow: string; title: string; copy: string; learnMore: string; demo: string;
  back: string; variants: string; views: string; benefits: string; specs: string;
  weight: string; payloads: string; applications: string; related: string;
  scenarios: { label: string; description: string }[];
  items: Product[];
};

const catalogues: Record<Locale, Catalogue> = {
  en: {
    eyebrow: "FORCE SERIES", title: "Two forms. Your presence on site.",
    copy: "Send your physical avatar to observe, inspect and respond. Choose the form that fits your site and your task.",
    learnMore: "Explore Product", demo: "Request a Demo", back: "All Products",
    variants: "Choose a variant", views: "Product views", benefits: "See clearly. Act remotely.",
    specs: "Key Specifications", weight: "Estimated combined weight", payloads: "Configure for your task",
    applications: "Where your presence matters", related: "Explore the other FORCE robot",
    scenarios: [
      {
        label: "Public Safety & Site Patrol",
        description: "Inspect public spaces, perimeters and key locations. Confirm unusual conditions remotely and bring live views back to the team."
      },
      {
        label: "Villas & Residential Communities",
        description: "Check gardens, community roads and underground car parks. Give residents and site teams a way to see the scene remotely."
      },
      {
        label: "High-Risk & Hard-to-Reach Areas",
        description: "Send a robot ahead into low-light, obstructed or difficult-to-access areas to assess conditions before people enter."
      },
      {
        label: "Remote & Unattended Sites",
        description: "Check facility conditions and investigate alerts from a distance, reducing repeated journeys to dispersed sites."
      }
    ],
    items: [
      {
        slug: "force-01", model: "FORCE 01", name: "FORCE 01", category: "Panoramic Teleoperated Robot",
        tagline: "Reach the scene. See the whole picture.",
        description: "A legged or wheeled-leg robot with an integrated panoramic teleoperation backpack. See the surroundings, move through the site and investigate from a remote location.",
        views: [{ label: "Legged", src: assets.foot, weight: "Approx. 15.5 kg" }, { label: "Wheeled-leg", src: assets.wheel, weight: "Approx. 22.5 kg" }],
        highlights: [{ value: "360°", label: "Surrounding views" }, { value: "4 × 1080p", label: "Video encoding, up to 60 fps" }, { value: "4G / 5G", label: "Remote connectivity" }],
        benefits: [
          { title: "Understand the scene before entering", description: "Four low-light cameras provide views around the robot, helping operators check blind spots and confirm changing conditions." },
          { title: "Be there without the journey", description: "Live video and remote motion control let operators move closer, change viewpoint and inspect without repeated site visits." },
          { title: "Choose how you reach the scene", description: "Select a legged or wheeled-leg configuration to suit the routes and surfaces at your site. Add sensing payloads to match the task." }
        ],
        specs: [
          { label: "Configuration", value: "Robot body + panoramic teleoperation backpack" },
          { label: "Backpack cameras", value: "4 × 2 MP low-light cameras" },
          { label: "Video encoding", value: "Up to 4 × 1080p at 60 fps" },
          { label: "Edge AI", value: "Up to 6 TOPS NPU, depending on module" },
          { label: "Connectivity", value: "4G / 5G, Wi-Fi and Ethernet; wireless options vary by configuration" },
          { label: "Reference operating range", value: "0–40°C" },
          { label: "Development", value: "Python / C++ / ROS 2" }
        ],
        note: "Combined weight is calculated from the battery-equipped body plus the 518 g backpack, excluding mounting hardware and cables. Encoding capability is not a guaranteed network streaming rate. Final configuration determines endurance and available payload.",
        payloads: ["Panoramic teleoperation backpack", "Optional thermal imaging", "Additional sensing modules", "Task-specific integration"]
      },
      {
        slug: "force-05", model: "FORCE 05", name: "FORCE 05", category: "Spherical Mobile Inspection Robot",
        tagline: "Roll closer. Explore from a safe distance.",
        description: "A spherical robot for inspection and remote observation in demanding environments. Internal pendulum drive and active flywheel stabilization support controlled rolling and on-site sensing.",
        views: [{ label: "Three-quarter view", src: assets.sphere }, { label: "Side view", src: assets.side }, { label: "Rear view", src: assets.rear }],
        highlights: [{ value: "IP68", label: "Ingress protection" }, { value: "4 h", label: "Patrol operating time" }, { value: "20 kg", label: "Payload capacity" }],
        benefits: [
          { title: "Keep people further from exposure", description: "Send the robot ahead to observe public spaces, site perimeters and difficult-to-reach areas while operators assess the scene remotely." },
          { title: "A form built around rolling", description: "A spherical body with no exposed legs combines internal drive and active stabilization for controlled movement and recovery from disturbances." },
          { title: "Carry the sensing the task needs", description: "Configure thermal imaging, gas detection, lighting or a communications relay for inspection and remote assessment." }
        ],
        specs: [
          { label: "Diameter", value: "700 mm" }, { label: "Base weight", value: "110 kg" },
          { label: "Payload capacity", value: "20 kg" }, { label: "Maximum speed", value: "10 km/h" },
          { label: "Operating time", value: "4 h in patrol / low-speed operation" },
          { label: "Travel range", value: "40 km, depending on operating conditions" },
          { label: "Ingress protection", value: "IP68" }, { label: "Operating temperature", value: "−40–60°C" },
          { label: "Maximum slope / obstacle", value: "10° on hard surfaces / 50 mm" },
          { label: "Charging time", value: "5 h" }
        ],
        note: "Range and endurance depend on terrain, speed, payload, temperature and communications. Shallow-water operation requires the corresponding buoyancy and control configuration. Task payloads are selected separately.",
        payloads: ["Optional thermal imaging", "Optional gas detection", "Lighting and voice communication", "Communications relay"]
      }
    ]
  },
  "zh-cn": {
    eyebrow: "原力系列", title: "两种形态，同一个物理分身",
    copy: "替你抵达现场、看清情况、及时介入。根据场地与任务，选择适合你的原力机器人。",
    learnMore: "了解产品", demo: "预约演示", back: "全部产品", variants: "选择版本", views: "产品视角",
    benefits: "看清现场，远程行动", specs: "关键参数", weight: "组合重量估算", payloads: "按任务配置",
    applications: "让你的分身，出现在需要的地方", related: "了解另一款原力机器人",
    scenarios: [
      {
        label: "公共安全与现场巡查",
        description: "覆盖公共空间、周界及重点区域，远程确认异常、回传现场情况，协助团队及时判断。"
      },
      {
        label: "别墅与住宅社区",
        description: "巡查庭院、社区道路与地下车库，让住户及管理人员远程查看现场情况。"
      },
      {
        label: "危险与难达区域",
        description: "在低照度、视线受阻或难以抵达的区域，由机器人先行观察，减少人员直接进入现场。"
      },
      {
        label: "偏远与无人值守场所",
        description: "远程核查设施状态、查看告警现场，减少分散场地之间的重复往返。"
      }
    ],
    items: [
      {
        slug: "force-01", model: "FORCE 01", name: "原力一号", category: "360°全景遥操机器人",
        tagline: "灵活抵达，全景掌握。",
        description: "点足或轮足本体，集成全景遥操背包。通过远程观察与移动控制，替你进入现场、靠近目标、核查异常。",
        views: [{ label: "点足版", src: assets.foot, weight: "约 15.5 kg" }, { label: "轮足版", src: assets.wheel, weight: "约 22.5 kg" }],
        highlights: [{ value: "360°", label: "全景观察" }, { value: "4 × 1080p", label: "最高 60 fps 视频编码" }, { value: "4G / 5G", label: "远程连接" }],
        benefits: [
          { title: "先看清，再决定是否到场", description: "四路低照度摄像头覆盖机器人周边视野，帮助远程操作人员查看盲区、确认现场变化。" },
          { title: "人在远方，也能靠近查看", description: "结合实时图传与移动控制，远程调整位置和观察角度，减少反复到访与人员暴露。" },
          { title: "按场地选择抵达方式", description: "点足与轮足两种形态，适配不同通行路线与地面条件；按任务扩展所需感知载荷。" }
        ],
        specs: [
          { label: "产品组成", value: "机器人本体＋全景遥操背包" },
          { label: "背包摄像头", value: "4 × 200 万像素低照度摄像头" },
          { label: "视频编码", value: "最高 4 × 1080p@60fps" },
          { label: "边缘 AI 算力", value: "最高 6 TOPS NPU，随模块配置" },
          { label: "通信方式", value: "4G／5G、Wi-Fi、有线网络；无线规格随配置" },
          { label: "工作温度参考", value: "0～40℃" },
          { label: "开发支持", value: "Python／C++／ROS 2" }
        ],
        note: "组合重量由含电池本体加 518 g 背包计算，未计安装支架与线束。视频编码能力不等同于网络实际传输帧率；续航与可用载荷以最终配置为准。",
        payloads: ["全景遥操背包", "热成像选配", "感知模块扩展", "场景化集成"]
      },
      {
        slug: "force-05", model: "FORCE 05", name: "原力五号", category: "球形移动巡检机器人",
        tagline: "滚动深入，替你探查。",
        description: "面向复杂环境的球形移动机器人，以内部重摆驱动与飞轮主动稳定，实现稳定滚动、现场感知和远程探查。",
        views: [{ label: "斜侧视角", src: assets.sphere }, { label: "侧面视角", src: assets.side }, { label: "背面视角", src: assets.rear }],
        highlights: [{ value: "IP68", label: "防护等级" }, { value: "4 h", label: "巡逻工况续航" }, { value: "20 kg", label: "有效载荷" }],
        benefits: [
          { title: "让机器人先行，减少人员暴露", description: "面向公共空间、场地周界与难达区域，先行抵近观察，让人员在远端判断现场情况。" },
          { title: "以滚动应对复杂环境", description: "球形本体无外露轮腿机构，内部驱动配合主动稳定，支持可控移动与受扰后的姿态恢复。" },
          { title: "把任务需要的感知带到现场", description: "按需配置热成像、气体检测、照明或通信中继，服务巡查、环境检测与远程核查。" }
        ],
        specs: [
          { label: "整机直径", value: "700 mm" }, { label: "裸机重量", value: "110 kg" },
          { label: "有效载荷", value: "20 kg" }, { label: "最大速度", value: "10 km/h" },
          { label: "连续工作时长", value: "4 h，巡逻／低速巡航工况" },
          { label: "连续行驶里程", value: "40 km，随运行工况变化" },
          { label: "防护等级", value: "IP68" }, { label: "工作温度", value: "−40～60℃" },
          { label: "爬坡／越障", value: "硬质路面 10°／50 mm" },
          { label: "充电时间", value: "5 h" }
        ],
        note: "续航与里程受地形、速度、载荷、温度及通信工况影响。浅水作业需配置相应浮力设计与控制方案；任务载荷按场景选配。",
        payloads: ["热成像选配", "气体检测选配", "照明与语音通信", "通信中继"]
      }
    ]
  },
  "zh-hk": {
    eyebrow: "原力系列", title: "兩種形態，同一個物理分身",
    copy: "替你抵達現場、看清情況、及時介入。根據場地與任務，選擇適合你的原力機器人。",
    learnMore: "了解產品", demo: "預約演示", back: "全部產品", variants: "選擇版本", views: "產品視角",
    benefits: "看清現場，遠程行動", specs: "關鍵參數", weight: "組合重量估算", payloads: "按任務配置",
    applications: "讓你的分身，出現在需要的地方", related: "了解另一款原力機器人",
    scenarios: [
      {
        label: "公共安全與現場巡查",
        description: "覆蓋公共空間、周界及重點區域，遠程確認異常、回傳現場情況，協助團隊及時判斷。"
      },
      {
        label: "別墅與住宅社區",
        description: "巡查庭院、社區道路與地下車庫，讓住戶及管理人員遠程查看現場情況。"
      },
      {
        label: "危險與難達區域",
        description: "在低照度、視線受阻或難以抵達的區域，由機器人先行觀察，減少人員直接進入現場。"
      },
      {
        label: "偏遠與無人值守場所",
        description: "遠程核查設施狀態、查看告警現場，減少分散場地之間的重複往返。"
      }
    ],
    items: [
      {
        slug: "force-01", model: "FORCE 01", name: "原力一號", category: "360°全景遙操機器人",
        tagline: "靈活抵達，全景掌握。",
        description: "點足或輪足本體，集成全景遙操背包。透過遠程觀察與移動控制，替你進入現場、靠近目標、核查異常。",
        views: [{ label: "點足版", src: assets.foot, weight: "約 15.5 kg" }, { label: "輪足版", src: assets.wheel, weight: "約 22.5 kg" }],
        highlights: [{ value: "360°", label: "全景觀察" }, { value: "4 × 1080p", label: "最高 60 fps 影片編碼" }, { value: "4G / 5G", label: "遠程連接" }],
        benefits: [
          { title: "先看清，再決定是否到場", description: "四路低照度攝像頭覆蓋機器人周邊視野，幫助遠程操作人員查看盲區、確認現場變化。" },
          { title: "人在遠方，也能靠近查看", description: "結合即時圖傳與移動控制，遠程調整位置和觀察角度，減少反覆到訪與人員暴露。" },
          { title: "按場地選擇抵達方式", description: "點足與輪足兩種形態，適配不同通行路線與地面條件；按任務擴展所需感知載荷。" }
        ],
        specs: [
          { label: "產品組成", value: "機器人本體＋全景遙操背包" },
          { label: "背包攝像頭", value: "4 × 200 萬像素低照度攝像頭" },
          { label: "影片編碼", value: "最高 4 × 1080p@60fps" },
          { label: "邊緣 AI 算力", value: "最高 6 TOPS NPU，隨模組配置" },
          { label: "通訊方式", value: "4G／5G、Wi-Fi、有線網絡；無線規格隨配置" },
          { label: "工作溫度參考", value: "0～40℃" },
          { label: "開發支援", value: "Python／C++／ROS 2" }
        ],
        note: "組合重量由含電池本體加 518 g 背包計算，未計安裝支架與線束。影片編碼能力不等同於網絡實際傳輸幀率；續航與可用載荷以最終配置為準。",
        payloads: ["全景遙操背包", "熱成像選配", "感知模組擴展", "場景化集成"]
      },
      {
        slug: "force-05", model: "FORCE 05", name: "原力五號", category: "球形移動巡檢機器人",
        tagline: "滾動深入，替你探查。",
        description: "面向複雜環境的球形移動機器人，以內部重擺驅動與飛輪主動穩定，實現穩定滾動、現場感知和遠程探查。",
        views: [{ label: "斜側視角", src: assets.sphere }, { label: "側面視角", src: assets.side }, { label: "背面視角", src: assets.rear }],
        highlights: [{ value: "IP68", label: "防護等級" }, { value: "4 h", label: "巡邏工況續航" }, { value: "20 kg", label: "有效載荷" }],
        benefits: [
          { title: "讓機器人先行，減少人員暴露", description: "面向公共空間、場地周界與難達區域，先行抵近觀察，讓人員在遠端判斷現場情況。" },
          { title: "以滾動應對複雜環境", description: "球形本體無外露輪腿機構，內部驅動配合主動穩定，支援可控移動與受擾後的姿態恢復。" },
          { title: "把任務需要的感知帶到現場", description: "按需配置熱成像、氣體檢測、照明或通訊中繼，服務巡查、環境檢測與遠程核查。" }
        ],
        specs: [
          { label: "整機直徑", value: "700 mm" }, { label: "裸機重量", value: "110 kg" },
          { label: "有效載荷", value: "20 kg" }, { label: "最大速度", value: "10 km/h" },
          { label: "連續工作時長", value: "4 h，巡邏／低速巡航工況" },
          { label: "連續行駛里程", value: "40 km，隨運行工況變化" },
          { label: "防護等級", value: "IP68" }, { label: "工作溫度", value: "−40～60℃" },
          { label: "爬坡／越障", value: "硬質路面 10°／50 mm" },
          { label: "充電時間", value: "5 h" }
        ],
        note: "續航與里程受地形、速度、載荷、溫度及通訊工況影響。淺水作業需配置相應浮力設計與控制方案；任務載荷按場景選配。",
        payloads: ["熱成像選配", "氣體檢測選配", "照明與語音通訊", "通訊中繼"]
      }
    ]
  }
};

export function getProducts(locale: Locale) { return catalogues[locale]; }
export function homePath(locale: Locale) { return locale === "en" ? "/" : `/${locale}`; }
export function productPath(locale: Locale, slug: ProductSlug) {
  return `${locale === "en" ? "" : `/${locale}`}/products/${slug}`;
}
