import {
  checkCommonDivisorsParameterValidity,
  checkDivisorsParameterValidity,
  isPositive,
  isSortExpressionTrue,
  isWholeNumber,
} from '../helpers/parameter-integration.helpers';

describe('parameter integration helpers', () => {
  describe('isWholeNumber', () => {
    it('should be whole number', () => {
      expect(isWholeNumber(2)).toBe(true);
      expect(isWholeNumber(-2)).toBe(true);
      expect(isWholeNumber(0)).toBe(true);
    });
    it('should not be whole number', () => {
      expect(isWholeNumber(2.5)).toBe(false);
      expect(isWholeNumber(-2.5)).toBe(false);
    });
  });

  describe('isPositive', () => {
    it('should be positive number', () => expect(isPositive(2)).toBe(true));
    it('should not be positive number', () => {
      expect(isPositive(-2)).toBe(false);
      expect(isPositive(0)).toBe(false);
    });
  });

  describe('isSortExpressionTrue', () => {
    it('should be correct', () => {
      expect(isSortExpressionTrue(undefined)).toBe(true);
      expect(isSortExpressionTrue('')).toBe(true);
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
        checkDivisorsParameterValidity(0);
      }).toThrowError();
      expect(() => {
        checkDivisorsParameterValidity(2.5);
      }).toThrowError();
      expect(() => {
        checkDivisorsParameterValidity(2, { sort: 'abc' });
      }).toThrowError();
    });
  });

  describe('checkCommonDivisorsParameterValidity', () => {
    it('should be correct', () => {
      expect(() => {
        checkCommonDivisorsParameterValidity(30, 10);
      }).not.toThrowError();
      expect(() => {
        checkCommonDivisorsParameterValidity(30, 10, 'asc');
      }).not.toThrowError();
      expect(() => {
        checkCommonDivisorsParameterValidity(30, 10, 'desc');
      }).not.toThrowError();
    });
    it('should throw error', () => {
      expect(() => {
        checkCommonDivisorsParameterValidity(-2, 10);
      }).toThrowError();
      expect(() => {
        checkCommonDivisorsParameterValidity(2, -10);
      }).toThrowError();
      expect(() => {
        checkCommonDivisorsParameterValidity(0, 10);
      }).toThrowError();
      expect(() => {
        checkCommonDivisorsParameterValidity(10, 0);
      }).toThrowError();
      expect(() => {
        checkCommonDivisorsParameterValidity(2.5, 10);
      }).toThrowError();
      expect(() => {
        checkCommonDivisorsParameterValidity(10, 2.5);
      }).toThrowError();
      expect(() => {
        checkCommonDivisorsParameterValidity(2, 10, 'abc');
      }).toThrowError();
    });
  });
});
