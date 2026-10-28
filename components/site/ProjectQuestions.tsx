import type { Locale } from "@/data/hyper";

const copy = {
  en: { title: "Project enquiries", label: "FREQUENT QUESTIONS", items: [
    ["What information supports an initial assessment?", "Provide the application, site environment, inspection tasks and available communications. Include any integration requirements and preferred platform."],
    ["How is a suitable configuration determined?", "Platform, payload and software selection are reviewed against site conditions and operating requirements. Final scope is confirmed for the project."],
    ["Can an enquiry cover system integration?", "Include the systems to be connected and the intended data or control workflow. Interface availability and integration scope require technical review."],
  ] },
  "zh-cn": { title: "项目咨询说明", label: "常见问题", items: [
    ["初步评估需要哪些信息？", "请提供应用场景、场地环境、巡检任务与通信条件。如有系统集成要求或意向产品，可一并说明。"],
    ["如何确定适用配置？", "结合场地条件与运行要求评估机器人平台、载荷及软件功能，最终配置与交付范围按项目确认。"],
    ["能否沟通既有系统的集成需求？", "可说明拟对接系统及预期的数据或控制流程，接口可用性与具体集成范围需进一步技术评审。"],
  ] },
  "zh-hk": { title: "項目諮詢說明", label: "常見問題", items: [
    ["初步評估需要哪些資訊？", "請提供應用場景、場地環境、巡檢任務與通訊條件。如有系統整合要求或意向產品，可一併說明。"],
    ["如何確定適用配置？", "結合場地條件與運行要求評估機器人平台、載荷及軟件功能，最終配置與交付範圍按項目確認。"],
    ["能否溝通既有系統的整合需求？", "可說明擬對接系統及預期的數據或控制流程，介面可用性與具體整合範圍需進一步技術評審。"],
  ] },
};

export function ProjectQuestions({ locale }: { locale: Locale }) {
  const content = copy[locale];
  return <section className="editorial-faq"><div className="section-shell editorial-faq-grid"><div><p className="editorial-kicker">{content.label}</p><h2>{content.title}</h2></div><div>{content.items.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}
