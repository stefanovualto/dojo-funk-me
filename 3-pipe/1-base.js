"use strict"
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