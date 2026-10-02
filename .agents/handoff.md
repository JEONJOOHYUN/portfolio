# Handoff — portfolio

마지막 갱신: 2026-10-02

## Current Goal

배포가 끝난 개인 포트폴리오(취업 지원용). **지금 당장 해야 할 일은 없다.**
아래 `TODO` 는 사용자 확인이 필요한 콘텐츠 항목이다.

## 구조

- Next.js 16 App Router + React 19 + TypeScript + Tailwind v4. `src/` 없이 루트에
  `app/ components/ data/ styles/ fonts/ public/`.
- **콘텐츠는 전부 `data/portfolio.ts`** (hero / about / projects / timeline). 컴포넌트에 문구를 직접 쓰지 않는다.
- 라우트: `/` 원페이지(Hero → About → Projects → Experience), `/pdf` 클릭 없이 다 펼친 인쇄·PDF판.
- 이미지: `public/projects/<Name>_img.(png|gif)` + `<Name>_icon.(png|jpg)`, 프로필 `public/IdPhoto.jpg`.
- 배포: `main` 푸시 → Vercel 자동 배포 → https://portfolio-eight-omega-91.vercel.app

## Fixed Decisions

- **폰트**: Paperlogy 9굵기 self-host (`fonts/Paperlogy`, `next/font/local`, 변수 `--font-paperlogy`) + 한글 폴백 스택.
  예전 Geist 는 한글 글리프가 없어 배포 후 tofu(□)가 났다.
- **다크모드**: next-themes `attribute="class"` + Tailwind v4 `@custom-variant dark (&:where(.dark, .dark *))`.
- **한글 줄바꿈**: body 에 `word-break: keep-all` ("전주현입니/다." 같은 음절 단위 끊김 방지).
- **반응형 (2026-10-02, gfactory.ai 참고)**: 제목 `clamp()` 유동 크기, 모바일 원형 햄버거 + 48px 메뉴 항목,
  주요 버튼 h-12, 프로젝트 카드는 모바일=이미지 위·글 아래 / sm↑=오버레이, 첫 카드(메이플)는 2칸 대표 카드
  (`wide`, 5장이 2열을 꽉 채우도록), 상세 모달은 모바일 바텀시트.
- **애니메이션은 순수 CSS (2026-10-02, maple-mvp.com 참고)** — Framer Motion 제거로 JS(gzip) 240KB → 200KB.
  - `styles/globals.css` 의 `@theme`: `animate-rise`(등장) / `animate-sheen`(빛 훑기, hover) / `animate-ping-soft`(상태 점).
  - 스크롤 등장: 요소에 `data-reveal` (지연은 `style={{ "--d": "80ms" }}`), `app/page.tsx` 맨 끝의
    `<RevealObserver/>` 가 IntersectionObserver 로 `data-revealed` 를 붙인다.
    숨김은 `html.reveal-ready` 일 때만 → JS 가 없거나 실패해도 콘텐츠는 보인다. 로드 시 이미 화면 안인 요소는 바로 표시.
  - `data-reveal` 은 transition/transform/opacity 유틸리티가 **없는 래퍼에만** 붙인다(전역 규칙이 레이어 밖이라 덮어씀).
    예: `ProjectCard` 는 바깥 div 에 reveal, 안쪽 button 에 hover 모션.
  - `prefers-reduced-motion` 존중, 인쇄 시 reveal 요소 강제 표시.
  - reveal 요소 안의 `absolute` 자식은 **그 reveal 요소 자신을 기준(`relative`)으로** 배치한다. 애니메이션 중 `transform` 이
    붙으면 그 요소가 기준 상자가 돼, 바깥 기준으로 배치한 자식이 잠깐 튄다(경력 타임라인 아이콘 버그, 2026-10-02 수정).
- **ProjectModal**: `entered`(마운트 다음 프레임에 true) / `closing` 두 상태로 CSS transition 제어, 220ms 뒤 언마운트.
  과거 Framer `AnimatePresence` 의 exit 가 끝나지 않아 모달이 안 닫히던 버그가 있었다.
