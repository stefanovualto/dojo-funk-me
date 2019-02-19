"use strict"

// Base functionality
const fakePromise = new Promise(function executor (resolve, _) {
    setTimeout(() => {
        resolve();
    }, 1000);
});

const timeoutPromise = new Promise(function executor(_, reject) {
    setTimeout(() => {
        reject();
    }, 3000);
});

// If the first Promise that resolve will 
Promise.race([fakePromise, timeoutPromise]);


// Utilitly

const timeoutedPromise = (promiseToResolve, timeoutAmount) => {
    const timeoutPromise = new Promise(function executor(_, reject) {
        setTimeout(() => {
            reject();
        }, timeoutAmount);
    });

    return Promise.race([promiseToResolve, timeoutPromise]);
}

// Usage

const fakePromiseToResolve = new Promise(function executor(resolve, _) {
    setTimeout(() => {
        resolve();
    }, 1000);
});

timeoutedPromise(fakePromiseToResolve, 2000)
.then(() => {
    console.log("promise resolved");
})
.catch(() => {
    console.log("promise rejected");
});