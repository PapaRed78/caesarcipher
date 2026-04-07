// given starter  of code

const friend = "BRUTUS";
const shiftValue = 3;

// store the alphabet in a variable

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// now need index of the first letter of the name in the alphabet, and convert to lowercase to match the alphabet string
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());

// Question 1: JavaScript uses zero-based indexing, which means the first item of a string is accessed using 0.

// shifts the letter by 'shiftValue' positions in the alphabet to encrypt it. but if goes beyond 'z', it should wrap around to the beginning of the alphabet. To achieve this, we can use the modulus operator (%) to ensure that the new index stays within the bounds of the alphabet string.
const newIndex = index + shiftValue;

// const newIndex = (index + shiftValue) % alphabet.length; suggested code instead of above line to handle wrap around case
const encryptedFirstLetter = alphabet[newIndex];

// Question 2: The modulus operator (%) is used to wrap around the index when it exceeds the length of the alphabet. This ensures that if the new index goes beyond 'z', it starts again from 'a'.

// determine the length of the alphabet string and store it in a variable to use in the modulus operation for wrap around
const alphabetLength = alphabet.length;
// calculate the wrapped index using modulus operator to handle wrap around case when new index exceeds the length of the alphabet
const wrappedIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetterWithWrap = alphabet[wrappedIndex];

// "BRUTUS" becomes "EUXWXV" after applying the shift of 3.
const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);
console.log(teaserMessage); // Output: "EUX"
