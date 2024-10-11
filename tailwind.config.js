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
          0: '#bf94ff',
          0.5: '#a970ff',
          1: '#772ce8',
          2: '#5C16C5',
          3: '#451093',
        },
        darkButtonHover: '#53535f7a',
        lightButtonHover: '#adadb859',
        lightBackgroundSlot: '#F7F7F8',
        darkBackgroundSlot: '#0e0e10',
      }
    },
    fontFamily: {
      'special': [ "Roobert","Inter",
       
        "Helvetica Neue","sans-serif"]    }
  },
  plugins: [],
  darkMode: 'class',
}

