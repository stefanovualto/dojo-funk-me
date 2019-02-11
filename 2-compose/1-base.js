"use strict"
// Base data
const increment = n => n + 1;
const double = n => n * 2;

double(increment(20));


// result 
const incAndDouble = compose(increment, double);
incAndDouble(20); // 42

// Usage compose(increment, double, ...);