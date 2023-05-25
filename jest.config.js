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
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.js',
  },
  testMatch: [
    '**/*.test.ts?(x)',
    '**/*.snapshot.test.ts?(x)',
    '!**/*.screenshots.test.ts?(x)',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary', 'clover'],
};
