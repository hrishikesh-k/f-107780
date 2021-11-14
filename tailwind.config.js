module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: {
                lightest: "#fdfdfd",
                light: "#dedede",
                DEFAULT: "#888888",
                dark: "#888888",
            },
            blue: {
                light: '#85d7ff',
                DEFAULT: '#2e2e59',
                dark: '#212140',
            },
            orange: "#ed7f03",
            white: "#ffffff",
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['Roboto Slab', 'serif'],
        }, fontWeight: {
            normal: 300,
            bold: 500,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    mode: 'jit'
}
