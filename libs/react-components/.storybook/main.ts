import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  core: {
    disableTelemetry: false,
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: true,
  },
  staticDirs: ['./assets'],
  addons: [
    `@storybook/addon-links`,
    `@storybook/addon-essentials`,
    `@storybook/addon-a11y`,
    `@storybook/preset-scss`,
    `storybook-dark-mode`,
    `@storybook/addon-storysource`,
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/react-components/vite.config.ts',
      },
    },
  },
  docs: {
    autodocs: true,
    defaultName: `Documentation`,
  },
};

export default config;
