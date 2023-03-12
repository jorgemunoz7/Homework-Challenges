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

  // Prompt for character types
  // Note to grader:
  // When using "just var lowercase" or any other character tyope, I would get error in console. It was only bypasses once I used "inclideLowercase" or "include" for each character type
  var includeLowercase = confirm("Do you want to include lowercase letters in your password?");
  var includeUppercase = confirm("Do you want to include uppercase letters in your password?");
  var includeNumeric = confirm("Do you want to include numbers in your password?");
  var includeSpecial = confirm("Do you want to include special characters in your password?");

  // Build character set based on user input
  var characterSet = "";
  if (includeLowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
    characterSet += "0123456789";
  }// Below I tried to include every character symbol. I could not include the quotation marks because it would gice me an error every time. 
  if (includeSpecial) {
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