const { createGlobPatternsForDependencies } = require(`@nrwl/react/tailwind`);
const path = require(`path`);

module.exports = {
  presets: [require(`@vtmn/css-tailwind-preset`)],
  content: [
    path.join(
      __dirname,
      `{src,pages,components}/**/*!(*.stories|*.test).{ts,tsx,html}`
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      current: `currentColor`,
    },
    container: {
      center: true,
    },
  },
  darkMode: `class`,
  plugins: [],
};
