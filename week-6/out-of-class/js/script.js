"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("output");
    output_element.innerHTML += "<div>" + output + "</div>"
}

let hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];

for(let i=0; i<hours.length; i++){
 let days = (hours[i].split(": "))
 let days_hours = (hours[i].split(": "));
  if (days[0] === "Sunday") {
    renderOutput(days[0] + " the library is closed");
  } else {
     renderOutput(days[0] + " the library is open " + days_hours[1]);
  }
}
  function dailyHours(hours) {
  renderOutput(hours);
  }