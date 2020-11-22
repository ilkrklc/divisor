import { getDivisors } from '../index';

describe('index', () => {
  describe('getDivisors', () => {
    it('should throw error', () =>
      expect(() => {
        getDivisors(20.5);
      }).toThrowError());

    it('should calculate divisors correctly', () =>
      expect(getDivisors(20)).toStrictEqual([1, 20, 2, 10, 4, 5]));
  });
});
