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

//Until now we assumed that all properties of user are primitive. But properties can be references to other objects.

//Like this:

user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

console.log( user.sizes.height ); // 182
//Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:
let clone4 = Object.assign({}, user);

console.log( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 60, get the result from the other one
//To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning.

//structuredClone
//The call structuredClone(object) clones the object with all nested properties.

//Here’s how we can use it in our example:

let clone5 = structuredClone(user);

console.log( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 50, not related
//The structuredClone method can clone most data types, such as objects, arrays, primitive values.
//It also supports circular references, when an object property references the object itself (directly or via a chain or references).
//For instance:

user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone6 = structuredClone(user);
console.log(clone.me === clone); // true

//As you can see, clone.me references the clone, not the user! So the circular reference was cloned correctly as well.
//Although, there are cases when structuredClone fails.
//For instance, when an object has a function property:

// error
structuredClone({
  f: function() {}
});

//Function properties aren’t supported.
//To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel, take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.