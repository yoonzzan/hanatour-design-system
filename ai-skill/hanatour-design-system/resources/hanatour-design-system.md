# Hanatour Color Design System
> 2026 Hanatour Brand Color System & Brand Guide 기반 AI 개발 참조 문서

---

## 1. 브랜드 아이덴티티 개요

하나투어 컬러 시스템은 **Master Purple**과 **Master Mint** 두 가지 핵심 색상을 중심으로 구성됩니다.

| 컬러 축 | 의미 |
|--------|------|
| **Hanatour Purple** | Professional, Static, Hard — 신뢰·전문성 |
| **Hanatour Mint** | Inspirational / Warm-hearted, Dynamic, Soft — 설렘·친근함 |

색상 이미지 축은 **Static ↔ Dynamic** / **Soft ↔ Hard** 두 가지 축으로 표현됩니다.

---

## 2. Master Colors (주요 브랜드 컬러)

```css
:root {
  /* ─── Master Colors ─── */
  --color-master-purple: #5E2BB8;   /* R94 G43 B184  | Pantone 2091C | CMYK C86 M97 Y0 K0 */
  --color-master-mint:   #08D1D9;   /* R8 G209 B217  | Pantone 3115C | CMYK C70 M0 Y15 K0 */
}
```

---

## 3. Tint Colors (명도 단계별 색상)

### 3-1. Purple Tint Scale

```css
:root {
  --color-tint-purple-9: #6E3FBF;  /* C78 M87 Y0 K0  | R110 G63 B191  */
  --color-tint-purple-8: #7D55C7;  /* C69 M78 Y0 K0  | R125 G85 B199  */
  --color-tint-purple-7: #8F6BCD;  /* C61 M70 Y0 K0  | R143 G107 B205 */
  --color-tint-purple-6: #9E81D5;  /* C52 M60 Y0 K0  | R158 G129 B213 */
  --color-tint-purple-5: #AF95DC;  /* C43 M51 Y0 K0  | R175 G149 B220 */
  --color-tint-purple-4: #BFAAE3;  /* C34 M41 Y0 K0  | R191 G170 B227 */
  --color-tint-purple-3: #D0BFEB;  /* C25 M33 Y0 K0  | R208 G191 B235 */
  --color-tint-purple-2: #DFD5F0;  /* C16 M22 Y0 K0  | R223 G213 B240 */
  --color-tint-purple-1: #EEEAF8;  /* C9 M13 Y0 K0   | R238 G234 B248 */
}
```

### 3-2. Mint Tint Scale

```css
:root {
  --color-tint-mint-9: #1FD6DC;  /* C62 M4 Y16 K0  | R31 G214 B220  */
  --color-tint-mint-8: #39DBE0;  /* C56 M4 Y14 K0  | R57 G219 B224  */
  --color-tint-mint-7: #51DFE3;  /* C51 M4 Y12 K0  | R81 G223 B227  */
  --color-tint-mint-6: #6CE3E9;  /* C43 M4 Y10 K0  | R108 G227 B233 */
  --color-tint-mint-5: #82E8EC;  /* C36 M3 Y9 K0   | R130 G232 B236 */
  --color-tint-mint-4: #9CEDF0;  /* C29 M3 Y7 K0   | R156 G237 B240 */
  --color-tint-mint-3: #B5F0F4;  /* C23 M2 Y6 K0   | R181 G240 B244 */
  --color-tint-mint-2: #CEF6F6;  /* C14 M2 Y2 K0   | R206 G246 B246 */
  --color-tint-mint-1: #E6FAFB;  /* C10 M0 Y2 K0   | R230 G250 B251 */
}
```

---

## 4. Extended Colors (콘텐츠 목적별 확장 색상)

각 컬러 카테고리는 하나투어 콘텐츠의 **톤과 맥락**을 정의합니다.

| 카테고리 | 사용 맥락 |
|---------|----------|
| **Soft** | 봄 여행, 설렘, 여행 준비 감성 |
| **Active** | 액티비티, 에너지, 스포티 여행 |
| **Eco** | 친환경, 웰니스, 착한 여행 |
| **Urban** | MZ 감성, 도시 여행, 트렌디 |
| **Friendly** | 가족 여행, 함께하는 여행 |
| **Premium** | 럭셔리, 프리미엄, 품격 있는 여행 |

