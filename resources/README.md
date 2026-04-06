# Hanatour Design System (React + Tailwind) 🚀

이 프로젝트는 **하나투어 브랜딩(Hanatour Brand Color System)**을 웹/앱 개발 단계에서 즉시 활용할 수 있도록 마련된 **통합 디자인 프레임워크**입니다. 

색상, 폰트, 간격, 컴포넌트 등이 모두 코드 레벨에서 연동되어 있으므로, 개발자 한 명 한 명이 고민할 필요 없이 일관된 하나투어 디자인 요소들을 사용할 수 있게 도와줍니다.

---

## 🧐 1. 언제 사용해야 하나요?

### 🎯 **새로운 하나투어 프로젝트를 시작할 때**
Next.js, Vite 등 프론트엔드 프로젝트를 시작하기 앞서, 초기 세팅할 때 이 파일들을 그대로 복사해서 붙여넣으면 즉시 브랜드 아이덴티티가 적용된 UI를 찍어낼 수 있습니다.

### 🎨 **기존 인터페이스 디자인을 하나투어 브랜드 톤으로 개편할 때**
"어떤 보라색을 써야 하지?", "버튼의 곡률을 어떻게 해야 촌스럽지 않지?" 고민될 때 도입합니다. 정해진 Tailwind 클래스 변수를 사용하기만 하면 자동으로 표준 규격이 맞춰집니다.

### 🤖 **AI(Cursor, Copilot, Claude 등)로 빠르게 프로토타입을 만들 때**
AI에게 "로그인 페이지 만들어줘" 라고 말하기 전에, 이 문서를 읽히면 **AI가 알아서 하나투어의 고유한 `Master Purple` 색상과 둥근 버튼을 적용**해서 코드를 짜줍니다.

---

## 📂 2. 파일 및 폴더 구조 안내

| 파일/폴더명 | 설명 | 비고 |
|-----------|------|------|
| **`hanatour-design-system.md`** | **디자인 가이드라인 (AI/Human용)**. 컬러 조합 원칙, 타이포그래피, 간격 규칙이 담긴 마스터 문서입니다. AI에게 이 문서를 읽히면 브랜딩을 유지하며 코드를 짤 수 있습니다. | ⭐️ 중요 |
| **`tailwind.config.js`** | **Tailwind CSS 프리셋**. 하나투어 전용 토큰(`ht-` 접두사) 설정이 포함된 파일입니다. 자동 설치 스크립트가 이 파일의 테마 설정을 프로젝트에 병합합니다. | 설정 필수 |
| **`hanatour-components/`** | **React 컴포넌트 라이브러리**. Tailwind 토큰이 적용된 8종의 핵심 UI 컴포넌트 모음입니다. | 복사 대상 |
| └─ `Alert.tsx`, `Badge.tsx` | 알림 창 및 범주 표시용 배지 컴포넌트. | - |
| └─ `Button.tsx`, `Card.tsx` | 브랜드 컬러가 적용된 버튼 및 정보 카드 레이아웃. | - |
| └─ `HeroBanner.tsx`, `Tabs.tsx` | 감성적인 그라디언트 배너 및 정보 탐색용 탭 시스템. | - |
| └─ `Input.tsx`, `Chip.tsx` | 폼 입력 필드 및 필터링용 칩 디자인. | - |
| **`scripts/setup.js`** | **자동 설치 유틸리티**. 컴포넌트 복사 및 Tailwind 설정을 한 번에 자동화해주는 Node.js 스크립트입니다. | 도구 |

---

## 🛠 3. 실제 프로젝트 적용 방법

### ⚡️ CLI 한 줄로 설치하기 (One-liner)
프로젝트 루트에서 아래 명령어를 실행하면 별도의 다운로드 없이 즉시 디자인 시스템이 구축됩니다.

```bash
# GitHub 저장소를 통해 바로 실행 (추천 🚀)
npx github:hanatour/hanatour-design-system-skill
```

---

### 🚀 자동화 스크립트로 설치 (수동 실행)
만약 이미 스냅샷을 다운로드했거나 에이전트 스킬로 설치된 상태라면 아래 명령어를 사용하세요.

