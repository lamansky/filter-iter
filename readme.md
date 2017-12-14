# filter-iter

Filters an iterable object so that it only yields values which pass a test function.

Optionally lets you set a numeric limit on total filtered values yielded.

## Installation

```bash
npm install filter-iter --save
```

The module exports a single function.

## Usage Example

```javascript
const filterIterable = require('filter-iter')

const even = n => n % 2 === 0

filterIterable([1, 2, 3, 4, 5], even) // yields 2 and 4

// A limit parameter is supported.
filterIterable([1, 2, 3, 4, 5], even, {limit: 1}) // yields 2

// Values are filtered by truthiness if no callback is provided.
filterIterable([0, 1, 2, 3]) // yields 1, 2, and 3
filterIterable([0, 1, 2, 3], {limit: 2}) // yields 1 and 2
```
