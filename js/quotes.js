const quotes = [
  {
    quote:
      "We all have big changes in our lives that are more or less a second chance.",
    author: "Harrison Ford",
  },
  {
    quote: "Dream as if you'll live forever. Live as if you'll die today.",
    author: "James Dean",
  },
  {
    quote: "No wise man ever wished to be younger.",
    author: "Jonathan Swift",
  },
  {
    quote:
      "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
    author: "Isaac Asimov",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quote: "Fear cannot be without hope nor hope without fear.",
    author: "Baruch Spinoza",
  },
  {
    quote: "Nothing shows a man's character more than what he laughs at.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Keep true to the dreams of thy youth.",
    author: "Friedrich von Schiller",
  },
  {
    quote:
      "Many would be cowards if they had courage enough.",
    author: "Thomas Fuller",
  },
  {
    quote: "Only in the agony of parting do we look into the depths of love.",
    author: "George Eliot",
  },
];

const wordBox = document.querySelector("div#quotes > span.word");
const authorBox = document.querySelector("div#quotes > span.author");

const getQuote = () => {
  const num = Math.floor(Math.random() * quotes.length);

  wordBox.innerText = `" ${quotes[num].quote} "`;
  authorBox.innerText = quotes[num].author;
};

getQuote();
