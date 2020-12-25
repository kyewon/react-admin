module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],

  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transformIgnorePatterns: ["./node_modules/"],
  
  moduleNameMapper: {
    "^app/(.*)": "<rootDir>/src/app/$1",
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}