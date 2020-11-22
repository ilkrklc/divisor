import { greatestCommonDivisor, leastCommonMultiple } from '../common-divisors';

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
});
