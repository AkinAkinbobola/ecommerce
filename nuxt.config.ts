// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/color-mode',
        'nuxt-icon',
        'nuxt-lodash',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt'
        // '@nuxtjs/supabase'
    ],
    build: {
        transpile: ['pinia-plugin-persistedstate'],
    },
    colorMode: {
        classSuffix: ''
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            stripeKey: process.env.STRIPE_PK_KEY,
        }
    },
    app: {
        head: {
            script: [
                {
                    src: 'https://js.stripe.com/v3',
                    defer: true
                }
            ]
        }
    }
})