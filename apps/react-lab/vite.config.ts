import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/react-lab',

  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false,
      },
      manifest: {
        name: `React laboratory`,
        short_name: `React lab`,
        description: `React laboratory by Noé E.`,
        icons: [
          {
            src: `android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        theme_color: `#ffffff`,
        background_color: `#ffffff`,
        start_url: `./?source=pwa`,
        display: `standalone`,
      },
    }),
  ],

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    exclude: [...configDefaults.exclude, '**/test-setup.mjs'],
    environment: 'jsdom',
    include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      exclude: [...configDefaults.exclude, '**/test-setup.mjs'],
      provider: `v8`,
      reporter: [`text`, `html`, `clover`, `json`, `lcov`],
    },
    logHeapUsage: true,
    silent: true,
    setupFiles: [`./test-setup.mjs`],
  },
});
