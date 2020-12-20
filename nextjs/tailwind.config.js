const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const plugins = [
  plugin(function ({ addUtilities }) {
    const extendLineThrough = {
      '.line-through': {
        textDecoration: 'line-through',
        textDecorationColor: 'var(--accent)',
      },
    }
    addUtilities(extendLineThrough)
  }),
]
const devOnlyPlugins = [require('tailwindcss-debug-screens')]

module.exports = {
  purge: [
    './pages/**/*.{ts,tsx, js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
  ],
  // custom theme toggle used instead
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        themeText: 'var(--text)',
        themeBg: 'var(--background)',
        themeAccent: 'var(--accent)',
      },
      opacity: {
        10: '0.10',
        90: '0.90',
      },
    },
  },
  variants: {},
  plugins:
    process.env.NODE_ENV === 'production'
      ? plugins
      : [...plugins, ...devOnlyPlugins],
}
