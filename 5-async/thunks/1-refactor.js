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