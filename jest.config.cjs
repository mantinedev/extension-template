module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./jsdom.mocks.js'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};
