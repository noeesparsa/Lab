import { join } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import dts from 'vite-plugin-dts';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/react-components',

  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },

  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  test: {
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
    },
    logHeapUsage: true,
    silent: true,
    setupFiles: [`./test-setup.mjs`],
  },
});
