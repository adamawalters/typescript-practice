class Coder {
  /* By default this is needed */

  /*     name: string;
    music: string;
    age: number;
    lang: string;
 */

  secondLang!: string; //asserting we are not going to initialize

  constructor(
    public readonly name: string,
    public music: string,
    private age: number, //private: only accessed inside the class
    protected lang: string = 'Typescript' //protected: can also be accessed in subclasses
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge(){
    return `Hello, I'm ${this.age}.`
  }


}

class Coder2 {
    name: string | undefined
}



const Dave = new Coder("Adama", "Rock", 27);
console.log(Dave.getAge())
//console.log(Dave.age);
//console.log(Dave.lang);


class WebDev extends Coder {
    constructor( 
        public computer: string,
        name: string, 
        music: string, 
        age: number,
    ){
        super(name, music, age)
        this.computer = computer
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('mac', 'sarah', 'indie', 25)
console.log(Sara.getLang())
//console.log(Sara.lang) //webdev is a subclass of coder - you can access the lang property only within the webdev class

//////////////////////////////////

interface Musician {
    name: string, 
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist("jimmy", 'guitar')
/* console.log(Page.play('strums'))
console.log(Page.instrument) */
/////////////////////////////////////

class Peeps {
    static count: number = 0 //static: accessed on the class, not an instance of the class

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string){
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John = new Peeps('John')
const Steeve = new Peeps('Steve')
const Amy = new Peeps('Amy')

/* console.log(Peeps.count)
console.log(Amy.id)
console.log(John.id) */

class Bands {
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value //setters cannot return a value
            return
        } else {
            throw new Error('Param is not an array of strings')
        }
    }
}

const MyBands = new Bands()
MyBands.data = ['neil young', 'led zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, `ZZ Top`]
console.log(MyBands.data)
//MyBands.data = ['Van Halen', 5150] would throw an error