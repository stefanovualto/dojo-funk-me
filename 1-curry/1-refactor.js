"use strict"

// Declarations
function add(x) {
    return function (y) {
        return x + y;
    }
}

// ES6
const add_V2 = x => y => x + y;

// Usage 1
let result = add(40)(2); // 42

// Usage variation 1
let addFourty = add(40);
result = addFourty(2); // 42

let addTwo = add(2);
result = addTwo(40); //42
