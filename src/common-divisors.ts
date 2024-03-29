import { getAllDivisors } from '@helpers/divisor.helpers';
import { checkCommonDivisorsParameterValidity } from '@helpers/parameter-integration.helpers';

/**
 * Calculates greatest common divisor (gcd) of provided numbers
 * @param {number} n1 First number to process
 * @param {number} n2 Second number to process
 * @returns {number} Greatest common divisor - (gcd)
 */
const gcd = (n1: number, n2: number): number => {
  if (n1 === 0) return n2;

  return gcd(n2 % n1, n1);
};

/**
 * Gets all common divisors of the provided numbers
 * @param {number} n1 First number to process
 * @param {number} n2 Second number to process
 * @param {string | undefined} [sort] Sort expression as 'asc' or 'desc' - optional
 * @returns {number[]} Common divisors of provided numbers
 */
export function getCommonDivisors(
  n1: number,
  n2: number,
  sort?: string,
): number[] {
  checkCommonDivisorsParameterValidity(n1, n2);

  const _gcd = gcd(n1, n2);
  let divisors = getAllDivisors(_gcd);

  if (sort) {
    if (sort === 'asc') divisors = divisors.sort((a, b) => (a > b ? 1 : -1));
    else divisors = divisors.sort((a, b) => (a > b ? -1 : 1));
  }

  return divisors;
}

/**
 * Calculates greatest common divisor (gcd) of provided numbers
 * @param {number} n1 First number to process
 * @param {number} n2 Second number to process
 * @returns {number} Greatest common divisor (gcd)
 */
export function greatestCommonDivisor(n1: number, n2: number): number {
  checkCommonDivisorsParameterValidity(n1, n2);

  return gcd(n1, n2);
}

/**
 * Calculates least common multiple (lcm) of provided numbers
 * @param {number} n1 First number to process
 * @param {number} n2 Second number to process
 * @returns {number} Least common multiple (lcm)
 */
export function leastCommonMultiple(n1: number, n2: number): number {
  checkCommonDivisorsParameterValidity(n1, n2);

  return (n1 / gcd(n1, n2)) * n2;
}

/**
 * Gets common divisor count of provided numbers
 * @param {number} n1 First number to process
 * @param {number} n2 Second number to process
 * @returns {number} Common divisor number count
 */
export function countCommonDivisors(n1: number, n2: number): number {
  checkCommonDivisorsParameterValidity(n1, n2);

  const _gcd = gcd(n1, n2);
  const divisors = getAllDivisors(_gcd);

  return divisors.length;
}

/**
 * Multiplies common divisors of provided numbers
 * @param {number} n1 First number to process
 * @param {number} n2 Second number to process
 * @returns {number} Common divisor multiplication result
 */
export function multiplyCommonDivisors(n1: number, n2: number): number {
  checkCommonDivisorsParameterValidity(n1, n2);

  const _gcd = gcd(n1, n2);
  const divisors = getAllDivisors(_gcd);

  return divisors.reduce((a, b) => a * b, 1);
}

/**
 * Sums up common divisors of provided numbers
 * @param {number} n1 First number to process
 * @param {number} n2 Second number to process
 * @returns {number} Sum of common divisors
 */
export function sumCommonDivisors(n1: number, n2: number): number {
  checkCommonDivisorsParameterValidity(n1, n2);

  const _gcd = gcd(n1, n2);
  const divisors = getAllDivisors(_gcd);

  return divisors.reduce((a, b) => a + b, 0);
}
