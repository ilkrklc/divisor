/* eslint-disable import/prefer-default-export */

import { isWholeNumber } from '@helpers/number-integration.helpers';
import { getAllDivisors } from '@helpers/divisor.helpers';

/**
 * Get all divisors of the provided number
 * @param {number} n number input
 * @returns {number[]} Divisors of the provided number
 */
export const getDivisors = (n: number): number[] => {
  if (isWholeNumber(n) === false)
    throw new Error('Provided number must be a whole number.');

  return getAllDivisors(n);
};
