let billion = 1000000000;

let billion2 = 1_000_000_000;

let billion3 = 1e9;

let ms = 1e-6;

console.log(billion, billion2, billion3, ms);

// we can also deal with hex numbers:

console.log(0xff);
//and also binary and octal numbers:
console.log(0b11111111);
console.log(0o377);

//toString methods can be used to convert the number any specific base from 2 to 36:
 let num = 255;
console.log(num.toString(2), num.toString(8), num.toString(16));
console.log(123456..toString(36)); //double dots is needed if the method is to be called directly from a number instead of froma variable.

//Rounding: there are multiple methods to ropund of a number such as:

console.log(Math.floor(3.6), Math.floor(-1.1), Math.ceil(3.1), Math.ceil(-1.1), Math.round(3.6), Math.round(3.5));

console.log(Math.trunc(3.1), Math.trunc(-1.2));
