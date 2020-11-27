**[divisor - v0.9.0](../README.md)**

> [Globals](../README.md) / "divisors"

# Module: "divisors"

## Index

### Functions

* [countDivisors](_divisors_.md#countdivisors)
* [getDivisors](_divisors_.md#getdivisors)
* [greatestProperDivisor](_divisors_.md#greatestproperdivisor)
* [multiplyDivisors](_divisors_.md#multiplydivisors)
* [smallestProperDivisor](_divisors_.md#smallestproperdivisor)
* [sumDivisors](_divisors_.md#sumdivisors)

## Functions

### countDivisors

▸ **countDivisors**(`n`: number, `onlyProperDivisors?`: boolean \| undefined): number

*Defined in divisors.ts:52*

Gets divisor count of a number

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`n` | number | - | Number to process |
`onlyProperDivisors` | boolean \| undefined | false | - |

**Returns:** number

Divisor number count

___

### getDivisors

▸ **getDivisors**(`n`: number, `options?`: [DivisorOptions](../interfaces/_typings_interfaces_.divisoroptions.md) \| undefined): number[]

*Defined in divisors.ts:13*

Gets all divisors of the provided number

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | Number to process |
`options?` | [DivisorOptions](../interfaces/_typings_interfaces_.divisoroptions.md) \| undefined | - |

**Returns:** number[]

Divisors of the provided number and options

___

### greatestProperDivisor

▸ **greatestProperDivisor**(`n`: number): number \| null

*Defined in divisors.ts:121*

Gets greatest proper divisor of provided number

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | Number to process |

**Returns:** number \| null

Greatest proper divisor of provided number - null if provided number is prime

___

### multiplyDivisors

▸ **multiplyDivisors**(`n`: number, `onlyProperDivisors?`: boolean \| undefined): number

*Defined in divisors.ts:74*

Multiplies divisors of provided number

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`n` | number | - | Number to process |
`onlyProperDivisors` | boolean \| undefined | false | - |

**Returns:** number

Divisor multiplication result

___

### smallestProperDivisor

▸ **smallestProperDivisor**(`n`: number): number \| null

*Defined in divisors.ts:142*

Gets smallest proper divisor of provided number

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | Number to process |

**Returns:** number \| null

Smallest proper divisor of provided number - null if provided number is prime

___

### sumDivisors

▸ **sumDivisors**(`n`: number, `onlyProperDivisors?`: boolean \| undefined): number

*Defined in divisors.ts:98*

Sums up divisors of provided number

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`n` | number | - | Number to process |
`onlyProperDivisors` | boolean \| undefined | false | - |

**Returns:** number

Sum of divisors
