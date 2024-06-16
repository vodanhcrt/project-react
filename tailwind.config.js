/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
            xs: {'max': '479px'},  // max-width 479px
            sm: {'max': '575px'},  // max-width 575px
            md: {'max': '767px'},  // max-width 767px
            lg: {'max': '991px'},  // max-width 991px
            xl: {'max': '1199px'}, // max-width 1199px
            '2xl': {'max': '1399px'}, // max-width 1399px
        },
        container: {
            center: true,
            padding: '15px',
            screens: {
              xs: '100%',
              sm: '540px',
              md: '720px',
              lg: '960px',
              xl: '1140px',
              '2xl': '1320px',
            },
        },
    },
  },
  plugins: [],
}