### 4-1. Purple Extended Colors

```css
:root {
  --color-soft-purple:    #7D4BDC;  /* Pantone 2089C | C67 M77 Y0 K0  */
  --color-active-purple:  #6E2DD2;  /* Pantone 2090C | C76 M92 Y0 K0  */
  --color-eco-purple:     #8A75D0;  /* Pantone 2101C | C57 M57 Y0 K0  */
  --color-urban-purple:   #541CB8;  /* Pantone 2098C | C86 M90 Y0 K0  */
  --color-friendly-purple:#540099;  /* Pantone Medium Purple C | C84 M100 Y10 K0 */
  --color-premium-purple: #31007B;  /* Pantone 2685C | C90 M100 Y0 K30 */
}
```

### 4-2. Mint Extended Colors

```css
:root {
  --color-soft-mint:    #70DCE6;  /* Pantone 2225C | C55 M0 Y14 K0  */
  --color-active-mint:  #00CFE5;  /* Pantone 311C  | C74 M0 Y18 K0  */
  --color-eco-mint:     #50B4C8;  /* Pantone 6127C | C64 M17 Y25 K0 */
  --color-urban-mint:   #08CDDE;  /* Pantone 2226C | C67 M0 Y16 K0  */
  --color-friendly-mint:#00C9D4;  /* Pantone 319C  | C72 M0 Y26 K0  */
  --color-premium-mint: #00768F;  /* Pantone 2223C | C93 M47 Y40 K0 */
}
```

---

## 5. Neutral Colors (중성 색상)

### 5-1. Gray Scale

```css
:root {
  --color-neutral-white:       #FFFFFF;  /* C0 M0 Y0 K0   */
  --color-neutral-bright-gray: #EEEEF0;  /* C0 M0 Y0 K10  | R238 G238 B240 */
  --color-neutral-light-gray:  #D0D0D2;  /* C0 M0 Y0 K25  | R208 G208 B210 */
  --color-neutral-medium-gray: #B5B5B6;  /* C0 M0 Y0 K40  | R181 G181 B182 */
  --color-neutral-gray:        #9FA0A0;  /* C0 M0 Y0 K50  | R159 G160 B160 */
  --color-neutral-dark-gray:   #73747A;  /* C9 M8 Y2 K64  | R115 G116 B122 */
  --color-neutral-slate-gray:  #53565F;  /* C17 M9 Y1 K76 | R83 G86 B95   */
  --color-neutral-deep-gray:   #313339;  /* C20 M9 Y1 K89 | R49 G51 B57   */
  --color-neutral-black:       #000000;  /* C0 M0 Y0 K100 */
}
```

### 5-2. Beige Scale

```css
:root {
  --color-neutral-bright-beige: #F6F1E8;  /* C0 M2 Y5 K0   | R246 G241 B232 */
  --color-neutral-light-beige:  #E8DCC4;  /* C0 M9 Y17 K7  | R232 G220 B196 */
  --color-neutral-medium-beige: #E5CB9E;  /* C0 M16 Y32 K10| R229 G203 B158 */
  --color-neutral-beige:        #AC916D;  /* C0 M22 Y41 K38| R172 G145 B109 */
  --color-neutral-dark-beige:   #80705E;  /* C0 M14 Y27 K59| R128 G112 B94  */
  --color-neutral-slate-beige:  #64584A;  /* C0 M14 Y22 K76| R100 G88 B74   */
  --color-neutral-deep-beige:   #4A4138;  /* C0 M9 Y20 K86 | R74 G65 B56    */
}
```

---

## 6. Accent Colors (포인트 색상)

### 6-1. Core Accent Colors

