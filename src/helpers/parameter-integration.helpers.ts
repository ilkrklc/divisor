import { DivisorOptions } from '@typings/interfaces';

/**
 * Checks number for positive number
 * @description Zero is not counted as a positive
 * @param n number input
 * @returns positive number result
 */
export const isPositive = (n: number): boolean => n > 0;

/**
 * Checks provided value is an integer
 * @param {number} n number input
 * @returns {boolean} number integrity result
 */
export const isWholeNumber = (n: number): boolean => Number.isInteger(n);

/**
 * Check sort expression integrity
 * @param sort sort expression
 * @returns {boolean} sort expression integrity result
 */
export const isSortExpressionTrue = (sort: string | undefined): boolean => {
  // sort expression is nullable
  if (!sort) return true;

  // if not null check for exact sort expressions
  if (sort === 'asc' || sort === 'desc') return true;

  return false;
};

/**
 * Check validity of provided parameters
 * @param {number} n input number
 * @param {DivisorOptions | undefined} options divisor options
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

  // check sor expression integrity
  if (options && isSortExpressionTrue(options.sort) === false)
    errors.push(
      "expression can be defined as 'asc', 'desc' or left 'undefined",
    );

  // throw error if at least one integrity check failed
  if (errors.length > 0) throw errors;
};
