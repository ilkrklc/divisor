# Divisor &middot; ![GitHub](https://img.shields.io/github/license/ilkrklc/divisor) ![npm version](https://img.shields.io/npm/v/divisor) ![npm](https://img.shields.io/npm/dw/divisor) ![npm bundle size](https://img.shields.io/bundlephobia/min/divisor)

## Description

Divisor is a utility tools that calculates divisors/factors of natural numbers and gcd/lcm using euclid's algorithm.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install Divisor using npm, run the following command:

```bash
npm i divisor
```

## Documentation

API documentation can be found [here](docs/README.md).

To generate the documentation on your local development environment, run:

```bash
npm run gen-docs
```

## Examples

Here are some examples of how to use the utility methods from the package:

### note: CommonJS usage

To gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require(), use the following approach:

```js
const divisor = require('divisor');
```

### note: ES Modules usage

To gain the TypeScript typings (for intellisense / autocomplete) while using ES Module imports with import, use the following approach:

```js
import divisor from 'divisor';
```

### Calculating single number divisors

To get the divisors of a number:

```js
const divisors = divisor.getDivisors(20);
// outputs => [ 1, 20, 2, 10, 4, 5 ]
```

To get the sorted divisors of a number:

```js
const sortedDivisors = divisor.getDivisors(20, { sort: 'asc' });
// outputs => [ 1, 2, 4, 5, 10, 20 ]
```

### Divisor Options

```ts
{
  sort?: string | undefined; // optional - supports 'asc' | 'desc'
  onlyProperDivisors?: boolean; // optional
}
```

### Calculating common divisors of two numbers

To get all common divisors:

```js
const commonDivisors = divisor.getCommonDivisors(20, 100);
// outputs => [ 1, 20, 2, 10, 4, 5 ]
const sortedCommonDivisors = divisor.getCommonDivisors(20, 100, {
  sort: 'desc', // supports 'asc' | 'desc'
});
// [ 20, 10, 5, 4, 2, 1 ]
```

To get the greatest common divisor - gcd:

```js
const gcd = divisor.greatestCommonDivisor(20, 100);
// outputs => 20
```

To get the least common multiple - lcm:

```js
const lcm = divisor.leastCommonMultiple(11, 67);
// outputs => 737
```

## Contributing

We welcome contributions! Please review [code of conduct](.github/CODE_OF_CONDUCT.md) and [contributing guide](.github/CONTRIBUTING.md) so that you can understand what actions will and will not be tolerated.

### Pull Request Guidelines

- The `main` branch is just a snapshot of the latest stable release. All development should be done in development branches. **Do not submit PRs against the `main` branch.**
- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.
- It's OK to have multiple small commits as you work on the PR
- If adding a new feature add accompanying test case.
- If fixing bug,
  - Add accompanying test case if applicable.
  - Provide a detailed description of the bug in the PR.
  - If you are resolving an opened issue add issue number in your PR title.

## License

Divisor is [MIT licensed](./LICENSE).
