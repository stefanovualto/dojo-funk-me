"use strict"
/////////////////////////////////
// Purpose
// Refactor using transducers

const numbers = [1, 2, 3];
const result = [];

const lowerThan6 = (value) => { return value < 6; };
const double = (value) => { return value * 2; };

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    let doubledElement = double(element);
    if(lowerThan6(doubledElement)) {
        result.push(doubledElement);
    }
}

console.log(result);