# Hanatour Design System Skill (Agent-Ready) 🚀

이 프로젝트는 하나투어의 브랜드 아이덴티티를 프론트엔드 프로젝트에 즉시 적용할 수 있도록 설계된 **AI 에이전트 최적화 디자인 시스템**입니다.

## ⚡️ Quick Start (CLI One-liner)

어떤 프론트엔드 프로젝트에서든 아래 한 줄로 즉시 하나투어 디자인 시스템을 구축할 수 있습니다.

```bash
npx github:yoonzzan/hanatour-design-system
```

## 📂 파일 구성 안내

- **`resources/`**: 디자인 시스템의 핵심 리소스 (컴포넌트, 가이드라인, 테마 설정)
- **`scripts/`**: 자동 설치 및 구성을 담당하는 유틸리티 스크립트
- **`SKILL.md`**: Antigravity 및 기타 AI 에이전트를 위한 작업 지침서
- **`package.json`**: `npx` 및 명령 실행을 위한 패키지 설정

## 🛠 npx 설치 시 내부 동작 프로세스 (Under the Hood)

AI 에이전트 코딩을 위해 `npx`로 설치할 때 내부적으로는 다음과 같은 **자동화 공정**이 진행됩니다.

1.  **다운로드 및 환경 조성**: `npx`가 GitHub에서 최신 코드를 임시 디렉토리에 다운로드하고 실행 환경을 구성합니다.
2.  **프로젝트 구조 감지**: 유저 프로젝트의 `src/components` 또는 `components` 폴더 위치를 자동으로 탐색합니다.
3.  **컴포넌트 주입**: `resources/hanatour-components/` 내의 모든 React 컴포넌트(8종)를 해당 폴더로 복사합니다.
4.  **Tailwind 테마 병합**: 기존 `tailwind.config` 파일을 분석하여 하나투어 전용 토큰(`ht-` 접두사)을 `theme.extend` 블록에 지능적으로 병합합니다. (기존 설정은 유지)
5.  **완료 보고**: 설치 성공 메시지를 출력하며, 이후 개발자는 즉시 컴포넌트를 import하여 사용할 수 있습니다.

## 🤖 AI 에이전트 활용 (Cursor, Claude, Copilot 등)

이 저장소를 AI 에디터의 컨텍스트로 제공하거나, `resources/hanatour-design-system.md`를 학습시킨 후 코드를 생성하게 하세요. 자세한 가이드는 [resources/README.md](./resources/README.md)를 참고하세요.

---

🔥 **Hanatour Design System - Premium Travel Experience in Your Code.**
