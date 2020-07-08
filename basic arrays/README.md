
# Javascript's Arrays

## Strings
* Concatenating using + and +=
* Double quotes, single quotes, backtick
* Accessing a char, bracket notation
* Immutability
* Escaping
* Length


## Arrays
* Storing multiple values and types
* Accessing an item with bracket notation
    * Using number literal
    * Using computed value / variable
* Modifying an item
* Length
* Nesting arrays
* Multi dimensional
* Manipulation push, pop, shift, unshift
* Comparing arrays
* In place methods vs new array
* Splice()
* Slice()
* Join(), split()
* Array.isArray()
* .indexOf(), .lastIndexOf()
* Reverse()
* Destructuring

## Intro to Objects
* Non-primitive
* Key, value pair, strings as keys
* Computed properties
* Dot notation
* Bracket notation
* Object.keys, values, entries
* Destructuring

## Tasks
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/
 * subscribe to justjavascript.com, read all first 8 chapters, do the exercises
 * Payment Report Task
 ![](https://i.imgur.com/2XzWcD6.png)
 
	 * Create array with 10 objects, each object has the properties: estimatedTime (number) actualTime (number), and description (string).
	 example: ``` const tasks = [
  {
    estimatedTime: 10,
    actualTime: 5,
    description: "HTML task",
  },
  {
    estimatedTime: 15,
    actualTime: 15,
    description: "CSS task",
  }
]; ```
	 * Show html table with the specified work with the information in the array (as in the image).
	 * Show the total amount of the hours (as in the image) 
	 * Add variable with the price per hour and show the total payment amount 
	 * Bonus:
		 * If the actualTime is higher than the estimatedTime the background of the row is red otherwise is green
		 *  If the total actualTime of all tasks is over the total of all estimatedTime color total row's background in red, otherwise use green
	 * Upload the answer to https://forms.gle/S6Z6hCTYYqv8QjGs8
