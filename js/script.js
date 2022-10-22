var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var randomPassword = ""
  var passwordCharacters = []
  var confirmLength = (prompt("How many characters would you like your password to contain? (Password length must be between 8 and 128 characters)."));
  if (confirmLength < 8 || confirmLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please try again!");
    var confirmLength = (prompt("How many characters would you like your password to contain? (Password length must be between 8 and 128 characters)."));
  }
  alert("Your password will have " + confirmLength + " characters!");
  var userSelections = getUserSelections(passwordCharacters);
  if (!userSelections.confirmUpperCase && !userSelections.confirmLowerCase && !userSelections.confirmSpecialCharacter && !userSelections.confirmNumericCharacter) {
    alert("You must choose at least one parameter");
    return generatePassword();
    userSelections = getUserSelections(passwordCharacters);
  } else {
    console.log(userSelections.passwordCharacters);
    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + userSelections.passwordCharacters[Math.floor(Math.random() * userSelections.passwordCharacters.length)];
    }
  }
  return randomPassword;
}

function getUserSelections(passwordCharacters) {
  var confirmSpecialCharacter = confirm("Click 'OK' to confirm if you would like to include special characters.");
  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }
  var confirmNumericCharacter = confirm("Click 'OK' to confirm if you would like to include numeric characters.");
  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }
  var confirmLowerCase = confirm("Click 'OK' to confirm if you would like to include lowercase characters.");
  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
  }
  var confirmUpperCase = confirm("Click 'OK' to confirm if you would like to include uppercase characters.");
  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase)
  }
  return { passwordCharacters, confirmLowerCase, confirmNumericCharacter, confirmSpecialCharacter, confirmUpperCase };
}

document.querySelector("#generate").addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

