// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let my_name = "Matt";
let your_name = "Carolina";

if (my_name === "Matt") {
    renderOutput("That's me!");
    } else if (my_name === "Carolina") {
      renderOutput("That's Carolina!")
    } else {
      renderOutput("I must be someone else");
    } 

function helloWorld() {
  renderOutput("Hello world!")
}

helloWorld();

function helloName(name) {
  renderOutput("Hello " + name)
}

helloName("Matt");
helloName("Tim");
helloName("Jessica");

function todaysHours(days_hours) {
  renderOutput(days_hours);
}

todaysHours("Tuesday: 9a - 5p");

hours.forEach(todaysHours)


// This file contains the solution to the "Putting it together" section of the
// in-class assignment. To run it, copy the code from this file and paste it
// at the bottom of learning.js.


// Displays one call number.
function displayCallNumber(call_number) {

    // Every line should start with the call number, a space, and a dash,
    // and another space.
    let output = call_number = call_number + " - ";


    // Depending on what the call number prefix is, append the appropriate
    // classification to the end of the output.
    if (call_number.includes('PR')) {
        output = output + " English literature";
    } else if (call_number.includes('PS')) {
        output = output + " American literature";
    } else if (call_number.includes('PQ')) {
        output = output + " French literature";
    } else {
        output = output + " Other literature";
    }

    // Print out the output using the renderOutput() function
    renderOutput(output);
}


// Classify an array of call numbers.
function classifyCallNumbers(call_numbers) {

    // For each call number in the array, call the displayCallNumber() function.
    call_numbers.forEach(displayCallNumber);
}

// Call the classifyCallNumbers() function using the call_numbers array found in data.js
classifyCallNumbers(call_numbers);