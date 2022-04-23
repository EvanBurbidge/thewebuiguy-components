// jest.config.js
module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  modulePaths: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  modulePathIgnorePatterns: ['jest-test-results.json', 'node_modules'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
  },
  testEnvironment: 'jsdom',
};