// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be? (Enter a number between 8 and 128)");
  passwordLength = parseInt(passwordLength);

  // Check if the password length is valid
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a valid number between 8 and 128");
    passwordLength = parseInt(passwordLength);
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters  var lowercase = confirm("Do you want to include lowercase letters in your password?");
  var uppercase = confirm("Do you want to include uppercase letters in your password?");
  var numeric = confirm("Do you want to include numbers in your password?");
  var special = confirm("Do you want to include special characters in your password?");

  // Build character set based on user input
  var characterSet = "";
  if (lowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeric) {
    characterSet += "0123456789";
  }// Below I tried to include every character symbol. I could not include the quotation marks because it would gice me an error every time. 
  if (special) {
    characterSet += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

// THEN a password is generated that matches the selected criteria
var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return password;
}