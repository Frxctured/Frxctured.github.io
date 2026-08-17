const quotes = [
  "The best way to predict the future is to invent it.",
  "Simplicity is the ultimate sophistication.",
  "Not all those who wander are lost.",
  "The obstacle is the way.",
  "We are what we repeatedly do.",
  "Stay hungry, stay foolish.",
  "Fortune favors the bold.",
  "Do or do not. There is no try.",
  "The unexamined life is not worth living.",
  "Whatever you are, be a good one.",
  "Fall seven times, stand up eight.",
  "Action is the antidote to despair.",
  "Genius is one percent inspiration, ninety-nine percent perspiration.",
  "Turn your wounds into wisdom.",
  "The mind is everything. What you think you become.",
  "It always seems impossible until it's done.",
  "Little things make big days.",
  "Dream big and dare to fail.",
  "Energy and persistence conquer all things.",
  "The best time to plant a tree was 20 years ago. The second best time is now."
];

// Get a random quote
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default quotes;
export { getRandomQuote };