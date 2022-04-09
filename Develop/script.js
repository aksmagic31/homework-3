// Assignment Code
var generateBtn = document.querySelector("#generate");

// listng all the possible keys inside the password


const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z'];

const numbers = ['1','2','3','4','5','6','7','8','9','0'];

const specialharacters = [ "~", "!", "@", "#", "$", "%","^","&","*","(",")"];

  
// create a function for generating password 

function generatePassword (){
// prompt for options for password 
var chacacterlength = window.prompt("how many keys between 8 to 128 you want for your password","8");

var upperCaseYes = window.confirm("Click OK if you want to have uppercase letters ");

var lowerCaseYes = window.confirm("Click OK if you want to have lowercase letters");

var numberYes = window.confirm("Click OK if you want to have number");

var specialChaYes = window.confirm("Click OK if you want to include special chacters");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();