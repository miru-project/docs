import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Miru",
      social: {
        github: "https://github.com/miru-project/miru-app",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/assets/landing.css",
      ],
      sidebar: [
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     {
        //       label: "Example Guide",
        //       link: "/guides/example/",
        //     },
        //   ],
        // },
        {
          label: "开发指南",
          autogenerate: {
            directory: "developer",
          },
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
        en: {
          label: 'English',
           lang: 'en',
        }
      }
    }),
    react(),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
