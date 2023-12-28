import type { DivisorOptions } from '@types';

/**
 * Checks if a number is positive
 * @param {number} n Number to check
 * @returns Number positivity result
 */
export const isPositive = (n: number): boolean => n > 0;

/**
 * Checks if a number is a integer
 * @param {number} n Number to check
 * @returns {boolean} Number integer result
 */
export const isWholeNumber = (n: number): boolean => Number.isInteger(n);

/**
 * Checks if a sort expression is true
 * @param {string} sort Sort expression to check
 * @returns {boolean} Sort expression integrity result
 */
export const isSortExpressionTrue = (sort: string | undefined): boolean => {
  // sort expression is nullable
  if (!sort) return true;

  // if not null check for exact sort expressions
  if (sort === 'asc' || sort === 'desc') return true;

  return false;
};

/**
 * Checks validity of provided parameters of divisor methods
 * @param {number} n Number to check
 * @param {DivisorOptions | undefined} options Divisor options
 */
export const checkDivisorsParameterValidity = (
  n: number,
  options?: DivisorOptions,
): void => {
  // initialize error messages array
  const errors: string[] = [];

  // check for positive number
  if (isPositive(n) === false)
    errors.push('Provided number must be a positive number.');

  // check for whole number
  if (isWholeNumber(n) === false)
    errors.push('Provided number must be a whole number.');

  // check sort expression integrity
  if (options !== undefined && isSortExpressionTrue(options.sort) === false)
    errors.push(
      "sort expression can be defined as 'asc', 'desc' or left 'undefined",
    );

  // throw error if at least one integrity check failed
  if (errors.length > 0) throw errors;
};

/**
 * Checks validity of provided parameters of common divisor methods
 * @param {number} n1 First number to check
 * @param {number} n2 Second number to check
 * @param {string | undefined} sort Sort expression
 */
export const checkCommonDivisorsParameterValidity = (
  n1: number,
  n2: number,
  sort?: string,
): void => {
  // initialize error messages array
  const errors: string[] = [];

  // check for positive number
  if (isPositive(n1) === false || isPositive(n2) === false)
    errors.push('Provided numbers must be positive numbers.');

  // check for whole number
  if (isWholeNumber(n1) === false || isWholeNumber(n2) === false)
    errors.push('Provided numbers must be whole numbers.');

  // check sort expression integrity
  if (sort !== undefined && isSortExpressionTrue(sort) === false)
    errors.push(
      "sort expression can be defined as 'asc', 'desc' or left 'undefined",
    );

  // throw error if at least one integrity check failed
  if (errors.length > 0) throw errors;
};
