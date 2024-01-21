import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  isFullscreen: false,
  sidebar: {
    showRoots: true,
  },
  theme,
});
