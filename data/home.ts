import type { Locale } from "@/data/hyper";

type HomeCopy = {
  purpose: { eyebrow: string; title: string; body: string; contexts: string[] };
  products: { eyebrow: string; title: string; body: string; link: string; items: [string, string] };
  approach: { eyebrow: string; title: string; body: string; steps: { title: string; body: string }[]; technology: string; solutions: string };
  field: { eyebrow: string; title: string; body: string; link: string };
  belief: { eyebrow: string; title: string; body: string; link: string };
  conversation: { eyebrow: string; title: string; body: string; contact: string; resources: string };
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    purpose: {
      eyebrow: "PRESENCE, RECONSIDERED",
      title: "Send the robot.\nKeep people connected.",
      body: "A night patrol. A distant facility. An alert that needs a closer look. Being there matters — but it does not always mean sending a person. We build robotic systems that help teams understand the scene and decide what to do next.",
      contexts: ["After hours", "Across sites", "Beyond the line of sight"]
    },
    products: {
      eyebrow: "MEET YOUR PRESENCE ON SITE",
      title: "Different ground.\nA form that fits.",
      body: "Start with the way your site moves. Meet the two robots at the heart of the FORCE series.",
      link: "Explore the FORCE series",
      items: ["A legged or wheeled-leg presence for moving closer and looking around.", "A spherical presence for rolling into view and observing from a distance."]
    },
    approach: {
      eyebrow: "FROM OBSERVATION TO ACTION",
      title: "Seeing is the beginning.\nWhat happens next matters.",
      body: "A robot on its own is only part of the story. Perception, remote operators and a shared operating platform connect the view on site with the people making decisions.",
      steps: [
        { title: "Reach the scene", body: "Bring a mobile viewpoint to the places your team needs to check." },
        { title: "Understand the change", body: "Use sensing and live views to help assess what needs attention." },
        { title: "Stay involved", body: "Keep people in the loop, with remote intervention when judgment is needed." }
      ],
      technology: "Inside the technology", solutions: "See how it comes together"
    },
    field: {
      eyebrow: "A GLIMPSE FROM THE FIELD",
      title: "From the robot\nto the working site.",
      body: "At the GLP logistics park inspection project, robots, the RSP platform and site operations come together. Explore the project within our application scenarios.",
      link: "Explore applications & the project"
    },
    belief: {
      eyebrow: "WHAT GUIDES US",
      title: "AI Force Be With You",
      body: "We believe useful robotics starts with the people doing the work. Give them a way to be present from a distance, and let the machine take on more of the repeated journey.",
      link: "Meet Hyper AIForce"
    },
    conversation: {
      eyebrow: "START WITH YOUR SITE",
      title: "Where do you\nneed to be?",
      body: "Tell us what needs checking, where people travel today and what is difficult to reach. We can start the conversation there.",
      contact: "Discuss your site", resources: "Browse resources"
    }
  },
  "zh-cn": {
    purpose: {
      eyebrow: "重新理解「在场」",
      title: "让机器人先到场，\n让人始终掌握现场。",
      body: "一次夜间巡逻，一处偏远设施，一个需要靠近确认的告警。现场需要有人关注，却不一定每次都要人亲自前往。我们希望用机器人，帮助团队看清现场，再决定下一步。",
      contexts: ["夜间与非工作时段", "分散的多个场地", "视线之外的现场"]
    },
    products: {
      eyebrow: "认识你的现场分身",
      title: "不同的地面，\n适合的抵达方式。",
      body: "先从场地与通行方式出发，认识原力系列的两种机器人形态。",
      link: "探索原力系列",
      items: ["以点足或轮足靠近目标，让远程观察拥有移动的视角。", "以球形机身滚动前行，为远程观察提供另一种抵达方式。"]
    },
    approach: {
      eyebrow: "从看见，到行动",
      title: "看见现场只是开始，\n重要的是接下来怎么做。",
      body: "一台机器人并不是全部。感知、远程操作人员与统一平台协同，才能将现场画面连接到人的判断与行动。",
      steps: [
        { title: "先抵达", body: "让移动的观察视角，走进团队需要核查的地方。" },
        { title: "看变化", body: "结合感知信息与实时画面，辅助判断哪里需要关注。" },
        { title: "人掌握", body: "需要经验与判断时，让人通过远程介入继续参与。" }
      ],
      technology: "了解背后的技术", solutions: "了解如何协同运作"
    },
    field: {
      eyebrow: "现场一瞥",
      title: "从机器人，\n走向实际作业现场。",
      body: "在普洛斯物流园巡检项目中，机器人、RSP 平台与现场运营相互连接。进入应用场景，了解这个项目如何展开。",
      link: "查看应用场景与项目"
    },
    belief: {
      eyebrow: "我们的出发点",
      title: "AI Force Be With You",
      body: "我们相信，机器人的价值始于正在工作的人。让人能够远程在场，让机器承担更多重复往返，让关注与判断留在人手中。",
      link: "认识超流智能"
    },
    conversation: {
      eyebrow: "从你的场地开始",
      title: "下一个需要抵达的现场，\n在哪里？",
      body: "告诉我们需要查看什么、人员每天往返哪里，以及哪些地方难以抵达。我们可以从这些具体问题开始。",
      contact: "聊聊你的场地", resources: "浏览资料中心"
    }
  },
  "zh-hk": {
    purpose: {
      eyebrow: "重新理解「在場」",
      title: "讓機械人先到場，\n讓人始終掌握現場。",
      body: "一次夜間巡邏，一處偏遠設施，一個需要靠近確認的警報。現場需要有人關注，卻不一定每次都要人親自前往。我們希望用機械人，協助團隊看清現場，再決定下一步。",
      contexts: ["夜間與非工作時段", "分散的多個場地", "視線之外的現場"]
    },
    products: {
      eyebrow: "認識你的現場分身",
      title: "不同的地面，\n適合的抵達方式。",
      body: "先從場地與通行方式出發，認識原力系列的兩種機械人形態。",
      link: "探索原力系列",
      items: ["以點足或輪足靠近目標，讓遠端觀察擁有移動的視角。", "以球形機身滾動前行，為遠端觀察提供另一種抵達方式。"]
    },
    approach: {
      eyebrow: "從看見，到行動",
      title: "看見現場只是開始，\n重要的是接下來怎樣做。",
      body: "一台機械人並不是全部。感知、遠端操作人員與統一平台協同，才能將現場畫面連接到人的判斷與行動。",
      steps: [
        { title: "先抵達", body: "讓移動的觀察視角，走進團隊需要核查的地方。" },
        { title: "看變化", body: "結合感知資料與即時畫面，輔助判斷哪裏需要關注。" },
        { title: "人掌握", body: "需要經驗與判斷時，讓人透過遠端介入繼續參與。" }
      ],
      technology: "了解背後的技術", solutions: "了解如何協同運作"
    },
    field: {
      eyebrow: "現場一瞥",
      title: "從機械人，\n走向實際作業現場。",
      body: "在普洛斯物流園巡檢項目中，機械人、RSP 平台與現場營運相互連接。進入應用場景，了解這個項目如何展開。",
      link: "查看應用場景與項目"
    },
    belief: {
      eyebrow: "我們的出發點",
      title: "AI Force Be With You",
      body: "我們相信，機械人的價值始於正在工作的人。讓人能夠遠端在場，讓機器承擔更多重複往返，讓關注與判斷留在人手中。",
      link: "認識超流智能"
    },
    conversation: {
      eyebrow: "從你的場地開始",
      title: "下一個需要抵達的現場，\n在哪裏？",
      body: "告訴我們需要查看甚麼、人員每天往返哪裏，以及哪些地方難以抵達。我們可以從這些具體問題開始。",
      contact: "聊聊你的場地", resources: "瀏覽資料中心"
    }
  }
};
