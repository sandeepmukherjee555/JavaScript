/*

Docs - https://developer.mozilla.org/en-US/docs/Glossary/Scope

Mdn Docs Var - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

var dosent care about block scope
var only declares only function scope and global scope variables no block scoping at all

so whatever variable defined inside block it will behave as global variable only
Ex of var
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);// Output: 2
}
console.log(x);// Output: 2
Explanation : In the example var x = 2 behaved as global scope so output in line no 16 is 2

Mdn Docs let - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

Ex of let 
let x = 1;//different
if (x === 1) {
  let x = 2;//different
  console.log(x); //Output: 2
}
console.log(x); //Output: 1
Explanation : when we define let x = 2 at line no 24 its a new x that has been initialized 
In the visibility of this block which is different from which is initilized at line no 22

*/