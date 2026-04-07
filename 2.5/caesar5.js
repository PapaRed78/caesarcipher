const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"]; // Initial array of guests.
guests.unshift("BRUTUS"); // Adds "BRUTUS" to the beginning of the array.
firstGuest = guests[0]; // Accesses the first guest in the array.
console.log("First Guest:", firstGuest); // Output: First Guest: BRUTUS
guests.push("AUGUSTUS", "LUCIA"); // Adds new announced guests to the end of the array.
console.log(guests); // Output: [ 'BRUTUS', 'ANTONY', 'CICERO', 'CASSIUS', 'CLEOPATRA', 'AUGUSTUS', 'LUCIA' ]
const spartacusIndex = guests.indexOf("SPARTACUS"); // Attempts to find the index of "SPARTACUS",
console.log("Index of SPARTACUS:", spartacusIndex); // Output: Index of SPARTACUS: -1 he not on list
const indexToRemove = guests.indexOf("CASSIUS"); // Finds the index of "CASSIUS" to remove.
console.log("Index of CASSIUS:", indexToRemove); // Output: Index of CASSIUS: 3
guests.splice(indexToRemove, 1); // Removes "CASSIUS" from the array using splice.
const specialGuests = guests.slice(0, 3); // Extracts the first three guests as special guests.
console.log("Special Guests:", specialGuests); // Output: Special Guests: [ 'BRUTUS', 'ANTONY', 'CICERO' ]
const honoredGuests = guests.slice(0, 1); // Extracts honored guests.
console.log("Honored Guests:", honoredGuests); // Output: Honored Guests: [ 'BRUTUS' ]
const otherGuests = guests.slice(1); // Extracts the rest of the guests.
console.log("Other Guests:", otherGuests); // Output: Other Guests: [ 'ANTONY', 'CICERO', 'CLEOPATRA', 'AUGUSTUS', 'LUCIA' ]
otherGuests.sort(); // Sorts the other guests.
const sortedGuests = honoredGuests.concat(otherGuests); // Combines both arrays.
console.log("Sorted Guests:", sortedGuests); // Output: Sorted Guests: [ 'BRUTUS', 'AUGUSTUS', 'CLEOPATRA', 'CICERO', 'LUCIA', 'ANTONY' ]
