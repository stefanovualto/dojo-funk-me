"use strict"

// Declarations
function add(x, y) {
    return x + y;
}

// Usage

let result = add(40, 2); // 42

// Usage 1
let result = addCurry(42)(); // 42
result = addCurry(40)(2)();
result = addCurry(20)(20)(1)(1)();
console.log(result);
