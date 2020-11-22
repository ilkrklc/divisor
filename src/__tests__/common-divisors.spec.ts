import {
  getCommonDivisors,
  greatestCommonDivisor,
  leastCommonMultiple,
  countCommonDivisors,
  multiplyCommonDivisors,
  sumCommonDivisors,
} from '../common-divisors';

describe('common divisors', () => {
  describe('getCommonDivisors', () => {
    it('should throw error for decimal numbers', () => {
      expect(() => {
        getCommonDivisors(20.5, 10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(20, 10.5);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(20.5, 10.5);
      }).toThrowError();
    });

    it('should throw error for negative numbers', () => {
      expect(() => {
        getCommonDivisors(-20, 10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(20, -10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(-20, -10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(0, 10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(20, 0);
      }).toThrowError();
    });

    it('should calculate common divisors without any sorting', () =>
      expect(getCommonDivisors(30, 10)).toStrictEqual([1, 10, 2, 5]));

    it('should calculate divisors with asc sort option', () =>
      expect(getCommonDivisors(30, 10, 'asc')).toStrictEqual([1, 2, 5, 10]));

    it('should calculate divisors with desc sort option', () =>
      expect(getCommonDivisors(30, 10, 'desc')).toStrictEqual([10, 5, 2, 1]));
  });

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
      expect(() => {
        getCommonDivisors(0, 10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(20, 0);
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
      expect(() => {
        getCommonDivisors(0, 10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(20, 0);
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
      expect(() => {
        getCommonDivisors(0, 10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(20, 0);
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
      expect(() => {
        getCommonDivisors(0, 10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(20, 0);
      }).toThrowError();
    });

    it('should multiply correct', () =>
      expect(multiplyCommonDivisors(30, 10)).toBe(100));
  });

  describe('sumCommonDivisors', () => {
    it('should throw error for decimal numbers', () => {
      expect(() => {
        sumCommonDivisors(20.5, 10);
      }).toThrowError();
      expect(() => {
        sumCommonDivisors(20, 10.5);
      }).toThrowError();
      expect(() => {
        sumCommonDivisors(20.5, 10.5);
      }).toThrowError();
    });

    it('should throw error for negative numbers', () => {
      expect(() => {
        sumCommonDivisors(-20, 10);
      }).toThrowError();
      expect(() => {
        sumCommonDivisors(20, -10);
      }).toThrowError();
      expect(() => {
        sumCommonDivisors(-20, -10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(0, 10);
      }).toThrowError();
      expect(() => {
        getCommonDivisors(20, 0);
      }).toThrowError();
    });

    it('should sum correct', () => expect(sumCommonDivisors(30, 10)).toBe(18));
  });
});
