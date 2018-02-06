# filter-iter

Filters an iterable object so that it only yields values which pass a test function.

Optionally lets you set a numeric limit on total filtered values yielded.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i filter-iter
```

## API

The module exports a single function.

### Parameters

1. Bindable: `iter` (iterable): The iterable whose values should be filtered.
2. Optional: `test` (Function): A callback to which each iterated value is passed. The callback should return true if the value should be kept. If this argument is omitted, values will be filtered by truthiness.
3. Object argument:
    * Optional: `limit` (integer): The maximum number of items to yield. Defaults to `Infinity`.

### Return Value

An iterable object with the filtered values from `iter`.

## Example

```javascript
const filter = require('filter-iter')

const even = n => n % 2 === 0

filter([1, 2, 3, 4, 5], even) // yields 2 and 4

// A limit parameter is supported.
filter([1, 2, 3, 4, 5], even, {limit: 1}) // yields 2

// Values are filtered by truthiness if no callback is provided.
filter([0, 1, 2, 3]) // yields 1, 2, and 3
filter([0, 1, 2, 3], {limit: 2}) // yields 1 and 2

// Supports the bind operator
[0, 1, 2]::filter() // yields 1 and 2
[1, 2, 3, 4, 5]::filter(even) // yields 2 and 4
[1, 2, 3, 4, 5]::filter(even, {limit: 1}) // yields 2
```

## Related

* [partition-iterable](https://github.com/lamansky/partition-iterable): Divides iterated values into those that match a filter and those that don’t.
* [reduce-iterable](https://github.com/lamansky/reduce-iterable): Applies a function to iterated values to reduce them to a single value.
* [unique-iterable](https://github.com/lamansky/unique-iterable): Filters an iterable object so it doesn’t yield the same value more than once.
* [unique-iterable-by](https://github.com/lamansky/unique-iterable-by): Filters yielded values by testing uniqueness with an index, key, or callback.
