# **C**ascading **S**tyle **S**heets

Describes how HTML elements are to be displayed on screen, paper, or in other media

https://www.w3schools.com/css/demo_default.htm

## CSS Syntax
A CSS rule-set consists of a selector and a declaration block:
h1 {color: blue; font-size: 12px;}

## Types of selectors:
* Element selector: div, h1, p...
* Id selector: #button
* Class selector: .item
* Universal: *
* Attribute selector: [dir]
    * Attribute selector with value [dir=ltr]
* Direct child
* Descendant
* [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
    * ":nth-child(n)"
    * [:not](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)

## Three Ways to Insert CSS
There are three ways of inserting a style sheet:
* External CSS
* Internal CSS
* Inline CSS

## Cascading Order
* Inline style (inside an HTML element)
* External and internal style sheets (in the head section)
* Browser default

## Box Model
* Padding
* Margins
* Border
    * [Shorthand_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)
* Clockwise Notation

## CSS Units
Many CSS properties take "length" values, such as width, margin, padding, font-size...
* Absolute Lengths
    * px - pixels (1px = 1/96th of 1in) // relative to the viewing device
    * mm - millimeters
* Relative Lengths
    * em - Relative to the font-size of the element (2em means 2 times the size of the current font)	
    * rem - Relative to font-size of the root element	
    * % - Relative to the parent element

## CSS color value
* name: "Tomato":
* rgb: rgb(255, 99, 71)
* hex: #ff6347
    * shortened hex: #fff
* hsl: hsl(9, 100%, 64%)

## Prioritizing
* id over class
* "Newer" declarations take precedence

## CSS variables
* declare
* use
* fallback

## States
* hover

# Tasks
* https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/
* https://www.freecodecamp.org/learn/responsive-web-design/basic-css/
* https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page
* https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form

# Resources
https://www.w3schools.com/cssref/css_default_values.asp
https://caniuse.com/
https://css-tricks.com/
https://developer.mozilla.org/en-US/docs/Web/CSS
