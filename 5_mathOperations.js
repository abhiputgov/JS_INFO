//numeric conversions using the unary plus operator
console.log(+false);
console.log(+true);
console.log(+null);
console.log(+undefined);

//strings are only concatenated if the plus sign is used. else any non number operands are converted to numbers implicitly

//for instance:

console.log(2 + 2 + "1"); // Returns "41" as string
console.log("1" + 2 + 2); // consoles out "122" as the output

// if instead of the the unary plus operator we use negative or division operator any string will work with number after being converted to numbers
//for instance:
console.log(2 - "1"); //considers this as numeric operation and converts the string to number instead of the other way around. out cometh, 1