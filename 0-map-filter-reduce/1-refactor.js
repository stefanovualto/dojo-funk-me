"use strict"
// Base data
const array = [1,2,3,4,5,6,7,8,9];
// map
const reduceMapFunc = (accumulator, element, index, array) => {
    accumulator.push(element + 1);
    return accumulator;
};

console.log(array.reduce(reduceMapFunc, []));

// filter
const reduceFilterFunc = (accumulator, element, index, array) => {
    if (element % 2 === 0) {
        accumulator.push(element);
    }
    return accumulator;
};

console.log(array.reduce(reduceFilterFunc, []));

// reduce
let initilaValue = [];

const reduceFunc = (accumulator, element, index, array) => {
    return element;
};

// array.reduce(reduceFunc, initialValue);