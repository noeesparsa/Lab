const appRootPath = require(`app-root-path`);

module.exports = {
  extends: [`../../.eslintrc.js`],
  ignorePatterns: [`!**/*`],
  parserOptions: {
    project: [`${appRootPath.path}/libs/util-i18n/tsconfig.*.json`],
    ecmaVersion: 2020,
    sourceType: `module`,
  },
  globals: {
    vi: `readonly`,
  },
  settings: {
    'import/resolver': {
      'typescript': {
        alwaysTryTypes: true,
        project: [`./tsconfig.*.json`],
      },
      'node': {
        alwaysTryTypes: true,
        project: [`./tsconfig.*.json`],
      },
      'eslint-import-resolver-custom-alias': {
        extensions: [`.ts`, `.js`, `.cjs`, `.mjs`, `.tsx`],
      },
    },
  },
  overrides: [
    {
      files: [`*.ts`],
      plugins: [`import`],
      extends: [`plugin:import/recommended`, `plugin:import/typescript`],
      rules: {
        'import/export': `off`,
      },
    },
  ],
};
