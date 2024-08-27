divisor

# divisor - v1.0.11

## Table of contents

### Functions

- [countCommonDivisors](README.md#countcommondivisors)
- [countDivisors](README.md#countdivisors)
- [getCommonDivisors](README.md#getcommondivisors)
- [getDivisors](README.md#getdivisors)
- [greatestCommonDivisor](README.md#greatestcommondivisor)
- [greatestProperDivisor](README.md#greatestproperdivisor)
- [leastCommonMultiple](README.md#leastcommonmultiple)
- [multiplyCommonDivisors](README.md#multiplycommondivisors)
- [multiplyDivisors](README.md#multiplydivisors)
- [smallestProperDivisor](README.md#smallestproperdivisor)
- [sumCommonDivisors](README.md#sumcommondivisors)
- [sumDivisors](README.md#sumdivisors)

## Functions

### countCommonDivisors

▸ **countCommonDivisors**(`n1`, `n2`): `number`

Gets common divisor count of provided numbers

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `n1` | `number` | First number to process  |
| `n2` | `number` | Second number to process |

#### Returns

`number`

Common divisor number count

#### Defined in

[common-divisors.ts:71](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/common-divisors.ts#L71)

---

### countDivisors

▸ **countDivisors**(`n`, `onlyProperDivisors?`): `number`

Gets divisor count of a number

#### Parameters

| Name                  | Type      | Default value | Description                              |
| :-------------------- | :-------- | :------------ | :--------------------------------------- |
| `n`                   | `number`  | `undefined`   | Number to process                        |
| `onlyProperDivisors?` | `boolean` | `false`       | Indicator for proper divisors - optional |

#### Returns

`number`

Divisor number count

#### Defined in

[divisors.ts:42](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/divisors.ts#L42)

---

### getCommonDivisors

▸ **getCommonDivisors**(`n1`, `n2`, `sort?`): `number`[]

Gets all common divisors of the provided numbers

#### Parameters

| Name    | Type     | Description                                   |
| :------ | :------- | :-------------------------------------------- |
| `n1`    | `number` | First number to process                       |
| `n2`    | `number` | Second number to process                      |
| `sort?` | `string` | Sort expression as 'asc' or 'desc' - optional |

#### Returns

`number`[]

Common divisors of provided numbers

#### Defined in

[common-divisors.ts:23](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/common-divisors.ts#L23)

---

### getDivisors

▸ **getDivisors**(`n`, `options?`): `number`[]

Gets all divisors of the provided number

#### Parameters

| Name       | Type             | Description                |
| :--------- | :--------------- | :------------------------- |
| `n`        | `number`         | Number to process          |
| `options?` | `DivisorOptions` | Divisor options - optional |

#### Returns

`number`[]

Divisors of the provided number and options

#### Defined in

[divisors.ts:13](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/divisors.ts#L13)

---

### greatestCommonDivisor

▸ **greatestCommonDivisor**(`n1`, `n2`): `number`

Calculates greatest common divisor (gcd) of provided numbers

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `n1` | `number` | First number to process  |
| `n2` | `number` | Second number to process |

#### Returns

`number`

Greatest common divisor (gcd)

#### Defined in

[common-divisors.ts:47](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/common-divisors.ts#L47)

---

### greatestProperDivisor

▸ **greatestProperDivisor**(`n`): `number` \| `null`

Gets greatest proper divisor of provided number

#### Parameters

| Name | Type     | Description       |
| :--- | :------- | :---------------- |
| `n`  | `number` | Number to process |

#### Returns

`number` \| `null`

Greatest proper divisor of provided number - null if provided number is 1

#### Defined in

[divisors.ts:97](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/divisors.ts#L97)

---

### leastCommonMultiple

▸ **leastCommonMultiple**(`n1`, `n2`): `number`

Calculates least common multiple (lcm) of provided numbers

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `n1` | `number` | First number to process  |
| `n2` | `number` | Second number to process |

#### Returns

`number`

Least common multiple (lcm)

#### Defined in

[common-divisors.ts:59](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/common-divisors.ts#L59)

---

### multiplyCommonDivisors

▸ **multiplyCommonDivisors**(`n1`, `n2`): `number`

Multiplies common divisors of provided numbers

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `n1` | `number` | First number to process  |
| `n2` | `number` | Second number to process |

#### Returns

`number`

Common divisor multiplication result

#### Defined in

[common-divisors.ts:86](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/common-divisors.ts#L86)

---

### multiplyDivisors

▸ **multiplyDivisors**(`n`, `onlyProperDivisors?`): `number`

Multiplies divisors of provided number

#### Parameters

| Name                  | Type      | Default value | Description                              |
| :-------------------- | :-------- | :------------ | :--------------------------------------- |
| `n`                   | `number`  | `undefined`   | Number to process                        |
| `onlyProperDivisors?` | `boolean` | `false`       | Indicator for proper divisors - optional |

#### Returns

`number`

Divisor multiplication result

#### Defined in

[divisors.ts:60](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/divisors.ts#L60)

---

### smallestProperDivisor

▸ **smallestProperDivisor**(`n`): `number` \| `null`

Gets smallest proper divisor of provided number

#### Parameters

| Name | Type     | Description       |
| :--- | :------- | :---------------- |
| `n`  | `number` | Number to process |

#### Returns

`number` \| `null`

Smallest proper divisor of provided number - null if provided number is one

**`Summary`**

DEPRECATED - Will be removed on first major release.
Smallest proper divisor calculation seems needed at first due to lack of knowledge about proper divisors.
This method always returns one if number one itself not used as number parameter

#### Defined in

[divisors.ts:114](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/divisors.ts#L114)

---

### sumCommonDivisors

▸ **sumCommonDivisors**(`n1`, `n2`): `number`

Sums up common divisors of provided numbers

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `n1` | `number` | First number to process  |
| `n2` | `number` | Second number to process |

#### Returns

`number`

Sum of common divisors

#### Defined in

[common-divisors.ts:101](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/common-divisors.ts#L101)

---

### sumDivisors

▸ **sumDivisors**(`n`, `onlyProperDivisors?`): `number`

Sums up divisors of provided number

#### Parameters

| Name                  | Type      | Default value | Description                              |
| :-------------------- | :-------- | :------------ | :--------------------------------------- |
| `n`                   | `number`  | `undefined`   | {number} Number to process               |
| `onlyProperDivisors?` | `boolean` | `false`       | Indicator for proper divisors - optional |

#### Returns

`number`

Sum of divisors

#### Defined in

[divisors.ts:79](https://github.com/ilkrklc/divisor/blob/bbf7d93da7e6bd1477ef530f1caa91afb14037bd/src/divisors.ts#L79)
