// 노션에 정리된 내용을 이 파일의 값들로 옮겨 적으면 사이트 전체에 반영됩니다.
// TODO 표시가 붙은 값들은 노션 포트폴리오 페이지에 없어서 채우지 못한 항목입니다.

export interface ContactLink {
  label: string;
  url: string;
  icon: "github" | "email" | "phone" | "external";
}

export interface HeroData {
  name: string;
  role: string;
  tagline: string;
  email: string;
  location: string;
  photo: string;
  links: ContactLink[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AboutData {
  summary: string;
  gpa: string;
  skills: SkillCategory[];
}

export interface Project {
  id: string;
  title: string;
  /** 카드에 보이는 간결하고 임팩트 있는 한 줄 소개 */
  tagline: string;
  period: string;
  team: string;
  role: string;
  overview: string;
  features: string[];
  learnings: string;
  achievement?: string;
  techStack: string[];
  /** 카드/모달 헤더에 쓰이는 대표 이미지 또는 gif */
  image: string;
  /** 프로젝트 로고/아이콘 */
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education" | "project";
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  projects: Project[];
  timeline: TimelineItem[];
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "전주현", // TODO: 노션에 이름이 없어 GitHub 아이디(JEONJOOHYUN)로 추정했습니다. 확인 후 수정해 주세요.
    role: "Frontend Developer",
    tagline:
      "AI 도구를 적극적으로 활용해 UI/UX 디테일과 상태 관리 최적화에 집중하는 프론트엔드 개발자입니다.", // TODO: 원하는 한 줄 소개로 교체해 주세요.
    email: "jeonjh0321@gmail.com",
    location: "South Korea", // TODO: 정확한 지역으로 교체해 주세요.
    photo: "/IdPhoto.jpg",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/JEONJOOHYUN",
        icon: "github",
      },
      {
        label: "Email",
        url: "mailto:jeonjh0321@gmail.com",
        icon: "email",
      },
      {
        label: "Phone",
        url: "tel:010-4549-0335",
        icon: "phone",
      },
    ],
  },

  about: {
    // TODO: 노션 페이지에 별도의 자기소개 문단이 없어, 4개 프로젝트 설명을 바탕으로 초안을 작성했습니다. 본인 목소리로 다듬어 주세요.
    summary:
      "여러 팀 프로젝트에서 React / React Native 기반 프론트엔드 개발을 맡아왔습니다. OpenAI API 등 AI 기술을 프론트엔드와 연동하는 리서치와 구현을 즐기며, Cursor·Claude 같은 AI 에이전트를 적극 활용해 반복 작업 시간을 줄이고 그만큼 UI/UX 디테일과 상태 관리 최적화에 집중합니다.",
    gpa: "4.21 / 4.5", // TODO: 실제 학점으로 교체해 주세요.
    skills: [
      {
        category: "Frontend",
        items: ["React", "React Native", "TypeScript", "Tailwind CSS", "CSS"],
      },
      {
        category: "AI / API",
        items: ["OpenAI API", "Claude Agent", "Cursor"],
      },
      {
        category: "Tools",
        items: ["Figma", "Git", "VSCode"],
      },
    ],
  },

  projects: [
    {
      id: "monoglyph",
      title: "MonoGlyph",
      tagline: "AI로 나만의 스타일 폰트를 만드는 웹 서비스",
      period: "2025.04 - 2025.11",
      team: "3인 팀 프로젝트",
      role: "프론트엔드 아키텍처 설계, 화면 구현(UI/UX), AI/오픈소스 기술 리서치 및 API 연동 전담",
      overview:
        "사용자가 원하는 스타일의 폰트를 손쉽게 생성하고 조작할 수 있도록, 직관적인 UI/UX와 AI 기술을 결합한 맞춤형 폰트 생성 웹 서비스입니다.",
      features: [
        "AI 및 오픈소스 생태계 리서치: 다양한 폰트 생성 모델과 FontForge 등의 오픈소스를 조사해 프론트엔드와의 최적 연동 파이프라인을 구상",
        "비동기 데이터 처리 및 상태 관리: OpenAI API 및 백엔드 딥러닝 모델과 통신해 생성된 이미지·TTF 변환 데이터를 프론트엔드 상태로 안전하게 관리",
        "사용자 맞춤형 UI/UX 구현: 텍스트 입력부터 폰트 생성 결과까지 직관적으로 확인·조작할 수 있는 반응형 화면 설계 및 구현",
        "UX 최적화: 무거운 폰트 생성 작업 중 이탈을 막기 위한 진행 상태 로딩 UI 및 에러 핸들링 도입",
      ],
      learnings:
        "단순히 화면을 그리는 것을 넘어, 백엔드의 AI 모델과 프론트엔드가 어떻게 데이터를 주고받아야 효율적인지 깊이 고민할 수 있었습니다. 무거운 비동기 응답 대기 시간을 처리하고 복잡한 상태를 관리하는 과정에서 Cursor와 Claude 에이전트를 적극 활용해 UI 컴포넌트 개발 시간을 단축하고 로직을 최적화했습니다.",
      achievement: "2025 한이음 드림업 공모전 창의도전형 장려상 수상",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Cursor", "Claude Agent", "Figma"],
      image: "/projects/Monoglyph_img.png",
      icon: "/projects/Monoglyph_icon.png",
      githubUrl: "https://github.com/JEONJOOHYUN/MonoGlyph",
      liveUrl: "https://www.youtube.com/watch?v=NnAXeprRV0w",
      featured: true,
    },
    {
      id: "studyswipe",
      title: "StudySwipe",
      tagline: "AI 맞춤 설문으로 스터디를 매칭하는 모바일 앱",
      period: "2025.08 - 2025.10",
      team: "4인 팀 (FE 2명, BE 2명)",
      role: "React Native 기반 프론트엔드 아키텍처 설계, 동적 설문조사 로직(상태 관리) 구현",
      overview:
        "사용자의 학습 수준에 맞는 최적의 스터디를 매칭하기 위해, AI를 활용한 맞춤형 설문과 동적 수준 평가 기능을 제공하는 크로스 플랫폼(iOS/Android) 모바일 앱입니다.",
      features: [
        "AI 기반 사용자 수준 파악: OpenAI API를 프론트엔드에 연동해 설문 응답을 바탕으로 학습 수준을 파악",
        "설문조사 점수 산출 및 매칭 데이터 처리: 항목별 내부 점수를 매기고 분류해 최적의 스터디원과 연결되도록 데이터 처리 및 UI 반영",
        "사용자 친화적인 UI/UX 개선: 모바일 환경에서 설문조사와 매칭 결과를 직관적으로 확인할 수 있도록 화면 컴포넌트 개선",
        "개발 생산성 향상: Cursor 등 AI 에이전트로 React Native 기본 레이아웃 구성 시간을 단축하고 UI 디테일에 집중",
      ],
      learnings:
        "웹을 넘어 React Native를 다루며 모바일 환경 특유의 렌더링과 상태 관리를 깊이 경험할 수 있었습니다. AI API를 활용해 '사용자 응답에 따라 실시간으로 변하는 동적 UI'를 설계하며 복잡한 컴포넌트 구조와 비동기 데이터 처리에 대한 이해도를 크게 높였습니다.",
      achievement: "학과 최우수 프로젝트 선정",
      techStack: ["React Native", "TypeScript", "AI 수준 평가 API", "Cursor", "Git"],
      image: "/projects/StudySwipe_gif.gif",
      icon: "/projects/StudySwipe_icon.png",
      githubUrl: "https://github.com/JEONJOOHYUN/Study-Swipe-FE",
      liveUrl: "https://www.youtube.com/watch?v=2C50OdqgCNg&t=1s",
    },
    {
      id: "typonic",
      title: "Typonic",
      tagline: "AI 기반 코드/커스텀 타자 연습 플랫폼",
      period: "2025.04 - 2025.11",
      team: "4인 팀 (FE 2명, BE 2명)",
      role: "Figma 기반 반응형 프론트엔드 화면 구현, 실시간 타자 입력 상태 최적화 로직 작성",
      overview:
        "사용자 친화적인 UI/UX를 통해 누구나 손쉽게 코드 및 커스텀 텍스트 연습이 가능한 AI 기반 타자 연습 웹 플랫폼입니다.",
      features: [
        "실시간 타자 상태 관리 및 상호작용: 키보드 입력에 맞춰 타자 속도, 오타율을 실시간 계산하고 지연 없이 렌더링하도록 상태 최적화",
        "픽셀 퍼펙트 반응형 UI: Figma 디자인을 바탕으로 Tailwind CSS로 다양한 디바이스에 맞는 반응형 UI 구현",
        "맞춤형 연습 데이터 렌더링: 서버에서 받은 코딩 연습용 텍스트 데이터를 연습하기 편한 UI 컴포넌트로 구조화",
        "AI 툴링을 통한 생산성 향상: Cursor 등 AI 기반 IDE로 반복적인 레이아웃·보일러플레이트 코드 생성 자동화",
      ],
      learnings:
        "빠른 키보드 입력에도 화면이 즉각적으로 업데이트되어야 했기에, 불필요한 리렌더링을 줄이며 React 상태를 효율적으로 관리하고 렌더링을 최적화하는 경험을 쌓았습니다. Cursor 에이전트로 확보한 시간을 타이핑 시각적 피드백과 UI/UX 디테일을 다듬는 데 투자했습니다.",
      achievement: "학과 최우수 프로젝트 선정",
      techStack: ["React", "Tailwind CSS", "OpenAI API", "Cursor", "Figma", "VSCode"],
      image: "/projects/Typonic_img.png",
      icon: "/projects/Typonic_icon.png",
      githubUrl: "https://github.com/JEONJOOHYUN/Typonic-Front",
      liveUrl: "https://www.youtube.com/watch?v=EQWMjf3YXiU",
    },
    {
      id: "zombuilder",
      title: "Zombuilder",
      tagline: "게임 유틸리티로 시작한 첫 프론트엔드 프로젝트",
      period: "2024.10 - 2024.11",
      team: "4인 팀 · 나의 첫 프론트엔드 프로젝트",
      role: "PC 해상도 기준 화면 레이아웃 구축, 게임 아이템 이미지·데이터의 컴포넌트 렌더링 전담",
      overview:
        "게임 'Project Zomboid' 플레이어를 위해 복잡한 인게임 정보와 편의 기능을 제공하는 유틸리티 웹 서비스입니다.",
      features: [
        "React 컴포넌트 기반 화면 레이아웃 설계: 방대한 게임 아이템·레시피를 나열하기 위해 컴포넌트를 분리·조립",
        "프론트엔드 내 정적 데이터 및 에셋 관리: 게임 아이템 이미지와 정보 데이터를 프론트엔드 내부에서 직접 관리·렌더링",
        "기본적인 상태 활용: 클릭·입력에 따라 특정 아이템 정보가 화면에 노출되도록 기초적인 상태 관리 적용",
      ],
      learnings:
        "AI 툴이 대중화되기 전, 구글링과 공식 문서에만 의존해 100% 수작업으로 부딪힌 첫 프론트엔드 개발 경험입니다. 수백 개의 게임 아이템 데이터를 코드에 직접 하드코딩하며 겪은 단순 반복 작업을 통해 '왜 데이터를 서버로 분리해야 하는지', '왜 컴포넌트를 재사용 가능하게 쪼개야 하는지'를 몸으로 깨달았고, 이 경험이 이후 프론트엔드 아키텍처를 이해하는 밑거름이 되었습니다.",
      achievement: "학과 최우수 프로젝트 선정",
      techStack: ["React", "CSS", "VSCode", "Git"],
      image: "/projects/Zombuilder_img.png",
      icon: "/projects/Zombuilder_icon.png",
      githubUrl: "https://github.com/JEONJOOHYUN/ZomBuilder-frontend",
      liveUrl:
        "http://youtube.com/watch?si=mdhSel2j97zKd74F&t=281&v=6Ol1s1Hj76k&feature=youtu.be",
    },
  ],

  // TODO: 노션 페이지에 회사/학교 등 별도의 경력 정보가 없어, 우선 4개 프로젝트를 시간순 이력으로 채워 두었습니다.
  // 실제 근무 이력이나 학력이 있다면 아래 항목을 교체/추가해 주세요.
  timeline: [
    {
      id: "timeline-zombuilder",
      period: "2024.10 - 2024.11",
      title: "Zombuilder",
      organization: "팀 프로젝트 (4인) · 나의 첫 프론트엔드 프로젝트",
      description:
        "PC 해상도 기준 화면 레이아웃 구축과 게임 아이템 데이터의 컴포넌트 렌더링을 전담했습니다.",
      type: "project",
    },
    {
      id: "timeline-monoglyph",
      period: "2025.04 - 2025.11",
      title: "MonoGlyph",
      organization: "팀 프로젝트 (3인) · 프론트엔드 개발 및 AI 기술 리서치",
      description:
        "프론트엔드 아키텍처 설계, UI/UX 구현, AI·오픈소스 리서치 및 API 연동을 전담했습니다. 2025 한이음 드림업 공모전 창의도전형 장려상 수상.",
      type: "project",
    },
    {
      id: "timeline-typonic",
      period: "2025.04 - 2025.11",
      title: "Typonic",
      organization: "팀 프로젝트 (4인) · 프론트엔드 UI/UX 구현",
      description:
        "Figma 기반 반응형 화면 구현과 실시간 타자 입력 상태 최적화 로직을 담당했습니다. 학과 최우수 프로젝트 선정.",
      type: "project",
    },
    {
      id: "timeline-studyswipe",
      period: "2025.08 - 2025.10",
      title: "StudySwipe",
      organization: "팀 프로젝트 (4인) · 모바일 프론트엔드 개발",
      description:
        "React Native 기반 프론트엔드 아키텍처 설계와 동적 설문조사 로직(상태 관리)을 구현했습니다. 학과 최우수 프로젝트 선정.",
      type: "project",
    },
  ],
};
