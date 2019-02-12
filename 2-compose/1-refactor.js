
"use strict"
// Base data
const increment = n => n + 1;
const double = n => n * 2;

// // ES5
// function compose(...fns) {
//     fns.reverse();
//     return function applyCompose(initialValue) {
//         return fns.reduce(composeReducer, initialValue);
//     }

// }

// function composeReducer(previousValue, fn) {
//     return fn(previousValue);
// }

// ES6
// replace `x => f(g(x))` with `compose(f, g)`
const compose = (...fns) => {
    fns.reverse();
    return (initialValue) => {
        return fns.reduce(composeReducer, initialValue);
    }
}
const composeReducer = (previousValue, fn) => {
    return fn(previousValue);
};

// // ES6 short
// const compose = (...fns) => {
//     fns.reverse();
//     return initialValue => fns.reduce(composeReducer , initialValue)
// }
//
// const composeReducer = (previousValue, fn) => fn(previousValue);

const incAndDouble = compose(double, increment);

console.log(incAndDouble(20))
console.log(incAndDouble(20))
console.log(incAndDouble(20))