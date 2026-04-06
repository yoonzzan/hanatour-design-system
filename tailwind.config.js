// tailwind.config.js (V3 호환)
// 하나투어 디자인 시스템 토큰을 Tailwind에 적용하는 프리셋

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./hanatour-components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ht: {
          /* Master */
          'master-purple': '#5E2BB8',
          'master-mint': '#08D1D9',

          /* Tint Purple */
          'tint-purple-9': '#6E3FBF',
          'tint-purple-8': '#7D55C7',
          'tint-purple-7': '#8F6BCD',
          'tint-purple-6': '#9E81D5',
          'tint-purple-5': '#AF95DC',
          'tint-purple-4': '#BFAAE3',
          'tint-purple-3': '#D0BFEB',
          'tint-purple-2': '#DFD5F0',
          'tint-purple-1': '#EEEAF8',

          /* Tint Mint */
          'tint-mint-9': '#1FD6DC',
          'tint-mint-8': '#39DBE0',
          'tint-mint-7': '#51DFE3',
          'tint-mint-6': '#6CE3E9',
          'tint-mint-5': '#82E8EC',
          'tint-mint-4': '#9CEDF0',
          'tint-mint-3': '#B5F0F4',
          'tint-mint-2': '#CEF6F6',
          'tint-mint-1': '#E6FAFB',

          /* Extended Purple */
          'soft-purple': '#7D4BDC',
          'active-purple': '#6E2DD2',
          'eco-purple': '#8A75D0',
          'urban-purple': '#541CB8',
          'friendly-purple': '#540099',
          'premium-purple': '#31007B',

          /* Extended Mint */
          'soft-mint': '#70DCE6',
          'active-mint': '#00CFE5',
          'eco-mint': '#50B4C8',
          'urban-mint': '#08CDDE',
          'friendly-mint': '#00C9D4',
          'premium-mint': '#00768F',

          /* Neutral Gray */
          white: '#FFFFFF',
          'bright-gray': '#EEEEF0',
          'light-gray': '#D0D0D2',
          'medium-gray': '#B5B5B6',
          gray: '#9FA0A0',
          'dark-gray': '#73747A',
          'slate-gray': '#53565F',
          'deep-gray': '#313339',
          black: '#000000',

          /* Neutral Beige */
          'bright-beige': '#F6F1E8',
          'light-beige': '#E8DCC4',
          'medium-beige': '#E5CB9E',
          beige: '#AC916D',
          'dark-beige': '#80705E',
          'slate-beige': '#64584A',
          'deep-beige': '#4A4138',

          /* Accent */
          'accent-yellow': '#FFE338',
          'accent-lime': '#C6EB2F',
          'accent-green': '#00BF8F',
          'accent-sky-blue': '#4395FF',
          'accent-blue': '#2263E5',
          'accent-pink': '#FF5AD2',

          /* Semantic */
          'text-primary': '#313339',   // deep-gray
          'text-secondary': '#53565F', // slate-gray
          'text-disabled': '#B5B5B6',  // medium-gray
          'bg-primary': '#FFFFFF',     // white
          'bg-subtle': '#EEEEF0',      // bright-gray
        }
      },
      fontFamily: {
        // 프리텐다드를 기본 폰트로 설정합니다.
        sans: ['Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', 'sans-serif'],
        en: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'ht-sm': '6px',
        'ht-md': '10px',
        'ht-lg': '16px',
        'ht-xl': '24px',
        'ht-pill': '100px',
      },
      boxShadow: {
        'ht-card': '0 2px 12px rgba(0,0,0,0.08)',
        'ht-card-hover': '0 8px 28px rgba(0,0,0,0.14)',
        'ht-btn-primary': '0 4px 16px rgba(94,43,184,0.32)',
        'ht-btn-cta': '0 4px 16px rgba(255,227,56,0.5)',
      }
    },
  },
  plugins: [],
}
