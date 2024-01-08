"use strict";
//Index Signatures
//declare object type of keys and values without knowing name of keys
/* interface TransactionObj {
    //only highlighting the type of the key and value, not the name
    readonly [index: string] : number //highlighting that the keys of the object will be strings
} */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
//todaysTransactions.Pizza = 40
console.log(todaysTransactions['Dave']); //key does not exist
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 100]
};
//console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
