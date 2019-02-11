"use strict"
// Base data
const array = [1,2,3,4,5,6,7,8,9];
// map
const mapFunc = (element) => {
    return element;
};
array.map(mapFunc);

// filter
const filterFunc = (element) => {
    return !!element;
};

array.filter(filterFunc);

// reduce
let initilaValue = [];

const reduceFunc = (accumulator, element, index, array) => {
    return element;
};

array.reduce(reduceFunc, initialValue);