"use strict"
/////////////////////////////////
// Purpose
// curry a function to be called n times

// Declarations
function add(x, y) {
    return x + y;
}

// Usage

let result = add(40, 2); // 42

/////////////////////////////////
// Expected result
result = addCurry(42)(); // 42
result = addCurry(40)(2)(); // 42
result = addCurry(20)(20)(1)(1)(); // 42
