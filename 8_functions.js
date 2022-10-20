//function decalration example

function showMessage(message){
    console.log(message);
}

showMessage("hola");

//------------------------------------------------------------------------------------

function function1(){
    let variable1 = "Hello, This is the funtion function1";
    console.log(variable1);
}

function1();

//console.log(variable1);// expect an error here because the variable named variable1 is not declared beyond te scope of the function block

//---------------------------------------------------------------------------------------

let variable2 = "This is the function2";

function function2(){
    variable2 = "This is the modified function2";
    console.log(variable2);
}

console.log(variable2);

function2();

console.log(variable2);

//---------------------------------------------------------------------------------------

let variable3 = "This is the function3";

function function3(){
    let variable3 = "This is the shadow of the function3";
    console.log(variable3);
}

console.log(variable3);
function3();
console.log(variable3);

//----------------------------------------------------------------------------------------


