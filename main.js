// eventually going to switch over creating a project for handling ind data

// Working with dates
var dateObj = new Date();
let today = dateObj.getDate();

var month = dateObj.getMonth();
month = String(month);
if (month.length < 2) {
    month = "0" + month;
}

let year = dateObj.getFullYear();
console.log(year + '-' + month + '-' + today);

// Experimenting with JSON

let indStr = JSON.stringify({first_name: NaN, last_name: NaN, deceased: false, homeowner: false, addr_st: NaN});


console.log(indStr);
console.log(JSON.parse(indStr).deceased);