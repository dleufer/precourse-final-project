function render_string_repeat_component(container) {
	// get main container from dom
	var container = document.getElementById(container);

	// build sub-components

	// header
	var header = document.createElement("h2");
	header.innerHTML = "String Repeat";

	// instructions div
	var instructions = document.createElement("p");
	instructions.innerHTML = "Repeat! Enter a Number and a String.";
		var restrictions = document.createElement("p");
	restrictions.innerHTML = "We'll repeat your string that many times";
	var instructions_container = document.createElement("div");
	instructions_container.appendChild(instructions);
	instructions_container.appendChild(restrictions);

	// input div
	var old_floor = document.createElement("input");
	old_floor.setAttribute("id", "number");
	var new_floor = document.createElement("input");
	new_floor.setAttribute("id", "string");
	var input_container = document.createElement("div");
	input_container.appendChild(old_floor);
	input_container.appendChild(new_floor);

	// button
	var button = document.createElement("button");
	button.setAttribute("id", "repeat");
	button.setAttribute("class", "customButtons");
	button.innerHTML = "Repeat!";

	// display container div
	var display = document.createElement("p");
	display.setAttribute("id", "string-repeat-display");
	display.innerHTML = "string repeated: ";

	// link to solution file
	var link = document.createElement("a");
	link.setAttribute("href", "https://github.com/elewa-student/precourse-final-project/tree/master/codewars/string-repeat")
	link.innerHTML = "click to read the code"

	// build it all together
	container.appendChild(header);
	container.appendChild(instructions_container);
	container.appendChild(input_container);
	container.appendChild(button);
	container.appendChild(display);
	container.appendChild(link);
}

render_string_repeat_component("string-repeat");

