/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: 'Fraunces',
        montserrat: 'Montserrat',
      },
      colors: {
        cream: 'hsl(30, 38%, 92%)',
        price: 'hsl(158, 36%, 37%)',
        heading_color: 'hsl(212, 21%, 14%)',
        text_color: 'hsl(228, 12%, 48%)',
      },
      letterSpacing: {
        huge: '0.4em',
      },
      gridTemplateColumns: {
        projct: 'repeat(2, minmax(0, 50%))',
      },
      maxHeight: {
        project_size: '660px',
      }
    },
  },
  plugins: [],
}
