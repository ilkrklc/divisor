# Divisor &middot; ![GitHub](https://img.shields.io/github/license/ilkrklc/divisor) [![npm version](https://img.shields.io/npm/v/divisor)](https://www.npmjs.com/package/:scope/divisor) ![npm](https://img.shields.io/npm/dw/divisor) ![npm bundle size](https://img.shields.io/bundlephobia/min/divisor)

Divisor is a utility tools that calculates divisors/factors of natural numbers and gcd/lcm using euclid's algorithm.

## Installing

Using npm:

```bash
npm i divisor
```

## Examples

Examples from some of the utility methods from package.

### note: CommonJS usage

In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

```js
const divisor = require('divisor');
```

### note: ES Modules usage

In order to gain the TypeScript typings (for intellisense / autocomplete) while using ES Module imports with `import` use the following approach:

```js
import divisor from 'divisor';
```

### Calculating single number divisors

Get divisors of a number

```js
const divisors = divisor.getDivisors(20);
// [ 1, 20, 2, 10, 4, 5 ]
```

Get sorted divisors of a number

```js
const sortedDivisors = divisor.getDivisors(20, { sort: 'asc' });
// [ 1, 2, 4, 5, 10, 20 ]
```

### Divisor Options

```ts
{
  sort?: string | undefined; // optional - supports 'asc' | 'desc'
  onlyProperDivisors?: boolean; // optional
}
```

### Calculating common divisors of two numbers

Get all common divisors

```js
const commonDivisors = divisor.getCommonDivisors(20, 100);
// [ 1, 20, 2, 10, 4, 5 ]
const sortedCommonDivisors = divisor.getCommonDivisors(20, 100, {
  sort: 'desc', // supports 'asc' | 'desc'
});
// [ 20, 10, 5, 4, 2, 1 ]
```

Greatest common divisor - gcd

```js
const gcd = divisor.greatestCommonDivisor(20, 100);
// 20
```

Least common multiple - lcm

```js
const lcm = divisor.leastCommonMultiple(11, 67);
// 737
```

## Pull Request Guidelines

- The `main` branch is just a snapshot of the latest stable release. All development should be done in development branches. **Do not submit PRs against the `main` branch.**
- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.
- It's OK to have multiple small commits as you work on the PR
- If adding a new feature add accompanying test case.
- If fixing bug,
  - Add accompanying test case if applicable.
  - Provide a detailed description of the bug in the PR.
  - If you are resolving an opened issue add issue number in your PR title.

### License

Divisor is [MIT licensed](./LICENSE).
