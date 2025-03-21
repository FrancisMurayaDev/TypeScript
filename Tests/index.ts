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

myValue = "TypeScript";
console.log(myValue);

myValue = [1, 4];
console.log(myValue);

myValue = { age: 15 };
console.log(myValue);

myValue = true;
console.log(myValue);

// console.log(myValue.upperCase())
// This will throw an error since we cannot convert a boolean to uppercase.

// Type Interface
// The interface type should start with a capital letter (User).

interface User {
  firstName: string;
  lastName: string;
  age?: number;
  readonly isAdmin: boolean;
}

let employeeName: User = {
  firstName: "Francis",
  lastName: "Muraya",
  isAdmin: true,
};

// employeeName.isAdmin = false // Cannot assign to 'is Admin' because it it is a readonly property

console.log(employeeName);

// Using Extends;

interface UserDetails {
  firstName: string;
  lastName: string;
  age: number;
}

// extends will extend the above properties of UserDetails into the StudentDetails.

interface studentDetails extends UserDetails {
  course: string;
  yearOfStudy: number;
}

let student: studentDetails = {
  firstName: "Jackline",
  lastName: "Jack",
  age: 20,
  course: "BBIT",
  yearOfStudy: 2,
};

console.log(student);

class pupil {
  name: string;
  age: number;
  index: number;
  major: string;

  constructor(
    pupilName: string,
    pupilAge: number,
    pupilIndex: number,
    pupilMajor: string,
  ) {
    this.name = pupilName;
    this.age = pupilAge;
    this.index = pupilIndex;
    this.major = pupilMajor;
  }
}

const Muraya = new pupil("Muraya", 24, 5678, "BBIT");
console.log(Muraya);

enum pizzaSize {
  small, //0
  medium, //1
  large, //2
  extraLarge, //3
}

console.log(pizzaSize.small); //output: 0
console.log(pizzaSize.extraLarge); //output: 3

let orderedPizzaSize: pizzaSize = 0;
if (orderedPizzaSize === pizzaSize.small) {
  console.log(`Pay $5`); //output: Pay $5
}

enum shortSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  ExtraLarge = "ExtraLarge",
}

console.log(shortSize.Small); //Small
console.log(shortSize.Large); // Large

let luckynumbers: number[] = [10, 45, 43, 32, 34, 67];
console.log(luckynumbers);


const myItems: (string | number | boolean) []= [4, true, "Milk"];

console.log(myItems); // [4, true, 'Milk']

//This array can hold a string, a number and a boolean

let userInfo: [string, number, boolean] = ["John", 34, true];
console.log(userInfo);

// specify number of arrays and data types positions in the array.


// We can also have named Tuples.
const borderBox: [width: string, style: string, color: string] = ["2px", "solid", "purple"];

console.log(borderBox); // ['2px', 'solid', 'purple']

let border: [string, string, string?];
border = ["2px", "solid"]
console.log(border);

let message = "Hell TypeScript"; // Inferred as a string.

let count = 10; //Inferred as a number.

console.log(message);
console.log(count);


let myString: unknown = "Hello World";

(myString as string)
console.log((myString as string).length); // 11
