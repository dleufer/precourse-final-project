# [Reversed Strings](https://www.codewars.com/kata/reversed-strings)

Take in a string, and reverse it.

### index
* [Solution](#solution)
* [Language Features](#language-features)
* [Fabricelepro's Code](#fabricelepro)
* [Notes](#notes)

___

```js 
function string_reverser(string) {
    let reversed_string = "";
    let temp_array = [];
    
    temp_array = string.split("");
    temp_array = temp_array.reverse();
    reversed_string = temp_array.join("");
    
    return reversed_string;
}; 

console.log(string_reverser('world') == 'dlrow')
```
[PythonTutor](https://goo.gl/hV5CD7)


My solution does these things:
1. turn the string into an array
2. reverse the array
3. turn the array back into a string

I took advantage of built-in language features to make my work easier.

___

## Language Features

I used native Array methods: 
* .reverse() -> reverses the array
* .join("") -> merges the array elements together

And a native String method:
* .split("") -> makes an array with each character as an element

[TOP](#string-reverser)

___


## [Fabricelepro](https://www.codewars.com/users/fabricelepro)

```js
function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
```

[PythonTutor link](https://goo.gl/Nt8EhE)



### Strategy Analysis

Fabrice's solution was to start a new empty string then to build it up one letter at a time by iterating backwards through the argument string, copying over one letter at at time.

Fabrice could have used more helpful variable names


## Language Features

Fabricelepro used a couple String features:
* Concatenation
* String.length
* String indexing

And a backwards for loop checked by the length of the string.

### Comparison

Fabrice's strategy is clear and readable. It's straight-forward and I wouldn't have any trouble explaining it or using it again later.  Iterating backwards through a for loop is a neat trick I'd never thought of before.

[TOP](#string-reverser)

___

## Notes

Things I learned studying this problem:


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#reversed-strings)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
