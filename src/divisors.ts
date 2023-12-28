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
  checkDivisorsParameterValidity(n, options);

  let sort: string | undefined;
  let onlyProperDivisors: boolean | undefined;
  if (options) ({ sort, onlyProperDivisors } = options);
  else onlyProperDivisors = false;

  let divisors = getAllDivisors(n);
  if (onlyProperDivisors)
    divisors = divisors.filter((divisor) => divisor !== n);

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
  checkDivisorsParameterValidity(n);

  const divisors = getAllDivisors(n);
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
  checkDivisorsParameterValidity(n);

  let divisors = getAllDivisors(n);
  if (onlyProperDivisors)
    divisors = divisors.filter((divisor) => divisor !== n);

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
  checkDivisorsParameterValidity(n);

  let divisors = getAllDivisors(n);
  if (onlyProperDivisors)
    divisors = divisors.filter((divisor) => divisor !== n);

  return divisors.reduce((a, b) => a + b, 0);
}

/**
 * Gets greatest proper divisor of provided number
 * @param {number} n Number to process
 * @returns {number | null} Greatest proper divisor of provided number - null if provided number is 1
 */
export function greatestProperDivisor(n: number): number | null {
  checkDivisorsParameterValidity(n);

  const properDivisors = getAllDivisors(n).filter((divisor) => divisor !== n);
  if (properDivisors.length === 0) return null;

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
  checkDivisorsParameterValidity(n);

  return n === 1 ? null : 1;
}
