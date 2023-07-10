module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.base.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
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
      plugins: ['@nx', 'react', '@typescript-eslint', 'import'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@nx/react',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
        `plugin:import/recommended`,
        `plugin:import/typescript`,
      ],
      rules: {
        '@typescript-eslint/unbound-method': [
          `error`,
          {
            ignoreStatic: true,
          },
        ],
        '@typescript-eslint/no-unsafe-call': `off`,
        '@typescript-eslint/no-unsafe-member-access': `off`,
        '@typescript-eslint/no-unsafe-return': `off`,
        '@typescript-eslint/no-unsafe-assignment': `off`,
        'sort-imports': [
          'error',
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            allowSeparatedGroups: false,
          },
        ],
        'import/no-relative-packages': 'off',
        'import/no-namespace': 'off',
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
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
