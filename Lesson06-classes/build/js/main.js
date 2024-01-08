"use strict";
class Coder {
    constructor(name, music, age, //private: only accessed inside the class
    lang = 'Typescript' //protected: can also be accessed in subclasses
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}.`;
    }
}
class Coder2 {
}
const Dave = new Coder("Adama", "Rock", 27);
console.log(Dave.getAge());
//console.log(Dave.age);
//console.log(Dave.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('mac', 'sarah', 'indie', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("jimmy", 'guitar');
/* console.log(Page.play('strums'))
console.log(Page.instrument) */
/////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0; //static: accessed on the class, not an instance of the class
const John = new Peeps('John');
const Steeve = new Peeps('Steve');
const Amy = new Peeps('Amy');
/* console.log(Peeps.count)
console.log(Amy.id)
console.log(John.id) */
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value; //setters cannot return a value
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['neil young', 'led zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, `ZZ Top`];
console.log(MyBands.data);
//MyBands.data = ['Van Halen', 5150] would throw an error
