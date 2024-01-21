import './assets/styles.scss';
import { themes } from '@storybook/theming';

const PREVIEW = {
  parameters: {
    backgrounds: {
      default: `tertiary`,
      values: [
        {
          name: `primary`,
          value: `#FFFFFF`,
        },
        {
          name: `secondary`,
          value: `#F5F4F5`,
        },
        {
          name: `tertiary`,
          value: `#F1F0EE`,
        },
      ],
    },
    actions: { argTypesRegex: `^on[A-Z].*` },
    layout: `centered`,
    controls: { expanded: true },
    docs: {
      theme: themes.light,
      inlineStories: false,
    },
    darkMode: {
      dark: {
        ...themes.dark,
        brandTitle: `UI Components`,
        colorPrimary: `#007DBC`,
        stylePreview: true,
      },
      light: {
        ...themes.light,
        brandTitle: `UI Components`,
        colorPrimary: `#007DBC`,
        stylePreview: true,
      },
      classTarget: `html`,
      darkClass: `vtmn-theme_core--dark`,
      lightClass: `vtmn-theme_core--light`,
      current: `light`,
    },
    options: {
      storySort: {
        method: `alphabetical`,
        includeName: false,
        order: [`*`],
      },
    },
  },
};

export default PREVIEW;
