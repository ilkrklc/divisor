import {
  isWholeNumber,
  isPositive,
} from '../helpers/number-integration.helpers';

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
});
