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
