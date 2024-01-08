"use strict";
const stringEcho = (arg) => arg;
const echo = (arg) => arg; //generic - works with any type, not just strings
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return {
            arg,
            is: false
        };
    }
    return {
        arg,
        is: !!arg,
    };
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return {
            value: arg,
            is: false
        };
    }
    return {
        value: arg,
        is: !!arg,
    };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
//console.log(processUser({name: 'Dave'})) //T type needs an ID
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
