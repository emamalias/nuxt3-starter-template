import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    alias: { '~base': resolve('./') },

    devtools: { enabled: true },

    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@formkit/nuxt"],

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
