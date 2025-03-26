const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  important: true,
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Satoshi"', ...fontFamily.sans],
        jakarta: ['"Satoshi"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
        satoshi:['"satoshi-variable"','"satoshi"',...fontFamily.mono]
      },
      borderRadius: {
        sm: "4px",
        "16px": "16px"
      },
      fontSize: {
        "2xs": "0.675rem",
        "18px": "18px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
        xlg: "1400px",
      },
      colors: {
        'cst-text-purple': '#8C7CE0',
        primary: {
          DEFAULT:
            "rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)",
          100: "rgb(var(--docs-color-primary-100, 26 144 255) / <alpha-value>)",
          200: "rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)",
        },
        secondary: {
          DEFAULT:
            "rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)",
          1000: "rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)",
          900: "rgb(var(--docs-color-secondary-900, 25 25 25) / <alpha-value>)",
          800: "rgb(var(--docs-color-secondary-800, 38 38 38) / <alpha-value>)",
          700: "rgb(var(--docs-color-secondary-700, 71 71 71) / <alpha-value>)",
        },
        
        text: {
          400: "rgb(var(--docs-color-text-400, 153 153 153) / <alpha-value>)",
        },
        "cst-brand": {
          DEFAULT: "rgba(104, 82, 214, 1)",
        },
        "cst-black": {
          DEFAULT: "rgba(6, 5, 13, 1)",
        },
        "cst-white": {
          DEFAULT: "rgb(243, 243, 248)",
        },
        "cst-border": {
          DEFAULT: "rgba(20, 19, 29, 0.08)",
        },
        "cst-border-dark": {
          DEFAULT: "rgba(123, 122, 130, 0.5)",
        },
        "cst-card-bg": {
          DEFAULT: "rgba(250, 250, 255, 0.06)",
        },
        "cst-card-bg-dark": {
          DEFAULT: "rgba(20, 19, 29, 0.8)",
        },
        "cst-sec-title": {
          DEFAULT: "rgba(20, 19, 29, 1)",
        },
        "cst-sec-title-dark": {
          DEFAULT: "rgba(255, 255, 255, 1)",
        },
        "cst-sec-subtitle": {
          DEFAULT: "rgba(20, 19, 29, 0.74)",
        },
        "cst-sec-subtitle-dark": {
          DEFAULT: "rgba(255, 255, 255, 0.74)",
        },
        "cst-bg-secondary": {
          DEFAULT: "rgb(246, 246, 250)",
        },
        "cst-bg-secondary-dark": {
          DEFAULT: "rgba(20, 19, 29, 0.8)",
        },
        "cst-secondary-text": {
          DEFAULT: "rgba(123, 122, 130, 1)",
        },
        "cst-secondary-text-dark": {
          DEFAULT: "rgba(123, 122, 130, 1)",
        },
        "cst-text-drawer": {
          DEFAULT: "rgba(20,19,29,0.54)",
        },
        "cst-text-drawer-dark": {
          DEFAULT: "rgba(255,255,255,0.54)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
