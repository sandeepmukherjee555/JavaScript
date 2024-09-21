//DOCS : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
let x = { a: 1, b: 2 };
let y = { ...x };
/* 
this will create a brand new object unpacked and repacked inside this object,
spread operator does the unpacking once we have unpacked them binding it inside a new curly brace
*/

let z = { ...x, b: 3 };
console.log(z);
/* 
here the value of b will be updated to 3 because when we are unpacking x we are getting {a:1,b:2}
then the value of b we are updating with 3 in javascript ojects only unique keys exists 
the keys don't repeat themselves 
*/