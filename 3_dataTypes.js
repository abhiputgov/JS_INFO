// There are 8 different data types in js

// PRIMITIVES:
//numbers
let n = 123;
console.log(n/0); // gives the Infinity data type which is basically a mathematical infinty

//big Int
let bigN = 1234567890123456789012345678901234567890n;
console.log(bigN);

//strings
let str = "Hello";
let phrase = `can embed other objects ${str}`;
console.log(phrase);

//boolean
let bNameFieldChecked = true;
let bIsGreaterThan = ((4-2) > 0) && (bNameFieldChecked);
console.log(bIsGreaterThan);

//null
let age = null; // null is a reference to a non existing object or a null pointer. It denotes empty values

//undefined
let age2;
console.log(age2); // value not assigned denoted as undefined

//NON_PRIMITIVES:
//objects and sybols

// The object type is special.

// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

// Being that important, objects deserve a special treatment. We’ll deal with them later in the chapter Objects, after we learn more about primitives.

// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

