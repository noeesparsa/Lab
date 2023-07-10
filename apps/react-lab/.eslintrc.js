const appRootPath = require(`app-root-path`);

module.exports = {
  extends: ['plugin:@nrwl/nx/react', '../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@lab/react-components': `${appRootPath.path}/libs/react-components/src`,
        },
        extensions: [`.ts`, `.js`, `.cjs`, `.mjs`, `.tsx`],
      },
    },

    overrides: [
      {
        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
        rules: {},
      },
      {
        files: ['*.ts', '*.tsx'],
        rules: {},
      },
      {
        files: ['*.js', '*.jsx'],
        rules: {},
      },
    ],
  },
};
