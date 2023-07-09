module.exports = {
  extends: ['plugin:@nrwl/nx/react', '../../.eslintrc.json'],
  ignorePatterns: ['!**/*'],
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
    {
      files: [`**/*.test.tsx`, `**/*.test.ts`],
      plugins: [`vitest`, `jest-extended`],
      extends: [`plugin:vitest/all`, `plugin:jest-extended/all`],

      rules: {},
    },
  ],
};
