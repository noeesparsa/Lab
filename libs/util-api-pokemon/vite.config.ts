import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  cacheDir: `../../node_modules/.vite/util-api`,

  plugins: [
    viteTsConfigPaths({
      root: `../../`,
    }),
  ],
  resolve: {
    alias: {},
  },

  test: {
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
    },
    logHeapUsage: true,
    silent: true,
    setupFiles: [`./test-setup.mjs`],
  },
});
