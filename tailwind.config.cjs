module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e6f6ff',
          300: '#7dd3fc',
          500: '#0ea5e9',
          700: '#0369a1'
        },
        accent: {
          500: '#06b6d4',
          700: '#0f766e'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        soft: '0 8px 30px rgba(2,6,23,0.08)'
      }
    },
  },
  plugins: [],
}
