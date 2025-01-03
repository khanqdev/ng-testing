module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|js|html)$': ['jest-preset-angular', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    }],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  moduleFileExtensions: ['ts', 'html', 'js'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  testPathIgnorePatterns: [
    "\\.service\\.ts$"
  ],
  coveragePathIgnorePatterns: [
    "\\.service\\.ts$"
  ],
};
