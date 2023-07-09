module.exports = {
  extends: ['plugin:@nrwl/nx/react', '../../.eslintrc.json'],
  ignorePatterns: ['!**/*'],
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@lab/react-components': `./libs/react-components/src`,
        },
        extensions: [`.ts`, `.js`, `.cjs`, `.mjs`, `.tsx`],
      },
    },
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        "@nx/enforce-module-boundaries": [
          "error",
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"]
              }
            ]
          }
        ]
      },
    },
  ],
};
