module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        lightest: '#fafafa',
        light: '#dedede',
        DEFAULT: '#888888',
        dark: '#888888'
      },
      blue: {
        light: '#85d7ff',
        DEFAULT: '#2e2e59',
        dark: '#212140'
      },
      orange: '#ed7f03',
      white: '#ffffff'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Slab', 'serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  mode: 'jit'
}
