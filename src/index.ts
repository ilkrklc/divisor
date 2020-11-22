/* eslint-disable import/prefer-default-export */

import {
  isWholeNumber,
  isPositive,
  isSortExpressionTrue,
} from '@helpers/parameter-integration.helpers';
import { getAllDivisors } from '@helpers/divisor.helpers';

/**
 * Get all divisors of the provided number
 * @param {number} n number input
 * @param {DivisorOptions | undefined} options divisor options
 * @param {string | undefined} options.sort sort expression as 'asc' or 'desc'
 * @param {boolean | undefined} options.onlyProperDivisors indicator for proper divisors returns divisors without one and provided number
 * @returns {number[]} Divisors of the provided number and options
 */
export const getDivisors = (n: number, options?: DivisorOptions): number[] => {
  // check for positive number throw error if result is negative
  if (isPositive(n) === false)
    throw new Error('Provided number must be a positive number.');

  // check for whole number throw error if result is negative
  if (isWholeNumber(n) === false)
    throw new Error('Provided number must be a whole number.');

  // initialize option parameters
  let sort: string | undefined;
  let onlyProperDivisors: boolean | undefined;

  // check options param
  // populate parameters with provided options if found
  // if not fill in default options
  if (options) ({ sort, onlyProperDivisors } = options);
  else onlyProperDivisors = false;

  // check sort expression integrity
  if (isSortExpressionTrue(sort) === false)
    throw new Error(
      "Sort expression can be defined as 'asc', 'desc' or left 'undefined'.",
    );

  // get all divisors
  let divisors = getAllDivisors(n);

  // filter to only proper if requested
  if (onlyProperDivisors)
    divisors = divisors.filter((divisor) => divisor !== n && divisor !== 1);

  // sort if requested
  if (sort) {
    if (sort === 'asc') divisors = divisors.sort((a, b) => (a > b ? 1 : -1));
    else divisors = divisors.sort((a, b) => (a > b ? -1 : 1));
  }

  return divisors;
};
