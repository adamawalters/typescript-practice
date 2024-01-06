"use strict";
//Literal types
let myName;
let userName;
userName = "Dave";
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg(`hello!`);
logMsg(add(2, 3));
logMsg(add(4, 3));
let subtract = function (a, b) {
    return a - b;
};
/* interface mathFunction {
    (a: number, b: number): number;
} */
let multiply = (c, d) => {
    return c * d;
};
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
//rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((a, c) => a + c);
};
console.log(total(1, 2, 3, 4, 5));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const isNumber = (value) => {
    return typeof value === 'number';
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError(`this should never happen`);
};
