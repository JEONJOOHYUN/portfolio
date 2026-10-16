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
  /** 카드 왼쪽 위 작은 배지 문구 (예: "운영 중") */
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
  featured?: boolean;
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
    gpa: "4.21 / 4.5", // TODO: 실제 학점으로 교체해 주세요.
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
      tagline: "제가 직접 사용하는 메이플 유틸리티 사이트",
      period: "2026.08 - 진행중",
      team: "개인 프로젝트 (1인 기획·개발, 실사용 중 계속 기능 추가)",
      role: "기획부터 UI/UX, 프론트엔드 구현, Supabase 연동, 배포까지 혼자 전 과정을 담당했습니다. 예를 들어 배포 직후 응답이 느려지는 문제를 발견했을 때 Vercel 함수와 Supabase 리전이 다르다는 걸 직접 찾아내 리전을 맞추고 DB 조회를 캐싱해서 해결했습니다.",
      overview:
        "메이플스토리 부주(사냥 대행) 사냥 수익을 기록하고, 실시간 시세로 정산 금액을 자동 계산해주는 개인용 대시보드입니다. 제가 실제로 매일 사용하면서 여러 메이플 관련 도구를 탭으로 계속 추가하고 있고, 현재 '부주 정산'과 '보스 분배금 계산기' 두 가지 도구가 있습니다.",
      features: [
        "부주 정산: 일일 사냥 기록을 누적 저장하고 실시간 시세를 반영해 정산 금액을 자동 계산 (인센티브 메소 지급 기능 포함)",
        "보스 분배금 계산기: 아이템 판매액을 파티원끼리 나눌 때 수수료까지 반영해 분배금을 자동 계산, 여러 아이템 동시 등록 지원",
        "여러 부주 관리: 관리자 페이지에서 부주를 추가·관리하고 인원별 기록을 탭으로 구분",
        "배포 후 렌더링 지연 문제 해결: Vercel 함수와 Supabase 리전이 달라 응답이 느려지는 걸 확인하고, 함수 리전을 서울(icn1)로 고정 + 정산 페이지 DB 조회를 태그 기반으로 캐싱해 응답 속도를 개선",
        "UI/UX 리뉴얼: shadcn/ui를 도입해 버튼·확인 모달 등 디자인 시스템을 통일하고, 보스 분배금 모바일 레이아웃과 다크모드 입력 버그를 수정",
        "디테일 수정: 일일 사냥 기록의 '오늘' 날짜가 한국 시간(KST) 기준으로 정확히 잡히도록 수정",
      ],
      learnings:
        "제가 실제로 매일 쓰는 도구라서, 배포 후 렌더링이 느리다는 걸 직접 체감하고 바로 원인을 찾아 서버 리전과 캐싱 구조를 고쳤습니다. 같은 날짜에 재저장할 때 기본은 '더하기'로 처리하고 덮어쓰기는 별도 버튼으로 분리하는 등, 쓰면서 불편했던 부분을 그때그때 반영해 UX를 계속 다듬고 있습니다. 이후 shadcn/ui를 도입해 버튼·모달 같은 반복 UI를 컴포넌트 기반 디자인 시스템으로 정리했고, 모바일에서 직접 써보며 레이아웃 깨짐과 시간대(KST) 버그도 잡았습니다. Next.js Server Actions와 Supabase를 조합해 프론트엔드에서 DB까지 직접 다루며 풀스택 구조와 배포 환경에 대한 이해를 넓혔습니다.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "next-themes"],
      image: "/projects/MapleDashboard_img.png",
      icon: "/projects/MapleDashboard_icon.jpg",
      githubUrl: "https://github.com/JEONJOOHYUN/maple-dashboard",
      liveUrl: "https://maple-dashboard-eta.vercel.app/",
      liveLabel: "사이트 보기",
      status: { label: "운영 중", live: true },
    },
    {
      id: "wishes",
      title: "Wishes",
      tagline: "가족 결혼식에서 실제로 쓴 축의금 방명록 태블릿 앱",
      period: "2026.10",
      team: "개인 프로젝트 (1인 기획·개발, 가족 결혼식에서 실사용, 지금도 사용 중)",
      role: "기획부터 화면, Supabase 데이터 설계, 배포까지 혼자 맡았습니다. 결혼식 당일 태블릿 3대가 같은 기록을 동시에 다루는 상황을 전제로, 동시 수정 충돌·네트워크 끊김·중복 번호 같은 실수를 화면과 데이터 양쪽에서 막는 데 집중했습니다.",
      overview:
        "결혼식 축의금 데스크에서 방명록 번호·이름·금액·식권을 태블릿으로 기록하는 웹앱입니다. 가족 결혼식에서 신랑측·신부측 태블릿 3대로 손님 약 300명을 기록했고, 행사 뒤에는 엑셀로 내보내 정리했고, 지금도 가족이 계속 쓰고 있습니다. 손님 이름과 금액이 담긴 서비스라 저장소와 사이트는 비공개이며, 여기의 화면은 실제 손님 정보 대신 가짜 데이터로 만든 것입니다.",
      features: [
        "여러 태블릿 실시간 동기화: Supabase Realtime으로 다른 태블릿의 입력·수정·삭제를 바로 반영하고 새로 바뀐 항목을 강조",
        "동시 수정 충돌 방지: 수정 화면을 연 시점의 updated_at을 기준으로 조건부 업데이트해, 다른 태블릿이 먼저 고친 기록을 덮어쓰지 않고 최신 내용을 안내",
        "오프라인 대기열: 식장 와이파이가 끊겨도 새 기록을 기기에 보관했다가 연결되면 자동으로 다시 보내고, 클라이언트에서 만든 UUID로 중복 저장을 방지",
        "빠른 입력: 낙관적 업데이트, 번호 자동 채움과 중복 번호 경고, 만원/원 단위 금액 입력, 한글 입력 중에도 동작하는 초성 검색",
        "PIN 로그인 잠금: 5회 실패 시 10분 잠금, 검증 전에 시도 횟수를 원자적으로 올려 병렬 요청으로 우회하지 못하게 처리",
        "정리·내보내기: 신랑측/신부측 합계와 빠진 번호, 계좌이체 손님 분리, 구분(아빠/엄마/형)별 엑셀·CSV 내보내기",
      ],
      learnings:
        "실제 행사에서 여러 사람이 동시에 쓰는 서비스라 '저장되지 않았는데 저장된 것처럼 보이면 안 된다'는 원칙을 세우고, 저장 중·저장됨·저장 대기 상태를 항상 화면에 보여주도록 설계했습니다. 수정 충돌 검사의 기준값을 실시간으로 계속 바뀌는 목록 값으로 잡아 검사가 무력화되던 버그를 직접 겪고, 수정 화면을 연 시점의 값으로 고정해 해결하면서 실시간 데이터와 낙관적 업데이트가 함께 있을 때의 상태 관리를 깊이 이해하게 됐습니다.",
      achievement: "가족 결혼식에서 태블릿 3대로 손님 약 300명 기록 (실사용)",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Realtime", "ExcelJS", "Vitest"],
      image: "/projects/Wishes_img.png",
      icon: "/projects/Wishes_icon.png",
      status: { label: "사용 중 · 비공개", live: true },
    },
    {
      id: "monoglyph",
      title: "MonoGlyph",
      tagline: "AI로 나만의 스타일 폰트를 만드는 웹 서비스",
      period: "2025.04 - 2025.11",
      team: "3인 팀 프로젝트",
      role: "프론트엔드 아키텍처 설계와 화면 구현을 맡았고, AI·오픈소스 폰트 생성 기술을 리서치해 백엔드와 어떻게 연동할지 방향을 잡는 역할도 했습니다. 폰트 생성처럼 오래 걸리는 작업에서 사용자가 이탈하지 않도록 진행 상태 UI와 에러 처리를 직접 설계했습니다.",
      overview:
        "사용자가 원하는 스타일의 폰트를 손쉽게 생성하고 조작할 수 있도록, 직관적인 UI/UX와 AI 기술을 결합한 맞춤형 폰트 생성 웹 서비스입니다.",
      features: [
        "AI 및 오픈소스 생태계 리서치: 다양한 폰트 생성 모델과 FontForge 등의 오픈소스를 조사해 프론트엔드와의 최적 연동 파이프라인을 구상",
        "비동기 데이터 처리 및 상태 관리: OpenAI API 및 백엔드 딥러닝 모델과 통신해 생성된 이미지·TTF 변환 데이터를 프론트엔드 상태로 안전하게 관리",
        "사용자 맞춤형 UI/UX 구현: 텍스트 입력부터 폰트 생성 결과까지 직관적으로 확인·조작할 수 있는 반응형 화면 설계 및 구현",
        "UX 최적화: 무거운 폰트 생성 작업 중 이탈을 막기 위한 진행 상태 로딩 UI 및 에러 핸들링 도입",
      ],
      learnings:
        "단순히 화면을 그리는 것을 넘어, 백엔드의 AI 모델과 프론트엔드가 어떻게 데이터를 주고받아야 효율적인지 깊이 고민할 수 있었습니다. 무거운 비동기 응답 대기 시간을 처리하고 복잡한 상태를 관리하는 과정에서 Claude 에이전트를 적극 활용해 UI 컴포넌트 개발 시간을 단축하고 로직을 최적화했습니다.",
      achievement: "2025 한이음 드림업 공모전 창의도전형 장려상 수상",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Claude Agent", "Figma"],
      image: "/projects/Monoglyph_img.png",
      icon: "/projects/Monoglyph_icon.png",
      githubUrl: "https://github.com/JEONJOOHYUN/MonoGlyph",
      liveUrl: "https://www.youtube.com/watch?v=NnAXeprRV0w",
      liveLabel: "시연 영상",
      status: { label: "시연 영상", live: false },
      featured: true,
    },
    {
      id: "studyswipe",
      title: "StudySwipe",
      tagline: "AI 맞춤 설문으로 스터디를 매칭하는 모바일 앱",
      period: "2025.08 - 2025.10",
      team: "4인 팀 (FE 2명, BE 2명)",
      role: "React Native 기반 프론트엔드 아키텍처를 설계했고, 그중에서도 사용자 응답에 따라 질문이 바뀌는 동적 설문조사 로직을 상태 관리 중심으로 구현했습니다. AI API 응답 결과를 프론트엔드 상태로 안전하게 반영하는 부분을 집중적으로 맡았습니다.",
      overview:
        "사용자의 학습 수준에 맞는 최적의 스터디를 매칭하기 위해, AI를 활용한 맞춤형 설문과 동적 수준 평가 기능을 제공하는 크로스 플랫폼(iOS/Android) 모바일 앱입니다.",
      features: [
        "AI 기반 사용자 수준 파악: OpenAI API를 프론트엔드에 연동해 설문 응답을 바탕으로 학습 수준을 파악",
        "설문조사 점수 산출 및 매칭 데이터 처리: 항목별 내부 점수를 매기고 분류해 최적의 스터디원과 연결되도록 데이터 처리 및 UI 반영",
        "사용자 친화적인 UI/UX 개선: 모바일 환경에서 설문조사와 매칭 결과를 직관적으로 확인할 수 있도록 화면 컴포넌트 개선",
        "개발 생산성 향상: AI 에이전트로 React Native 기본 레이아웃 구성 시간을 단축하고 UI 디테일에 집중",
      ],
      learnings:
        "웹을 넘어 React Native를 다루며 모바일 환경 특유의 렌더링과 상태 관리를 깊이 경험할 수 있었습니다. AI API를 활용해 '사용자 응답에 따라 실시간으로 변하는 동적 UI'를 설계하며 복잡한 컴포넌트 구조와 비동기 데이터 처리에 대한 이해도를 크게 높였습니다.",
      achievement: "학과 최우수 프로젝트 선정",
      techStack: ["React Native", "TypeScript", "AI 수준 평가 API", "Git"],
      image: "/projects/StudySwipe_gif.gif",
      icon: "/projects/StudySwipe_icon.png",
      githubUrl: "https://github.com/JEONJOOHYUN/Study-Swipe-FE",
      liveUrl: "https://www.youtube.com/watch?v=2C50OdqgCNg&t=1s",
      liveLabel: "시연 영상",
      status: { label: "시연 영상", live: false },
    },
    {
      id: "typonic",
      title: "Typonic",
      tagline: "AI 기반 코드/커스텀 타자 연습 플랫폼",
      period: "2025.04 - 2025.11",
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
    {
      id: "zombuilder",
      title: "Zombuilder",
      tagline: "게임 유틸리티로 시작한 첫 프론트엔드 프로젝트",
      period: "2024.10 - 2024.11",
      team: "4인 팀 · 나의 첫 프론트엔드 프로젝트",
      role: "제 첫 프론트엔드 프로젝트로, PC 해상도 기준 화면 레이아웃을 만들고 수백 개의 게임 아이템 이미지·데이터를 컴포넌트로 렌더링하는 작업을 맡았습니다. 데이터를 코드에 직접 하드코딩하며 겪은 어려움 덕분에, 이후 프로젝트에서는 서버 분리와 컴포넌트 재사용을 더 신경 쓰게 됐습니다.",
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
      liveLabel: "시연 영상",
      status: { label: "시연 영상", live: false },
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
      projectId: "zombuilder",
    },
    {
      id: "timeline-monoglyph",
      period: "2025.04 - 2025.11",
      title: "MonoGlyph",
      organization: "팀 프로젝트 (3인) · 프론트엔드 개발 및 AI 기술 리서치",
      description:
        "프론트엔드 아키텍처 설계, UI/UX 구현, AI·오픈소스 리서치 및 API 연동을 전담했습니다. 2025 한이음 드림업 공모전 창의도전형 장려상 수상.",
      type: "project",
      projectId: "monoglyph",
    },
    {
      id: "timeline-typonic",
      period: "2025.04 - 2025.11",
      title: "Typonic",
      organization: "팀 프로젝트 (4인) · 프론트엔드 UI/UX 구현",
      description:
        "Figma 기반 반응형 화면 구현과 실시간 타자 입력 상태 최적화 로직을 담당했습니다. 학과 최우수 프로젝트 선정.",
      type: "project",
      projectId: "typonic",
    },
    {
      id: "timeline-studyswipe",
      period: "2025.08 - 2025.10",
      title: "StudySwipe",
      organization: "팀 프로젝트 (4인) · 모바일 프론트엔드 개발",
      description:
        "React Native 기반 프론트엔드 아키텍처 설계와 동적 설문조사 로직(상태 관리)을 구현했습니다. 학과 최우수 프로젝트 선정.",
      type: "project",
      projectId: "studyswipe",
    },
  ],
};
