module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.*.json'],
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
