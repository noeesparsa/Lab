const appRootPath = require(`app-root-path`);

module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.*.json'],
  },
  globals: {
    JSX: `readonly`,
    vi: `readonly`,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/react-lab/tsconfig.json'],
      },
      node: {
        alwaysTryTypes: true,
        project: ['apps/react-lab/tsconfig.json'],
      },
    },
    'eslint-import-resolver-custom-alias': {
      alias: {
        '@front/react-components': `${appRootPath.path}/libs/react-components/src/`,
        '@front/util-i18n': `${appRootPath.path}/libs/util-i18n/src/`,
      },
      extensions: [`.ts`, `.js`, `.cjs`, `.mjs`, `.tsx`],
    },
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/await-thenable': `off`,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'import/no-commonjs': `off`,
      },
    },
  ],
};
