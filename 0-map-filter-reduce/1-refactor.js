"use strict"
// Base data
const array = [1,2,3,4,5,6,7,8,9];
// map
const reduceMapFunc = (accumulator, element, index, array) => {
    return accumulator.concat(element + 1);
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

// Comments using reduce adds side effects in our case. To strictly follow
// Functional programing principles we must write pure functions by avoiding
// the mutation of the accumulator.