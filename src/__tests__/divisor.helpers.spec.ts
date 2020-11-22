import { getAllDivisors } from '../helpers/divisor.helpers';

describe('divisor helpers', () => {
  describe('getAllDivisors', () => {
    it('should calculate divisors of 20 as [1, 20, 2, 10, 4, 5]', () =>
      expect(getAllDivisors(20)).toStrictEqual([1, 20, 2, 10, 4, 5]));
  });
});
