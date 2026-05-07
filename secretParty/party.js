// Functions to encrypt and decrypt the message using a Caesar cipher with a twist of inserting random letters after every 2 characters.

const alphabet = "abcdefghijklmnopqrstuvwxyz";
// Secret message for the party
const message =
  "Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!";

// Must include capital letters, and lowercase letters. The secret message that is given contains all of these, so we need to handle them properly in the encryption and decryption process.

// -------------------------------------------------------------
// Encryption:
// -------------------------------------------------------------
function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  const shift = shiftValue % 26; // normalize large shifts
  let count = 0;
  // Can use ASCII 65-90 for uppercase letters, and ASCII 97-122 for lowercase letters but decided to use direct character comparison for readability

  // Loop through each character in the message

  for (let char of message) {
    let isUpper = char >= "A" && char <= "Z";
    let isLower = char >= "a" && char <= "z";

    if (isUpper || isLower) {
      let base = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
      let shifted = ((char.charCodeAt(0) - base + shift) % 26) + base;
      encryptedMessage += String.fromCharCode(shifted);
      count++;
    } else {
      encryptedMessage += char;
      count++;
    }

    // After every 2 characters, insert a random letter
    if (count === 2) {
      const randomLetter =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      encryptedMessage += randomLetter;
      count = 0;
    }
  }

  return encryptedMessage;
}
// -------------------------------------------------------------
// Decryption:
// -------------------------------------------------------------
function decrypt(encryptedMessage, shiftValue) {
  let cleaned = "";
  let count = 0;

  // Remove every 3rd character (the random inserted ones)
  for (let i = 0; i < encryptedMessage.length; i++) {
    count++;
    if (count === 3) {
      count = 0; // skip this character
      continue;
    }
    cleaned += encryptedMessage[i];
  }

  // Now reverse the shift
  let decryptedMessage = "";
  const shift = shiftValue % 26;

  for (let char of cleaned) {
    let isUpper = char >= "A" && char <= "Z";
    let isLower = char >= "a" && char <= "z";

    if (isUpper || isLower) {
      let base = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
      let shifted = ((char.charCodeAt(0) - base - shift + 26) % 26) + base;
      decryptedMessage += String.fromCharCode(shifted);
    } else {
      decryptedMessage += char;
    }
  }

  return decryptedMessage;
}
console.log("Secret Message");
console.log(message);
console.log("\nDecrypted Message");
console.log(decrypt(message, 42));
