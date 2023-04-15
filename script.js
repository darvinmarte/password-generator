//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Assignment code here
// created character banks for lowercaseChars, uppercaseChars, numbersChars, symbolsChar
var lowercaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsChar = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];

function generatePasswordOptions() {
  var length = prompt("Please enter length between 8 and 128 characters.");
  console.log(length);
  // add alert that says you need 8 to 128 characters
  var lowerCase = confirm("Do you want to include lowercase characters?");
  console.log(lowerCase);
  var upperCase = confirm("Do you want to include uppercase characters?");
  console.log(upperCase);
  var numeric = confirm("Would you like to include numbers?");
  console.log(numeric);
  var specialCharacters = confirm("Would you like to use special characters?");
  console.log(specialCharacters);
  if (
    lowerCase === false &&
    upperCase === false &&
    numeric === false &&
    specialCharacters === false
  ) {
    alert("User should select atleast one character type!");
    return null;
  }
  var passwordOptions = {
    length1: length,
    lowerCase1: lowerCase,
    upperCase1: upperCase,
    numeric1: numeric,
    specialCharacters1: specialCharacters
  }
  return passwordOptions;
}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}



function generatePassword() {
 var options = generatePasswordOptions();
 var result = [];
 var randomCharacters = [];
 var atlCharacters = [];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
