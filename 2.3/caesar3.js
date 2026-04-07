const randomDecimal = Math.random();
const shiftRange = 33 - 3 + 1;
const randomInRange = randomDecimal * shiftRange;
const randomInt = Math.floor(randomInRange);
const shiftValue = randomInt + 3;

// Step 1: Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
// const randomDecimal = Math.random(); // This line generates a random decimal number between 0 (inclusive) and 1 (exclusive) using the Math.random() function.

//  Step 2:Determine the desired range of number
// const shiftRange = 33 - 3 + 1; // This line calculates the size of the range of possible shift values. The minimum shift is 3 and the maximum shift is 33, so the range is calculated as (33 - 3 + 1) to include both endpoints. This results in a range of 31 possible shift values (3 through 33 inclusive).

// Step 3: Generate a random number within the desired range
// const randomInRange = randomDecimal * shiftRange; // This line generates a random decimal number between 0 (inclusive) and the value of 'shiftRange' (exclusive). By multiplying the random decimal by the shiftRange, we scale it to fit within the desired range of shift values.

// Step 4: Convert the random decimal to an integer
// const randomInt = Math.floor(randomInRange); // This line converts the random decimal number generated in the previous step into an integer by using the Math.floor() function, which rounds down to the nearest whole number. This gives us an integer value between 0 and 30 (inclusive).

// Step 5: Shift the range to get an integer between 3 and 33
// const shiftValue = randomInt + 3; // This line shifts the range of possible values from 0-30 to 3-33 by adding 3 to the random integer generated in the previous step. This ensures that the final shift value is between 3 and 33 inclusive.
