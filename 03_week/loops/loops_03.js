// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

/* let distance = prompt("Enter the distance in kilometer");
let time = prompt("Enter the time in hour");

while (distance !== 0) {
  console.log("Your average speed was: ", distance / time);
  if (distance === 0) {
    break;
  }
} */

// margit's solution

function avgSpeed() {
  let distance, time;

  while (distance != 0) {
    distance = +prompt("Enter distance in kilometers (use numbers)");
    if (distance == 0) {
      console.log("Distance is 0");
      break;
    }

    time = +prompt("Enter the time in hours (use number)"); // prompt is used to take inputs from the user in browser. It doesn't work on visual studio code.

    let average = distance / time;
    alert("Your average speed was: " + average); // if we use a comma before average than result wont be shown, because it is string. Putting a + sign before average than it will make this a number and show the result. + sign is the shorthand to make string to number.
  }
}

avgSpeed();
