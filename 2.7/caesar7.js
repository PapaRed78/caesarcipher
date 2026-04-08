const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let encryptedName = "";

for (let i = 0; i < friend.length; i++) {
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}
//Using a loop provides automation, enabling us to process each letter of the name consecutively without redundant code. It ensures consistent encryption and can easily adapt to names of any length.
console.log(encryptedName); // Output: EUWUXV

// % alphabet.length is used to wrap around the alphabet when the new index exceeds the length of the alphabet. This ensures that we stay within the bounds of the alphabet and can correctly encrypt letters even when the shift value is large. For example, if the current index is 25 (for 'z') and we add a shift value of 3, we get 28. By using the modulus operator with the length of the alphabet (26), we get 2, which corresponds to 'c'. This allows for a seamless transition from 'z' back to 'a' when encrypting letters.
