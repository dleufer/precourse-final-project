# [String Repeat](https://www.codewars.com/kata/string-repeat/train/javascript)

This challenge is simply to take an old string and concatenate it to itself n times.

### index
* [Solution](#solution)
* [Language Features](#language-features)
* [MH159's Solution](#mh159)
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

[TOP](#string-repeat)

___


## [MH159](https://www.codewars.com/users/MH159)

```js
function repeatStr (n, s) {
  String.prototype.repeat = function(n) {
     return (new Array(n + 1)).join(this);
  };
  return s.repeat(n);
}
```

[PythonTutor link](https://goo.gl/pCvGYi)


### Strategy Analysis

Their strategy was to re-implement the native "repeat()" method and to overwrite the native one, then to call this method with the String argument

Their re-implementation's strategy was to create an empty array with length one greater than n (but with nothing in it), then to join the array using your string as a padding between array "elements".  

### Language Features

* "Array.prototype" - tapping into native prototypical inheritance to give their string access to their method.
* "new Array(x)" - initializes a new array with length x, but nothing in it
* ".join(String)" - concatenates the elements in an array with your argument as padding.

### Comparison

Their solution is far more sophisticated than mine. Not only did they have a more cleaver solution than mine, but they reached deep into JavaScript wisdom to use it in a more clever way than I could (yet). 

But there might be some dangerous side-effects from modifying the Array prototype.


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
