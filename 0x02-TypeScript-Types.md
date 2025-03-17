# TypeScript Types

Types defines the shape of data, ensuring that values behave as expected throughout a program.

## Why Use Types in TypeScript

1. Prevents run time errors by catching issues during compile time.
2. Improve code readability and maintainability.
3. Enables better tooling support including intellisense and auto-completions.

- When working with TypeScript, we usually want other developers working with us to also use TypeScript.

- Therefore we need a place to manage our dependencies which is a `package.json` file.

- If you don't have it in the project, run:

```
npm init -y
```

Then install TypeScript as a development dependency.

```
npm install typescript -D
```

- Inside our package.json we will see TypeScript added as a dependency.

Now lets proceed:
Create a file `index.ts` which will will write our code.

#### We can also run TypeScript in something called the `watch mode`.

Rather than running `tsc index.ts` you now run:

```ts
tsc index.ts -w
```

You add the `-w` which means watch mode.

TypeScript will be doing the compilation in watch mode.

Changes will be detected automatically.

- Open another terminal to execute TypeScript in watch mode. Where to run `node index.js`.

# 1. Primitive Types

Basic types that represent simple values and are immutable.

They are: Number, String, Boolean, Null and Undefined.

### a. Numbers

- Numeric Values: `eg:` -3, 0, 8, infinity, floats and -infinity.

- Use `number` keyword to define number data types in typescript.

```ts
const myInteger: number = 7;
const negative: number = -8;
const myFloat: number = 8.657;
const zero: number = 0;
const infinity: number = Infinity;
const negativeInfinity: number = -Infinity;
```

## b. Strings

Collection of characters enclosed within double, single quotes or back-ticks.

- Use `string` keyword to define a string data-type in TypeScript.

```ts
const firstName: string = "John";
const secondName: string = "Doe";
const email: string = "John Doe";
const fullName: string = `${firstName} ${secondName}`;
```

When we run `tsc index.ts` a `index.js` code will be generated.

## c.Booleans

Booleans can either be true or false.

- Use `boolean` keyword to define a `boolean data type` in TS.

```ts
//Boolean Data Types

const isTrue: boolean = true;
const isFalse: boolean = false;
```

## d. Null

- define something that is empty or non-existent.

- Null variables automatically get any data type.
- They can hold values of any data type.

```ts
// Here, null can be assigned to any data type

let result = null;
result = 5;
result = "hello";
```

To fix this, we use the `null` keyword for null data types.

```ts
let result: null = null;
```

When we reassign the code above, it will throw an error.
The variable will never accept other data type expect null.

## Undefined Data Type

- Used as a placeholder to mean a variable has been declared but has not yet been assigned a value but will have a value soon.

It uses `undefined` key word.

# 2. Top Types

- Top types can represent any value without causing a type error.

There are 2 top types in TypeScript.

## a. Any

- Allows you to assign any value to a variable and perform any operation on it without TS complaining.

```ts
// Type Any

let myVar: any = 55;
console.log(myVar);

myVar = "Good Morning";
console.log(myVar);
```

- Avoid using `any` type since it disables type checking making TypeScript useless.

## b. Unknown

- It is like `any` but forces you to check the type before using it.

```ts
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

console.log(myValue.upperCase()); // This will throw an error since we cannot convert a boolean to uppercase.
```

- `unknown` checks the type of a variable before using it.

# 3. Bottom Types

- Represents a value that never exists or never occur.
- The only bottom type in TypeScript is `never`.

- Used in situations where a value can never be observed.

This usually happens in:

1. Functions that never return eg.(infinite loops and errors.)

2. Exhaustive switch case handling.

3. Unreachable Code.

# 4. Object Types

- They define the shape of complex values such as:

## a. Interface -define shape of an object structure.

- Used for type checking objects and enforcing consistency.

```ts
interface User {
  firstName: string;
  lastName: string;
  age?: number;
  readonly isAdmin: boolean;
}

let employeeName: User = {
  firstName: "Francis",
  lastName: "Muraya",
  age: 24,
  isAdmin: true,
};

employeeName.isAdmin = false; // Cannot assign to 'is Admin' because it it is a readonly property

console.log(employeeName);
```

### Optional Property for Interface.

We use `?` to make a value optional. For instance code above, age is optional.

### Readonly properties for Interfaces.

We use `readonly` keyword for properties that should not be modified.

### Extending Interfaces

- It means creating a new interface that inherits properties from an existing one, allowing for re-use.

- Uses the keyword `extends`.

Example:

```ts
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
```

## b. Class - defines blue prints for creating objects with properties and methods.

- When creating a class in TypeScript, we start by defining the properties then initialize those properties in the constructor function.

```ts
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
```

## c. Enum - represent a set of named constant values.

- Enum is a special type that defines a set of named constants.

- Enum can help prevent invalid values and ensure consistency.

There are 2 types of Enums:

1. Numeric Enums

2. String Enums

### 1. Numeric Enums

Numeric Enums in typescript assign numerical values to their members, starting from 0 with subsequent members auto-incrementing.

```ts
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
```

Since this is a Numeric Enum, we can also decide the number in which we want it to start from rather than zero.

In our above code, we will the value for `small` and the next one will be incremented by 1.

Example:

```ts
enum pizzaSize {
  small = 1000, //1000
  medium, //1001
  large, //1002
  extraLarge, //1003
}
```

Additionally, we can also give the other values a custom numeric value.

Example:

```ts
enum pizzaSize {
  small = 1000, //1000
  medium = 2000, //2000
  large = 3000, //3000
  extraLarge = 4000, //4000
}
```

### 2. String Enums

String Enums in TypeScript assign string values to their members explicitly, ensuring each member holds a unique string value.

## d. Array - a set of elements that are of the same type.

## e. Represent an ordered list of elements with fixed types and lengths.
