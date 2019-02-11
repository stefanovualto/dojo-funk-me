"use strict"
/////////////////////////////////
// Purpose
// Write a compose function that return function which will execute every function passed from right to left

// Base data
const increment = n => n + 1;
const double = n => n * 2;

double(increment(20));

/////////////////////////////////
// Expected result
const incAndDouble = compose(double, increment);
incAndDouble(20); // 42
