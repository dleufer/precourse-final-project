# [Binary Addition](https://www.codewars.com/kata/binary-addition)

Take in two numbers.

Return their sum represented in base 2, as a String. (one's and zero's, binary)

### index
* [Solution](#solution)
* [Language Features](#language-features)
* [Z1x's Code](#z1x)
* [Notes](#notes)

___

```js 
function binary_addition(a,b) {
  var sum = a + b;
  return sum.toString(2);
}

var result = binary_addition(1,2);

if (!result) { 	// should be truthy
	console.log("result is falsey!");
}
console.log(result == "11")

```
[PythonTutor](https://goo.gl/kAsDVH)

Add them together as normal numbers (ie. base 10).  Then convert them to a base 2 String.

___

## Language Features


".toString()" -> converts the number to a String in whatever base is specified.

[TOP](#binary-addition)

___

## [Z1x](https://www.codewars.com/users/Z1x)

```js
function addBinary(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}
```

[PythonTutor link](https://goo.gl/YAnrzz)


### Strategy Analysis

Their strategy was to first add a & b normally, then to concatenate the solution string one digit at a time by checking whether 2^digit can fit in the sum.

### Language Features

* % - Modular arithmetic, or the remainder operator
* Math.floor(x) - rounding down to the nearest integer
* String concatenation

### Comparison

Z1x's solution is very different from mine.  They chose to do the hard logical work themselves rather than just using a language feature.  They probably learned a lot more than me.


___

## Notes

Things I learned studying this problem:


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#binary-addition)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
