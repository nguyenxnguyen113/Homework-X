/*
- Q1: A Closure is a function that is nested inside another function (a parent function) that can use the global variable, 
the local variable of the parent function, and its own local variable (lexical scoping).
- Q2:
*/

let x = 2, fns = []

function closure (x, arr) {
    x = 5;
    for(let i = 0; i < x; i++) {

    }
};

console.log((x*2) === fns[x*2]