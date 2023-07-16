module.exports = {
  extends: ['plugin:@nrwl/nx/react', '../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.*.json'],
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
        alias: {
          '@lab/util-api-pokemon': `../util-api-pokemon/src`,
        },
        extensions: [`.ts`, `.js`, `.cjs`, `.mjs`, `.tsx`],
      },
    },
  },
  plugins: ['@typescript-eslint'],
  overrides: [],
};
