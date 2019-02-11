"use strict"
/////////////////////////////////
// Purpose
// Rewrite map & filter function with the almighty reduce one.

// Base data
const array = [1,2,3,4,5,6,7,8,9];
// map
const mapFunc = (element) => {
    return element + 1;
};
array.map(mapFunc);

// filter
const filterFunc = (element) => {
    return element % 2;
};

array.filter(filterFunc);


// example of reduce
let initilaValue = [];

const reduceFunc = (accumulator, element, index, array) => {
    return element;
};

array.reduce(reduceFunc, initialValue);