**1. 터미널에서 스크립트 실행:**
```bash
node <SKILL_PATH>/scripts/setup.js
```

**2. 스크립트 수행 내용:**
*   **컴포넌트 주입**: `./src/components` 또는 `./components` 폴더를 감지하여 `hanatour-components`를 복사합니다.
*   **테마 설정 병합**: 기존 `tailwind.config` 파일의 `extend` 블록에 하나투어 컬러/폰트/쉐이프 토큰을 자동으로 주입합니다.

### Step 2. 컴포넌트 임포트 및 사용하기
원하는 페이지 (예: `App.tsx` 또는 `page.tsx`)에서 구축된 컴포넌트를 바로 불러와서 사용하면 됩니다.

```tsx
import { Button } from '@/components/hanatour-components/Button';
import { Card } from '@/components/hanatour-components/Card';
import { Badge } from '@/components/hanatour-components/Badge';

export default function MyPage() {
  return (
    <div className="p-8 bg-ht-bg-subtle min-h-screen">
      
      {/* Tailwind Utility 클래스로 직접 제어도 가능합니다. */}
      <h1 className="text-ht-master-purple text-2xl font-bold mb-6">
        하나투어로 떠나는 여행
      </h1>

      <Card hoverable className="p-6 max-w-sm">
        <Badge variant="active" className="mb-4">액티비티</Badge>
        <h2 className="text-ht-xl font-bold mb-2">하와이 4박 5일</h2>
        <p className="text-ht-text-secondary text-ht-md mb-6">
          해변에서 즐기는 서핑의 매력
        </p>
        
        {/* 시스템에 정의된 버튼 호출 */}
        <Button variant="accent" fullWidth>예약하기</Button>
      </Card>

    </div>
  );
}
```

---

## 🤖 4. AI 에이전트 활용 가이드 (Cursor, Claude, Copilot 등)

이 디자인 시스템은 사람이 읽는 용도뿐만 아니라, **AI 코딩 에이전트가 완벽하게 이해하고 코드를 생성할 수 있도록 최적화**되어 있습니다. 각 에이전트 환경별 활용법은 다음과 같습니다.

### 🧩 Cursor / VS Code Copilot
창 하단의 **Context 추가(Add Context)** 기능을 사용하여 다음 파일들을 먹이세요:
-   `resources/hanatour-design-system.md`: 전체 디자인 규칙 파악용.
-   `resources/hanatour-components/`: 사용할 수 있는 컴포넌트 샘플 파악용.

### 💬 Claude / ChatGPT (Web UI)
새 프로젝트나 채팅을 시작할 때 `resources/hanatour-design-system.md` 문서 내용을 복사하여 붙여넣거나 파일을 업로드한 뒤 다음과 같이 지시하세요.

---

### 💡 추천 프롬프트 템플릿 (Copy & Paste)

AI에게 정밀한 결과물을 얻으려면 아래 프롬프트를 그대로 복사해서 사용하세요:

> **"지정된 `hanatour-design-system.md` 규칙을 엄격히 준수하여 코드를 작성해줘. 모든 색상과 간격은 `ht-` 접두사가 붙은 Tailwind 변수만 사용해야 해. 특히 메인 purple 색상은 `#5E2BB8`이며, 버튼 같은 주요 클릭 요소는 반드시 브랜드 아이덴티티가 느껴지도록 작성해. 제공된 `hanatour-components/` 폴더 내 컴포넌트들을 최대한 재사용해서 [페이지명 또는 기능명] 페이지를 구현해줘."**

---

## 🏗 5. 에이전트별 설치 명령어 (한 줄 요약)

에이전트에게 아래 한 줄을 타이핑하라고 시키기만 하면 됩니다:

| 에이전트 도구 | 실행 명령어 |
| :--- | :--- |
| **Terminal / CLI** | `npx github:hanatour/hanatour-design-system-skill` |
| **Antigravity** | `hanatour-design-system 스킬 실행해줘` |
| **커스텀 스크립트** | `node ./scripts/setup.js` |

---

🔥 **이제 어떤 AI와 함께하든, 일관된 하나투어의 프리미엄 디자인을 빠르게 구축할 수 있습니다!**
