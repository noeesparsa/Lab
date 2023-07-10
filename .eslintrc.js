module.exports = {
  root: true,
  extends: [
    //'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@nx/react',
    //'plugin:@typescript-eslint/recommended',
    //'plugin:react-hooks/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['**/*'],
  plugins: ['@nx', 'react', '@typescript-eslint'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/cache': {
      lifetime: 'Infinity',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nx/typescript'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
  ],
};
