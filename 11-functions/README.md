# Javascript functions — reusable blocks of code
* Built-in functions, alert(message), prompt(message, default)

## Declaration
* "function hello() {}" vs "let hello = function(){}" (https://javascript.info/function-expressions#function-expression-vs-function-declaration)
* A Function Expression is created when the execution reaches it and is usable only from that moment.
* A Function Declaration can be called earlier than it is defined.
* In strict mode, when a Function Declaration is within a code block, it’s not visible outside that block.
* Anonymous function

## Scope
* Local variables
* Outer variables
* Shadowing
* Parameters
    * Passing arguments
    * The 'arguments' keyword
    * ... rest
    * Default values
    * Comparing parameters to undefined to check omission (https://javascript.info/function-basics#alternative-default-parameters)
* Return value
    * Empty return or no return -> undefined

## Functions as values
* Storing functions in arrays
* Passing functions as arguments
    * AddNumber(Math.random, 2) vs addNumber(Math.random(), 2)
* Function as return value
* Callbacks
* Helper functions
    * Proper naming as documentation
* Recursion

## Arrow functions
* The same way as Function Expressions
* Remove parenthesis with only one parameter
* Multiline block

## Resources
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

https://javascript.info/advanced-functions

## tasks
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