```css
:root {
  --color-accent-yellow:   #FFE338;  /* Pantone 107C  | C2 M8 Y84 K0   | R255 G227 B56  */
  --color-accent-lime:     #C6EB2F;  /* Pantone 2297C | C28 M0 Y88 K0  | R198 G235 B47  */
  --color-accent-green:    #00BF8F;  /* Pantone 2414C | C77 M0 Y59 K0  | R0 G191 B143   */
  --color-accent-sky-blue: #4395FF;  /* Pantone 279C  | C74 M39 Y0 K0  | R67 G149 B255  */
  --color-accent-blue:     #2263E5;  /* Pantone 2387C | C91 M61 Y0 K0  | R34 G99 B229   */
  --color-accent-pink:     #FF5AD2;  /* Pantone 238C  | C10 M72 Y0 K0  | R255 G90 B210  */
}
```

### 6-2. Accent Tint 1 (밝은 단계)

```css
:root {
  --color-accent-yellow-t1:   #FEE856;  /* R254 G232 B86  */
  --color-accent-lime-t1:     #CFED4D;  /* R207 G237 B77  */
  --color-accent-green-t1:    #27C9A0;  /* R39 G201 B160  */
  --color-accent-sky-blue-t1: #5FA4FF;  /* R95 G164 B255  */
  --color-accent-blue-t1:     #457BE8;  /* R69 G123 B232  */
  --color-accent-pink-t1:     #FF72D8;  /* R255 G114 B216 */
}
```

### 6-3. Accent Tint 2

```css
:root {
  --color-accent-yellow-t2:   #FFEC74;  /* R255 G236 B116 */
  --color-accent-lime-t2:     #D7F16C;  /* R215 G241 B108 */
  --color-accent-green-t2:    #4CD2B1;  /* R76 G210 B177  */
  --color-accent-sky-blue-t2: #7BB5FF;  /* R123 G181 B255 */
  --color-accent-blue-t2:     #6592ED;  /* R101 G146 B237 */
  --color-accent-pink-t2:     #FF8CE1;  /* R255 G140 B225 */
}
```

### 6-4. Accent Tint 3 (가장 밝은 단계)

```css
:root {
  --color-accent-yellow-t3:   #FFF091;  /* R255 G240 B145 */
  --color-accent-lime-t3:     #DFF48D;  /* R223 G244 B141 */
  --color-accent-green-t3:    #74DCC3;  /* R116 G220 B195 */
  --color-accent-sky-blue-t3: #98C5FF;  /* R152 G197 B255 */
  --color-accent-blue-t3:     #87A9F1;  /* R135 G169 B241 */
  --color-accent-pink-t3:     #FFA4E7;  /* R255 G164 B231 */
}
```

---

## 7. 콘텐츠 맥락별 색상 조합 가이드

> AI 개발 시 UI 목적에 따라 아래 조합을 참조하세요.

| 콘텐츠 유형 | Primary | Accent 조합 예시 |
|-----------|---------|----------------|
| **일반 서비스 UI** | `--color-master-purple` | + `--color-master-mint` |
| **봄/설렘 여행 콘텐츠** | `--color-soft-purple` | + `--color-soft-mint` |
| **액티비티/에너지** | `--color-active-purple` | + `--color-active-mint` |
| **친환경/웰니스** | `--color-eco-purple` | + `--color-eco-mint` |
| **MZ/도시 감성** | `--color-urban-purple` | + `--color-urban-mint` |
| **가족 여행** | `--color-friendly-purple` | + `--color-friendly-mint` |
| **럭셔리/프리미엄** | `--color-premium-purple` | + `--color-premium-mint` |
| **강조/CTA 버튼** | `--color-master-purple` | + `--color-accent-yellow` 또는 `--color-accent-lime` |

### Mint + Accent 조합 예시

```
Master Mint + Accent Yellow
Master Mint + Accent Lime
Master Mint + Accent Green
Master Mint + Accent Sky Blue
Master Mint + Accent Blue
Master Mint + Accent Pink

Master Purple + Accent Yellow
Master Purple + Accent Lime
Master Purple + Accent Green
Master Purple + Accent Sky Blue
Master Purple + Accent Blue
Master Purple + Accent Pink
```

---

## 8. 색상 이미지 전략 (Image Strategy)

하나투어 색상은 세 가지 이미지 방향을 지향합니다:

