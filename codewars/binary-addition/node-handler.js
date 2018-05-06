let binary_addition = require("./solution");

// clean user input
let args = process.argv.slice(2);
let a = Number(args[0]);
let b = Number(args[1]);

if (isNaN(a)) {
    a = false;
};
if (isNaN(b)) {
    b = false;
};

// pass through logic
let result = binary_addition(a, b);

// display to user
console.log(result)
