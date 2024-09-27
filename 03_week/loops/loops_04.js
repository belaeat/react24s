// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

function evenNumber() {
  let evenCount = 0;
  for (let i = 0; i < 20; i++) {
    let number = +prompt("Enter a number");
    if (number % 2 === 0) {
      evenCount++;
    }
  }
  console.log("You entered " + evenCount + " even numbers");
}
evenNumber();
