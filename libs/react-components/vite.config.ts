import { join } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import dts from 'vite-plugin-dts';
import viteTsConfigPaths from 'vite-tsconfig-paths';

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
    include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      provider: `c8`,
      reporter: [`text`, `html`, `clover`, `json`, `lcov`],
    },
    logHeapUsage: true,
    silent: true,
    setupFiles: [`./test-setup.mjs`],
  },
});
