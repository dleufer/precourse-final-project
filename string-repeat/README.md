# [Simple Elevator](https://www.codewars.com/kata/simple-elevator/)

This function will move from it's starting location to it's finishing location, returning the number of floors moved. It is a safe elevator. In case any argument is invalid, it will stay in place to avoid injuring the occupants.

### index
* [Solution](#solution)
* [Language Features](#language-features)
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

___

## Language Features

"Number" -> casts other things to a Number

Otherwise this solution is pretty basic in language features, the solution is mostly logic.




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
