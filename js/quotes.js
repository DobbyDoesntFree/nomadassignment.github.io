const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "― Mark Twain",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "― Thomas A. Edison",
  },
  {
    quote: "Not all those who wander are lost.",
    author: "― J.R.R. Tolkien, The Fellowship of the Ring",
  },
];

const quote = document.querySelector("#quote span:first-child");
const quthor = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
quthor.innerText = todaysQuote.author;
