function simple_elevator_handler() {
	// retrieve user input and clean it
    var old_floor; 
    var pre_old = document.getElementById("old-floor").value;
    if (pre_old == '') {
        old_floor = undefined; // try Number('') to see why I do this
    } else {
        old_floor = Number(pre_old);
    };

    var new_floor = document.getElementById("new-floor").value;

    // pass user input through logic
	var result = simple_elevator(old_floor, new_floor);

	// write output to dom
    var simple_elevator_display = document.getElementById("s_e_display");
    simple_elevator_display.innerHTML = "delta floor: " + result;
}


// attach event listeners
var simple_elevator_button = document.getElementById("elevate");
simple_elevator_button.addEventListener("click", simple_elevator_handler);