"use strict"
// Utils
// const map = (fn) => (mappable) => { return mappable.map(fn); };
// const filter = (fn) => (filterable) => { return filterable.filter(fn); };

////////
// Utils

const compose = (...fns) => {
    fns.reverse();
    return (initialValue) => {
        return fns.reduce(composeReducer, initialValue);
    }
}

const composeReducer = (previousValue, fn) => {
    return fn(previousValue);
};

const mapTransducer = (mapper) => (reducingFunction) => {
    return (result, input) => reducingFunction(result, mapper(input));
}

const filterTransducer = (predicate) => (reducingFunction) => {
    return (result, input) => predicate(input)
        ? reducingFunction(result, input)
        : result;
}

// Refactored code

const lowerThan6 = filterTransducer((value) => { return value < 6; });
const double = mapTransducer((value) => { return value * 2; });

const concatReducer = (result, input) => { return result.concat(input); };

// Result
const numbers = [1, 2, 3];
const keepIfDoubleIsSmallerThanSix = compose(double, lowerThan6); // !!! compose execution left to right

const output = numbers.reduce(keepIfDoubleIsSmallerThanSix(concatReducer), []);

console.log(output);
// source https://medium.freecodecamp.org/efficient-data-transformations-using-transducers-c779043ba655