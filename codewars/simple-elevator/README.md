# [Simple Elevator](https://www.codewars.com/kata/simple-elevator/)

This function will move from it's starting location to it's finishing location, returning the number of floors moved. It is a safe elevator. In case any argument is invalid, it will stay in place to avoid injuring the occupants.

### index
* [Solution](#solution)
* [Language Features](#language-features)
* [Petromoldovan's Code](#petromoldovan)
* [Notes](#notes)

___

```js 
function simple_elevator(floor, button) {
 let returner = 0;
 let floor_is_valid = false;
 let button_is_valid = false;
  
 let possible_floors = [0, 1, 2, 3];
 for (let valid_floor of possible_floors) {
   if (floor === valid_floor) {
     floor_is_valid = true;
   }
 }

 
 let possible_buttons = ["0", "1", "2", "3"];
 for (let valid_button of possible_buttons) {
   if (button === valid_button) {
     button_is_valid = true;
   }
 }

 if (button_is_valid && floor_is_valid) {
  	returner = Number(button) - floor;
 }
  
 return returner;
};

console.log(simple_elevator(0,'2') == 2);
console.log(3+simple_elevator(3,'1') == 1);
console.log(2+simple_elevator(2,'2') == 2);
```
[PythonTutor](https://goo.gl/uM7Wiw)

My Strategy:
1. I checked if the "floor" argument is valid
2. I checked if the "button" argument is valid
3. If they're both valid, I subtracted the floor from the button
4. Else, I default return 0

[TOP](#simple-elevator)

___

## Language Features

"Number" -> casts other things to a Number

Otherwise this solution is pretty basic in language features, the solution is mostly logic.

[TOP](#simple-elevator)

___

## [Petromoldovan](https://www.codewars.com/users/petromoldovan)

```js
function goto(level,button){
  const possbileLevels = [0,1,2,3];
  const possbileButtons = ["0","1","2","3"];

  if (possbileLevels.indexOf(level) <0) return 0;
  if (possbileButtons.indexOf(button) <0) return 0;

  return parseInt(button) - level;
}
```

[PythonTutor link](https://goo.gl/Nt8EhE)


### Strategy Analysis

Compare the arguments exhaustively to the possible valid arguments. 
If they don't exist in the valid arrays, return 0. Otherwise return the subtraction.

### Language Features

* Single line if statement
* indexOf: Array prototype method
  * Args: 1 (2, but one we care about)
    * Any type: the item to search for
  * Return: Number
    * The index of the first instance of your search query
    * Or -1 if it doesn't exist
  * Behavior: searches for the item. if it's there, it returns the index for the first instance. otherwise -1

### Comparison

Petromoldovan used the same strategy I did, but their implementation is even cleaner than mine. They very cleverly used built-in language features to make their code more succinct and readable.

[TOP](#simple-elevator)

___

## Notes

Things I learned studying this problem:


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#string-repeat)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>


