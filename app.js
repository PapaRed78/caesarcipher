 function caesarCipher(str, shift) {
        // Handle negative shifts for decryption
        if (shift < 0) return caesarCipher(str, shift + 26);
        
        return str.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const isUppercase = code >= 65 && code <= 90;
                
                // Shift within 65-90 (A-Z) or 97-122 (a-z)
                return String.fromCharCode(
                    ((code - (isUppercase ? 65 : 97) + shift) % 26) + (isUppercase ? 65 : 97)
                );
            }
            return char; // Non-alphabetic characters remain unchanged
        }).join('');
    }

    function processCipher(isEncrypt) {
        const text = document.getElementById('plaintext').value;
        const shift = parseInt(document.getElementById('shift').value);
        const finalShift = isEncrypt ? shift : -shift;
        
        const result = caesarCipher(text, finalShift);
        document.getElementById('output').innerText = result;
    }