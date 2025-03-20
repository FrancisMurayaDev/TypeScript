# Type Inference

Type Inference in TypeScript is the ability of the compiler to automatically determine the type of a variable based on its assigned value. 

```ts
let message = "Hell TypeScript"; // Inferred as a string.

let count = 10; //Inferred as a number.
```

- Since message is assigned to a string, TS infers it as `type string`. When reassigned a different data type it will return an error. 
- It prevents accidental assigning of other types. 


