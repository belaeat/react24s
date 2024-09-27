// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

let userName = prompt("Enter your username");

//userName ? console.log(`Hello, ${userName}`) : console.log("Hello");

let userQuestion = prompt("Ask anything!!");

//console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
//console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "Ask again later, I’m on a coffee break.";
    break;
  case 1:
    eightBall = "You’re going to need a bigger 8-ball.";
    break;
  case 2:
    eightBall = "My sources say… ‘meh.’";
    break;
  case 3:
    eightBall = "I can’t predict now. My Wi-Fi is down.";
    break;
  case 4:
    eightBall = "Reply hazy, try Googling it.";
    break;
  case 5:
    eightBall = "I’m an 8-ball, not a miracle worker!";
    break;
  case 6:
    eightBall = "Sure… if you say so.";
    break;
  case 7:
    eightBall = "Why not? It’s not like I can stop you.";
    break;
}

alert(`The magic ball says: ${eightBall}`);
