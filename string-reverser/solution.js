function string_reverser(string) {
    let reversed_string = "";
    let temp_array = [];
    
    temp_array = string.split("");
    temp_array = temp_array.reverse();
    reversed_string = temp_array.join("");
    
    return reversed_string;
}; 