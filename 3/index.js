const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you are busy making other plans.",
  "The future belongs to those who belive in the beauty of it.",
  "Fall seven times stand up eight.",
  "People doesn't cry because they are week, they cry because they have been strong for too long.",
  "It's better to burn out than to fade away.",
  "You only live once, but if you do it right, once is enough.",
  "It doesn't matter how fast you are, there is always someone faster.",
  "Be yourself, everyone is already taken.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  while (true) {
    if (usedIndexes.size >= quotes.length) {
      usedIndexes.clear();
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIndex)) continue;

    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex);
    break;
  }
}
