module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'prettier',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.storybook.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'react-hooks',
    '@typescript-eslint',
    'import',
    'react',
    'prettier',
    'cypress',
    'simple-import-sort',
    'unicorn',
    'jsx-a11y',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '**/tsconfig.json',
      },
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['StrictPascalCase'],
        prefix: ['is', 'has', 'can', 'should', 'will', 'did'],
      },
      {
        selector: ['variable'],
        format: ['camelCase', 'StrictPascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['function'],
        format: ['camelCase', 'StrictPascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        // Interface name should not be prefixed with `I`.
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        // Type parameter name should either be `T` or a descriptive name.
        selector: 'typeParameter',
        filter: /^T$|^[A-Z][a-zA-Z]+$/.source,
        format: ['StrictPascalCase'],
      },
      {
        // Allow these in non-camel-case when quoted.
        selector: ['classProperty', 'objectLiteralProperty'],
        format: null,
        modifiers: ['requiresQuotes'],
      },
      {
        selector: ['objectLiteralProperty'],
        format: ['strictCamelCase'],
      },
      {
        selector: ['objectLiteralProperty'],
        format: null,
        filter: {
          regex: '^(SwitchCase)$',
          match: true,
        },
      },
      {
        selector: ['enum', 'enumMember'],
        format: ['PascalCase'],
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'func-call-spacing': ['warn', 'never'],
    indent: 0,
    'key-spacing': ['warn'],
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': ['warn'],
    'no-whitespace-before-property': ['warn'],
    'no-multiple-empty-lines': 'error',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'quote-props': ['warn', 'as-needed'],
    semi: ['warn'],
    'semi-spacing': ['warn'],
    'semi-style': ['warn'],
    'space-before-blocks': ['warn'],
    'space-in-parens': ['warn'],
    'space-infix-ops': ['warn'],
    'space-unary-ops': ['warn'],
    'switch-colon-spacing': ['warn'],
    'no-shadow': 'off',
    // This rules conflicts with prettier formatter
    'prettier/prettier': 'error',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',

    // Override default airbnb rules
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-negated-condition': 'warn',
    'default-case': 'off',
    'no-use-before-define': 'off',

    // code smell detection
    complexity: ['warn', 20],
    'max-nested-callbacks': 'warn',
    'no-restricted-properties': [
      'error',
      {
        object: 'it',
        property: 'only',
        message: "Did you forget to remove 'only' from this test?",
      },
      {
        object: 'describe',
        property: 'only',
        message: "Did you forget to remove 'only' from this test?",
      },
      {
        object: 'context',
        property: 'only',
        message: "Did you forget to remove 'only' from this test?",
      },
      {
        object: 'test',
        property: 'only',
        message: "Did you forget to remove 'only' from this test?",
      },
    ],

    // React
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-curly-spacing': ['error'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/state-in-constructor': ['error', 'never'],
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
    'react/require-default-props': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-props-no-spreading': [1],
    'react/jsx-sort-props': [1],
    'react/jsx-props-no-multi-spaces': [1],
    'react/jsx-newline': [1, { prevent: true }],
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': ['error'],
    'react/jsx-closing-bracket-location': 1,

    // A11Y
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'jsx-a11y/label-has-associated-control': [
      'error',
      { labelComponents: ['label'], assert: 'either' },
    ],

    // typescript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/array-type': [
      'error',
      { default: 'array-simple', readonly: 'array-simple' },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],

    // Imports, file extensions
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.{stories,test,tests,spec}.{js,jsx,ts,tsx}'] },
    ],
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'simple-import-sort/sort': [
      'warn',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react', '^redux', '^@?\\w'],
          // Components.
          ['@heycar-uikit/*', '^(feather|private)(/?.*|$)'],
          // Root path for project
          ['^#'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.{test,tests,spec}.{js,jsx,ts,tsx}'],
      env: {
        node: true,
        jest: true,
        browser: true,
      },
    },
    {
      files: ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/cypress/**/*'],
      env: {
        'cypress/globals': true,
      },
      rules: {
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
      },
    },
  ],
};
