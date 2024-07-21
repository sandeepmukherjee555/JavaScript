// higher order functions -> there are functions which take another function as arguments
//these are called higher order functions

function f(x, fn) {
    /*
    x -> number
    fn -> function
    */
    console.log(x);
    fn();
}

f(10, function exec() {
    console.log("I am an Expression passed to a HOF");
})