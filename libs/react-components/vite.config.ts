import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/react-components',

  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },

  plugins: [react(), nxViteTsPaths()],

  test: {
    reporters: ['default'],
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    exclude: [
      ...configDefaults.exclude,
      '**/*.*js',
      '**/index.ts',
      '**/*.stories.*',
      '**/global.d.ts',
      '**/.storybook/**/*.*s',
    ],
    include: [`src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        '**/*.*js',
        '**/index.ts',
        '**/*.stories.*',
        '**/global.d.ts',
        '**/.storybook/**/*.*s',
      ],
      provider: `v8`,
      reporter: [`text`, `html`, `clover`, `json`, `lcov`],
      all: true,
      reportOnFailure: true,
      reportsDirectory: '../../coverage/libs/react-components',
    },
    logHeapUsage: true,
    silent: true,
    setupFiles: [`./test-setup.mjs`],
  },
});
