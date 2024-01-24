import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  cacheDir: `../../node_modules/.vite/util-i18n`,
  plugins: [react(), nxViteTsPaths()],
  test: {
    reporters: ['default'],
    globals: true,
    watch: false,
    cache: {
      dir: `../../node_modules/.vitest`,
    },
    environment: `jsdom`,
    include: [`src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
    coverage: {
      provider: `v8`,
      reporter: [`text`, `html`, `clover`, `json`, `lcov`],
      reportsDirectory: '../../coverage/libs/util-i18n',
      exclude: ['./test-setup.mjs'],
    },
    logHeapUsage: true,
    silent: true,
    setupFiles: [`./test-setup.mjs`],
  },
});
