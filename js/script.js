//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

var userChoice = "";
var computerChoice = "";
var result = "";
var choices = ["rock", "paper", "scissors"];

console.log($);

//FUNCTIONS

function compareChoices(computerChoice, userChoice) {
   if (computerChoice === userChoice) return "It's a tie!"
   else if (userChoice === "rock" && computerChoice === "paper") return "You lost!"
   else if (userChoice === "paper" && computerChoice === "scissors") return "You lost!"
   else if (userChoice === "scissors" && computerChoice === "rock") return "You lost!"
   return "YOU WON!"
}

// DOCUMENT READY FUNCTION
$(document).ready(function() {
   $(".rock").click(function() {
      userChoice = choices[0];
      computerChoice = choices[Math.floor((Math.random() * 3))];
      result = compareChoices(computerChoice, userChoice)
      console.log(result)
      $("p").html(result);
   });
   $(".paper").click(function() {
      userChoice = choices[1];
      computerChoice = choices[Math.floor((Math.random() * 3))];
      result = compareChoices(computerChoice, userChoice)
      console.log(result)
      $("p").html(result);
   });
   $(".scissors").click(function() {
      userChoice = choices[2];
      computerChoice = choices[Math.floor((Math.random() * 3))];
      result = compareChoices(computerChoice, userChoice)
      console.log(result)
      $("p").html(result);
   });
});
