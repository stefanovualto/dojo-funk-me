"use strict"

// Declarations
function add(x, y) {
    return x + y;
}

// Usage
let result = add(40, 2); // 42

// Replace by that
result = add(40)(2);
