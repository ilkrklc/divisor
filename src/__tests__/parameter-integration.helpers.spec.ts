import {
  isWholeNumber,
  isPositive,
  isSortExpressionTrue,
  checkDivisorsParameterValidity,
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

  describe('checkDivisorsParameterValidity', () => {
    it('should be correct', () => {
      expect(() => {
        checkDivisorsParameterValidity(2);
      }).not.toThrowError();
      expect(() => {
        checkDivisorsParameterValidity(2, { onlyProperDivisors: true });
      }).not.toThrowError();
      expect(() => {
        checkDivisorsParameterValidity(2, { sort: 'asc' });
      }).not.toThrowError();
      expect(() => {
        checkDivisorsParameterValidity(2, { sort: 'desc' });
      }).not.toThrowError();
      expect(() => {
        checkDivisorsParameterValidity(2, {
          sort: 'desc',
          onlyProperDivisors: false,
        });
      }).not.toThrowError();
    });
    it('should throw error', () => {
      expect(() => {
        checkDivisorsParameterValidity(-2);
      }).toThrowError();
      expect(() => {
        checkDivisorsParameterValidity(2.5);
      }).toThrowError();
      expect(() => {
        checkDivisorsParameterValidity(2, { sort: 'abc' });
      }).toThrowError();
    });
  });
});
