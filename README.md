# 안녕하세요, 전주현입니다 👋

> 직접 쓰는 서비스를 만들고 운영하며, AI 도구와 함께 UI 디테일과 상태 관리를 다듬는 프론트엔드 개발자입니다.

이 저장소는 제 개인 포트폴리오 사이트의 소스 코드입니다.

<p>
  <a href="https://portfolio-eight-omega-91.vercel.app"><img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" /></a>
  <a href="https://github.com/JEONJOOHYUN"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="mailto:jeonjh0321@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

## 🧑‍💻 About Me

Orca 한 화면에 여러 프로젝트를 띄워 두고 Claude Code와 Codex를 함께 쓰며 개발합니다. Claude Code가 프로젝트 지침(CLAUDE.md)에 맞춰 코드를 쓰면, 커밋 전에 Codex의 리뷰를 받아 지적 사항을 직접 판단해 반영하고 lint·build·브라우저 확인을 거쳐 배포합니다. 에이전트가 코드를 쓰는 동안 저는 무엇을 만들지 정하고, 결과가 설계 의도에 맞는지 검토하며, 상태 관리와 UI/UX 디테일을 다듬는 데 집중합니다.

React·React Native 팀 프로젝트에서 프론트엔드 구조 설계와 구현을 맡아 왔고, OpenAI API 등 AI 기술을 화면과 연결하는 작업을 즐깁니다. AI 모델과 백엔드가 만든 데이터를 프론트엔드가 어떻게 안전하고 효율적으로 주고받을지 함께 고민합니다.

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <br/>
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI_API-412991?style=flat-square&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" />
  <br/>
  <img src="https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=claude&logoColor=white" />
  <img src="https://img.shields.io/badge/Codex-000000?style=flat-square&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/Orca-1F2937?style=flat-square" />
</p>

## 📂 Projects

| 프로젝트 | 한 줄 소개 | 기술 스택 | 링크 |
| --- | --- | --- | --- |
| **메이플 대시보드** | 계산기부터 썬데이 예측·숙제 현황까지, 매일 쓰며 키운 메이플 도구 사이트 (개인 · 운영 중) | Next.js · Supabase · NEXON Open API · CLOVA OCR | [GitHub](https://github.com/JEONJOOHYUN/maple-dashboard) · [사이트](https://maple-dashboard-eta.vercel.app/) |
| **냠냠캔버스** | 먹은 만큼 그림이 자라는 아이 식습관 앱과 ESP32 무게 저울 (졸업작품 · 2인 팀장) | Next.js · Supabase Realtime · ESP32 · Arduino | [GitHub](https://github.com/JEONJOOHYUN/nyamnyam-canvas) · [체험해 보기](https://nyamnyam-canvas.vercel.app/demo) |
| **MonoGlyph** | AI로 나만의 스타일 폰트를 만드는 웹 서비스 (3인 팀) | React · TypeScript · Tailwind CSS | [GitHub](https://github.com/JEONJOOHYUN/MonoGlyph) · [시연 영상](https://www.youtube.com/watch?v=NnAXeprRV0w) |
| **Typonic** | AI 기반 코드/커스텀 타자 연습 플랫폼 (4인 팀) | Next.js · React · Tailwind CSS | [GitHub](https://github.com/JEONJOOHYUN/Typonic-Front) · [시연 영상](https://www.youtube.com/watch?v=EQWMjf3YXiU) |

각 프로젝트를 만들며 무엇을 했는지, 어떤 걸 배웠는지는 [포트폴리오 사이트](https://portfolio-eight-omega-91.vercel.app)의 프로젝트 카드를 클릭하면 자세히 볼 수 있습니다.

## 🖥️ 이 사이트는 이렇게 만들었어요

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — `dark:` variant를 `next-themes`의 `.dark` 클래스에 맞춰 커스텀 설정
- **순수 CSS 애니메이션** — 등장(rise)·빛 훑기(sheen)·맥박(ping) 키프레임과 IntersectionObserver 스크롤 등장. 애니메이션 라이브러리 없이 JS 번들을 가볍게 유지
- **반응형** — `clamp()` 유동 타이포, 모바일 햄버거 메뉴·바텀시트 모달, 대표 카드 1장 + 3열 프로젝트 카드
- **디테일** — 누르는 곳 40px 이상, 누를 때 0.96 축소, 테마 전환 때 전환 끄기, 움직임 줄이기 존중, 문장 `text-pretty`·제목 `text-balance`
- **next-themes** — 깜빡임 없는 다크모드/라이트모드 토글
- **Paperlogy** 폰트를 `next/font/local`로 self-host (Thin~Black 9단계 굵기 전부 등록)
- **Vercel**에 배포, GitHub `main` 브랜치에 push할 때마다 자동 재배포

---

<sub>이 README와 사이트는 Claude Code와 함께 만들었습니다.</sub>
