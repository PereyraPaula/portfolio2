module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'AvenirNext': ['AvenirNextLTW02-Medium', 'sans-serif'],
      },
      colors: {
        'dark-pink': '#8F7193',
        'dark-pink-hover': "#654f68",
        'light-green': '#759371',
        'light-green-hover': "#485c46",
        'light-green-sec': '#BBCAB9',

        'github_color': '#333333',
        'gmail_color': '#BB001B',
        'linkedin_color': "#2867B2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
