/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// eslint-disable-next-line no-undef
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  roots: [
    '<rootDir>/tests'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleDirectories: [
    'node_modules',
    '<rootDir>'
  ],
}
