"use strict"

function thunk (param) {
    let result;
    let fn;

    asyncCall(param, function (response) {
        if (fn) { fn(response); }
        else { result = response; }
    });

    return function thunked(cb) {
        if (result) { cb(response); }
        else { fn = cb; }
    }
}

// Usage

let t1 = thunk("titi1");
let t2 = thunk("titi2");
let t3 = thunk("titi3");

t1(function (t1Result) {
    output(t1Result);
    t2(function (t2Result) {
        output(t2Result);
        t3(function (t3Result) {
            output(t3Result);
            output("That's it!!")
        })
    })
})