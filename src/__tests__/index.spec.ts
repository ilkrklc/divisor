import { getDivisors } from '../index';

describe('index', () => {
  describe('getDivisors', () => {
    it('should throw error for decimal number', () =>
      expect(() => {
        getDivisors(20.5);
      }).toThrowError());

    it('should throw error for negative number', () =>
      expect(() => {
        getDivisors(-20);
      }).toThrowError());

    it('should calculate divisors without any options', () =>
      expect(getDivisors(20)).toStrictEqual([1, 20, 2, 10, 4, 5]));

    it('should throw error if wrong sort option is provided', () =>
      expect(() => {
        getDivisors(20, { sort: 'abc' });
      }).toThrowError());

    it('should calculate divisors with asc sort option', () =>
      expect(getDivisors(20, { sort: 'asc' })).toStrictEqual([
        1,
        2,
        4,
        5,
        10,
        20,
      ]));

    it('should calculate divisors with desc sort option', () =>
      expect(getDivisors(20, { sort: 'desc' })).toStrictEqual([
        20,
        10,
        5,
        4,
        2,
        1,
      ]));

    it('should calculate divisors with only proper divisors option', () =>
      expect(getDivisors(20, { onlyProperDivisors: true })).toStrictEqual([
        2,
        10,
        4,
        5,
      ]));

    it('should calculate divisors with asc sort and only proper divisors option', () =>
      expect(
        getDivisors(20, { sort: 'asc', onlyProperDivisors: true }),
      ).toStrictEqual([2, 4, 5, 10]));

    it('should calculate divisors with desc sort and only proper divisors option', () =>
      expect(
        getDivisors(20, { sort: 'desc', onlyProperDivisors: true }),
      ).toStrictEqual([10, 5, 4, 2]));
  });
});
