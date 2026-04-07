const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let locationStart = "";

if (emblemClue1 === "Eagle") {
  locationStart = "Forum";
} else if (emblemClue1 === "Lion") {
  locationStart = "Colosseum";
} else {
  locationStart = "Villa";
}
if (emblemClue2 === "Laurel" && locationStart === "Forum") {
  locationStart += " of Augustus";
} else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
  locationStart += " of Pompey";
}
switch (emblemClue3) {
  case 7:
    locationStart += " North";
    break;
  case 3:
    locationStart += " South";
    break;
  case 9:
    locationStart += " East";
    break;
  case 4:
    locationStart += " West";
    break;
}
console.log(locationStart); // output: "Forum of Augustus North" given the clues provided.

// Question: Why is it important to be careful when using == (double equals) instead of === (triple equals) in our conditionals?
// Answer:
// Using == (double equals) performs type coercion, meaning it tries to convert the operands to the same type before making the comparison. example: video #6
// Using === (triple equals) checks both the value and the type, ensuring a stricter equality check. Using == can lead to unexpected results in certain situations due to type coercion. examples video: #8
