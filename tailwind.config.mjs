/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
// 引入 defaultTheme 以便扩展
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // 扩展字体系列（保持原有设定）
      fontFamily: {
        sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
        serif: ['"Source Serif 4 Variable"', ...defaultTheme.fontFamily.serif],
      },
      // --- 新增动画配置 ---
      animation: {
        'spin-slow': 'spin 20s linear infinite', // 极慢速顺时针旋转
        'spin-reverse-slower': 'spin-reverse 25s linear infinite', // 极慢速逆时针旋转
        'pulse-data': 'pulse-data 4s ease-in-out infinite', // 数据呼吸效果
      },
      keyframes: {
        'spin-reverse': {
          to: { transform: 'rotate(-360deg)' },
        },
        'pulse-data': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(0.95)' },
        }
      },
      // -------------------
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    // 保持你的主题设置，确保我们之前设置的绿色 primary 生效
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#03a740",
          secondary: "#03a740", // 确保次要颜色也是绿色
          "--rounded-box": "1rem", // 可选：优化圆角
          "--rounded-btn": "0.5rem",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#03a740",
          secondary: "#03a740",
          "base-100": "#1d232a", // 可选：稍微加深暗色背景
        },
      },
    ],
    logs: false,
  },
};