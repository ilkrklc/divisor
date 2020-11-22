/* eslint-disable import/prefer-default-export */

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
