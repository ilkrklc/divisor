import {
  getDivisors,
  countDivisors,
  multiplyDivisors,
  sumDivisors,
  greatestProperDivisor,
  smallestProperDivisor,
} from '../divisors';

describe('divisors', () => {
  describe('getDivisors', () => {
    it('should throw error for decimal number', () =>
      expect(() => {
        getDivisors(20.5);
      }).toThrowError());

    it('should throw error for negative number', () => {
      expect(() => {
        getDivisors(-20);
      }).toThrowError();
      expect(() => {
        getDivisors(0);
      }).toThrowError();
    });

    it('should calculate divisors without any options', () =>
      expect(getDivisors(20)).toStrictEqual([1, 20, 2, 10, 4, 5]));

    it('should throw error if wrong sort option is provided', () =>
      expect(() => {
        getDivisors(20, { sort: 'abc' });
      }).toThrowError());

    it('should calculate divisors with asc sort option', () => {
      const ascResponse = [1, 2, 4, 5, 10, 20];
      return expect(getDivisors(20, { sort: 'asc' })).toStrictEqual(
        ascResponse,
      );
    });

    it('should calculate divisors with desc sort option', () => {
      const descResponse = [20, 10, 5, 4, 2, 1];
      return expect(getDivisors(20, { sort: 'desc' })).toStrictEqual(
        descResponse,
      );
    });

    it('should calculate divisors with only proper divisors option', () => {
      const onlyProperResult = [1, 2, 10, 4, 5];
      return expect(
        getDivisors(20, { onlyProperDivisors: true }),
      ).toStrictEqual(onlyProperResult);
    });

    it('should calculate divisors with asc sort and only proper divisors option', () =>
      expect(
        getDivisors(20, { sort: 'asc', onlyProperDivisors: true }),
      ).toStrictEqual([1, 2, 4, 5, 10]));

    it('should calculate divisors with desc sort and only proper divisors option', () =>
      expect(
        getDivisors(20, { sort: 'desc', onlyProperDivisors: true }),
      ).toStrictEqual([10, 5, 4, 2, 1]));
  });

  describe('countDivisors', () => {
    it('should throw error for decimal number', () =>
      expect(() => {
        countDivisors(20.5);
      }).toThrowError());

    it('should throw error for negative number', () => {
      expect(() => {
        countDivisors(-20);
      }).toThrowError();
      expect(() => {
        countDivisors(0);
      }).toThrowError();
    });

    it('should count correct', () => {
      expect(countDivisors(20)).toBe(6);
      expect(countDivisors(20, false)).toBe(6);
      expect(countDivisors(20, true)).toBe(5);
    });
  });

  describe('multiplyDivisors', () => {
    it('should throw error for decimal number', () =>
      expect(() => {
        multiplyDivisors(20.5);
      }).toThrowError());

    it('should throw error for negative number', () => {
      expect(() => {
        multiplyDivisors(-20);
      }).toThrowError();
      expect(() => {
        multiplyDivisors(0);
      }).toThrowError();
    });

    it('should multiply correct', () => {
      expect(multiplyDivisors(10)).toBe(100);
      expect(multiplyDivisors(10, false)).toBe(100);
      expect(multiplyDivisors(10, true)).toBe(10);
    });
  });

  describe('sumDivisors', () => {
    it('should throw error for decimal number', () =>
      expect(() => {
        sumDivisors(20.5);
      }).toThrowError());

    it('should throw error for negative number', () => {
      expect(() => {
        sumDivisors(-20);
      }).toThrowError();
      expect(() => {
        sumDivisors(0);
      }).toThrowError();
    });

    it('should sum correct', () => {
      expect(sumDivisors(10)).toBe(18);
      expect(sumDivisors(10, false)).toBe(18);
      expect(sumDivisors(10, true)).toBe(8);
    });
  });

  describe('greatestProperDivisor', () => {
    it('should throw error for decimal number', () =>
      expect(() => {
        greatestProperDivisor(20.5);
      }).toThrowError());

    it('should throw error for negative number', () => {
      expect(() => {
        greatestProperDivisor(-20);
      }).toThrowError();
      expect(() => {
        greatestProperDivisor(0);
      }).toThrowError();
    });

    it('should get greatest divisor', () =>
      expect(greatestProperDivisor(10)).toBe(5));
  });

  describe('smallestProperDivisor', () => {
    it('should throw error for decimal number', () =>
      expect(() => {
        smallestProperDivisor(20.5);
      }).toThrowError());

    it('should throw error for negative number', () => {
      expect(() => {
        smallestProperDivisor(-20);
      }).toThrowError();
      expect(() => {
        smallestProperDivisor(0);
      }).toThrowError();
    });

    it('should get smallest divisor', () =>
      expect(smallestProperDivisor(10)).toBe(1));

    it('should return null for number one', () =>
      expect(smallestProperDivisor(1)).toBe(null));
  });
});
