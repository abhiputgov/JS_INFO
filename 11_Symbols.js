let lib = {
    name: "Abhishek",
};

const globalSymbol = Symbol();
console.log(lib);

lib['id'] = 1;
console.log(lib);

lib['id'] = 2; // the id can be changed

console.log(lib);

lib[Symbol('id')] = "Sym1";
console.log(lib);

lib[Symbol('id')] = "sym2";
console.log(lib);

lib[globalSymbol] = "Sym3";
console.log(lib);

lib[globalSymbol] = "Sym4";
console.log(lib);
