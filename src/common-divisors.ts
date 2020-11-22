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

  console.log({ _gcd });

  // get all divisors of the greatest common divisor of provided numbers
  const divisors = getAllDivisors(_gcd);

  console.log({ divisors });

  return divisors.length;
};
