console.log(typeof "Test");

// Bindings

let myBool = true, count = 0;

console.log(myBool);

// instead of let, there is also var and const
// var was how we did what 'let' does before 2015, 
// but const can still be used to easily refer to something aler
console.log(count);
const one = 1;
count = count + one;
console.log(count);