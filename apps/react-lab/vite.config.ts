import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { configDefaults } from 'vitest/config';
import appRootPath from 'app-root-path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/react-lab',
  publicDir: `public`,
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

  resolve: {
    alias: {
      '@lab/data-access-pokemon': `${appRootPath.path}/libs/data-access-pokemon/src`,
      '@lab/react-components': `${appRootPath.path}/libs/react-components/src`,
      '@lab/util-api-pokemon': `${appRootPath.path}/libs/util-api-pokemon/src`,
      '@lab/util-i18n': `${appRootPath.path}/libs/util-i18n/src`,
    },
  },

  plugins: [
    react(),
    nxViteTsPaths(),
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
    reporters: ['default'],
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
      reportsDirectory: '../../coverage/apps/react-lab',
    },
    logHeapUsage: true,
    silent: true,
    setupFiles: [`./test-setup.mjs`],
    passWithNoTests: false,
  },
});
