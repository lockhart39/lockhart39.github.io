var ava_img = document.getElementById('avatar_img');

var toggle_counter = 0;

function toggleImage() {
    console.log(toggle_counter);
    if (toggle_counter == 0) {
        ava_img.style.top = 112 + "px";
    }
    if (toggle_counter == 1) {
        ava_img.style.top = 62 + "px";
    }
    toggle_counter += 1;
}

ava_img.onclick = toggleImage;

var avatar = document.getElementById('avatar_div');

// eventually going to switch over creating a project for handling ind data

// Working with dates
var dateObj = new Date();
let today = dateObj.getDate();
today = String(today);
if (today.length < 2) {
    today = "0" + today;
}

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