var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var length = prompt("Enter a number between 8 to 128 to generate a random password please:"),
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()_+=-[]\|}{;':",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * n ));
  }
  return retVal;
}


const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

form.addEventListener('generate', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSpecialCharacters = includeSpecialCharactersElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters)
})
