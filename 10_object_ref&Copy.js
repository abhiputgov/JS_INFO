//primitive stores whole values
let message = "Greetings!";

let phrase = message;

message = "Hello!";

console.log(phrase);
console.log(message);

// object variable holds the reference of the object 

let user = {
    name: "Abhishek"
};

let admin = user;

console.log(admin);
user["name"] = "Arathy";

console.log(admin); 

//comparison by reference

let a = {};

let b = a; // copy by reference

console.log(a == b, "they are double equals");

console.log(a === b, "wait, they are triple equalled as well?");
// since they store the reference, in essence they store the same object

// creating a duplicate of the object as a whole.

user = {
    name: "John",
    age: 30
};
let clone = {};

for(key in user){
    clone[key] = user[key];
}
clone.name = "Abhishek";
console.log(user);
console.log(clone);

// the above code can be more optimally changed to be written like this:
let clone2 = Object.assign({}, user);
clone2.name = "Arathy";
console.log(user);
console.log(clone2);


// you can also do the same using the spread operator

let clone3 = {...user};

clone3.name = "Arvind";
console.log(user);
console.log(clone3);