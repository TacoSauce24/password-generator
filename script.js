var passwordLength = 8;
var choice = [];
var passChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '?'];
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var correctprompt = promptPerson();
   var passwordText = document.querySelector("#password");

  if(correctprompt) {
     var newPassword = generatePassword();
     passwordText.value = newPassword;
   }else {
    passwordTest.value = '';
   }
   
}
function generatePassword(){
  var password = ''
  for(var i = 0; i < passwordLength; i++) {
    var randomletter = Math.floor( Math.random() * choice.length);
    password = password + choice[randomletter];
  }
  return password;
}
function promptPerson() {
  choice = [];
  passwordLength = parseInt(prompt('how long would you like your password to be? (8-128 characters'));
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert('Imput a number from 8-128 please try again.');
    return false;
  }
  if (confirm('would you like lowercase letters?')) {
    choice = choice.concat(lowerChar);
  }
  if (confirm('would you like uppercase letters?')) {
      choice = choice.concat(upperChar);
    }
  if (confirm('would you like specialcase letters?')) {
      choice = choice.concat(passChar);
    }
 if (confirm('would you like numbers?')) {
      choice = choice.concat(numChar);
    }
    return true;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
