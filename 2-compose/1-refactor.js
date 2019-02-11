
"use strict"
// Base data
const increment = n => n + 1;
const double = n => n * 2;

// replace `x => f(g(x))` with `compose(f, g)`
const compose = (...fns) => (initialValue) => {
    return fns
            .reverse()
            .reduce((previousValue, fn) => {
                return fn(previousValue);
            }, initialValue);
}

const incAndDouble = compose(increment, double);

incAndDouble(20);

console.log(incAndDouble(20));