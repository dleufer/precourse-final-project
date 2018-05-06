let string_repeat = require("./solution");

// clean user input
let args = process.argv.slice(2);

let a = Number(args[0]);
if (isNaN(a)) {
    a = false;
};

let b = args[1];

// pass through logic
let result = string_repeat(a, b);

// display to user
console.log(result)
