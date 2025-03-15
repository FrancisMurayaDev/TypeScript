# TypeScript Types

Types defines the shape of data, ensuring that values behave as expected throughout a program. 

## Why Use Types in TypeScript 
1. Prevents run time errors by catching issues during compile time.
2. Improve code readability and maintainability. 
3. Enables better tooling support including intellisense and auto-completions.

## 1. Primitive Types
Basic types that represent simple values and are immutable.

They are: Number, String, Boolean, Null and Undefined.

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