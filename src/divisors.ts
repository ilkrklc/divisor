import { getAllDivisors } from '@helpers/divisor.helpers';
import { checkDivisorsParameterValidity } from '@helpers/parameter-integration.helpers';
import type { DivisorOptions } from '@types';

/**
 * Gets all divisors of the provided number
 * @param {number} n Number to process
 * @param {DivisorOptions | undefined} [options] Divisor options - optional
 * @param {string | undefined} [options.sort] Sort expression as 'asc' or 'desc' - optional
 * @param {boolean | undefined} [options.onlyProperDivisors] Indicator for proper divisors - optional
 * @returns {number[]} Divisors of the provided number and options
 */
export function getDivisors(
  n: number,
  options?: DivisorOptions | undefined,
): number[] {
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
    divisors = divisors.filter((divisor) => divisor !== n);

  // sort if requested
  if (sort) {
    if (sort === 'asc') divisors = divisors.sort((a, b) => (a > b ? 1 : -1));
    else divisors = divisors.sort((a, b) => (a > b ? -1 : 1));
  }

  return divisors;
}

/**
 * Gets divisor count of a number
 * @param {number} n Number to process
 * @param {boolean | undefined} [onlyProperDivisors=false] Indicator for proper divisors - optional
 * @returns {number} Divisor number count
 */
export function countDivisors(
  n: number,
  onlyProperDivisors: boolean | undefined = false,
): number {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  // get all divisors
  const divisors = getAllDivisors(n);

  // return count of divisors or one less if only proper specified
  const divisorsLength = divisors.length;

  return onlyProperDivisors ? divisorsLength - 1 : divisorsLength;
}

/**
 * Multiplies divisors of provided number
 * @param {number} n Number to process
 * @param {boolean | undefined} [onlyProperDivisors=false] Indicator for proper divisors - optional
 * @returns {number} Divisor multiplication result
 */
export function multiplyDivisors(
  n: number,
  onlyProperDivisors: boolean | undefined = false,
): number {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  // get all divisors
  let divisors = getAllDivisors(n);

  // filter to only proper if requested
  if (onlyProperDivisors)
    divisors = divisors.filter((divisor) => divisor !== n);

  // multiply divisors
  return divisors.reduce((a, b) => a * b, 1);
}

/**
 * Sums up divisors of provided number
 * @param n {number} Number to process
 * @param {boolean | undefined} [onlyProperDivisors=false] Indicator for proper divisors - optional
 * @returns {number} Sum of divisors
 */
export function sumDivisors(
  n: number,
  onlyProperDivisors: boolean | undefined = false,
): number {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  // get all divisors
  let divisors = getAllDivisors(n);

  // filter to only proper if requested
  if (onlyProperDivisors)
    divisors = divisors.filter((divisor) => divisor !== n);

  // sum divisors
  return divisors.reduce((a, b) => a + b, 0);
}

/**
 * Gets greatest proper divisor of provided number
 * @param {number} n Number to process
 * @returns {number | null} Greatest proper divisor of provided number - null if provided number is 1
 */
export function greatestProperDivisor(n: number): number | null {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  // get proper divisors
  const properDivisors = getAllDivisors(n).filter((divisor) => divisor !== n);

  // if no proper divisor found return null
  if (properDivisors.length === 0) return null;

  // return greatest divisor
  return Math.max(...properDivisors);
}

/**
 * Gets smallest proper divisor of provided number
 * @summary DEPRECATED - Will be removed on first major release.
 * Smallest proper divisor calculation seems needed at first due to lack of knowledge about proper divisors.
 * This method always returns one if number one itself not used as number parameter
 * @param {number} n Number to process
 * @returns {number | null} Smallest proper divisor of provided number - null if provided number is one
 */
export function smallestProperDivisor(n: number): number | null {
  // check validity of provided parameters
  checkDivisorsParameterValidity(n);

  return n === 1 ? null : 1;
}
