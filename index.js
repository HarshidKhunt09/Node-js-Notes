// File Based Module

//For using ES6 Syntax  Add "type": "module" into the package.json file
//Common JS used in Node Js

const square = require('./square');

const calsquare = (a) => {
    console.log(`the value of a is ${a} and the area is ` +square.area(a));

    console.log(`the value of a is ${a} and the perimeter is ` +square.perimeter(a));
}

console.log(__filename);
console.log(__dirname);

calsquare(5);