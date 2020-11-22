import {
  greatestCommonDivisor,
  leastCommonMultiple,
  countCommonDivisors,
  multiplyCommonDivisors,
} from '../common-divisors';

describe('common divisors', () => {
  describe('greatestCommonDivisor', () => {
    it('should throw error for decimal numbers', () => {
      expect(() => {
        greatestCommonDivisor(20.5, 10);
      }).toThrowError();
      expect(() => {
        greatestCommonDivisor(20, 10.5);
      }).toThrowError();
      expect(() => {
        greatestCommonDivisor(20.5, 10.5);
      }).toThrowError();
    });

    it('should throw error for negative numbers', () => {
      expect(() => {
        greatestCommonDivisor(-20, 10);
      }).toThrowError();
      expect(() => {
        greatestCommonDivisor(20, -10);
      }).toThrowError();
      expect(() => {
        greatestCommonDivisor(-20, -10);
      }).toThrowError();
    });

    it('should calculate greatest common divisor', () =>
      expect(greatestCommonDivisor(30, 10)).toBe(10));
  });

  describe('leastCommonMultiple', () => {
    it('should throw error for decimal numbers', () => {
      expect(() => {
        leastCommonMultiple(20.5, 10);
      }).toThrowError();
      expect(() => {
        leastCommonMultiple(20, 10.5);
      }).toThrowError();
      expect(() => {
        leastCommonMultiple(20.5, 10.5);
      }).toThrowError();
    });

    it('should throw error for negative numbers', () => {
      expect(() => {
        leastCommonMultiple(-20, 10);
      }).toThrowError();
      expect(() => {
        leastCommonMultiple(20, -10);
      }).toThrowError();
      expect(() => {
        leastCommonMultiple(-20, -10);
      }).toThrowError();
    });

    it('should calculate least common multiple', () =>
      expect(leastCommonMultiple(30, 10)).toBe(30));
  });

  describe('countCommonDivisors', () => {
    it('should throw error for decimal numbers', () => {
      expect(() => {
        countCommonDivisors(20.5, 10);
      }).toThrowError();
      expect(() => {
        countCommonDivisors(20, 10.5);
      }).toThrowError();
      expect(() => {
        countCommonDivisors(20.5, 10.5);
      }).toThrowError();
    });

    it('should throw error for negative numbers', () => {
      expect(() => {
        countCommonDivisors(-20, 10);
      }).toThrowError();
      expect(() => {
        countCommonDivisors(20, -10);
      }).toThrowError();
      expect(() => {
        countCommonDivisors(-20, -10);
      }).toThrowError();
    });

    it('should count correct', () =>
      expect(countCommonDivisors(30, 10)).toBe(4));
  });

  describe('multiplyCommonDivisors', () => {
    it('should throw error for decimal numbers', () => {
      expect(() => {
        multiplyCommonDivisors(20.5, 10);
      }).toThrowError();
      expect(() => {
        multiplyCommonDivisors(20, 10.5);
      }).toThrowError();
      expect(() => {
        multiplyCommonDivisors(20.5, 10.5);
      }).toThrowError();
    });

    it('should throw error for negative numbers', () => {
      expect(() => {
        multiplyCommonDivisors(-20, 10);
      }).toThrowError();
      expect(() => {
        multiplyCommonDivisors(20, -10);
      }).toThrowError();
      expect(() => {
        multiplyCommonDivisors(-20, -10);
      }).toThrowError();
    });

    it('should count correct', () =>
      expect(multiplyCommonDivisors(30, 10)).toBe(100));
  });
});
