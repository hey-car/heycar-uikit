module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./packages/setupTests.ts'],
  modulePathIgnorePatterns: ['dist'],
  globalSetup: './packages/globalSetup.ts',
  globals: {
    'ts-jest': {
      babelConfig: {
        plugins: [
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
        ],
      },
    },
  },
  moduleNameMapper: {
    '@heycar-uikit/(.*)$': '<rootDir>/packages/$1/src',
    '\\.css$': 'identity-obj-proxy',
  },
  testMatch: [
    '**/*.test.ts?(x)',
    '**/*.snapshot.test.ts?(x)',
    '!**/*.screenshots.test.ts?(x)',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary', 'clover'],
};
