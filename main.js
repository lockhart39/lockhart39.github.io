// console.log(typeof "Test");

// Bindings

// let myBool = true, count = 0;

// console.log(myBool);

// instead of let, there is also var and const
// var was how we did what 'let' does before 2015, 
// but const can still be used to easily refer to something aler
// console.log(count);
// const one = 1;
// count = count + one;
// console.log(count);

// Number function converts input to a number

// let myInt = Number(prompt("Enter a number:"));

// Conditional execution

// if (myInt == 0) {
//     console.log('The number was zero.');
// } else if (myInt % 2 == 0) {
//     console.log('The number was even.');
// } else {
//     console.log('The number was odd');
// }

// while & do

let fake_num = 0;
while (fake_num < 10) {
    console.log(fake_num);
    fake_num += 1;
}

// do forces the body to be executed at least once
let user_pw;
do {
    user_pw = prompt('Enter a password: ');
} while (!user_pw) {
    console.log(user_pw);
}

// for loop

for (let i = 0; i < 12; i += 1) {
    console.log(i)
}