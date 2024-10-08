/**
 * 2.3 - Mathematics
 * ICS3 - Mr. Brash 🐿️
 * 
 * Make sure to read the README.md (especially if you missed class)
 * Then checkout the YOUR_TASK.md to see the practice plan
 * 
 * Don't forget - these are playgrounds. Once you finish the requested task, feel free to play.
 **/ 

// Get a random number between 0 and 100
let random_number = Math.random() * 100

// Round it to the nearest whole number
random_number = Math.round(random_number)

// Output the result usijng a new way to insert a variable into a string (called a template)
console.log(`I generated the number ${random_number}`)

// ***  Your code goes below  ***


let celcius = 100;
let fahrenheit = 5;
celcius = celcius + 2;
fahrenheit = (celcius * 9/5) + 32;
console.log(fahrenheit);

fahrenheit = 77;
celcius = (fahrenheit - 32) * 5/9;
console.log (celcius);

console.log (`${celcius} degrees Fahrenheit is ${fahrenheit} degrees celsius.`);

let x1 = -4;
let x2 = 6;
let y1 = 5;
let y2 =0;

m = (y2 - y1)/(x2 - x1);
console.log (m);

let radius = Math.random () * 10;
let height = Math.random () * 10;
let volume = Math.round(Math.PI * radius**2 * height)
console.log (volume)