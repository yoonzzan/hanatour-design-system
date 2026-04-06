# 하나투어 디자인 스킬(Agent Skill) 패키징 구축 계획
  
사용자가 향후 어떤 프론트엔드 프로젝트 폴더에서든 "하나투어 디자인 가이드 적용해줘"라고 말하기만 하면, AI가 자동으로 환경(Tailwind 등)을 감지하고 템플릿 컴포넌트들을 이식해 주는 초자동화 스킬(Skill)을 구축합니다.

---

### 1. 스킬 시스템 구성
- 전역 설치 경로: `~/.gemini/antigravity/skills/hanatour-design-system`

### 2. SKILL.md (핵심 명령어 파일) 작성
- 프롬프트(명령서) 생성 
- **트리거 키워드**: "하나투어 디자인", "hanatour design", "하나투어 컴포넌트 설치" 등
- **작동 단계**:
  1. 프론트엔드 환경 감지 (Tailwind 미설치 시 설치 유도)
  2. 스킬 내 템플릿 폴더에서 타겟 프로젝트 뷰티폴더(src/components 등)로 리소스 자동 복사 및 이식.
  3. `tailwind.config.js`의 `theme.colors` 토큰을 병합.
  4. 마크다운 가이드라인에 따라 화면 생성.

### 3. 복사 및 보관될 Resources 데이터베이스
스킬이 타 웹 프로젝트에 붙여넣어줄 기초 블록들을 스킬 폴더인 `resources/` 경로에 백업합니다.
- `tailwind.config.js` (설정 템플릿)
- `hanatour-design-system.md` (AI 참조 토큰 및 UI 규칙 문서)
- `hanatour-components/` 폴더 내의 Button, Badge, Card, HeroBanner, Input, Chip, Alert, Tabs 등 React(TSX) 소스 파일들
