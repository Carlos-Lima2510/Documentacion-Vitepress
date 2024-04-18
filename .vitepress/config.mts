import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentación de Gestor de Calificaciones",
  description: "Guía y casos de uso",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Objetivo Principal', link: '/Objetivo Principal/objetivo-principal' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Objetivos', link: '/Objetivo Principal/objetivo-principal' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
