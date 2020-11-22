/* eslint-disable import/prefer-default-export */

/**
 * Checks provided value is an integer
 * @param {number} n number input
 * @returns {boolean} number integrity result
 */
export const isWholeNumber = (n: number): boolean => Number.isInteger(n);
