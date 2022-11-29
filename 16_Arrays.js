let array1 = new Array();
let array2 = [];

array1.push("Apple", "Aadvark");
array1.push("Banana", "Cat");
array1.shift();
array1.unshift("Whtf");
console.log(array1);

//now, lets see what are the different types of array methods are made of
//1. splice method is like a  `swiss army knife` of the methods of array since it can be used to add, remove, and even replace the elements in an array
// the declaration is as follows: array.splice(start, [, number of elements, ele1, ele2, ..... eleN])

let array3 = [`I`, `go`, `home`];
delete array3[1];
console.log(array3, array3.length);

let array4 = [`You`, `go`, `home`];
array4.splice(1, 0, `and I`);
console.log(array4);

//2. .slice method is simoilar to splice and is much simpler whose function decalration looks somewhat like this
// array.slice([start], [end])
let array5 = [`t`, `e`, `s`, `t`, `i`, `s`];
console.log(array5.slice(0,4));
console.log(array5.slice(-2));