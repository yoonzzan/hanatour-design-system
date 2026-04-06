/**
 * Hanatour Color Design System — TypeScript Constants
 * 2026 Brand Color System & Brand Guide
 *
 * 사용법: import { HanatourColors, HanatourThemes, getTheme } from './hanatour-colors'
 */

// ──────────────────────────────────────────
// 1. Master Colors
// ──────────────────────────────────────────
export const MASTER = {
  purple: '#5E2BB8',
  mint:   '#08D1D9',
} as const;

// ──────────────────────────────────────────
// 2. Tint Scale
// ──────────────────────────────────────────
export const TINT_PURPLE = {
  9: '#6E3FBF',
  8: '#7D55C7',
  7: '#8F6BCD',
  6: '#9E81D5',
  5: '#AF95DC',
  4: '#BFAAE3',
  3: '#D0BFEB',
  2: '#DFD5F0',
  1: '#EEEAF8',
} as const;

export const TINT_MINT = {
  9: '#1FD6DC',
  8: '#39DBE0',
  7: '#51DFE3',
  6: '#6CE3E9',
  5: '#82E8EC',
  4: '#9CEDF0',
  3: '#B5F0F4',
  2: '#CEF6F6',
  1: '#E6FAFB',
} as const;

// ──────────────────────────────────────────
// 3. Extended Colors (콘텐츠 목적별)
// ──────────────────────────────────────────
export const EXTENDED_PURPLE = {
  /** 봄/설렘 여행 — Pantone 2089C */
  soft:    '#7D4BDC',
  /** 액티비티/에너지 — Pantone 2090C */
  active:  '#6E2DD2',
  /** 친환경/웰니스 — Pantone 2101C */
  eco:     '#8A75D0',
  /** MZ/도시 감성 — Pantone 2098C */
  urban:   '#541CB8',
  /** 가족 여행 — Pantone Medium Purple C */
  friendly:'#540099',
  /** 럭셔리/프리미엄 — Pantone 2685C */
  premium: '#31007B',
} as const;

export const EXTENDED_MINT = {
  /** 봄/설렘 여행 — Pantone 2225C */
  soft:    '#70DCE6',
  /** 액티비티/에너지 — Pantone 311C */
  active:  '#00CFE5',
  /** 친환경/웰니스 — Pantone 6127C */
  eco:     '#50B4C8',
  /** MZ/도시 감성 — Pantone 2226C */
  urban:   '#08CDDE',
  /** 가족 여행 — Pantone 319C */
  friendly:'#00C9D4',
  /** 럭셔리/프리미엄 — Pantone 2223C */
  premium: '#00768F',
} as const;

// ──────────────────────────────────────────
// 4. Neutral Colors
// ──────────────────────────────────────────
export const NEUTRAL_GRAY = {
  white:      '#FFFFFF',
  brightGray: '#EEEEF0',
  lightGray:  '#D0D0D2',
  mediumGray: '#B5B5B6',
  gray:       '#9FA0A0',
  darkGray:   '#73747A',
  slateGray:  '#53565F',
  deepGray:   '#313339',
  black:      '#000000',
} as const;

export const NEUTRAL_BEIGE = {
  bright: '#F6F1E8',
  light:  '#E8DCC4',
  medium: '#E5CB9E',
  beige:  '#AC916D',
  dark:   '#80705E',
  slate:  '#64584A',
  deep:   '#4A4138',
} as const;

// ──────────────────────────────────────────
// 5. Accent Colors
// ──────────────────────────────────────────
export const ACCENT = {
  yellow:  '#FFE338',
  lime:    '#C6EB2F',
  green:   '#00BF8F',
  skyBlue: '#4395FF',
  blue:    '#2263E5',
  pink:    '#FF5AD2',
} as const;

export const ACCENT_TINT1 = {
  yellow:  '#FEE856',
  lime:    '#CFED4D',
  green:   '#27C9A0',
  skyBlue: '#5FA4FF',
  blue:    '#457BE8',
  pink:    '#FF72D8',
} as const;

export const ACCENT_TINT2 = {
  yellow:  '#FFEC74',
  lime:    '#D7F16C',
  green:   '#4CD2B1',
  skyBlue: '#7BB5FF',
  blue:    '#6592ED',
  pink:    '#FF8CE1',
} as const;

export const ACCENT_TINT3 = {
  yellow:  '#FFF091',
  lime:    '#DFF48D',
  green:   '#74DCC3',
  skyBlue: '#98C5FF',
  blue:    '#87A9F1',
  pink:    '#FFA4E7',
} as const;

// ──────────────────────────────────────────
// 6. 통합 객체 (HanatourColors)
// ──────────────────────────────────────────
export const HanatourColors = {
  master:         MASTER,
  tintPurple:     TINT_PURPLE,
  tintMint:       TINT_MINT,
  extendedPurple: EXTENDED_PURPLE,
  extendedMint:   EXTENDED_MINT,
  gray:           NEUTRAL_GRAY,
  beige:          NEUTRAL_BEIGE,
  accent:         ACCENT,
  accentTint1:    ACCENT_TINT1,
  accentTint2:    ACCENT_TINT2,
  accentTint3:    ACCENT_TINT3,
} as const;

// ──────────────────────────────────────────
// 7. 콘텐츠 목적별 테마 프리셋
// ──────────────────────────────────────────
export type HanatourThemeKey =
  | 'default'
  | 'soft'
  | 'active'
  | 'eco'
  | 'urban'
  | 'friendly'
  | 'premium';

