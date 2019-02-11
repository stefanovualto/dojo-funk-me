"use strict"
// Base data
const map = (fn) => (mappable) =>{ return mappable.map(fn); };
const filter = (fn) => (filterable) =>{ return filterable.filter(fn); };

//////////////////////



const trace = label => value => {
    console.log(`${ label }: ${ value }`);
    return value;
  };

const traceAfterIncrement = trace("after increment");
const traceAfterDouble =  trace("after double");

const increment = n => n + 1;
const double = n => n * 2;

const pipe = (...fns) => (initialValue) => { 
    return fns
            .reduce((previousValue, fn) => {
                return fn(previousValue);
            }, initialValue);
};

// short es6
// const pipe2 = (...fns) => value => fns.reduce((previousValue, fn) => fn(previousValue), value);

const h = pipe(
    increment,
    traceAfterIncrement,
    double,
    traceAfterDouble,
  );

  console.log(h(20));
  /*
  after increment: 21
  after double: 42
  */