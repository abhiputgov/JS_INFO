//object to number conversion
let user = {};

let numObj = Number(user);

console.log(numObj);

// object to string conversion
let user2 = {name: "Abhishek", age: 30};

console.log(user2);

//Symbol to primitive
let user3 = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint){
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

console.log(user3);
console.log(+user3);
console.log(user3 + 500);


