module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.*.json'],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/await-thenable': `off`,
      },
    },
    {
      files: [`tests/**/*.tsx`],
      rules: {
        '@typescript-eslint/no-unsafe-call': `off`,
        '@typescript-eslint/no-unsafe-assignment': `off`,
        '@typescript-eslint/no-unsafe-argument': `off`,
        '@typescript-eslint/no-unsafe-member-access': `off`,
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
