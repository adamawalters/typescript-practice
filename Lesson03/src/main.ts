let stringArr = ['one', 'hey', 'dave']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]

let thing = "hello"

let test = []

type Guitarist = {
        name?: string, 
        active: boolean, 
        albums: any []
}

const guitar : Guitarist = {
   name: "guitar", 
   active:  true, 
   albums: ["One", 1]
}

let evh: Guitarist = {
    name: "eddie van halen",
    active: false,
    albums : [1]
}

let me: Guitarist = {
    active: true,
    albums: ["hi", 1]
}

function greetGuitarist(guitarist : Guitarist) {
    //console.log(`Hello, ${guitarist.name?.toUpperCase}`)
    if(guitarist.name) {
        console.log(`Hello, ${guitarist.name.toUpperCase()}`)
    } else {
        console.log(`Hello`)
    }
}

enum Grade {
    F = 1, 
    D, 
    C, 
    B, 
    A
}

interface Props {
    x: number;
    y: number;
    name: string;
}

let a = {};
a['x'] = 3;    

console.log(Grade.F)
console.log(Grade.D)

greetGuitarist(me)