| 이미지 방향 | 설명 | 적용 색상 계열 |
|-----------|------|-------------|
| **Professional (전문성)** | 신뢰감, 격조, 안정 | Purple 계열, Premium |
| **Inspirational (영감)** | 설렘, 동경, 새로운 경험 | Mint 계열, Active/Soft |
| **Warm-hearted (따뜻함)** | 친근함, 공감, 함께 | Friendly, Eco, Beige 계열 |

---

## 9. HTML 컴포넌트 정의 예시

### 9-1. 기본 색상 팔레트 컴포넌트

```html
<!-- 브랜드 컬러 버튼 -->
<button class="btn-primary">하나투어 예약하기</button>
<button class="btn-secondary">더 알아보기</button>
<button class="btn-accent">지금 할인받기</button>

<style>
:root {
  --color-master-purple: #5E2BB8;
  --color-master-mint:   #08D1D9;
  --color-accent-yellow: #FFE338;
}

.btn-primary {
  background-color: var(--color-master-purple);
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-master-purple);
  border: 2px solid var(--color-master-purple);
  border-radius: 8px;
  padding: 10px 24px;
}

.btn-accent {
  background-color: var(--color-accent-yellow);
  color: var(--color-master-purple);  /* 노란 배경에 보라 텍스트 */
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 700;
}
</style>
```

### 9-2. 카테고리 배지 컴포넌트

```html
<!-- 여행 카테고리 배지 -->
<span class="badge badge--premium">프리미엄</span>
<span class="badge badge--active">액티비티</span>
<span class="badge badge--eco">친환경</span>
<span class="badge badge--friendly">가족여행</span>
<span class="badge badge--urban">시티투어</span>

<style>
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
}

.badge--premium  { background: #31007B; color: #FFFFFF; }
.badge--active   { background: #6E2DD2; color: #FFFFFF; }
.badge--eco      { background: #50B4C8; color: #FFFFFF; }
.badge--friendly { background: #540099; color: #FFFFFF; }
.badge--urban    { background: #541CB8; color: #FFFFFF; }
.badge--soft     { background: #7D4BDC; color: #FFFFFF; }
</style>
```

### 9-3. 그라디언트 활용 예시

```html
<!-- 브랜드 Hero 배너 -->
<div class="hero-banner">
  <h1>특별한 여행을 하나투어와 함께</h1>
</div>

<style>
.hero-banner {
  /* Purple → Mint 브랜드 그라디언트 */
  background: linear-gradient(135deg, #5E2BB8 0%, #08D1D9 100%);
  color: #FFFFFF;
  padding: 48px 32px;
}

/* Premium 느낌의 다크 그라디언트 */
.hero-premium {
  background: linear-gradient(135deg, #31007B 0%, #5E2BB8 100%);
}

/* 민트 라이트 버전 */
.hero-light {
  background: linear-gradient(135deg, #E6FAFB 0%, #EEEAF8 100%);
  color: #5E2BB8;
}
</style>
```

---

