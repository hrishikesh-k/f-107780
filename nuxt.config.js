
export default {
    target: 'static',
    router: {
        linkActiveClass: 'current',
        linkExactActiveClass: 'current'
    },
    pageTransition: {
        name: 'slide-up-fade',
        mode: 'out-in'
    },
    generate: {
        subFolders: false,
        fallback: '404.html'
    },
    /*
    ** Global CSS
    */
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '@/plugins/plugins', mode: 'client' },
        { src: '@/plugins/fontawesome.js' },
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/tailwindcss',
        'nuxt-gsap-module',
        '@nuxtjs/axios',
        ['@nuxtjs/google-analytics', {
            id: 'UA-498978-34',
            set: [
                { field: 'anonymize_ip', value: true }
            ]
        }],
        ['@nuxtjs/google-fonts', {
            families: {
                'Roboto+Slab': {
                    wght: [300, 400, 500],
                    ital: [300, 400, 500]
                },
                'Roboto': {
                    wght: [300, 400, 500],
                    ital: [300, 400, 500]
                },
            }, display: 'swap'
        }],
        ['@nuxtjs/pwa', {
            meta: {
                name: 'Butter Uitvaartservice - Post Mortem Support in de omgeving Noord Holland, West Friesland, Amsterdam, Zaandam, Zaanstreek, Purmerend, Volendam, Waterland, Noordkop, Hollands Kroon, Alkmaar, Haarlem',
                description: 'Met aandacht verzorgd opbaren in de omgeving Noord Holland, West Friesland, Amsterdam, Zaandam, Zaanstreek, Purmerend, Volendam, Waterland, Noordkop, Hollands Kroon, Alkmaar, Haarlem. Het is vanuit de stellige overtuiging dat wanneer een goed verzorgde opbaring het rouwproces voor nabestaande pas écht begint. De eerste uren na het overlijden is het voor de nabestaanden chaos en weet men soms niet wat hen is overkomen en hoe nu verder. Door een goede verzorging die met aandacht voor zowel de overledene en nabestaanden is uitgevoerd, is er vaak al meer rust voor de aanwezige nabestaanden.Het rouwen kan dan pas écht beginnen.',
                lang: 'nl',
                theme_color: '#ffffff',
                ogHost: 'https://www.butteruitvaart.nl',
                nativeUI: true,
            },
            manifest: {
                name: 'Butter Uitvaartservice - Post Mortem Support',
                short_name: 'Butter Uitvaartservice',
                description: 'Met aandacht verzorgd opbaren in de omgeving Noord Holland, West Friesland, Amsterdam, Zaandam, Zaanstreek, Purmerend, Volendam, Waterland, Noordkop, Hollands Kroon, Alkmaar, Haarlem. Het is vanuit de stellige overtuiging dat wanneer een goed verzorgde opbaring het rouwproces voor nabestaande pas écht begint. De eerste uren na het overlijden is het voor de nabestaanden chaos en weet men soms niet wat hen is overkomen en hoe nu verder. Door een goede verzorging die met aandacht voor zowel de overledene en nabestaanden is uitgevoerd, is er vaak al meer rust voor de aanwezige nabestaanden.Het rouwen kan dan pas écht beginnen.',
                lang: 'nl',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#ffffff'
            },
        }],
    ],
    gsap: {
        extraPlugins: {
            scrollTo: true,
            scrollTrigger: true,
            text: true,
        },
    },
    // axios: {
    //     baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:8888' : 'https://www.butteruitvaart.nl'
    // },
    /*
    ** Nuxt.js modules
    */
    modules: [
    ],
    /*
    ** Build configuration
    */
    build: {
        postcss: { plugins: { tailwindcss: {}, autoprefixer: {}, }, },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
