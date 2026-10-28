"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import type { Locale } from "@/data/hyper";
import type { Section } from "@/lib/site";
import { editorial } from "@/data/editorial";

const anchors = ["route-content", "perspective", "assessment"];
const chapterLabels: Record<Locale, Record<string, string[]>> = {
  en: {
    technology: ["Core capabilities", "System architecture", "Integration review"], solutions: ["Operating workflow", "Deployment architecture", "Implementation"], applications: ["Applications and case study", "Operating environments", "Task requirements"], collaboration: ["Engagement models", "Project delivery", "Project stages"], about: ["Company overview", "Business focus", "Engineering approach"], resources: ["Document library", "Technical information", "Document requests"], contact: ["Enquiry form", "Discussion preparation", "Requirements"],
  },
  "zh-cn": {
    technology: ["核心能力", "系统架构", "集成评估"], solutions: ["作业闭环", "部署体系", "实施流程"], applications: ["应用与案例", "场景评估", "任务要求"], collaboration: ["合作模式", "项目交付", "推进流程"], about: ["公司介绍", "业务重点", "工程方法"], resources: ["资料目录", "资料用途", "申请说明"], contact: ["咨询表单", "沟通准备", "需求信息"],
  },
  "zh-hk": {
    technology: ["核心能力", "系統架構", "整合評估"], solutions: ["作業閉環", "部署體系", "實施流程"], applications: ["應用與案例", "場景評估", "任務要求"], collaboration: ["合作模式", "項目交付", "推進流程"], about: ["公司介紹", "業務重點", "工程方法"], resources: ["資料目錄", "資料用途", "申請說明"], contact: ["諮詢表單", "溝通準備", "需求資訊"],
  },
};

export function ChapterNavigation({ locale, section }: { locale: Locale; section: Section }) {
  const words = chapterLabels[locale][section];
  const [active, setActive] = useState(anchors[0]);
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -65% 0px" });
    anchors.forEach(id => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [section]);
  return <nav className="editorial-chapter-nav" aria-label={editorial[locale].index}><div className="section-shell">
    {anchors.map((id, index) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setActive(id)}><span aria-hidden="true">0{index + 1}</span>{words[index]}</a>)}
  </div>{!reduced && <motion.div aria-hidden="true" className="editorial-reading-progress" style={{ scaleX: scrollYProgress }} />}</nav>;
}
