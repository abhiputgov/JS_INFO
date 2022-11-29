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

//iterating using forEach:
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });

  //searching in an array is another useful quality
  let array6 = [1, 0, false];

console.log( array6.indexOf(0) ); // 1
console.log( array6.indexOf(false) ); // 2
console.log( array6.indexOf(null) ); // -1

console.log( array6.includes(1) ); // true
 // also finding NaN is usefule with includes since it was introduced very recently keeping in mind the date operations that can be in the array operations
 const array7 = [NaN];
console.log( array7.indexOf(NaN) ); // -1 (wrong, should be 0)
console.log( array7.includes(NaN) );// true (correct)

//find operation in an array
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  console.log(user.name); // John 

  