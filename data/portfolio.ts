// 사이트에 보이는 모든 문구와 데이터는 이 파일에만 둡니다(컴포넌트에 직접 쓰지 않음).

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
  /** Hero 상단 상태 배지 문구 (초록 점이 맥박치듯 깜빡임) */
  status: string;
  photo: string;
  links: ContactLink[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface WorkspaceShot {
  image: string;
  alt: string;
  caption: string;
}

export interface AboutData {
  /** 문단 단위로 나눠서 보여줍니다. */
  summary: string[];
  gpa: string;
  skills: SkillCategory[];
  /** About 섹션에 작게 보여주는 실제 작업 화면 (사용률·비용은 블러 처리) */
  workspace: WorkspaceShot;
}

export interface ProjectStatus {
  /** 카드 제목 위 작은 배지 문구 (예: "운영 중") */
  label: string;
  /** true 면 초록 점이 맥박치듯 깜빡임 (지금 실제로 쓰이는 서비스) */
  live: boolean;
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
  /** liveUrl 버튼 문구 (사이트면 "사이트 보기", 영상이면 "시연 영상") */
  liveLabel?: string;
  status?: ProjectStatus;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education" | "project";
  /** projects 배열의 id와 매칭되면, 아이콘 대신 해당 프로젝트 로고를 보여줍니다. */
  projectId?: string;
  /** 카드가 없는 이력의 로고 (projectId 보다 우선) */
  icon?: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  /** 첫 항목이 넓은 대표 카드, 나머지는 한 줄에 3장 */
  projects: Project[];
  timeline: TimelineItem[];
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "전주현",
    role: "Frontend Developer",
    tagline:
      "직접 쓰는 서비스를 만들고 운영하며, AI 도구와 함께 UI 디테일과 상태 관리를 다듬는 프론트엔드 개발자입니다.",
    email: "jeonjh0321@gmail.com",
    location: "South Korea",
    status: "새로운 기회를 찾고 있어요",
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
    summary: [
      "Orca 한 화면에 여러 프로젝트를 띄워 두고 Claude Code와 Codex를 함께 쓰며 개발합니다. Claude Code가 프로젝트 지침(CLAUDE.md)에 맞춰 코드를 쓰면, 커밋 전에 Codex의 리뷰를 받아 지적 사항을 직접 판단해 반영하고 lint·build·브라우저 확인을 거쳐 배포합니다. 에이전트가 코드를 쓰는 동안 저는 무엇을 만들지 정하고, 결과가 설계 의도에 맞는지 검토하며, 상태 관리와 UI/UX 디테일을 다듬는 데 집중합니다.",
      "React·React Native 팀 프로젝트에서 프론트엔드 구조 설계와 구현을 맡아 왔고, OpenAI API 등 AI 기술을 화면과 연결하는 작업을 즐깁니다. AI 모델과 백엔드가 만든 데이터를 프론트엔드가 어떻게 안전하고 효율적으로 주고받을지 함께 고민합니다.",
    ],
    gpa: "4.21 / 4.5",
    skills: [
      {
        category: "Frontend",
        items: ["React", "React Native", "TypeScript", "Tailwind CSS", "CSS"],
      },
      {
        category: "AI / 개발 환경",
        items: ["Claude Code", "Codex", "Orca", "OpenAI API"],
      },
      {
        category: "Tools",
        items: ["Figma", "Git", "VSCode"],
      },
    ],
    workspace: {
      image: "/workspace/orca-workspace.webp",
      alt: "Orca 한 화면에 여러 프로젝트와 Claude Code 세션, 작업 요약 패널, 파일 트리를 띄워 둔 실제 작업 화면",
      caption: "Orca에서 Claude Code로 작업하는 실제 화면 · 클릭하면 크게 볼 수 있어요",
    },
  },

  projects: [
    {
      id: "maple-dashboard",
      title: "메이플 대시보드",
      tagline: "계산기부터 썬데이 예측·숙제 현황까지, 매일 쓰며 키운 메이플 도구 사이트",
      period: "2026.08 – 진행 중",
      team: "개인 프로젝트 (1인 기획·개발·운영)",
      role: "기획부터 화면, Supabase DB·인증, 넥슨 Open API 연동, 배포와 운영까지 혼자 맡았습니다. 넥슨 API가 문서에 없는 방식으로 답하는 경우(초기화 뒤 접속하지 않은 캐릭터의 숙제가 비어 오는 것 등)를 직접 겪고 원인을 찾아 처리했습니다.",
      overview:
        "메이플스토리를 하면서 필요한 계산과 기록을 한곳에 모은 사이트입니다. 공개 도구는 가입 없이 쓰고, 구글로 로그인해 넥슨 API 키를 등록하면 캐릭터별 숙제 현황과 이번 주 보스 수익을 볼 수 있습니다. 처음엔 부주 수익 정산 도구였는데, 2026년 11월 전면 개편으로 지금 모습이 됐습니다.",
      features: [
        "회원: 구글 로그인 → 넥슨 API 키 등록·교체·삭제·탈퇴. 키는 암호화해 DB에 두고 서버에서만 열어 씀",
        "숙제 현황·보스 수익: 등록한 키로 캐릭터별 일일·주간 숙제와 이번 주 결정석 수익을 계산하고, 넥슨이 덜 채워 준 응답은 최근 정상 기록으로 채움",
        "썬데이 예측: Vercel Cron이 금요일 공지 이미지를 CLOVA OCR로 읽어 자동 기록하고(숫자가 어긋나면 “확인 필요”로 남김), GitHub Actions에서 매주 돌리는 표 데이터 모델(TabICL v2·TabPFN v2)과 통계를 섞어 다음 썬데이를 예측해 적중률과 함께 표시",
        "관리자: 결정석·큐브·메소 시세 같은 가격 기본값과 아이템 사전을 코드 수정 없이 화면에서 고치면 계산기 기본값이 바뀜",
        "기댓값 계산기·강화 기록: 스타포스·잠재능력·추가옵션·소울·어빌리티의 평균 비용을 넥슨 공식 확률표로 계산하고, 결과는 다른 계산 사이트와 대조, 계산식은 자동 테스트로 고정",
        "속도: Vercel 함수를 서울 리전에 고정하고 DB 조회를 캐싱해 응답을 수십~수백 ms로 줄이고, 메뉴 아이콘을 318KB → 21KB로 줄임",
      ],
      learnings:
        "제가 매일 쓰는 도구라 불편한 점을 바로 고치며 키워 왔습니다. 외부 API는 문서와 다르게 움직일 수 있다는 걸 겪으며, 실패를 “없음”으로 기억하지 않고 틀린 값이 조용히 저장되지 않게 사람이 확인할 자리를 남기는 설계를 배웠습니다. 기능이 늘수록 계산은 한 곳의 순수 함수로, 가격 같은 값은 DB로 옮겨 화면이 늘어도 같은 숫자를 쓰게 했습니다.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Supabase",
        "NEXON Open API",
        "CLOVA OCR",
        "GitHub Actions",
        "Vercel Cron",
      ],
      image: "/projects/MapleDashboard_img.png",
      icon: "/projects/MapleDashboard_icon.jpg",
      githubUrl: "https://github.com/JEONJOOHYUN/maple-dashboard",
      liveUrl: "https://maple-dashboard-eta.vercel.app/",
      liveLabel: "사이트 보기",
      status: { label: "운영 중", live: true },
    },
    {
      id: "nyamnyam-canvas",
      title: "냠냠캔버스",
      tagline: "먹은 만큼 그림이 자라는 아이 식습관 앱과 ESP32 무게 저울",
      period: "2026.10 – 2026.11",
      team: "졸업작품(캡스톤디자인 2) · 2인 팀 팀장",
      role: "팀장으로 기획과 일정을 맡고, 웹 앱 전체와 ESP32 펌웨어, 저울 조립·보정까지 직접 했습니다.",
      overview:
        "아이가 밥을 먹으면 식판 아래 로드셀이 줄어든 무게를 재고, 먹은 만큼 화면 속 그림이 자라는 식습관 도우미입니다. 캐릭터가 말하며 응원하고, 그림은 절대 줄어들지 않아 아이에게는 칭찬만 들립니다. 발표가 끝나 서버는 정리했고, 저울 없이 체험하는 시연 모드는 지금도 열립니다.",
      features: [
        "무게만으로 식사 상태 판단: 빈 식판 → 음식 담김 → 먹는 중 → 끝남을 상태 머신으로 나누고 추가 배식·쏟음·배불러요를 처리",
        "아이 화면: 캐릭터 3종 × 테마 3종, 먹은 만큼 그림 조각이 7단계로 생기고 단계마다 음성으로 칭찬 (Motion + 직접 그린 SVG)",
        "기기 연동: ESP32 + HX711 + 5kg 로드셀이 Wi‑Fi로 무게를 보내면 Edge Function → Realtime으로 화면에 반영. HTTPS 페이지가 집 안 기기에 직접 붙지 못하는 문제를 이 구조로 해결",
        "시뮬레이터: 실제 기기와 같은 파이프라인(10Hz → 필터 → 전송 판단)이라 부품 없이 시험하고, 이걸로 체험 모드와 시연장용 무한 자동 시연을 만듦",
        "부모 화면: 로그인·PIN, 목표 설정, 식사 기록, 저울 등록·영점·보정 마법사",
        "저울 제작: 볼트로 다시 고정하고 보정해 10분 동안 흐름 0.5g 수준, 단위 테스트 156개 · e2e 30개",
      ],
      learnings:
        "센서 값은 흔들리고 흐르기 때문에 필터와 유지 시간을 두고, 판단은 펌웨어보다 고치기 쉬운 웹 쪽에 모았습니다. 저울을 직접 조립하며 고정 방식에 따라 자리별로 −35%~+32%까지 틀어지는 걸 겪고 볼트로 다시 고정해 보정했습니다. 아이 앞에서는 그림이 줄거나 꾸중하는 말이 나오지 않게 하는 원칙을 먼저 정하고 기능을 맞췄습니다.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Motion",
        "Supabase Realtime",
        "Edge Functions",
        "ESP32",
        "Arduino",
        "Vitest",
        "Playwright",
      ],
      image: "/projects/Nyamnyam_img.png",
      icon: "/projects/Nyamnyam_icon.png",
      githubUrl: "https://github.com/JEONJOOHYUN/nyamnyam-canvas",
      // /play needs the real scale and /parent's DB was retired (2026-11-15); /demo runs on its own
      liveUrl: "https://nyamnyam-canvas.vercel.app/demo",
      liveLabel: "체험해 보기",
      status: { label: "졸업작품 · 체험 가능", live: false },
    },
    {
      id: "monoglyph",
      title: "MonoGlyph",
      tagline: "AI로 나만의 스타일 폰트를 만드는 웹 서비스",
      period: "2025.04 – 2025.11",
      team: "3인 팀 프로젝트",
      role: "어떤 폰트 생성 모델을 쓸지 조사하는 역할을 맡아 MX-Font·DeepVecFont 같은 오픈소스 모델을 비교하고, 몇 글자를 입력받아야 효율적인지 검토했습니다. 최종 파이프라인에는 MX-Font가 쓰였습니다. 화면은 ChatGPT처럼 원하는 스타일을 대화하듯 입력하는 초기 화면과, 생성된 폰트를 확인·관리하는 관리자 페이지의 틀을 만들어 팀원에게 넘겼습니다.",
      overview:
        "사용자가 원하는 스타일의 폰트를 손쉽게 생성하고 조작할 수 있도록, 직관적인 UI/UX와 AI 기술을 결합한 맞춤형 폰트 생성 웹 서비스입니다.",
      features: [
        "폰트 생성 모델 리서치: MX-Font, DeepVecFont 등 오픈소스 폰트 생성 모델을 조사·비교해 팀이 쓸 모델 후보를 정리 (최종 파이프라인은 MX-Font 기반)",
        "입력 글자 수 검토: 적은 글자만 받아 전체 한글 글꼴을 만들기 위해 몇 글자를 입력받아야 효율적인지 검토",
        "초기 화면 구성: ChatGPT처럼 원하는 폰트 스타일을 대화하듯 입력하는 첫 화면의 틀을 만들어 팀원에게 전달",
        "관리자 페이지: 생성된 폰트를 확인하고 관리하는 관리자 화면의 틀 제작",
      ],
      learnings:
        "AI 서비스는 어떤 모델을 고르느냐에 따라 사용자에게 받아야 할 입력과 결과 품질, 전체 처리 흐름이 달라진다는 걸 모델을 비교하며 배웠습니다. 화면은 처음 구조를 잡아 팀원에게 넘기고 팀원이 이어서 개발하는 방식으로 협업했습니다.",
      achievement: "2025 한이음 드림업 공모전 창의도전형 장려상 수상",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Claude Agent", "Figma"],
      image: "/projects/Monoglyph_img.png",
      icon: "/projects/Monoglyph_icon.png",
      githubUrl: "https://github.com/JEONJOOHYUN/MonoGlyph",
      liveUrl: "https://www.youtube.com/watch?v=NnAXeprRV0w",
      liveLabel: "시연 영상",
      status: { label: "시연 영상", live: false },
    },
    {
      id: "typonic",
      title: "Typonic",
      tagline: "AI 기반 코드/커스텀 타자 연습 플랫폼",
      period: "2025.04 – 2025.11",
      team: "4인 팀 (FE 2명, BE 2명)",
      role: "Figma 시안을 기반으로 반응형 화면을 구현했고, 특히 키보드 입력마다 화면이 즉시 갱신돼야 하는 타자 연습 특성상 불필요한 리렌더링을 줄이는 상태 최적화 로직을 직접 작성했습니다.",
      overview:
        "사용자 친화적인 UI/UX를 통해 누구나 손쉽게 코드 및 커스텀 텍스트 연습이 가능한 AI 기반 타자 연습 웹 플랫폼입니다.",
      features: [
        "실시간 타자 상태 관리 및 상호작용: 키보드 입력에 맞춰 타자 속도, 오타율을 실시간 계산하고 지연 없이 렌더링하도록 상태 최적화",
        "픽셀 퍼펙트 반응형 UI: Figma 디자인을 바탕으로 Tailwind CSS로 다양한 디바이스에 맞는 반응형 UI 구현",
        "맞춤형 연습 데이터 렌더링: 서버에서 받은 코딩 연습용 텍스트 데이터를 연습하기 편한 UI 컴포넌트로 구조화",
        "AI 툴링을 통한 생산성 향상: AI 코딩 도구로 반복적인 레이아웃·보일러플레이트 코드 생성 자동화",
      ],
      learnings:
        "빠른 키보드 입력에도 화면이 즉각적으로 업데이트되어야 했기에, 불필요한 리렌더링을 줄이며 React 상태를 효율적으로 관리하고 렌더링을 최적화하는 경험을 쌓았습니다. AI 에이전트로 확보한 시간을 타이핑 시각적 피드백과 UI/UX 디테일을 다듬는 데 투자했습니다.",
      achievement: "학과 최우수 프로젝트 선정",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "Figma"],
      image: "/projects/Typonic_img.png",
      icon: "/projects/Typonic_icon.png",
      githubUrl: "https://github.com/JEONJOOHYUN/Typonic-Front",
      liveUrl: "https://www.youtube.com/watch?v=EQWMjf3YXiU",
      liveLabel: "시연 영상",
      status: { label: "시연 영상", live: false },
    },
  ],

  // 시작 시기 순. 카드가 없는 이력(Zombuilder·StudySwipe·Wishes)은 icon 으로 로고를 준다.
  timeline: [
    {
      id: "timeline-zombuilder",
      period: "2024.10 – 2024.11",
      title: "Zombuilder",
      organization: "팀 프로젝트 (4인) · 나의 첫 프론트엔드 프로젝트",
      description:
        "PC 해상도 기준 화면 레이아웃 구축과 게임 아이템 데이터의 컴포넌트 렌더링을 전담했습니다. 학과 최우수 프로젝트 선정.",
      type: "project",
      icon: "/projects/Zombuilder_icon.png",
    },
    {
      id: "timeline-monoglyph",
      period: "2025.04 – 2025.11",
      title: "MonoGlyph",
      organization: "팀 프로젝트 (3인) · AI 모델 리서치 및 초기 화면 설계",
      description:
        "MX-Font·DeepVecFont 등 폰트 생성 모델을 조사·비교하고, 초기 화면과 관리자 페이지의 틀을 만들어 팀원에게 넘겼습니다. 2025 한이음 드림업 공모전 창의도전형 장려상 수상.",
      type: "project",
      projectId: "monoglyph",
    },
    {
      id: "timeline-typonic",
      period: "2025.04 – 2025.11",
      title: "Typonic",
      organization: "팀 프로젝트 (4인) · 프론트엔드 UI/UX 구현",
      description:
        "Figma 기반 반응형 화면 구현과 실시간 타자 입력 상태 최적화 로직을 담당했습니다. 학과 최우수 프로젝트 선정.",
      type: "project",
      projectId: "typonic",
    },
    {
      id: "timeline-studyswipe",
      period: "2025.08 – 2025.10",
      title: "StudySwipe",
      organization: "팀 프로젝트 (4인) · 모바일 프론트엔드 개발",
      description:
        "React Native 기반 프론트엔드 아키텍처 설계와 동적 설문조사 로직(상태 관리)을 구현했습니다. 학과 최우수 프로젝트 선정.",
      type: "project",
      icon: "/projects/StudySwipe_icon.png",
    },
    {
      id: "timeline-maple-dashboard",
      period: "2026.08 – 진행 중",
      title: "메이플 대시보드",
      organization: "개인 프로젝트 · 기획·개발·운영",
      description:
        "계산기·썬데이 예측·회원 숙제 현황과 보스 수익·관리자 화면까지, 매일 쓰며 직접 운영하는 메이플 도구 사이트입니다.",
      type: "project",
      projectId: "maple-dashboard",
    },
    {
      id: "timeline-wishes",
      period: "2026.10",
      title: "Wishes",
      organization: "개인 프로젝트 · 축의금 방명록 태블릿 앱",
      description: "가족 결혼식에서 실사용(태블릿 3대, 하객 기록 222건).",
      type: "project",
      icon: "/projects/Wishes_icon.png",
    },
    {
      id: "timeline-nyamnyam-canvas",
      period: "2026.10 – 2026.11",
      title: "냠냠캔버스",
      organization: "졸업작품(캡스톤디자인 2) · 2인 팀 팀장",
      description:
        "로드셀 저울로 아이가 먹은 양을 재 그림이 자라게 하는 식습관 앱과 ESP32 펌웨어를 만들고 저울을 직접 조립·보정했습니다.",
      type: "project",
      projectId: "nyamnyam-canvas",
    },
  ],
};
