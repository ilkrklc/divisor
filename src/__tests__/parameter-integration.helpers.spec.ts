import {
  isWholeNumber,
  isPositive,
  isSortExpressionTrue,
  checkParameterValidity,
} from '../helpers/parameter-integration.helpers';

describe('number integration helpers', () => {
  describe('isWholeNumber', () => {
    it('should be whole number', () => expect(isWholeNumber(2)).toBe(true));
    it('should not be whole number', () =>
      expect(isWholeNumber(2.5)).toBe(false));
  });

  describe('isPositive', () => {
    it('should be positive number', () => expect(isPositive(2)).toBe(true));
    it('should not be positive number', () =>
      expect(isPositive(-2)).toBe(false));
  });

  describe('isSortExpressionTrue', () => {
    it('should be correct', () => {
      expect(isSortExpressionTrue(undefined)).toBe(true);
      expect(isSortExpressionTrue('asc')).toBe(true);
      expect(isSortExpressionTrue('desc')).toBe(true);
    });
    it('should be faulty', () =>
      expect(isSortExpressionTrue('abc')).toBe(false));
  });

  describe('checkParameterValidity', () => {
    it('should be correct', () => {
      expect(() => {
        checkParameterValidity(2);
      }).not.toThrowError();
      expect(() => {
        checkParameterValidity(2, { onlyProperDivisors: true });
      }).not.toThrowError();
      expect(() => {
        checkParameterValidity(2, { sort: 'asc' });
      }).not.toThrowError();
      expect(() => {
        checkParameterValidity(2, { sort: 'desc' });
      }).not.toThrowError();
      expect(() => {
        checkParameterValidity(2, { sort: 'desc', onlyProperDivisors: false });
      }).not.toThrowError();
    });
    it('should throw error', () => {
      expect(() => {
        checkParameterValidity(-2);
      }).toThrowError();
      expect(() => {
        checkParameterValidity(2.5);
      }).toThrowError();
      expect(() => {
        checkParameterValidity(2, { sort: 'abc' });
      }).toThrowError();
    });
  });
});
