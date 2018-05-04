function string_repeat_handler() {

	// retrieve user input and clean it
    var number; 
    var pre_number = document.getElementById("number").value;
    if (pre_number == '') {
        number = undefined; // try Number('') to see why I do this
    } else {
        number = Number(pre_number);
    };

    var string = document.getElementById("string").value;

    // pass user input through logic
	var result = string_repeat(number, string);

	// write output to dom
    var display = document.getElementById("string-repeat-display");
    display.innerHTML = "string repeated: " + result;
}


// attach event listeners
var button = document.getElementById("repeat");
button.addEventListener("click", string_repeat_handler);