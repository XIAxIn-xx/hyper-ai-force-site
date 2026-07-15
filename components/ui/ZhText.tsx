import { NoBreak } from "@/components/ui/NoBreak";

const protectedPhrases = [
  "超流智能有限公司",
  "Hyper AIForce Limited",
  "为物理安全与巡逻巡检",
  "為物理安全與巡邏巡檢",
  "為物理安全与巡邏巡檢",
  "巡检解决方案",
  "巡檢解決方案",
  "自主巡航解决方案",
  "自主巡航解決方案",
  "远程遥操解决方案",
  "遠程遙操解決方案",
  "AI巡检解决方案",
  "AI巡檢解決方案",
  "机器人调度平台",
  "機器人調度平台",
  "自主巡航",
  "自主巡邏",
  "智能巡逻",
  "智能巡邏",
  "巡逻巡检",
  "巡邏巡檢",
  "远程遥操",
  "遠程遙操",
  "远程控制",
  "遠程控制",
  "实时机器人",
  "即時機器人",
  "异常识别",
  "異常識別",
  "自主导航",
  "自主導航",
  "人工介入",
  "人工接管",
  "多传感器融合",
  "多傳感器融合",
  "高风险",
  "高風險",
  "视野盲区",
  "視野盲區",
  "真实运营场景",
  "真實運營場景",
  "规划",
  "規劃",
  "紧急接管",
  "緊急接管",
  "操作人员",
  "操作人員",
  "实时监督",
  "實時監督",
  "统一队列",
  "統一隊列",
  "巡查中",
  "异常事件感知",
  "異常事件感知",
  "运营中枢",
  "運營中樞",
  "决策能力",
  "決策能力",
  "稳定运行",
  "穩定運行",
  "机器人部署",
  "機器人部署",
  "巡逻覆盖",
  "巡邏覆蓋",
  "持续运营",
  "持續運營",
  "物理安全",
  "工业巡检",
  "工業巡檢",
  "AI 感知",
  "AI 机器人",
  "AI 機器人",
  "AI异常识别",
  "AI異常識別",
  "AI视觉",
  "AI 視覺",
  "RSP 平台",
  "RSP平台",
  "24/7"
].sort((a, b) => b.length - a.length);

const protectedPhraseSet = new Set(protectedPhrases);

function escapeRegExp(value: string) {
  return value.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
}

const phrasePattern = new RegExp(
  "(" + protectedPhrases.map(escapeRegExp).join("|") + ")",
  "g"
);

type ZhTextProps = {
  children: string;
};

export function ZhText({ children }: ZhTextProps) {
  if (!/[\u3400-\u9fff]/.test(children)) return children;

  return (
    <>
      {children.split(phrasePattern).map((part, index) =>
        protectedPhraseSet.has(part) ? <NoBreak key={part + "-" + index}>{part}</NoBreak> : part
      )}
    </>
  );
}
