import type { Locale } from "@/data/hyper";

type Chapter = { title: string; body: string };
type PageStory = { title: string; intro: string; chapters: Chapter[]; image: string; target: string };
type Editorial = { index: string; scope: string; process: string; next: string; sceneNote: string; productTitle: string; productIntro: string; productSteps: Chapter[]; pages: Record<string, PageStory> };

const images = {
  technology: "/images/capabilities/backpack.png",
  solutions: "/images/products/scenes-v2/force-01-home.webp",
  applications: "/images/products/scenes-v2/force-01-campus.webp",
  collaboration: "/images/products/scenes-v2/force-05-stadium.webp",
  about: "/images/hyper/19w-building.webp",
  contact: "/images/hyper/cyberport.webp",
  resources: "/images/capabilities/backpack-sensors.png",
};

export const editorial: Record<Locale, Editorial> = {
  en: {
    index: "On this page", scope: "PROJECT CONSIDERATIONS", process: "DEPLOYMENT FRAMEWORK", next: "Discuss requirements", sceneNote: "Application illustration. System configuration and suitability require project assessment.",
    productTitle: "Platform selection. Operational requirements.", productIntro: "Assess the operating environment, observation requirements and control workflow before defining the robotic system.",
    productSteps: [
      { title: "Operating environment", body: "Review route surfaces, access constraints and observation points. Platform selection should follow the conditions of the site." },
      { title: "Observation and control", body: "Define the information required by operators, the available connectivity and the procedure for remote intervention." },
      { title: "System configuration", body: "Confirm sensing payloads, software interfaces and operating procedures as part of a project-specific configuration." },
    ],
    pages: {
      technology: { title: "An integrated operating architecture.", intro: "Mobility, perception, communication and control form the technical basis of a robotic deployment. Each layer must be considered within the operating environment.", image: images.technology, target: "solutions", chapters: [
        { title: "Perception and site context", body: "Identify the observations required for the task, from visual inspection to additional sensing. Sensor selection follows the environment and inspection objectives." },
        { title: "Connectivity and supervision", body: "Assess site coverage, remote access and operator visibility. Establish how teams monitor missions and intervene when conditions change." },
        { title: "Integration and validation", body: "Review interfaces with existing systems, data requirements and acceptance criteria. Validate the selected configuration against representative site tasks." },
      ] },
      solutions: { title: "From individual tasks to coordinated operations.", intro: "A deployment connects the robot, its payloads, operational software and the people responsible for the site. The operating procedure defines how these components work together.", image: images.solutions, target: "applications", chapters: [
        { title: "Define the mission", body: "Identify inspection locations, routes, observation requirements and escalation conditions. Distinguish routine tasks from situations requiring operator judgement." },
        { title: "Configure the system", body: "Select the platform, sensing payloads and software functions around the mission. Review communications and infrastructure dependencies before deployment." },
        { title: "Establish the operating procedure", body: "Agree task ownership, remote intervention and record review. Use initial site operation to evaluate procedures and identify configuration adjustments." },
      ] },
      applications: { title: "Requirements vary. Assessment remains essential.", intro: "Security, industrial facilities and logistics operations involve different routes, observation priorities and response procedures. Assess each application in its operational context.", image: images.applications, target: "products", chapters: [
        { title: "Facilities and logistics", body: "Consider warehouse aisles, loading areas, shared routes and inspection points. Define how robot operation will coexist with personnel, vehicles and site procedures." },
        { title: "Property and perimeter operations", body: "Review access boundaries, low-light conditions and locations requiring remote observation. Define alert verification and the handover to site personnel." },
        { title: "Emergency assessment", body: "Determine environmental limits, communications availability and operator responsibilities before considering remote inspection in hazardous areas." },
      ] },
      collaboration: { title: "A structured approach to project delivery.", intro: "Commercial arrangements should reflect the deployment scope, integration responsibilities and operating model. Establish these requirements before selecting an engagement model.", image: images.collaboration, target: "contact", chapters: [
        { title: "Requirements review", body: "Share the site environment, intended tasks and current operating constraints. Identify the information needed for a technical assessment." },
        { title: "Scope and responsibilities", body: "Define hardware, software, integration and service requirements. Agree responsibilities for site preparation, operator training and ongoing operation." },
        { title: "Evaluation and deployment", body: "Set assessment criteria, review the proposed configuration and agree a deployment plan. Commercial terms and service scope are confirmed for each project." },
      ] },
      about: { title: "Engineering capability. Operational focus.", intro: "Hyper AIForce connects robotic platforms with perception, remote control and deployment services for physical-security and facility operations.", image: "/images/hyper/cyberport-3-entrance.png", target: "collaboration", chapters: [
        { title: "Application-led engineering", body: "Start with the task and its operating conditions. Match platform capabilities, payloads and control methods to the requirements of the site." },
        { title: "Hardware and software coordination", body: "Consider the robot, sensing equipment and operational software as parts of one system. Integration decisions should support a clear operator workflow." },
        { title: "Deployment and operations", body: "Connect technical configuration with site procedures, operator responsibilities and maintenance requirements throughout the deployment lifecycle." },
      ] },
      resources: { title: "Technical information for project evaluation.", intro: "Use product literature, technical documentation and operating information to support system selection. Document availability and configuration relevance should be confirmed before use.", image: images.resources, target: "contact", chapters: [
        { title: "Product information", body: "Identify the platform and intended application when requesting product literature. Specify the document language required by the evaluating team." },
        { title: "Technical review", body: "State the interfaces, payloads or infrastructure requirements under evaluation. Configuration-specific information may require a project discussion." },
        { title: "Operational documentation", body: "Confirm the delivered system configuration and document revision before using operating instructions. Request clarification where project requirements differ." },
      ] },
      contact: { title: "Prepare the basis for a technical discussion.", intro: "Provide the intended application and site conditions so the discussion can focus on platform suitability, integration requirements and deployment scope.", image: images.contact, target: "collaboration", chapters: [
        { title: "Application and environment", body: "Describe the facility, intended inspection tasks, route conditions and any access restrictions." },
        { title: "System requirements", body: "Identify the preferred platform, required observations, available communications and integration needs." },
        { title: "Project scope", body: "Outline the expected deployment scale, evaluation timeline and preferred commercial arrangement, where known." },
      ] },
    },
  },
  "zh-cn": {
    index: "页面导览", scope: "项目评估要点", process: "部署路径", next: "沟通项目需求", sceneNote: "应用场景示意。具体配置与适用性需结合项目评估。",
    productTitle: "以作业需求，确定平台配置。", productIntro: "围绕场地环境、观察任务与操作流程，评估机器人平台及配套系统。",
    productSteps: [
      { title: "评估现场条件", body: "梳理路面、通行条件、观察位置及作业边界，以实际场地条件作为平台选型依据。" },
      { title: "明确观察与控制需求", body: "确定操作人员需要获取的信息、现场通信条件，以及异常情况下的远程介入流程。" },
      { title: "确认系统配置", body: "结合任务确定传感载荷、软件接口与操作规范，形成适用于项目的配置方案。" },
    ],
    pages: {
      technology: { title: "构建协同运行的技术体系。", intro: "移动、感知、通信与控制共同构成机器人部署的技术基础，各项能力均需结合实际作业环境进行配置。", image: images.technology, target: "solutions", chapters: [
        { title: "感知与现场信息", body: "从视觉观察到附加传感，先明确任务所需的信息，再根据环境条件与巡检目标选择传感设备。" },
        { title: "通信与运行监管", body: "评估现场覆盖、远程访问与操作视野，明确任务监控及现场条件变化时的介入方式。" },
        { title: "系统集成与验证", body: "梳理既有系统接口、数据需求与验收条件，以具有代表性的现场任务验证选定配置。" },
      ] },
      solutions: { title: "连接任务、设备与现场运营。", intro: "完整部署需要机器人、任务载荷、作业软件与现场团队协同运行，以明确的操作流程将各环节连接起来。", image: images.solutions, target: "applications", chapters: [
        { title: "界定作业任务", body: "明确巡检点位、路线、观察需求与异常升级条件，区分常规任务与需要人工判断的情况。" },
        { title: "配置软硬件系统", body: "围绕任务选择平台、传感载荷与软件功能，并在部署前核对通信及基础设施条件。" },
        { title: "建立运行流程", body: "明确任务职责、远程介入与记录复核方式，通过初期现场运行评估流程并完善配置。" },
      ] },
      applications: { title: "以场景为起点，以任务为依据。", intro: "安防、工业设施与物流运营在路线、观察重点和响应流程上各有差异，需要在具体作业条件下评估适用方案。", image: images.applications, target: "products", chapters: [
        { title: "设施与物流巡检", body: "梳理仓储通道、装卸区域、共用路线与巡检点位，明确机器人与人员、车辆及现有流程的协作方式。" },
        { title: "物业与周界管理", body: "评估通行边界、低照度条件与远程观察位置，建立告警核实及现场人员接续处置流程。" },
        { title: "应急环境评估", body: "在考虑危险区域远程巡检前，先确认设备环境限制、通信可用性与操作人员职责。" },
      ] },
      collaboration: { title: "以清晰分工，推进项目落地。", intro: "合作方式应与部署范围、集成职责及运营安排相匹配，在确定商务模式前先明确项目需求。", image: images.collaboration, target: "contact", chapters: [
        { title: "需求梳理", body: "提供场地环境、预期任务与现有作业限制，明确技术评估所需资料。" },
        { title: "范围与职责确认", body: "界定硬件、软件、集成与服务范围，明确场地准备、操作培训及持续运营的责任分工。" },
        { title: "评估与部署", body: "制定评估条件，复核拟选配置并形成部署计划，商务条款与服务范围按项目确认。" },
      ] },
      about: { title: "以工程能力，服务现场运营。", intro: "超流智能结合机器人平台、感知、远程控制与部署服务，面向物理安全及设施运营构建应用方案。", image: "/images/hyper/cyberport-3-entrance.png", target: "collaboration", chapters: [
        { title: "应用驱动的技术配置", body: "从任务与作业条件出发，将平台能力、载荷与控制方式匹配到具体场地需求。" },
        { title: "软硬件协同", body: "统筹机器人、感知设备与作业软件，通过系统集成支持清晰、可执行的操作流程。" },
        { title: "部署与持续运行", body: "将技术配置与现场流程、人员职责及维护需求连接，覆盖部署全周期的关键环节。" },
      ] },
      resources: { title: "为项目评估提供技术依据。", intro: "结合产品资料、技术文档与操作信息开展系统选型，使用前需确认资料的可用性与配置适用范围。", image: images.resources, target: "contact", chapters: [
        { title: "产品资料", body: "申请资料时请说明产品型号与预期应用，并注明评估团队所需的文档语言。" },
        { title: "技术评审", body: "说明拟评估的接口、载荷或基础设施要求，特定配置的信息可结合项目进一步沟通。" },
        { title: "操作文档", body: "使用操作说明前，请核对交付系统配置及文档版本；项目要求存在差异时，应先沟通确认。" },
      ] },
      contact: { title: "从明确需求开始技术沟通。", intro: "提供预期应用与现场条件，有助于围绕平台适用性、集成要求及部署范围开展讨论。", image: images.contact, target: "collaboration", chapters: [
        { title: "应用与环境", body: "说明设施类型、巡检任务、路线条件与通行限制。" },
        { title: "系统需求", body: "说明意向平台、观察内容、现场通信及系统集成要求。" },
        { title: "项目安排", body: "如已确定，请提供部署规模、评估计划及合作模式意向。" },
      ] },
    },
  },
  "zh-hk": {
    index: "頁面導覽", scope: "項目評估要點", process: "部署路徑", next: "溝通項目需求", sceneNote: "應用場景示意。具體配置與適用性需結合項目評估。",
    productTitle: "以作業需求，確定平台配置。", productIntro: "圍繞場地環境、觀察任務與操作流程，評估機器人平台及配套系統。",
    productSteps: [
      { title: "評估現場條件", body: "梳理路面、通行條件、觀察位置及作業邊界，以實際場地條件作為平台選型依據。" },
      { title: "明確觀察與控制需求", body: "確定操作人員需要取得的資訊、現場通訊條件，以及異常情況下的遠程介入流程。" },
      { title: "確認系統配置", body: "結合任務確定傳感載荷、軟件介面與操作規範，形成適用於項目的配置方案。" },
    ],
    pages: {
      technology: { title: "構建協同運行的技術體系。", intro: "移動、感知、通訊與控制共同構成機器人部署的技術基礎，各項能力均需結合實際作業環境進行配置。", image: images.technology, target: "solutions", chapters: [
        { title: "感知與現場資訊", body: "從視覺觀察到附加傳感，先明確任務所需資訊，再根據環境條件與巡檢目標選擇傳感設備。" },
        { title: "通訊與運行監管", body: "評估現場覆蓋、遠程存取與操作視野，明確任務監控及現場條件變化時的介入方式。" },
        { title: "系統整合與驗證", body: "梳理既有系統介面、數據需求與驗收條件，以具代表性的現場任務驗證選定配置。" },
      ] },
      solutions: { title: "連接任務、設備與現場營運。", intro: "完整部署需要機器人、任務載荷、作業軟件與現場團隊協同運行，以明確的操作流程連接各個環節。", image: images.solutions, target: "applications", chapters: [
        { title: "界定作業任務", body: "明確巡檢點位、路線、觀察需求與異常升級條件，區分常規任務與需要人工判斷的情況。" },
        { title: "配置軟硬件系統", body: "圍繞任務選擇平台、傳感載荷與軟件功能，並於部署前核對通訊及基礎設施條件。" },
        { title: "建立運行流程", body: "明確任務職責、遠程介入與記錄覆核方式，透過初期現場運行評估流程並完善配置。" },
      ] },
      applications: { title: "以場景為起點，以任務為依據。", intro: "安防、工業設施與物流營運在路線、觀察重點和響應流程上各有差異，需要在具體作業條件下評估適用方案。", image: images.applications, target: "products", chapters: [
        { title: "設施與物流巡檢", body: "梳理倉儲通道、裝卸區域、共用路線與巡檢點位，明確機器人與人員、車輛及現有流程的協作方式。" },
        { title: "物業與周界管理", body: "評估通行邊界、低照度條件與遠程觀察位置，建立告警核實及現場人員接續處置流程。" },
        { title: "應急環境評估", body: "在考慮危險區域遠程巡檢前，先確認設備環境限制、通訊可用性與操作人員職責。" },
      ] },
      collaboration: { title: "以清晰分工，推進項目落地。", intro: "合作方式應與部署範圍、整合職責及營運安排相配合，在確定商務模式前先明確項目需求。", image: images.collaboration, target: "contact", chapters: [
        { title: "需求梳理", body: "提供場地環境、預期任務與現有作業限制，明確技術評估所需資料。" },
        { title: "範圍與職責確認", body: "界定硬件、軟件、整合與服務範圍，明確場地準備、操作培訓及持續營運的責任分工。" },
        { title: "評估與部署", body: "制定評估條件，覆核擬選配置並形成部署計劃，商務條款與服務範圍按項目確認。" },
      ] },
      about: { title: "以工程能力，服務現場營運。", intro: "超流智能結合機器人平台、感知、遠程控制與部署服務，面向物理安全及設施營運構建應用方案。", image: "/images/hyper/cyberport-3-entrance.png", target: "collaboration", chapters: [
        { title: "應用驅動的技術配置", body: "從任務與作業條件出發，將平台能力、載荷與控制方式配合具體場地需求。" },
        { title: "軟硬件協同", body: "統籌機器人、感知設備與作業軟件，透過系統整合支持清晰、可執行的操作流程。" },
        { title: "部署與持續運行", body: "將技術配置與現場流程、人員職責及維護需求連接，涵蓋部署全週期的關鍵環節。" },
      ] },
      resources: { title: "為項目評估提供技術依據。", intro: "結合產品資料、技術文檔與操作資訊開展系統選型，使用前需確認資料的可用性與配置適用範圍。", image: images.resources, target: "contact", chapters: [
        { title: "產品資料", body: "申請資料時請說明產品型號與預期應用，並註明評估團隊所需的文檔語言。" },
        { title: "技術評審", body: "說明擬評估的介面、載荷或基礎設施要求，特定配置的資訊可結合項目進一步溝通。" },
        { title: "操作文檔", body: "使用操作說明前，請核對交付系統配置及文檔版本；項目要求存在差異時，應先溝通確認。" },
      ] },
      contact: { title: "從明確需求開始技術溝通。", intro: "提供預期應用與現場條件，有助於圍繞平台適用性、整合要求及部署範圍開展討論。", image: images.contact, target: "collaboration", chapters: [
        { title: "應用與環境", body: "說明設施類型、巡檢任務、路線條件與通行限制。" },
        { title: "系統需求", body: "說明意向平台、觀察內容、現場通訊及系統整合要求。" },
        { title: "項目安排", body: "如已確定，請提供部署規模、評估計劃及合作模式意向。" },
      ] },
    },
  },
};
