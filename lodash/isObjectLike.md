# isObjectLike: [GitHub](https://github.com/lodash/lodash/blob/master/isObjectLike.js), [Docs](https://lodash.com/docs/4.17.10#isObjectLike)

This function allows a developer to check if something is 'object-like.' It doesn't check if something conforms to the strict definition of an object in JS, but specifically checks if it is not `null` and if its `typeof` is 'object.'
This could be useful when using someone else's code to find out if something is an object and can thus be used in a particular way.

isObjectLike: Function
* Args: 1
  * This function takes one argument, `value`, and it can be of any type, given that the point of the function is to check the type of the argument fed in.
* Return: Boolean
  * This function returns `true` if `value` is not `null` and has `typeof` as "object", else returns `false`.

### Index:
* [Dependencies](#dependencies)
* [Behavior](#behavior)
  * [Input Analysis](#input-analysis)
  * [Test Cases](#test-cases)
* [Implementation](#implementation)
  * [Original Code](#original-code)
  * [Reconstruction](#reconstruction)
* [Notes](#notes)

___

## Dependencies

This code has no dependencies.

[TOP](#index)

___

## Behavior
This code has quite simple behaviour. It checks two things: first, that the type of the argument `value` equals "object"; second, that `value` doesn't equal `null`.

### Test Cases

```js
* isObjectLike({})
* // => true
*
* isObjectLike([1, 2, 3])
* // => true
*
* isObjectLike(Function)
* // => false
*
* isObjectLike(null)
* // => false
```


### Test Case Analysis

There are just 4 quite simple test cases, which I will analyse in reverse order.
* The fourth test case checks that `value` does not equal `null`, which is one of the basic points of the function. It does this because although `null` is considered a primitive data type in its own right, using the `typeof` operator on `null` will return `object`. This is a recognized 'error' for the `typeof` operator, and thus this test case makes sure that that error has been taken care of within the code.
* The third test case inputs something which is not an object, in this case a function, to check if the function does what it should.
* The second test case inputs an array, which is object-like and should therefore return `true`.
* The first test case inputs an object literal, or empty object. This is useful because it shows that the function checks the basic syntax, i.e. being surrounded by curly braces, to confirm whether something is an object, or object-like.

Although I think that these test cases probably do all that is really necessary to make the function work, I would perhaps include one which has a normal object, in addition to the empty object literal.
As for fringe cases, I wonder if there isn't something which you could include between curly braces, but which would screw up the function. That would then seem to conform to test case 1, but what's written between the braces would make it not be object-like. However, I can't think of what that could be.


[TOP](#index)

___

## Implementation
The implementation here seems pretty straightforward. They don't really require any fancy features, managing to do it using basic JS language features.

### Original Code

```js
function isObjectLike(value) {
  return typeof value == 'object' && value !== null
}

export default isObjectLike
```

_Strategy:_
Explain the strategy they used.  Was it heavy in logic or languge features? What strategies did they use?  How is it like and unlike others?
Their strategy is straightforward:
* use the `typeof` operator to determine that the type of the input `value` is 'object'.
* check that `value` is not equal to `null`. This is done to work around the 'error' associated with the `typeof` operator that it returns 'object' if used on `null`, whereas `null` is in fact a separate primitive data type in JavaScript.
* combine these two checks into a boolean `&&` operator and return the answer

_Language Features:_
They used a couple of basic language features:
* the `typeof` operator, to check the type of the input
* the boolean `&&` operator
* the comparison operator, `==`, and its negative form `!==`


### Reconstruction

```js
function isObjectLike(value) {
  let returner = false
    if (typeof(value) == 'object') {
      if (value !== null) {
        returner = true;
      }
    }
    return returner
}
```

_Strategy:_
I basically used the same strategy of checking two things:
* Does `typeof` return 'object'
* Is `value` not equal to `null`
I just used a syntax which came more naturally to me, by using if statements.

_Language Features:_
I just used nested if statements to determine whether the input had the desired properties.

_Comparison:_
I think that my solution is a bit clumsier than theirs. It is certainly longer, but the extra length doesn't really make it easier to read.


[TOP](#index)

___

## Notes

Things I learned studying this problem:
* A deeper understanding of what objects are in JS
* That there is an inherent error in `typeof` such that it returns 'object' if used on `null`

New vocabulary:
* Object-like

Things I struggled with:
* The idea of something being 'object-like', as opposed to just being an object. I guess that what's cool about this function is that it expands on the strict definition of an object in JS, to allow you to know if something is object-like. I presume that my difficulty here comes from not knowing about cases in which it would be useful not just to know if something is an object, but to know if something is object-like. I would guess that there are cases in which something can be treated more or less as an object, even though it doesn't conform to the strict definition, and that this function allows you to identify such cases.

Lessons to apply for next time:
* Probably best to begin by making sure I understand all the elements being used in the function. I had no idea why it was necessary to check if `value` did not equal `null`, and so that part of the function was obscure to me until much later when I checked out some stuff on basic data types.

[TOP](#index)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
