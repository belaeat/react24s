// Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.

for (let num = 1; num % 2 !== 0 && num < 100; num += 2) {
  console.log(num);
}

let i = 1;
while (i % 2 !== 0 && i < 100) {
  console.log(i);
  i += 2;
}
