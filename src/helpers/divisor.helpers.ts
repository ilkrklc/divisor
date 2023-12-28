/**
 * Gets all divisors of provided number
 * @param {number} n Number to process
 * @returns {number[]} All divisors of the provided number
 */
export const getAllDivisors = (n: number): number[] => {
  const squareRoot = Math.sqrt(n);

  const divisors: number[] = [];
  for (let i = 0; i <= squareRoot; i += 1) {
    if (n % i === 0) {
      const divisor1 = i;
      const divisor2 = n / i;

      if (divisor1 === divisor2) divisors.push(divisor1);
      else divisors.push(divisor1, divisor2);
    }
  }

  return divisors;
};
