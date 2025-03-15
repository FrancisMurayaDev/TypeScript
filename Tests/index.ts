// Defining a Number Datatype in TS.

const myInteger: number = 7;
const negative: number = -8;
const myFloat: number = 8.657;
const zero: number = 0;
const infinity: number = Infinity;
const negativeInfinity: number = -Infinity;

console.log(myInteger + myFloat);

// Defining a String Data Type in TS.

const firstName: string = "John";
const secondName: string = "Doe";
const email: string = "John Doe";
const fullName: string = `${firstName} ${secondName}`;

console.log(fullName);

//Boolean Data Types

const isTrue: boolean = true;
const isFalse: boolean = false; 
const newName: boolean = true;

console.log(newName);

// Here, null can be assigned to any data type

let result: null = null;
// result = 5;
// result = 'hello';

// Type Any

let myVar: any = 55;
console.log(myVar);
myVar = "Good Morning";
console.log(myVar);

// Type Unknown

let myValue: unknown = 89;
console.log(myValue);

myValue = 'TypeScript';
console.log(myValue);

myValue = [1,4];
console.log(myValue);

myValue = {age: 15};
console.log(myValue);

myValue = true;
console.log(myValue);

// console.log(myValue.upperCase())  
// This will throw an error since we cannot convert a boolean to uppercase.
