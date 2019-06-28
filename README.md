# coding-workshop

## 0 Needed Software

- visual studio code
- nodeJS

## 0.5 Setup

- download the project ("clone or download")
- unzip the file
- open workspace in visual code -> select "coding-workshop"
- open `terminal` in visual code
- navigate to text-generator, run `npm install`
- run `npm start`
- open browser, go to http://localhost:4200

## 1 Text-Generator

### essential for debugging
- console.log

### variables // strings
- variables (`strings`)
- declaring a variable (string)
- initializing a variable (string)
- adding variables (string)
- output variable value to console

### variables // arrays
- variables (`arrays`)
- declaring+initializing a variable (array)
- arrays to declare and initialize: articles, nouns, verbs
- get elements from array with `index`
- get length of array with array property `length`

### using functions // array.push()
- example: `array.push(element)`
- difference between `property` and `function`
- function `parameters` (here: element)
- function `return values` (here: new length of array)

### writing a function // generateText()
- writing our own function without parameters(`this.generateText()`)
- piecing together a 3 word sentence with words from the three arrays (article -> noun -> verb), with the indices set by hand
- add a „. “ to the end of the sentence using the `<br>`-html tag
- `return` the sentence
- add return value of function to `this.generatedText` in constructor
- view generated text in browser

### looping // calling generateText() multiple times
- add return value of function multiple times to this.generatedText in constructor using a for-loop
- view generatedText in browser

### optional side task // adjectives
- optional: add adjectives

### writing another function // randomized sentence creation
- write our own function with parameters(`this.getRandomNumber(low, high)`)
- function returns random number between low and high parameters
- use `getRandomNumber` to update generateText: choose random words through random indices
- generate multiple sentences at once and view them in browser

### delayed looping // steady stream of generated sentences
- generate infinite sentences with a delay

### using if-statements // random sentence structures
- add array of sentence structures (contains arrays of strings with values of word types e.g. [‚article‘, ‚noun‘, ‚verb‘])
- update `generateText()` to pick a random sentence structure and then piece together the sentence with the picked structure using the `if-statement`

###  more optional side tasks // 
- optional: generateText with sentence prolongation probability (`recursion`)
- optional: add `html styling` to highlight word types

## 2 Polygon-Generator

writing our own class: polygon
adding instance variables to the class: points 1-4
writing a constructor that takes 4 points as parameters
writing render(), a function that converts the polygon’s points into a format that SVG can use
create a polygon using the new-keyword, setting the points by hand
calling render() on our newly created polygon
adding the polygon to the polygonsOutput -> view it in the browser

replace variables points 1-4 with array points
rewrite the render()-function to work with the points array
create a new polygon using an array as parameter
view the polygon

add the getRandomNumber(low, high)-method from our previous project
create function generateRandomPoint(xMax, yMax)
create function generateRandomPolygon(pointsCount)
use it in the constructor instead of having all the cumbersome code there
play around with the pointsCount and view the polygon!

implement new function morph(intensity, xMax, yMax) on polygon
we need getRandomNumber(low, high) on polygon for that! (explain why we can’t use the other one)
implement new function displacePointBy(point, xOffset, yOffset, xMax, yMax) that changes the position of a point by the given offset, but not to a spot outside xMax and yMax
call displacePointBy from the morph function (here we can try different ideas!)
options: 1. displace all the points by random individual values 2. displace all the points by the same value
