//one of the best things of the object is to store a function as a property of an object
let obj = {
    name: "John",
    sayHi(){
        console.log("Hello " + this.name);
    },
};
obj.sayHi();

//for primitives, an object wrapper is created at runtime which provides access to methods to modify the primitives such that it behaves as if 
// the primitive is an object but in reality it is a lightweight singular primitive

let str = "john the ripper";
console.log(str.toUpperCase());

 if(new Number(0)){console.log("the function returns an object therefore it is true always");}
