import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  cacheDir: `../../node_modules/.vite/data-access-pokemon`,
  plugins: [
    react(),
    viteTsConfigPaths({
      root: `../../`,
    }),
  ],
  test: {
    globals: true,
    cache: {
      dir: `../../node_modules/.vitest`,
    },
    environment: `jsdom`,
    exclude: [...configDefaults.exclude, '**/*.*js', '**/index.ts', '**/global.d.ts'],
    include: [`src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
    coverage: {
      exclude: [...configDefaults.exclude, '**/*.*js', '**/index.ts', '**/global.d.ts'],
      provider: `v8`,
      reporter: [`text`, `html`, `clover`, `json`, `lcov`],
      all: true,
      reportOnFailure: true,
    },
    logHeapUsage: true,
    silent: true,
    setupFiles: [`./test-setup.mjs`],
  },
});
