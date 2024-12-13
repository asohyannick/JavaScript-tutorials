// JavaScript Operators
/*
1.Arithmetic operator
2.Comparison operator
3.Bitwise operator
4.Logical operator
5.Assignment operator
6.Special operator
*/

// Logical Operator
/*

1.Logical AND && operator
 True: true && true return => true
 False: true && false return => false
 False: false && false return false

 2.Logical OR || operator
 True: true || false = true;
 False: false || false = true;
 True: true || true = true;

 3.Logical NOT ! operator
 False: !false to truthy
 True: !true to falsy
*/

let a = 10;
let b = 5;
console.log(a > 5 && b > 2); // true

let x = 10;
let y = 5;
console.log(x > 5 && y < 3); // false

let i = 10;
let j = 7;
console.log(i > 20 && j > 10); // false

let ab = 10;
let cd = 5;
console.log(ab > 5 || cd > 10); // true

let m = 10;
let n = 5;
console.log(m > 20 || n > 10); // true

let abc = 20;
let cd1 = 10;
console.log(abc > 10 || cd1 > 5); // true

let ab1 = 10;
let cd2 = 5;
console.log(ab1 !== cd2 ); // true


