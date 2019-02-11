"use strict"
// Base data
const array = [1, 2, 3, 4];

const incement = n => n + 1;
const double = n => n * 2;

const h = pipe(
  incemrent,
  traceAfterG,
  double,
  traceAfterF,
);

const h = (element) => {
    element = element + 1;
    console.log(`after increment: ${ element }`);
    element = element * 2;
    console.log(`after double: ${ element }`);
};