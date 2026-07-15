import { NoBreak } from "@/components/ui/NoBreak";

const protectedPhrases = [
  "超流智能有限公司",
  "Hyper AIForce Limited",
  "为物理安全与巡逻巡检",
  "為物理安全與巡邏巡檢",
  "為物理安全与巡邏巡檢",
  "机器人智能巡检",
  "機器人智能巡檢",
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
  "物理安全",
  "工业巡检",
  "工業巡檢",
  "AI 感知",
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
