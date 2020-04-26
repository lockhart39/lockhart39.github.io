// eventually going to switch over creating a project for handling rdbms data
// executing lookups and transformations

const bourbonMain = {
    active: true, 
    allocated: false,
    one_time_release: false,
    distilleries: ['Buffalo Trace', 'Woodford', 'Four Roses', 'Jim Beam', 'Brown Forman', 
                    'Jim Beam', 'Heaven Hills'], 
    addDistillery: function(name) {
        if (bourbonMain.distilleries.includes(name) == false) {
            bourbonMain.distilleries.push(name);
        }
    }
    
};

// Experimenting with JSON

let indStr = JSON.stringify({first_name: NaN, last_name: NaN, deceased: false, homeowner: false, addr_st: NaN});


console.log(indStr);
console.log(JSON.parse(indStr).deceased);

// while & do

// let fake_num = 0;
// while (fake_num < 10) {
//     console.log(fake_num);
//     fake_num += 1;
// }

// do forces the body to be executed at least once
// let user_pw;
// do {
//     user_pw = prompt('Enter a password: ');
// } while (!user_pw) {
//     console.log(user_pw);
// }

// for loop

// functions

// const myFunc = function(x) {
//     return x * x;
// }

// for (let i = 0; i < 12; i += 1) {
//     console.log(myFunc(i));
// }

// declaration notation
// with this notation you can define a function after calling it

// console.log('Your number cubed: ', futureFunc(prompt('Enter a number:')));

// function futureFunc(x) {
//     return x * x * x;
// }

// // Some more string functionality 
// function addLeadingZero(x) {
//     x = String(x);
//     while (x.length < 5) {
//         x = "0" + x;
//     }
//     return x;
// }

// console.log('14 with leading zeros: ', addLeadingZero(14));