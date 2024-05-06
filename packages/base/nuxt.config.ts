import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    alias: { '~base': resolve('./') },

    devtools: { enabled: true },

    modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],

    css: [
        "~base/assets/css/styles.css"
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    imports: {
        dirs: ["utils"],
    },
});
