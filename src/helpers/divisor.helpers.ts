/**
 * Gets all divisors of provided number
 * @param {number} n Number to process
 * @returns {number[]} All divisors of the provided number
 */
export const getAllDivisors = (n: number): number[] => {
  // get square root of provided number
  const squareRoot = Math.sqrt(n);

  // initialize output array
  const divisors: number[] = [];

  // iterate through square root
  for (let i = 0; i <= squareRoot; i += 1) {
    // provided number is dividable by current iteration
    if (n % i === 0) {
      // divisor found store current iteration as first divisor
      const divisor1 = i;

      // second divisor is found by dividing provided number by current iteration
      const divisor2 = n / i;

      // if both divisors are the same push one into the output array
      // if not push both
      if (divisor1 === divisor2) divisors.push(divisor1);
      else divisors.push(divisor1, divisor2);
    }
  }

  return divisors;
};
