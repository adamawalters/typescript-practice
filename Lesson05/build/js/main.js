"use strict";
let a = "hello";
let b = a; //less specific
let c = a; // more specific
let d = 'world'; //can't use angle brackets in react
let e = 'world';
//The DOM
const img = document.querySelector('img'); //we know it's not null
const myImg = document.getElementById("#img"); //we're asserting it's not null but not saying the specific HTMLImage type
//const myImg = <HTMLImageElement> document.getElementById("#img") as HTMLImageElement //another way to write "as"
//don't need to use ! and "as" together
img.src;
myImg.src;