## 10. Tailwind CSS 설정 (tailwind.config.js)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        hanatour: {
          // Master Colors
          'master-purple': '#5E2BB8',
          'master-mint':   '#08D1D9',

          // Tint Purple
          'tint-purple-9': '#6E3FBF',
          'tint-purple-8': '#7D55C7',
          'tint-purple-7': '#8F6BCD',
          'tint-purple-6': '#9E81D5',
          'tint-purple-5': '#AF95DC',
          'tint-purple-4': '#BFAAE3',
          'tint-purple-3': '#D0BFEB',
          'tint-purple-2': '#DFD5F0',
          'tint-purple-1': '#EEEAF8',

          // Tint Mint
          'tint-mint-9': '#1FD6DC',
          'tint-mint-8': '#39DBE0',
          'tint-mint-7': '#51DFE3',
          'tint-mint-6': '#6CE3E9',
          'tint-mint-5': '#82E8EC',
          'tint-mint-4': '#9CEDF0',
          'tint-mint-3': '#B5F0F4',
          'tint-mint-2': '#CEF6F6',
          'tint-mint-1': '#E6FAFB',

          // Extended Colors - Purple
          'soft-purple':    '#7D4BDC',
          'active-purple':  '#6E2DD2',
          'eco-purple':     '#8A75D0',
          'urban-purple':   '#541CB8',
          'friendly-purple':'#540099',
          'premium-purple': '#31007B',

          // Extended Colors - Mint
          'soft-mint':    '#70DCE6',
          'active-mint':  '#00CFE5',
          'eco-mint':     '#50B4C8',
          'urban-mint':   '#08CDDE',
          'friendly-mint':'#00C9D4',
          'premium-mint': '#00768F',

          // Neutral - Gray
          'neutral-white':       '#FFFFFF',
          'neutral-bright-gray': '#EEEEF0',
          'neutral-light-gray':  '#D0D0D2',
          'neutral-medium-gray': '#B5B5B6',
          'neutral-gray':        '#9FA0A0',
          'neutral-dark-gray':   '#73747A',
          'neutral-slate-gray':  '#53565F',
          'neutral-deep-gray':   '#313339',
          'neutral-black':       '#000000',

          // Neutral - Beige
          'neutral-bright-beige': '#F6F1E8',
          'neutral-light-beige':  '#E8DCC4',
          'neutral-medium-beige': '#E5CB9E',
          'neutral-beige':        '#AC916D',
          'neutral-dark-beige':   '#80705E',
          'neutral-slate-beige':  '#64584A',
          'neutral-deep-beige':   '#4A4138',

          // Accent Colors
          'accent-yellow':   '#FFE338',
          'accent-lime':     '#C6EB2F',
          'accent-green':    '#00BF8F',
          'accent-sky-blue': '#4395FF',
          'accent-blue':     '#2263E5',
          'accent-pink':     '#FF5AD2',

          // Accent Tint 1
          'accent-yellow-t1':   '#FEE856',
          'accent-lime-t1':     '#CFED4D',
          'accent-green-t1':    '#27C9A0',
          'accent-sky-blue-t1': '#5FA4FF',
          'accent-blue-t1':     '#457BE8',
          'accent-pink-t1':     '#FF72D8',

          // Accent Tint 2
          'accent-yellow-t2':   '#FFEC74',
          'accent-lime-t2':     '#D7F16C',
          'accent-green-t2':    '#4CD2B1',
          'accent-sky-blue-t2': '#7BB5FF',
          'accent-blue-t2':     '#6592ED',
          'accent-pink-t2':     '#FF8CE1',

          // Accent Tint 3
          'accent-yellow-t3':   '#FFF091',
          'accent-lime-t3':     '#DFF48D',
          'accent-green-t3':    '#74DCC3',
          'accent-sky-blue-t3': '#98C5FF',
          'accent-blue-t3':     '#87A9F1',
          'accent-pink-t3':     '#FFA4E7',
        }
      }
    }
  }
}
```

---

## 11. Typography (타이포그래피)

하나투어 디자인 시스템은 명확한 정보 전달과 가독성을 위해 다음 폰트를 사용합니다.

### Font Family
- **국문 기본**: `Pretendard`, `Apple SD Gothic Neo`, `Noto Sans KR`, `sans-serif`
- **영문/숫자**: `Inter`, `system-ui`, `sans-serif`

### Font Scale
| 이름 | 크기 | 사용처 예시 |
|------|------|----------|
| **3xl** | 28px | Hero 타이틀, 최상단 헤딩 |
| **2xl** | 24px | 본문 섹션 타이틀 (H2) |
| **xl**  | 20px | 부제목 (H3) |
| **lg**  | 18px | 강조 카드 금액, 주요 텍스트 |
| **md**  | 15px | 기본 본문 (Body 1), 카드 텍스트 |
| **base**| 14px | 입력 폼 텍스트, 보조 본문 |
| **sm**  | 13px | 캡션 (Caption), 부가 설명 |
| **xs**  | 11px | 배지 (Badge), 작은 레이블 |

---

## 12. Shape & Spacing (형태 및 간격)

### Border Radius
하나투어 디자인 시스템은 카드의 부드러운 인상을 위해 Radius를 사용합니다.
| 분류 | 크기 | 용도 |
|------|------|------|
| **sm** | `6px` | 툴팁, 작은 체크박스 레이블 |
| **md** | `10px` | 폼 인풋 필드, 작은 이미지 |
| **lg** | `16px` | 카드(Card) 아이템 기본 |
| **xl** | `24px` | 라지 히어로 배너, 플로팅 버튼 영역 |
| **pill**| `100px`| 버튼(Button), 배지(Badge) |

---

## 13. JavaScript / TypeScript 상수 정의

```typescript
// hanatour-colors.ts
export const HanatourColors = {
  // Master
  masterPurple: '#5E2BB8',
  masterMint:   '#08D1D9',

  // Extended - Purple
  purple: {
    soft:    '#7D4BDC',
    active:  '#6E2DD2',
    eco:     '#8A75D0',
    urban:   '#541CB8',
    friendly:'#540099',
    premium: '#31007B',
  },

  // Extended - Mint
  mint: {
    soft:    '#70DCE6',
    active:  '#00CFE5',
    eco:     '#50B4C8',
    urban:   '#08CDDE',
    friendly:'#00C9D4',
    premium: '#00768F',
  },

  // Neutral Gray
  gray: {
    white:      '#FFFFFF',
    brightGray: '#EEEEF0',
    lightGray:  '#D0D0D2',
    mediumGray: '#B5B5B6',
    gray:       '#9FA0A0',
    darkGray:   '#73747A',
    slateGray:  '#53565F',
    deepGray:   '#313339',
    black:      '#000000',
  },

  // Neutral Beige
  beige: {
    bright: '#F6F1E8',
    light:  '#E8DCC4',
    medium: '#E5CB9E',
    beige:  '#AC916D',
    dark:   '#80705E',
    slate:  '#64584A',
    deep:   '#4A4138',
  },

  // Accent
  accent: {
    yellow:  '#FFE338',
    lime:    '#C6EB2F',
    green:   '#00BF8F',
    skyBlue: '#4395FF',
    blue:    '#2263E5',
    pink:    '#FF5AD2',
  },
} as const;

