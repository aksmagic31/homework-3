// Assignment Code
var generateBtn = document.querySelector("#generate");

// listng all the possible keys inside the password


const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z'];

const numbers = ['1','2','3','4','5','6','7','8','9','0'];

const specialCharacters = [ "~", "!", "@", "#", "$", "%","^","&","*","(",")"];

// get a var to store the password on global scope
var thePassword = "";


//generateBtn.addEventListener("click", generatePassword);
  // create a function for generating password 
function generatePassword ()
{
// prompt for length and options for password and check logs
var characterLength = window.prompt("how many keys between 8 to 128 you want for your password","8");
console.log(characterLength);

var upperCaseYes = window.confirm("Click OK if you want to have uppercase letters ");
console.log(upperCaseYes);

var lowerCaseYes = window.confirm("Click OK if you want to have lowercase letters");
console.log(lowerCaseYes);

var numberYes = window.confirm("Click OK if you want to have number");
console.log(numberYes);

var specialChaYes = window.confirm("Click OK if you want to include special chacters");
console.log(specialChaYes);

// check to see length between 8 and 128

if (characterLength < 8 || characterLength > 128)
{
  window.alert("length has to be between 8 and 128 characters");
}

//  check to see at least one catagory is selected

else if (upperCaseYes == false && lowerCaseYes == false && numberYes == false && specialChaYes == false){

  window.alert("has to be at least one kind of catagory for your password");
}

else {


 //put all the possible characters in a new array based on user selection


let allPossibleChar = [];

 if (upperCaseYes == true)
 {
     allPossibleChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 }
  
 if (lowerCaseYes == true)

 {
     allPossibleChar = upperCase.concat(lowerCase);
 }

 if (numberYes == true)
 {
    allPossibleChar = allPossibleChar.concat(numbers);
 }

 if (specialChaYes == true)
 {
   allPossibleChar = allPossibleChar.concat(specialCharacters);
 }
 console.log(allPossibleChar);

 // generates a password by randoming the possible characters with length of password user selected

 for (let i = 0; i < characterLength; i++)
 {
  let chosenCharacter = allPossibleChar[Math.floor(Math.random() * allPossibleChar.length)];
  thePassword += chosenCharacter;
  console.log(chosenCharacter);
  console.log(thePassword);
 }

 //gives the result 
 return thePassword;
}
};



    // }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

