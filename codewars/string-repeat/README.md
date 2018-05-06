# [String Repeat](https://www.codewars.com/kata/string-repeat/train/javascript)

This challenge is simply to take an old string and concatenate it to itself n times.

### index
* [Solution](#solution)
* [Language Features](#language-features)
* [Notes](#notes)

___

```js 
function string_repeat(num, str) {

  return str.repeat(num);

};

console.log(repeatStr(3, "*") == "***");
console.log(repeatStr(5, "#") == "#####");
console.log(repeatStr(2, "ha ") == "ha ha ");
```
[PythonTutor](https://goo.gl/hR4mCj)

I take in the number and the string to repeat, then use the built-in JavaScript "repeat" method to repeat the string.

___

## Language Features

String.prototype.repeat(n) -> It returns a new string which is the old one repeated n times.


___

## [Lodash's Solution](https://github.com/lodash/lodash/blob/master/repeat.js)

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
