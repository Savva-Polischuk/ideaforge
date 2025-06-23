// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-05-15',
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatID: process.env.TELEGRAM_CHAT_ID
  },
  devtools: { enabled: true },
    modules: ['@nuxt/icon', 'nuxt-swiper'],
  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons',
        normalizeIconName: false
      },
    ],
  },
  css: ['~/assets/sass/main.sass'],
  vite: {
    css: {
        preprocessorOptions: {
                sass: {
                    additionalData: '@use "~/assets/sass/_mixins.sass" as *',
                },
            },
        },
    },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})