import { isWholeNumber } from '../helpers/number-integration.helpers';

describe('number integration helpers', () => {
  describe('isWholeNumber', () => {
    it('should be whole number', () => expect(isWholeNumber(2)).toBe(true));
    it('should not be whole number', () =>
      expect(isWholeNumber(2.5)).toBe(false));
  });
});
