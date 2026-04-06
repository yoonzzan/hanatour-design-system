# CLAUDE.md — 하나투어 프로젝트 AI 개발 규정

> 이 파일은 Claude Code(Antigravity), Cursor, GitHub Copilot 등 AI 코딩 도구가
> 코드를 생성할 때 **반드시** 참조해야 하는 프로젝트 규정입니다.

### 📝 AI 작업 시작 및 기록 규정 (필수)
- **로그 읽기 (시작)**: 어떤 작업을 시작하기 전, 반드시 [`PROGRESS.md`](./PROGRESS.md)를 읽어 과거의 시행착오와 현재 진행 상황을 파악하여 실수를 반복하지 않습니다.
- **로그 기록 (종료)**: 주요 기능을 구현했거나 새로운 오류를 해결하여 교훈을 얻었을 때, **반드시** `PROGRESS.md`의 타임라인을 업데이트하고 교훈(Mistake Bank) 섹션에 기록을 남깁니다.

---

## 디자인 시스템

이 프로젝트는 **하나투어 공식 컬러 시스템(2026)**을 따릅니다.

- 전체 컬러 명세: `./hanatour-design-system.md`
- CSS Custom Properties: `./hanatour-colors.css`
- TypeScript 상수: `./hanatour-colors.ts`
- Design Tokens(JSON): `./hanatour-colors.json`
- HTML/React 컴포넌트 예시: `./hanatour-components.html`
- **배포 패키지 (Vibe-coding)**: `./hanatour-design-system/`

---

## 색상 사용 규칙 (AI 필수 준수)

### ✅ 반드시 해야 할 것

| 항목 | 규칙 |
|-----|------|
| **브랜드 색상** | `hanatour-design-system.md` 또는 `hanatour-colors.ts`에 정의된 HEX 값만 사용 |
| **CSS 변수** | 웹 프로젝트에서는 `--ht-` 접두사 CSS 변수 사용 (`hanatour-colors.css` 참조) |
| **배경** | White(`#FFFFFF`), Bright Gray(`#EEEEF0`), Bright Beige(`#F6F1E8`) 우선 |
| **CTA 버튼** | Master Purple(`#5E2BB8`) 또는 Accent Yellow(`#FFE338`) |
| **본문 텍스트** | Deep Gray(`#313339`) 또는 Black(`#000000`) |
| **보조 텍스트** | Slate Gray(`#53565F`) |

### ❌ 절대 하지 말 것

- 시스템에 없는 임의의 보라/민트 색상 코드 사용
- `red`, `blue`, `green` 등 원색 계열 임의 사용
- Gray 계열을 임의 지정 (`#888`, `#ccc` 등) — 반드시 Neutral 팔레트 사용
- Mint(`#08D1D9`) 배경에 White 텍스트 무조건 사용 (가독성 검토 필요)

---

## 콘텐츠 유형별 색상 조합

코드 생성 시 콘텐츠 성격에 맞는 테마를 선택하세요:

```
default  → #5E2BB8 + #08D1D9  (일반 서비스 UI)
soft     → #7D4BDC + #70DCE6  (봄/설렘 여행)
active   → #6E2DD2 + #00CFE5  (액티비티/에너지)
eco      → #8A75D0 + #50B4C8  (친환경/웰니스)
urban    → #541CB8 + #08CDDE  (MZ/도시 감성)
friendly → #540099 + #00C9D4  (가족 여행)
premium  → #31007B + #00768F  (럭셔리/프리미엄)
```

---

## 코드 스타일

- **언어**: TypeScript 우선, 필요시 JavaScript
- **CSS**: Vanilla CSS 또는 CSS Modules, Tailwind 사용 시 `hanatour-colors.ts`의 `hanatourTailwindColors` 적용
- **컴포넌트**: 함수형 컴포넌트 + React Hooks
- **네이밍**: camelCase (변수/함수), PascalCase (컴포넌트), kebab-case (CSS 클래스)

---

## 브랜드 이미지 방향

| 이미지 방향 | 설명 | 주요 컬러 |
|-----------|------|---------|
| Professional | 신뢰, 전문성, 격조 | Purple 계열, Premium |
| Inspirational | 설렘, 영감, 새로운 경험 | Mint 계열, Active/Soft |
| Warm-hearted | 따뜻함, 공감, 함께 | Friendly, Eco, Beige 계열 |

---

## 🤖 AI 전용 스킬 및 배포 (Vibe-Coding)

이 프로젝트는 AI 에이전트가 스스로를 가이드할 수 있는 **AI 전용 스킬**을 포함하며, 기획자를 위한 원클릭 배포를 지원합니다.

### 📦 배포 구성
- **패키지 위치**: `./hanatour-design-system/`
- **자동 설치**: `./hanatour-design-system/setup.sh` (다중 에이전트 경로 지원)
- **스킬 정의**: `./hanatour-design-system/ai-skill/hanatour-design-system/SKILL.md`

### 🛠 AI 행동 강령 (AI 필수 준수)
1. **스킬 학습**: AI는 작업을 시작할 때 반드시 `SKILL.md`를 읽고 하나투어의 시각 가이드와 컴포넌트 활용법을 숙지해야 합니다.
2. **레고식 조립**: 새로운 UI 제작 시 `hanatour-components/`의 기존 React 조각들을 먼저 확인하고 최우선으로 재사용합니다.
3. **토큰 기반 스타일링**: 모든 스타일은 `tailwind.config.js`에 정의된 토큰 이름을 사용합니다. (예: `bg-ht-master-purple`, `text-ht-deep-gray`)
4. **설치 지원**: 기획자가 설치 문의 시 `git clone [REPO_URL] && cd hanatour-design-system && ./setup.sh` 한 줄 명령어를 안내합니다.
