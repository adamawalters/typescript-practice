type One = string
type Two = string | number
type Three = "hello"

let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; // more specific

let d = <string>'world'  //can't use angle brackets in react

let e = <string | number> 'world'

//The DOM
const img = document.querySelector('img')! //we know it's not null
const myImg = document.getElementById("#img") as HTMLImageElement //we're asserting it's not null but not saying the specific HTMLImage type
//const myImg = <HTMLImageElement> document.getElementById("#img") as HTMLImageElement //another way to write "as"
//don't need to use ! and "as" together

img.src 
myImg.src