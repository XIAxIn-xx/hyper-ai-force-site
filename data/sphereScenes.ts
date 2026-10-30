import type { Locale } from "@/data/hyper";

const stories = {
  park: [
    ["A presence along everyday routes", "Observe park paths and shared spaces remotely, helping teams check conditions before sending staff."],
    ["沿日常路线，延伸现场视野", "从公园步道到社区公共空间，远程查看现场情况，为管理人员安排巡查提供依据。"],
    ["沿日常路線，延伸現場視野", "從公園步道到社區公共空間，遠端查看現場情況，為管理人員安排巡查提供依據。"],
  ],
  street: [
    ["See the street before stepping in", "Bring live views of access routes and temporary barriers back to the team for remote assessment."],
    ["先看清街道，再安排介入", "远程查看道路通行、临时围挡及周边情况，让团队在抵达前掌握现场视野。"],
    ["先看清街道，再安排介入", "遠端查看道路通行、臨時圍擋及周邊情況，讓團隊在抵達前掌握現場視野。"],
  ],
  solar: [
    ["Keep remote facilities within view", "Inspect routes between solar arrays and investigate site alerts remotely, reducing repeated journeys."],
    ["偏远设施，也能靠近查看", "沿光伏阵列通道查看场地环境，远程核查告警现场，减少分散设施之间的重复往返。"],
    ["偏遠設施，也能靠近查看", "沿光伏陣列通道查看場地環境，遠端核查告警現場，減少分散設施之間的重複往返。"],
  ],
  stadium: [
    ["An extra viewpoint at busy entrances", "A spherical platform for remote observation around stadium approaches. Patrol routes and operating zones are planned around pedestrian movement."],
    ["人流入口，多一个现场视角", "以球形平台辅助查看球场外围及出入口。根据人流动线规划巡查路线与运行区域，让远程观察融入现场管理。"],
    ["人流入口，多一個現場視角", "以球形平台輔助查看球場外圍及出入口。根據人流動線規劃巡查路線與運行區域，讓遠端觀察融入現場管理。"],
  ],
  parking: [
    ["A closer look beyond the next aisle", "Move through designated car park routes and change viewpoint remotely to check corners and access lanes."],
    ["转过下一个车位，看清视线盲区", "沿指定车库路线移动，远程调整观察角度，查看转角、车道及出入口的现场情况。"],
    ["轉過下一個車位，看清視線盲區", "沿指定車庫路線移動，遠端調整觀察角度，查看轉角、車道及出入口的現場情況。"],
  ],
  port: [
    ["Follow the perimeter from a distance", "Observe port fences and service roads remotely. Define routes, communications coverage and sensing payloads around the site."],
    ["沿港区周界，延伸巡查半径", "远程查看围栏、作业通道及重点区域。围绕港区路线、通信覆盖与观察任务，确定部署方式及感知载荷。"],
    ["沿港區周界，延伸巡查半徑", "遠端查看圍欄、作業通道及重點區域。圍繞港區路線、通訊覆蓋與觀察任務，確定部署方式及感知載荷。"],
  ],
  hospital: [
    ["Keep emergency approaches in view", "Check access conditions and surroundings remotely to support site coordination while keeping emergency routes clear."],
    ["急诊入口，关注通行与现场秩序", "远程查看入口通行和周边情况，辅助现场协调；部署路线需避让急救通道。"],
    ["急診入口，關注通行與現場秩序", "遠端查看入口通行和周邊情況，輔助現場協調；部署路線需避讓急救通道。"],
  ],
  terminal: [
    ["Start with the route, then define the system", "For terminal environments, align operating areas, pedestrian flows and communications with the site team before planning integration."],
    ["先明确现场路线，再定义系统方案", "以航站楼等公共空间为例，先与运营团队确认运行区域、人流动线及通信条件，再推进系统集成与部署规划。"],
    ["先明確現場路線，再定義系統方案", "以航站樓等公共空間為例，先與營運團隊確認運行區域、人流動線及通訊條件，再推進系統整合與部署規劃。"],
  ],
} as const;

export function sphereStory(locale: Locale, scene: keyof typeof stories) {
  const [title, body] = stories[scene][locale === "en" ? 0 : locale === "zh-cn" ? 1 : 2];
  return { title, body };
}
export function sphereStoryForImage(locale: Locale, src: string) {
  const scene = src.match(/force-05-(\w+)\.webp$/)?.[1];
  return scene && scene in stories ? sphereStory(locale, scene as keyof typeof stories) : undefined;
}
