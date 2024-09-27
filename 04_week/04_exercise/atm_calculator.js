"use strict";

let currentBalance = 1000;
let newBalance;
let balAfterWithdraw;

// checking current balance
function checkBalance() {
  alert("Your current balance is " + currentBalance);
}

// for depositing money to the current balance
function deposite() {
  let input = +prompt("Enter the amount you want to deposite (use numbers)");
  if (input > 0) {
    newBalance = currentBalance + input;
    alert("Deposited succesfully! Your current balance is: " + newBalance);
  } else {
    alert("You entered the wrong amount. Please check again!");
  }
}

// for withdrawing money from the current balance
function withdraw() {
  let input = +prompt("Enter the amount you want to withdraw (use numbers)");
  if (currentBalance <= 0) {
    alert("You don't have enough money to withdraw");
  } else if (input > 0) {
    balAfterWithdraw = newBalance - input;
    alert("Withdraw successful! Your current balance is " + balAfterWithdraw);
  } else {
    alert("You entered the wrong amount. Please check again!");
  }
}

// main function where loop asks the user continuously what they want to do (check balance, deposite, withdraw or exit)
function main() {
  switch (currentBalance) {
    case checkBalance:
      checkBalance();
    case deposite:
      deposite();
    case withdraw:
      withdraw();
    default:
      break;
  }
}

// calling the functions
checkBalance();
deposite();
withdraw();
main();
