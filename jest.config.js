module.exports = async () => {
  return {
    verbose: true,
    rootDir: '.',
    transform: {
      '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '@helpers/(.*)': '<rootDir>/src/helpers/$1',
      '@typings/(.*)': '<rootDir>/src/typings/$1',
    },
  };
};
