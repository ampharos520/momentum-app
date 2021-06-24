const quotes = [
    {
      quote: "If you win, you live. If you lose, you die. If you don’t fight, you can’t win!",
      author: "Eren Yaeger",
    },
    {
      quote: "Tatakae!",
      author: "Eren Yaeger",
    },
    {
      quote: "I thought I heard dirt moving around in the shape of an idiot. So it was you?",
      author: "Levi Ackerman",
    },
    {
      quote: "To endure becoming a monster you have to discard your humanity.",
      author: "Armin Arlert",
    },
    {
      quote: "Once I’m dead, I won’t even be able to remember you. So I’ll win, no matter what. I’ll live, no matter what!",
      author: "Mikasa Ackerman",
    },
    {
      quote: "One must never prioritize their own gain over humanities survival.",
      author: "Erwin Smith",
    },
    {
      quote: "The only thing we're allowed to do is believe that we won't regret the choice we made.",
      author: "Levi Ackerman",
    },
    {
      quote: "Sir, how do you know for sure there's nobody on the other side of the walls?",
      author: "Erwin Smith",
    },
    {
      quote: "Someone who cannot abandon everything cannot achieve anything.",
      author: "Armin Arlert",
    },
    {
      quote: "This world is cruel and merciless.. But it's also very beautiful.",
      author: "Mikasa Ackerman",
    },
  ];
 
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;