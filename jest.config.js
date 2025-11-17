module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts}', '!**/node_modules/**'],
  testMatch: [
    '**/__tests__/**/*.(spec|test).[jt]s?(x)', // Unit tests
    '**/?(*.)(integration).[jt]s?(x)', // Integration tests
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
};