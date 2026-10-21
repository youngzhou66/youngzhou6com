/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 三层表面：底 / 卡片 / 浮起（配合 globals.css 的 .glass 系列使用）
        surface: {
          base: '#0b0d12',
          card: '#14161f',
          raised: '#1b1e29',
        },
      },
      fontFamily: {
        // 不引外部字体：中英文共享系统字形，避免中英混排两套字重
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'PingFang SC',
          'HarmonyOS Sans SC',
          'Microsoft YaHei',
          'Noto Sans SC',
          'Roboto',
          'sans-serif',
        ],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
