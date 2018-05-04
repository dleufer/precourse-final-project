function binary_addition_handler() {
    // retrieve user input and clean it
    var first_number; 
    var pre_first_number = document.getElementById("first-number").value;
    if (pre_first_number == '') {
        first_number = undefined; // try Number('') to see why I do this
    } else {
        first_number = Number(pre_first_number);
    };

    var second_number;
    var pre_second_number = document.getElementById("second-number").value;
    if (pre_second_number == '') {
        second_number = undefined;
    } else {
        second_number = Number(pre_second_number);
    }

    // pass user input through logic
    var result = binary_addition(first_number, second_number);

    // write output to dom
    var binary_addition_display = document.getElementById("binary-addition-display");
    binary_addition_display.innerHTML = "sum base 2: " + result;
}


// attach event listeners
var binary_addition_button = document.getElementById("binarily-add");
binary_addition_button.addEventListener("click", binary_addition_handler);