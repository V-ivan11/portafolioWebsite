/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      /* https://coolors.co/0f172b-edf2f4-f15025-1a936f-fcbf49 */
      colors:{
        'primary': '#0F172B',
        'secondary': '#EDF2F4',
        'tertiary': '#F15025',
        'quaternary': '#1A936F',
        'quinary': '#FCBF449'
      }
    },
  },
  plugins: [],
}
