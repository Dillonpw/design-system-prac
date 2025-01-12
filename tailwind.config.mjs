/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        content: ["Geist", ...fontFamily.sans],
        title: ["Quantico", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#EEF1FD",
          100: "#DDE3FB",
          200: "#BBC7F7",
          300: "#99ABF3",
          400: "#778FEF",
          500: "#384FC7",
          600: "#2E40A0",
          700: "#233079",
          800: "#182052",
          900: "#0C102B",
        },
        secondary: {
          50: "#FDF0F1",
          100: "#FBE1E3",
          200: "#F7C3C8",
          300: "#F3A5AC",
          400: "#EF8791",
          500: "#DE8490",
          600: "#B26A73",
          700: "#854F56",
          800: "#59353A",
          900: "#2C1A1D",
        },
        tertiary: {
          50: "#F0FAF0",
          100: "#E1F5E1",
          200: "#C3EBC3",
          300: "#A5E1A5",
          400: "#87D787",
          500: "#79CD6B",
          600: "#61A456",
          700: "#497B41",
          800: "#31522B",
          900: "#182916",
        },
        accent: {
          50: "#fff1e8",
          100: "#ffe0cc",
          200: "#ffc7a3",
          300: "#fea875",
          400: "#fd944d",
          500: "#fc8038",
          600: "#e66825",
          700: "#cc4f18",
          800: "#a13812",
          900: "#7a2a0e",
        },
      },
    },
    plugins: [],
  },
};
