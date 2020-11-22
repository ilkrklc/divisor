import { DivisorOptions } from '@typings/interfaces';
import { checkDivisorsParameterValidity } from '@helpers/parameter-integration.helpers';
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
  // check validity of provided parameters
  checkDivisorsParameterValidity(n, options);

  // initialize option parameters
  let sort: string | undefined;
  let onlyProperDivisors: boolean | undefined;

  // check options param
  // populate parameters with provided options if found
  // if not fill in default options
  if (options) ({ sort, onlyProperDivisors } = options);
  else onlyProperDivisors = false;

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

/**
 * Calculates the count of divisor numbers
 * @param {number} n input number
 * @returns {number} divisor number count
 */
export const countDivisors = (
  n: number,
  onlyProperDivisors = false,
): number => {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  // get all divisors
  const divisors = getAllDivisors(n);

  // return count of divisors or two less if only proper specified
  const divisorsLength = divisors.length;

  return onlyProperDivisors ? divisorsLength - 2 : divisorsLength;
};

/**
 * Multiplies divisors of provided number
 * @param n number input
 * @param {boolean | undefined} onlyProperDivisors indicator for proper divisors returns divisors without one and provided number
 * @returns {number} multiplied divisors result
 */
export const multiplyDivisors = (
  n: number,
  onlyProperDivisors: boolean | undefined = false,
): number => {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  // get all divisors
  let divisors = getAllDivisors(n);

  // filter to only proper if requested
  if (onlyProperDivisors)
    divisors = divisors.filter((divisor) => divisor !== n && divisor !== 1);

  // multiply divisors
  return divisors.reduce((a, b) => a * b, 1);
};

/**
 * Sums up divisors of provided number
 * @param n number input
 * @param {boolean | undefined} onlyProperDivisors indicator for proper divisors returns divisors without one and provided number
 * @returns {number} divisors sum
 */
export const sumDivisors = (
  n: number,
  onlyProperDivisors: boolean | undefined = false,
): number => {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  // get all divisors
  let divisors = getAllDivisors(n);

  // filter to only proper if requested
  if (onlyProperDivisors)
    divisors = divisors.filter((divisor) => divisor !== n && divisor !== 1);

  // sum divisors
  return divisors.reduce((a, b) => a + b, 0);
};

/**
 * Gets greatest proper divisor of provided number
 * @param n number input
 * @returns {number} greatest proper divisor of provided number
 */
export const greatestProperDivisor = (n: number): number | null => {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  // get proper divisors
  const properDivisors = getAllDivisors(n).filter(
    (divisor) => divisor !== n && divisor !== 1,
  );

  // if no proper divisor found return null
  if (properDivisors.length === 0) return null;

  // return greatest divisor
  return Math.max(...properDivisors);
};

/**
 * Gets smallest proper divisor of provided number
 * @param n number input
 * @returns {number} smallest proper divisor of provided number
 */
export const smallestProperDivisor = (n: number): number | null => {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  // get proper divisors
  const properDivisors = getAllDivisors(n).filter(
    (divisor) => divisor !== n && divisor !== 1,
  );

  // if no proper divisor found return null
  if (properDivisors.length === 0) return null;

  // return smallest divisor
  return Math.min(...properDivisors);
};
