function greetTheWorld() {
    alert("Hello World");
}

// single line comment

/*

This is a multi-line comment
*/


// JavaScript Variables
// let, const

// primitive data types and reference data types
let a = 5;
let b = 10;
let  c = b;
let result = a + b;
console.log(c);
console.log(typeof(c));
console.log(result);


function add(num2) {
    let num1 = 10; // local variable 
    return num1 +  num2;
}

console.log(add(10));

// global variable
let num2 = 10;

function sub(num3) {
    return num2 + num3;
}

console.log(sub(5));


/*
 JS Comments
 JS Variables
 JS Number Data types
*/