// 콘텐츠 목적별 테마 프리셋
export const HanatourThemes = {
  default:   { primary: '#5E2BB8', secondary: '#08D1D9' },
  soft:      { primary: '#7D4BDC', secondary: '#70DCE6' },
  active:    { primary: '#6E2DD2', secondary: '#00CFE5' },
  eco:       { primary: '#8A75D0', secondary: '#50B4C8' },
  urban:     { primary: '#541CB8', secondary: '#08CDDE' },
  friendly:  { primary: '#540099', secondary: '#00C9D4' },
  premium:   { primary: '#31007B', secondary: '#00768F' },
} as const;
```

---

## 14. AI 개발 시 컬러 사용 규칙 요약

> **이 규칙은 AI(Cursor, Claude, Copilot 등)가 코드를 생성할 때 반드시 준수해야 합니다.**

### ✅ 해야 할 것

1. **브랜드 컬러는 반드시 위에 정의된 HEX 값을 사용** (임의의 보라/민트색 사용 금지)
2. **배경 색상**: White(`#FFFFFF`) 또는 Bright Gray(`#EEEEF0`) 또는 Bright Beige(`#F6F1E8`) 우선 사용
3. **CTA 버튼**: Master Purple(`#5E2BB8`) 또는 Accent Yellow(`#FFE338`)
4. **보조 색상**: Master Mint(`#08D1D9`) 또는 Tint 계열
5. **텍스트**: Deep Gray(`#313339`) 또는 Black(`#000000`)
6. **콘텐츠 유형에 따라 Extended Color 조합** 적용 (섹션 7 참조)

### ❌ 하지 말 것

1. 시스템에 없는 보라/민트 색상 코드 임의 사용
2. Red, Orange 등 브랜드 팔레트 외 강렬한 원색 사용
3. Gray 계열 임의 지정 (반드시 Neutral 팔레트에서 선택)
4. White 텍스트를 Mint 배경에 사용 (가독성 검토 필요)

---

*문서 출처: 2026 Hanatour Color System & Brand Guide (260331_HANATOUR_Color.pdf)*
*최종 업데이트: 2026-04-03*
