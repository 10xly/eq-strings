# eq-strings
check if all strings are equal.

```js
const equal = require("eq-strings")

console.log(equal("a", "a", "a")) // true
console.log(equal("a", "b", "a")) // false


// bonus, also works for things other than strings:

console.log(equal(2, 2, 2)) // true
console.log(equal(2, 4, 2)) / false