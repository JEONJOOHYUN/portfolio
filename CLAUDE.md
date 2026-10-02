@AGENTS.md

# portfolio

개인 포트폴리오 (Next.js 16). 상위 지침 `C:\dev\CLAUDE.md` 와 함께 적용된다 — 서로 부딪히면 이 파일이 우선한다.
**작업을 시작하기 전에 `.agents/handoff.md` 를 먼저 읽는다.**

## 반드시 지킬 것

- 문구·데이터는 `data/portfolio.ts` 에만 둔다. 컴포넌트에 콘텐츠를 직접 쓰지 않는다.
- 애니메이션은 CSS 만 쓴다(`animate-rise` / `animate-sheen` / `animate-ping-soft`, 스크롤 등장은 `data-reveal`).
  Framer Motion 같은 애니메이션 라이브러리를 다시 넣지 않는다(무게를 줄이려고 2026-10-02 에 걷어냈다).
- `data-reveal` 은 transition·transform·opacity 유틸리티가 없는 래퍼 요소에만 붙인다.
- Navbar 섹션 링크는 `/#section` 형태의 일반 `<a>` 를 유지한다. next/link 로 바꾸면 /pdf 에서 돌아올 때 스크롤이 깨진다.
- 화면 변경은 모바일(375px)·데스크톱, 라이트·다크를 모두 확인한다. 화면 문구는 한국어.
- `AGENTS.md` 는 `next dev` 가 다시 쓰는 파일이라 수정하지 않는다. 규칙은 이 파일에 추가한다.
- 이 저장소는 공개다. `.agents/handoff.md` 에는 기술 내용만 쓰고, 면접·지원 회사 정보는 `C:\dev\handoff.md` 에 둔다.
- 작업이 끝나면 `.agents/handoff.md`(와 필요하면 `C:\dev\handoff.md`)를 갱신한다.
