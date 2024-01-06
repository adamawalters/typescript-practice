
type Guitarist = {
    name?: string, 
    active: boolean, 
    albums: any []
}

//Type aliases (only types - not interfaces)
type stringOrNumber = string | number

//Literal types
let myName: "Adama"
let userName : "Dave" | "Adama" | "Damian"

userName = "Dave"

//functions
const add = (a: number, b: number): number => {
return a + b;
}

const logMsg = (message: any) => {
console.log(message)
}

logMsg(`hello!`)
logMsg(add(2, 3))
logMsg(add(4, 3))

let subtract = function (a: number, b: number) : number {
return a - b;
}

type mathFunction = (a: number, b: number) => number
/* interface mathFunction {
(a: number, b: number): number;
} */
let multiply : mathFunction = (c, d) => {
return c * d;
}

//optional parameters

const addAll = (a: number, b: number, c?: number) => {
if(typeof c!== 'undefined') {
    return a + b + c;
}
return a + b;
}

const sumAll = (a: number, b: number, c: number = 2) => {
return a + b + c;
}

//rest parameters

const total  = (a: number, ...nums: number[]): number => {
return a + nums.reduce((a, c) => a+c);
}

console.log(total(1, 2, 3, 4, 5))

const createError = (errMsg: string) => {
throw new Error(errMsg);
}

const isNumber = (value: any): boolean => {
return typeof value === 'number'
}

const numberOrString = (value: number | string ): string => {
if(typeof value === 'string') return 'string';
if(typeof value === 'number') return 'number'
//return createError(`this should never happen`)
}