export interface HanatourTheme {
  /** 브랜드 컬러 축 */
  key: HanatourThemeKey;
  /** 주 색상 (배경, 버튼 등) */
  primary: string;
  /** 보조 색상 (강조, 포인트) */
  secondary: string;
  /** 밝은 배경용 tint */
  surface: string;
  /** 테마 설명 */
  description: string;
}

export const HanatourThemes: Record<HanatourThemeKey, HanatourTheme> = {
  default: {
    key: 'default',
    primary: MASTER.purple,
    secondary: MASTER.mint,
    surface: TINT_PURPLE[1],
    description: '기본 서비스 UI',
  },
  soft: {
    key: 'soft',
    primary: EXTENDED_PURPLE.soft,
    secondary: EXTENDED_MINT.soft,
    surface: TINT_PURPLE[1],
    description: '봄/설렘 여행 콘텐츠',
  },
  active: {
    key: 'active',
    primary: EXTENDED_PURPLE.active,
    secondary: EXTENDED_MINT.active,
    surface: TINT_PURPLE[1],
    description: '액티비티/에너지 여행',
  },
  eco: {
    key: 'eco',
    primary: EXTENDED_PURPLE.eco,
    secondary: EXTENDED_MINT.eco,
    surface: NEUTRAL_BEIGE.bright,
    description: '친환경/웰니스 여행',
  },
  urban: {
    key: 'urban',
    primary: EXTENDED_PURPLE.urban,
    secondary: EXTENDED_MINT.urban,
    surface: NEUTRAL_GRAY.deepGray,
    description: 'MZ/도시 감성 여행',
  },
  friendly: {
    key: 'friendly',
    primary: EXTENDED_PURPLE.friendly,
    secondary: EXTENDED_MINT.friendly,
    surface: TINT_MINT[1],
    description: '가족 여행',
  },
  premium: {
    key: 'premium',
    primary: EXTENDED_PURPLE.premium,
    secondary: EXTENDED_MINT.premium,
    surface: NEUTRAL_BEIGE.bright,
    description: '럭셔리/프리미엄 여행',
  },
} as const;

/**
 * 테마 키로 테마 객체 반환
 * @example const theme = getTheme('premium')
 */
export function getTheme(key: HanatourThemeKey): HanatourTheme {
  return HanatourThemes[key];
}

// ──────────────────────────────────────────
// 8. Tailwind CSS 확장 설정 (tailwind.config.js에 spread)
// ──────────────────────────────────────────
export const hanatourTailwindColors = {
  'master-purple':   MASTER.purple,
  'master-mint':     MASTER.mint,

  'tint-purple-9':   TINT_PURPLE[9],
  'tint-purple-8':   TINT_PURPLE[8],
  'tint-purple-7':   TINT_PURPLE[7],
  'tint-purple-6':   TINT_PURPLE[6],
  'tint-purple-5':   TINT_PURPLE[5],
  'tint-purple-4':   TINT_PURPLE[4],
  'tint-purple-3':   TINT_PURPLE[3],
  'tint-purple-2':   TINT_PURPLE[2],
  'tint-purple-1':   TINT_PURPLE[1],

  'tint-mint-9':     TINT_MINT[9],
  'tint-mint-8':     TINT_MINT[8],
  'tint-mint-7':     TINT_MINT[7],
  'tint-mint-6':     TINT_MINT[6],
  'tint-mint-5':     TINT_MINT[5],
  'tint-mint-4':     TINT_MINT[4],
  'tint-mint-3':     TINT_MINT[3],
  'tint-mint-2':     TINT_MINT[2],
  'tint-mint-1':     TINT_MINT[1],

  'soft-purple':     EXTENDED_PURPLE.soft,
  'active-purple':   EXTENDED_PURPLE.active,
  'eco-purple':      EXTENDED_PURPLE.eco,
  'urban-purple':    EXTENDED_PURPLE.urban,
  'friendly-purple': EXTENDED_PURPLE.friendly,
  'premium-purple':  EXTENDED_PURPLE.premium,

  'soft-mint':       EXTENDED_MINT.soft,
  'active-mint':     EXTENDED_MINT.active,
  'eco-mint':        EXTENDED_MINT.eco,
  'urban-mint':      EXTENDED_MINT.urban,
  'friendly-mint':   EXTENDED_MINT.friendly,
  'premium-mint':    EXTENDED_MINT.premium,

  'ht-white':        NEUTRAL_GRAY.white,
  'bright-gray':     NEUTRAL_GRAY.brightGray,
  'light-gray':      NEUTRAL_GRAY.lightGray,
  'medium-gray':     NEUTRAL_GRAY.mediumGray,
  'ht-gray':         NEUTRAL_GRAY.gray,
  'dark-gray':       NEUTRAL_GRAY.darkGray,
  'slate-gray':      NEUTRAL_GRAY.slateGray,
  'deep-gray':       NEUTRAL_GRAY.deepGray,
  'ht-black':        NEUTRAL_GRAY.black,

  'bright-beige':    NEUTRAL_BEIGE.bright,
  'light-beige':     NEUTRAL_BEIGE.light,
  'medium-beige':    NEUTRAL_BEIGE.medium,
  'ht-beige':        NEUTRAL_BEIGE.beige,
  'dark-beige':      NEUTRAL_BEIGE.dark,
  'slate-beige':     NEUTRAL_BEIGE.slate,
  'deep-beige':      NEUTRAL_BEIGE.deep,

  'accent-yellow':     ACCENT.yellow,
  'accent-lime':       ACCENT.lime,
  'accent-green':      ACCENT.green,
  'accent-sky-blue':   ACCENT.skyBlue,
  'accent-blue':       ACCENT.blue,
  'accent-pink':       ACCENT.pink,
} as const;

export default HanatourColors;
