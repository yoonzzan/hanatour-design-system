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
| **`hanatour-design-system.md`** | 사람이 읽거나 **AI에게 먹이는 컨텍스트 가이드**. 컬러 조합 원칙 시각적 규칙이 담겨 있습니다. | ⭐️ 중요 |
| **`tailwind.config.js`** | CSS 프레임워크인 Tailwind 설정 파일. 모든 디자인 토큰 변수(`ht-`)가 담겨 있습니다. | 개발용 필수 |
| **`hanatour-tokens.json`** | W3C 포맷에 맞춘 디자인 토큰 시스템 데이터베이스. (컬러, 폰트사이즈, 반경 등) | 참조용 데이터 |
| **`hanatour-components/`** | 실제 즉시 사용할 수 있도록 마련된 React (TypeScript) 컴포넌트들 모음. (`Button.tsx`, `Card.tsx` 등) | 복사해서 사용 |
| `hanatour-colors.ts` & `.css` | TypeScript나 일반 순수 CSS 환경에서 상수/변수로 사용하기 위한 기초 에셋. | 기초 에셋 |
| `hanatour-components.html` | React 없이 순수 HTML/CSS에서 어떻게 컴포넌트가 생겼는지 보는 프리뷰 파일. | 프리뷰 |

---

## 🛠 3. 실제 프로젝트 적용 방법 (어떻게 쓰나요?)

### Step 1. 파일 복사하기
먼저 본인의 프론트엔드 개발 프로젝트(예: `my-hanatour-app`) 폴더 안으로 넘어갑니다.
- 본 리포지토리의 `tailwind.config.js` 설정을 본인 프로젝트의 `tailwind.config.js` 내용과 합치거나 교체합니다.
- 본 리포지토리의 `hanatour-components/` 폴더를 프로젝트의 `src/components/` 위치로 복사합니다.

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

## 🤖 4. AI와 함께 활용하는 꿀팁 (Cursor, Claude)

AI 에디터를 켜셨다면, 이 프로젝트들을 100% 활용할 수 있습니다.
가장 먼저 AI에게 다음과 같이 지시해 보세요.

> **Prompt:** "먼저 `hanatour-design-system.md` 문서를 읽고, `hanatour-components/` 안의 컴포넌트들이 어떻게 구현되어 있는지 스타일을 파악해. 그리고 이를 바탕으로 반응형 메인 프로모션 페이지 1개를 만들어줘."

그러면 AI는 **자동으로 여러분이 번거롭게 지정하지 않아도** `text-ht-master-purple`, `bg-ht-tint-mint-1` 등의 사내 표준 색상과, 준비된 `<HeroBanner>`, `<Button>` 컴포넌트를 사용해서 결과물을 내놓습니다. 

---

🔥 **이제 하나투어 브랜드 아이덴티티가 담긴 개발을 쉽고 일관되게 시작하세요!**
