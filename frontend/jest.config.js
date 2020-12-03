module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.+(ts|tsx)'
  ],
  moduleNameMapper: {
    '^components/(.+)$': '<rootDir>/components/$1',
    '^hooks/(.+)$': '<rootDir>/hooks/$1',
    '^config/(.+)$': '<rootDir>/config/$1',
    '^mocks/(.+)$': '<rootDir>/mocks/$1'
  }
}
