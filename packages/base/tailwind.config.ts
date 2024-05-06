import colors from 'tailwindcss/colors'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./formkit.theme.ts",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.gray,
          DEFAULT: colors.gray[700],
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

