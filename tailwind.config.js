/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: {
          1: '#9147FF',
          2: '#5C16C5',
          3: '#451093',
        }
      }
    },
  },
  plugins: [],
  darkMode: [],
}

