function render_string_reverser_component(container) {
	// get main container from dom
	var string_reverser_container = document.getElementById(container);

	// build sub-components
	// header
	var string_reverser_header = document.createElement("h2");
	string_reverser_header.innerHTML = "String Reverser";

	// instructions div
	var string_reverser_instructions = document.createElement("p");
	string_reverser_instructions.innerHTML = "Reverse!  Enter a string, my code will reverse it.";

	// input div
	var string_reverser_input = document.createElement("input");
	string_reverser_input.setAttribute("id", "string-to-reverse");

	// button
	var string_reverser_button = document.createElement("button");
	string_reverser_button.setAttribute("id", "reverse");
	string_reverser_button.setAttribute("class", "customButtons");
	string_reverser_button.innerHTML = "Reverse!";

	// display container div
	var string_reverser_display = document.createElement("p");
	string_reverser_display.setAttribute("id", "string_reverser_display");
	string_reverser_display.innerHTML = "Your string reversed: ";

	// link to solution file
	var string_reverser_link = document.createElement("a");
	string_reverser_link.setAttribute("href", "https://github.com/elewa-student/precourse-final-project/tree/master/string-reverser")
	string_reverser_link.innerHTML = "click to read the code"

	// build it all together
	string_reverser_container.appendChild(string_reverser_header);
	string_reverser_container.appendChild(string_reverser_instructions);
	string_reverser_container.appendChild(string_reverser_input);
	string_reverser_container.appendChild(document.createElement("br"));
	string_reverser_container.appendChild(string_reverser_button);
	string_reverser_container.appendChild(string_reverser_display);
	string_reverser_container.appendChild(string_reverser_link);
}

render_string_reverser_component("string-reverser");

