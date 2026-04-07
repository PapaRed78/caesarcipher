const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"],
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"],
  }, // Initial object of guests with their profiles.
};
guests.BRUTUS = {
  title: "Senator",
  region: "Rome",
  dietaryPreference: "Vegan",
  pastGifts: ["Silver Dagger", "Marble Bust"],
}; // Adds "BRUTUS" to the guests object with his profile.
guests.CICERO.pastGifts.push("Golden Lyre"); // Adds a new gift to Cicero's past gifts.
const antonyRegion = guests.ANTONY.region; // Accesses Antony's region.
console.log("Antony's Region:", antonyRegion); // Output: Antony's Region: Rome
delete guests.CICERO; // Removes "CICERO" from the guests object.
const generalProfile = guests.ANTONY; // Creates a reference to Antony's profile.
generalProfile.region = "Egypt"; // Modifies Antony's region to "Egypt" through the reference.
console.log("Modified Antony's Profile:", generalProfile); // Output: Modified Antony's Profile: { title: 'General', region: 'Egypt', dietaryPreference: 'Vegetarian', pastGifts: [ 'Golden Laurel', 'Chariot' ] }
