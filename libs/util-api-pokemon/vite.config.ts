import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  cacheDir: `../../node_modules/.vite/util-api`,

  plugins: [nxViteTsPaths()],
  resolve: {
    alias: {},
  },

  test: {
    reporters: ['default'],
    globals: true,
    cache: {
      dir: `../../node_modules/.vitest`,
    },
    environment: `jsdom`,
    exclude: [...configDefaults.exclude, '**/*.js', '**/index.ts', '**/global.d.ts'],
    include: [`src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
    coverage: {
      provider: `v8`,
      exclude: [...configDefaults.exclude, '**/*.*js', '**/index.ts', '**/global.d.ts'],
      reporter: [`text`, `html`, `clover`, `json`, `lcov`],
      all: true,
      reportOnFailure: true,
      reportsDirectory: '../../coverage/libs/util-api-pokemon',
    },
    logHeapUsage: true,
    silent: true,
    setupFiles: [`./test-setup.mjs`],
  },
});
