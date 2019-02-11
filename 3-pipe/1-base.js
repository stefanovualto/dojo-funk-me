"use strict"
/////////////////////////////////
// Purpose
// Write a pipe function that return function which will execute every function passed from left to right
// and split each meaningful expressions into pure sub functions


// Base data
const h = (element) => {
    element = element + 1;
    console.log(`after increment: ${ element }`);
    element = element * 2;
    console.log(`after double: ${ element }`);
};

h(20);

/*
after increment: 21
after double: 42
*/

/////////////////////////////////
// Expected result
const h = pipe(...);

h(20); // 42
/*
after increment: 21
after double: 42
*/