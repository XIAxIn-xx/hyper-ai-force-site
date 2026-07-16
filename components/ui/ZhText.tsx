import { NoBreak } from "@/components/ui/NoBreak";

const protectedPhrases = [
  "超流智能有限公司",
  "面向物理安全的",
  "機器人智能",
  "机器人智能",
  "智能巡检",
  "智能巡檢",
  "巡检解决方案",
  "巡檢解決方案",
  "自主巡航解决方案",
  "自主巡航解決方案",
  "远程遥操解决方案",
  "遠程遙操解決方案",
  "AI巡检解决方案",
  "AI巡檢解決方案",
  "低延迟远程操控",
  "低延遲遠程操控",
  "多机器人协同",
  "多機器人協同",
  "自主机器人队伍的",
  "自主機器人隊伍的",
  "统一运营平台",
  "統一運營平台",
  "机器人运营平台",
  "機器人運營平台",
  "机器人调度平台",
  "機器人調度平台",
  "机器人集群管理",
  "機器人集群管理",
  "真实运营场景",
  "真實運營場景",
  "可部署的机器人解决方案",
  "可部署的機器人解決方案",
  "高风险",
  "高風險",
  "视野盲区",
  "視野盲區",
  "异常识别",
  "異常識別",
  "多传感器融合",
  "多傳感器融合",
  "自主导航",
  "自主導航",
  "路径规划",
  "路徑規劃",
  "运动控制",
  "運動控制",
  "远程接管能力",
  "遠程接管能力",
  "远程接管",
  "遠程接管",
  "紧急接管",
  "緊急接管",
  "操作人员",
  "操作人員",
  "智能巡逻",
  "智能巡邏",
  "巡逻巡检",
  "巡邏巡檢",
  "工业巡检",
  "工業巡檢",
  "远程监看",
  "遠程監看",
  "异常事件感知",
  "異常事件感知",
  "机器人部署",
  "機器人部署",
  "持续运营",
  "持續運營",
  "稳定运行",
  "穩定運行",
  "AI 感知",
  "AI 機器人",
  "AI 机器人",
  "RSP 平台",
  "RSP平台",
  "Hyper AIForce Limited",
  "Hyper AIForce",
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
