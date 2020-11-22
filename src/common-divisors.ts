import { checkCommonDivisorsParameterValidity } from '@helpers/parameter-integration.helpers';
import { getAllDivisors } from '@helpers/divisor.helpers';

/**
 * Calculates greatest common divisor of provided numbers
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @returns {number} greatest common divisor
 */
const gcd = (n1: number, n2: number): number => {
  // if first number is zero then greatest common divisor is second one
  if (n1 === 0) return n2;

  // if not loop through until first number is zero
  return gcd(n2 % n1, n1);
};

/**
 * Get all common divisors of the provided numbers
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @param {string | undefined} sort sort expression as 'asc' or 'desc'
 * @returns {number[]} common divisors of provided numbers
 */
export const getCommonDivisors = (
  n1: number,
  n2: number,
  sort?: string,
): number[] => {
  // check validity of provided parameters
  checkCommonDivisorsParameterValidity(n1, n2);

  // calculate greatest common divisor
  const _gcd = gcd(n1, n2);

  // get all divisors
  let divisors = getAllDivisors(_gcd);

  if (sort) {
    if (sort === 'asc') divisors = divisors.sort((a, b) => (a > b ? 1 : -1));
    else divisors = divisors.sort((a, b) => (a > b ? -1 : 1));
  }

  return divisors;
};

/**
 * Calculates greatest common divisor of provided numbers
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @returns {number} greatest common divisor
 */
export const greatestCommonDivisor = (n1: number, n2: number): number => {
  // check validity of provided parameters
  checkCommonDivisorsParameterValidity(n1, n2);

  // return greatest common divisor
  return gcd(n1, n2);
};

/**
 * Calculates least common multiple of provided numbers
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @returns {number} least common multiple
 */
export const leastCommonMultiple = (n1: number, n2: number): number => {
  // check validity of provided parameters
  checkCommonDivisorsParameterValidity(n1, n2);

  // return least common multiple
  return (n1 / gcd(n1, n2)) * n2;
};

/**
 * Calculates the count of common divisor numbers
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @returns {number} common divisor number count
 */
export const countCommonDivisors = (n1: number, n2: number): number => {
  // check validity of provided parameters
  checkCommonDivisorsParameterValidity(n1, n2);

  // calculate greatest common divisor
  const _gcd = gcd(n1, n2);

  // get all divisors of the greatest common divisor of provided numbers
  const divisors = getAllDivisors(_gcd);

  return divisors.length;
};

/**
 * Multiplies common divisors of provided numbers
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @returns {number} multiplied common divisors result
 */
export const multiplyCommonDivisors = (n1: number, n2: number): number => {
  // check validity of provided parameters
  checkCommonDivisorsParameterValidity(n1, n2);

  // calculate greatest common divisor
  const _gcd = gcd(n1, n2);

  // get all divisors of the greatest common divisor of provided numbers
  const divisors = getAllDivisors(_gcd);

  return divisors.reduce((a, b) => a * b, 1);
};

/**
 * Sums up common divisors of provided numbers
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @returns {number} common divisors sum
 */
export const sumCommonDivisors = (n1: number, n2: number): number => {
  // check validity of provided parameters
  checkCommonDivisorsParameterValidity(n1, n2);

  // calculate greatest common divisor
  const _gcd = gcd(n1, n2);

  // get all divisors of the greatest common divisor of provided numbers
  const divisors = getAllDivisors(_gcd);

  return divisors.reduce((a, b) => a + b, 0);
};
