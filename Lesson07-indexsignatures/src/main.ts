//Index Signatures
//declare object type of keys and values without knowing name of keys

interface TransactionObj {
    readonly [index: string] : number //highlighting that the keys of the object will be strings 
    //the below are required
    Pizza: number,
    Books: number,
    Job: number,
}

/* interface TransactionObj {
    //only highlighting the type of the key and value, not the name
    readonly [index: string] : number //highlighting that the keys of the object will be strings 
} */

const todaysTransactions: TransactionObj = {
    Pizza: -10, 
    Books: -5, 
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

//todaysTransactions.Pizza = 40
console.log(todaysTransactions['Dave']) //key does not exist

interface Student {
   // [key: string] : string | number | number[] | undefined //undefined because classes is optional so its value coudl be undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 100]
}

//console.log(student.test)

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA');
////////////////////////////////////

/* interface Incomes {
    [key: string | number]: number
} */

type Streams = 'salary' | 'bonus' | 'sidehustle'


//If you want to use a literal type as the keys
type Incomes = Record<Streams, number>

const monthlyIncomes : Incomes = {
    salary: 500, 
    bonus: 100, 
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}

