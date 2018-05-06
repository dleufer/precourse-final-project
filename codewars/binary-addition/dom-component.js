function render_binary_addition_component(container) {
	// get main container from dom
	var container = document.getElementById(container);

	// build sub-components
	// header
	var header = document.createElement("h2");
	header.innerHTML = "Binary Addition";

	// instructions div
	var instructions = document.createElement("p");
	instructions.innerHTML = "Binarily Add!  Enter two numbers and get back their sum in binary.";

	// input div
	var old_floor = document.createElement("input");
	old_floor.setAttribute("id", "first-number");
	var new_floor = document.createElement("input");
	new_floor.setAttribute("id", "second-number");
	var input_container = document.createElement("div");
	input_container.appendChild(old_floor);
	input_container.appendChild(new_floor);

	// button
	var button = document.createElement("button");
	button.setAttribute("id", "binarily-add");
	button.setAttribute("class", "customButtons");
	button.innerHTML = "Binarily Add!";

	// display container div
	var display = document.createElement("p");
	display.setAttribute("id", "binary-addition-display");
	display.innerHTML = "sum base 2: ";

	// link to solution file
	var link = document.createElement("a");
	link.setAttribute("href", "https://github.com/elewa-student/precourse-final-project/tree/master/binary-addition")
	link.innerHTML = "click to read the code"

	// build it all together
	container.appendChild(header);
	container.appendChild(instructions);
	container.appendChild(input_container);
	container.appendChild(button);
	container.appendChild(display);
	container.appendChild(link);
}

render_binary_addition_component("binary-addition");

