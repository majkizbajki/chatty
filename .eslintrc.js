module.exports = {
  root: true,
  env: {
    "es2021": true,
    "node": true,
    "jest": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
  ],
  extends: ["prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    'arrow-body-style': 0,
    'curly': [2, "all"],
    'prettier/prettier': [2, { endOfLine: 'auto' }],
    'max-len': [1, 120],
    'no-console': [2, { allow: ['debug', 'error', 'info', 'warn'] }],
    'sort-imports': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 1,
    'no-confusing-arrow': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 2,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    'react/jsx-no-useless-fragment': 2,
    'react/require-default-props': [1, { ignoreFunctionalComponents: true, forbidDefaultForRequired: false }],
    'react-hooks/rules-of-hooks': 2,
    "react-hooks/exhaustive-deps": 1,
    '@typescript-eslint/member-ordering': [2, { default: ['field'] }],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      { ignoreRestSiblings: true, varsIgnorePattern: '^h$', argsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-use-before-define': 0,
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
