module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "azul": "#3B28CC",
        "azulclaro": "#788BFF",
        "verde": "#21FA90",
        "branco": "#EAE8FF",
        "cinza": "#333333"
      },
      fontFamily: {
        'roboto': ['Roboto'],
        'ubuntu': ['Ubuntu'],
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
