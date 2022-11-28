//in js textual data is stored as string data type
let singleQuotedText = 'single';
let doubleQuotedText = 'double';
let backticks = `backtick text`;

function sum(a, b){
    return a + b;
}

console.log(`1+2 will always equal ${sum(1, 2)}`);
 console.log(`Hellow\b\n\tWorld`);

//searching for a substring
let str = `Widget with id`;

console.log(str.indexOf(`Widget`));
console.log(str.indexOf(`widget`));
console.log(str.indexOf(`id`));

let str2 = `As sly as a fox, as string as an ox`;
let target = `as`;
let pos = 0;
while(true){
    let foundPos = str.indexOf(target, pos);
    if(foundPos == -1){ 
        break;
    }
    pos = foundPos + 1;
    console.log(pos);

}
