const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 1 Answer: The encryptLetter function takes a letter and a shift value, finds the index of the letter in the alphabet, adds the shift value, wraps around using modulus, and returns the encrypted letter.
function encryptLetter(letter, shift) {
  const lower = letter.toLowerCase();
  const index = alphabet.indexOf(lower);
  const shiftedIndex = (index + shift) % 26;
  return alphabet[shiftedIndex];
}
// Step 2 Answer: The encryptMessage function iterates through each letter in the word, calls encryptLetter for each letter, and concatenates the results to form the encrypted message.
function encryptMessage(word, shift) {
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++) {
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
}
// Step 3 Answer: The decryptLetter function finds the index of the letter in the alphabet, subtracts the shift value, wraps around using modulus, and returns the decrypted letter.
function decryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}
// Step 4 Answer: The decryptMessage function iterates through each letter in the encrypted message, calls decryptLetter for each letter, and concatenates the results to form the decrypted message.
function decryptMessage(encryptedMessage, shift) {
  let decryptedMessage = "";
  for (let i = 0; i < encryptedMessage.length; i++) {
    decryptedMessage += decryptLetter(encryptedMessage[i], shift);
  }
  return decryptedMessage;
}
// Yes — Caesar will get “BRUTUS” back with code, and here’s the important part: The encrypt and decrypt functions are perfect inverses of each other.
// decryptedMessage= "BRUTUS"
// 'BRUTUS'
// encryptedMessage="BRUTUS"
// 'BRUTUS'

// Step 5 Answer: The final output will be the encrypted message followed by the decrypted message
const encrypted = encryptMessage(friend, shiftValue);
const decrypted = decryptMessage(encrypted, shiftValue);
console.log("Encrypted Message:", encrypted);
console.log("Decrypted Message:", decrypted);
