// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

/* let result = [];
let low = 2;
let high = 98;

while (low < high) {
  result.push(low);
  result.push(high);
  low += 2;
  high -= 2;
}

if (low === high) {
  result.push(low);
}

console.log(result.join(",")); */

// another solution

/* function generateSequence() {
  let low = 2;
  let high = 98;
  let output = "";

  while (low < high) {
    output += `${low}, ${high}, `;
    low += 2;
    high -= 2;
  }

  if (low === high) {
    output += low;
  } else {
    output = output.slice(0, -2);
  }

  return output;
}

console.log(generateSequence()); */

// another solution

function generatePattern() {
  let answer = "";
  let end = 98;

  for (let i = 2; i < 100; i += 2) {
    answer += `${i}, ${end} `;
    end -= 2;
  }
  console.log(answer);
}

generatePattern();
