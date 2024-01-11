"use strict";
let stringArr = ['one', 'hey', 'dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
let thing = "hello";
let test = [];
const guitar = {
    name: "guitar",
    active: true,
    albums: ["One", 1]
};
let evh = {
    name: "eddie van halen",
    active: false,
    albums: [1]
};
let me = {
    active: true,
    albums: ["hi", 1]
};
function greetGuitarist(guitarist) {
    //console.log(`Hello, ${guitarist.name?.toUpperCase}`)
    if (guitarist.name) {
        console.log(`Hello, ${guitarist.name.toUpperCase()}`);
    }
    else {
        console.log(`Hello`);
    }
}
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 1] = "F";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.F);
console.log(Grade.D);
greetGuitarist(me);
