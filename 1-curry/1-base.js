"use strict"
/////////////////////////////////
// Purpose
// curry a function that takes 2 arguments

// Declarations
function add(x, y) {
    return x + y;
}

// Usage
let result = add(40, 2); // 42

/////////////////////////////////
// Expected result
result = add(40)(2); // 42
