// objects are the eighth type of data the other seven are called primitive becasue theri values contain only a single thing
//in contrast objects are used to store keyed collection

//creating an empty object
let userObj = {};
let userObj2 = new Object();
let naam = "name"
let saal = "age"
userObj = {
    name: "Abhishek",
    age: 29,
    deleteableProp: true
};

userObj.isAdmin = true;
console.log(userObj);
// delete a property in the ibject
delete userObj.deleteableProp;
console.log(userObj);

//adding a multiword prop
userObj["likes cats"] = false;

console.log(userObj);

userObj2 = {
    "name": "Arathy",
    "age": 25
};

console.log(userObj2);

//////////////////////////////////////////////

//__proto__ values in object values

let obj = {};

obj.__proto__ = 5; //returns the error stating value is not an objkect. 

//non object values are not accepted by the __proto__ variable;

//property existence test in operator

let user = {
    testKey: undefined
};

console.log("noSuchProperty" in user);

console.log(user["testKey"]);

console.log("testKey" in user);


//for in loop

// syntax is for(key in obj){}
for(userkey in userObj){
 console.log(userkey);
 console.log(userObj[userkey]);
}