- **Navbar 섹션 링크는 `/#about` 형태의 일반 `<a>`**. next/link 는 다른 페이지(/pdf)에서 넘어올 때 해시로 스크롤하지 않는다.
  `/pdf` 링크만 `<Link>`.
- **ScrollToHash**: Next 가 하이드레이션 뒤 스크롤을 리셋해 `/#projects` 진입 위치를 잃는 문제 보정.
  `behavior: "instant"` — 전역 `scroll-behavior: smooth` 때문에 `"auto"` 를 주면 애니메이션이 돼 버린다.
- **/pdf**: 화면에서는 다크모드를 따르고, 인쇄할 때는 `.pdf-page` 규칙으로 항상 밝게. Navbar/Footer 는 `print:hidden`.
- **Hero 상태 배지**: `hero.status` ("새로운 기회를 찾고 있어요") + 초록 ping 점. 취업이 되면 문구를 바꾸거나 지운다.
- shadcn/ui 미도입 — 도입 기준은 `C:\dev\CLAUDE.md` 3절.

## TODO (사용자 확인 필요 — `data/portfolio.ts` 의 `// TODO` 주석)

- `hero.name` "전주현": 노션에 이름이 없어 GitHub ID 로 추정. 사용자가 이후 정정하지 않음 → 확인되면 TODO 주석 제거.
- `hero.tagline`, `about.summary`: Claude 가 쓴 초안. 본인 문장으로 다듬기를 권했다.
- `hero.location` "South Korea": 임시값.
- `about.gpa` "4.21 / 4.5": 사용자가 직접 입력함. TODO 주석만 남아 있어 지워도 된다.

## Known Issues / 함정

- 미리보기 창이 숨겨져 있거나 탭이 뒤에 있으면 rAF·IntersectionObserver·transition·스크린샷이 전부 멈춘다.
  reveal·모달이 "안 된다"고 착각하기 쉽다 → `tabs_context` 로 창 상태부터 확인.
  창 없이 확인하려면 `data-revealed` 속성과 `el.getAnimations().forEach(a => a.finish())` 뒤의 opacity 를 본다.
- 오래 디버깅한 미리보기 탭은 HMR 상태가 꼬여 없는 변수 에러가 날 수 있다 → 새 탭으로 확인.
- Vercel 해시가 붙은 배포 주소(`portfolio-xxxx-joohyun.vercel.app`)는 로그인이 필요하다. 공개 주소는 위의 eight-omega 주소.
- 개발 콘솔의 `next/image` IdPhoto 경고("width or height modified")는 동작과 무관.

## 검증

1. `npm run lint` + `npm run build`
2. 미리보기 portfolio-dev(:3000)에서 375px·데스크톱, 라이트·다크 확인:
   모바일 메뉴 열기, 카드 클릭 → 모달(Esc·배경·X 닫기), `/pdf` 이동 후 이름·메뉴로 홈 복귀.
3. 커밋 → 푸시(= Vercel 자동 배포) → 공개 주소에서 확인.

## 세션 기록

- 2026-08-19 초기 구축(Next.js + Tailwind + next-themes), Vercel 배포, 노션 프로젝트 내용 이전.
- 2026-08-20 Paperlogy 폰트, 한글 tofu 수정, 연락처 정리(LinkedIn 제거·전화 추가), 경력 타임라인에 프로젝트 로고.
- 2026-08-29 메이플 대시보드 항목·실제 스크린샷 추가.
- 2026-09-07 메이플 최신 작업 반영, README 자기소개로 교체, "나의 역할"을 면접에서 말하는 문장으로 개편,
  `/pdf` 인쇄판(다크모드, 홈 복귀 링크 수정, 버튼 위치).
- 2026-09-08 Typonic 기술스택을 저장소 기준 Next.js·TypeScript 로 정정.
- 2026-10-02 반응형 개편(gfactory.ai), Framer Motion 제거 → CSS 애니메이션(maple-mvp.com), 2칸 대표 카드,
  상태 배지, 인수인계 구조 도입.
- 2026-10-02 경력 타임라인 아이콘이 스크롤 등장 중 튀던 문제 수정(아이콘을 `<li>` 기준으로 배치).
