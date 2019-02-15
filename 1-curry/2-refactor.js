"use strict"

// Declarations
function addCurry(x) {
    let numbers = [x];
    return function add(y) {
        if (!y) {
            return numbers.reduce((x, y) => { return x + y; }, 0);
        }

        numbers.push(y);
        return add;
    }
}

const addCurryBis = (x) => {
    let numbers = [x];
    const add = (y) => {
        if (!y) {
            return numbers.reduce((x, y) => { return x + y; }, 0);
        }
    
        numbers.push(y);
        return add;
    };
    return add
}


// Usage 1
let result = addCurry(42)(); // 42
result = addCurry(40)(2)();
result = addCurry(20)(20)(1)(1)();
console.log(result);