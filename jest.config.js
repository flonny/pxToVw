module.exports = {
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'lcov', 'text'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    coverageDirectory: 'coverage',
    rootDir: __dirname,
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/__tests__/**/*spec.(t|j)s']
  }