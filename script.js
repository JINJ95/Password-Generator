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

//validate if (passwordLength >= 8 && passwordLength <= 128) {}
//generate Password - ask user questions & return password
function generatePassword() {
  var passwordLength = parseInt(prompt("how long do you want your password? must be between 8 and 128 characters."));
  var lowerCase = confirm("Include lowercase letters? Ok for YES Cancel for NO.");
  var upperCase = confirm("Include uppercase letters? Ok for YES Cancel for NO.");
  var numbers = confirm("Include numbers? Ok for YES Cancel for NO.");
  var specialCharacters = confirm("Include special characters? Ok for YES Cancel for NO.");

  // password variable
  var generatedPassword = '';

  //filter user input
  var typesCount = lowerCase + upperCase + numbers + specialCharacters;
  var typesArray = [{ lowerCase }, { upperCase }, { numbers }, { specialCharacters }].filter(item => Object.values(item)[0]);

  // console.log(typesArray);

  //loop over length call functions for each type
  for (i = 0; i < passwordLength; i += typesCount) {
    typesArray.forEach(type => {
      var functionName = Object.keys(type)[0];
      console.log(functionName);
      if (functionName === 'lowerCase') {
        generatedPassword += getRandomLowercaseLetter();
      } else if (functionName === 'upperCase') {
        generatedPassword += getRandomUppercaseLetter();
      } else if (functionName === 'numbers') {
        generatedPassword += getRandomNumeric();
      } else if (functionName === 'specialCharacters') {
        generatedPassword += getRandomChar();
      }
      // generatedPassword += randomFunction[functionName]();
    });
    var finalPassword = generatedPassword.slice(0, passwordLength);
  }
  return finalPassword;
}

//generate random lowercase letter
function getRandomLowercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//generate random Uppercase letter
function getRandomUppercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//generate random numeric
function getRandomNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//generate random character
function getRandomChar() {
  var symbols = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
