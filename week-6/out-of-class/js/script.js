"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("output");
    output_element.innerHTML += "<div>" + output + "</div>"
}


function helloWorld() {
  renderOutput("Hello world!")
}

helloWorld();

alert("this is a test");

function dailyHours(hours) {
     hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];
 renderOutput(hours) 
}

hours.forEach(dailyHours)