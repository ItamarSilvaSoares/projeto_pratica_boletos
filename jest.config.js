module.exports = {

  clearMocks: true,

  preset: 'ts-jest',

  testEnvironment: 'node',

  setupFilesAfterEnv: ['./src/tests/unity/models/mocks/singleton.ts']

};
