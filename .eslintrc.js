module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
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
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.cjs',
      '.mjs'
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx'
      ]
    },
    'import/cache': {
      lifetime: 'Infinity'
    }
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      plugins: ['@nx', 'react', 'prettier', '@typescript-eslint', 'import'],
      extends: [
        'plugin:@nx/react',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        'prettier/prettier': 'error',
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
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        'import/namespace': 'off',
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
