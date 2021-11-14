let deckOfCards = [
  {
    src: "SVG-cards-1.3/6_of_clubs.svg",
    value: 6,
  },
  {
    src: "SVG-cards-1.3/6_of_diamonds.svg",
    value: 6,
  },
  {
    src: "SVG-cards-1.3/6_of_hearts.svg",
    value: 6,
  },
  {
    src: "SVG-cards-1.3/6_of_spades.svg",
    value: 6,
  },
  {
    src: "SVG-cards-1.3/7_of_clubs.svg",
    value: 7,
  },
  {
    src: "SVG-cards-1.3/7_of_diamonds.svg",
    value: 7,
  },
  {
    src: "SVG-cards-1.3/7_of_hearts.svg",
    value: 7,
  },
  {
    src: "SVG-cards-1.3/7_of_spades.svg",
    value: 7,
  },
  {
    src: "SVG-cards-1.3/8_of_clubs.svg",
    value: 8,
  },
  {
    src: "SVG-cards-1.3/8_of_diamonds.svg",
    value: 8,
  },
  {
    src: "SVG-cards-1.3/8_of_hearts.svg",
    value: 8,
  },
  {
    src: "SVG-cards-1.3/8_of_spades.svg",
    value: 8,
  },
  {
    src: "SVG-cards-1.3/9_of_clubs.svg",
    value: 9,
  },
  {
    src: "SVG-cards-1.3/9_of_diamonds.svg",
    value: 9,
  },
  {
    src: "SVG-cards-1.3/9_of_hearts.svg",
    value: 9,
  },
  {
    src: "SVG-cards-1.3/9_of_spades.svg",
    value: 9,
  },
  {
    src: "SVG-cards-1.3/10_of_clubs.svg",
    value: 10,
  },
  {
    src: "SVG-cards-1.3/10_of_diamonds.svg",
    value: 10,
  },
  {
    src: "SVG-cards-1.3/10_of_hearts.svg",
    value: 10,
  },
  {
    src: "SVG-cards-1.3/10_of_spades.svg",
    value: 10,
  },
  {
    src: "SVG-cards-1.3/ace_of_clubs.svg",
    value: 11,
  },
  {
    src: "SVG-cards-1.3/ace_of_diamonds.svg",
    value: 11,
  },
  {
    src: "SVG-cards-1.3/ace_of_hearts.svg",
    value: 11,
  },
  {
    src: "SVG-cards-1.3/ace_of_spades.svg",
    value: 11,
  },
  {
    src: "SVG-cards-1.3/jack_of_clubs.svg",
    value: 2,
  },
  {
    src: "SVG-cards-1.3/jack_of_diamonds.svg",
    value: 2,
  },
  {
    src: "SVG-cards-1.3/jack_of_hearts.svg",
    value: 2,
  },
  {
    src: "SVG-cards-1.3/jack_of_spades.svg",
    value: 2,
  },
  {
    src: "SVG-cards-1.3/king_of_clubs.svg",
    value: 4,
  },
  {
    src: "SVG-cards-1.3/king_of_diamonds.svg",
    value: 4,
  },
  {
    src: "SVG-cards-1.3/king_of_hearts.svg",
    value: 4,
  },
  {
    src: "SVG-cards-1.3/king_of_spades.svg",
    value: 4,
  },
  {
    src: "SVG-cards-1.3/queen_of_clubs.svg",
    value: 3,
  },
  {
    src: "SVG-cards-1.3/queen_of_diamonds.svg",
    value: 3,
  },
  {
    src: "SVG-cards-1.3/queen_of_hearts.svg",
    value: 3,
  },
  {
    src: "SVG-cards-1.3/queen_of_spades.svg",
    value: 3,
  },
];

user.innerText = prompt("What is your name?", "Johnny Depp");
if (!user.innerText) {
  user.innerText = "User";
}

btn.addEventListener("click", () => {
  if (+attempts.innerText < 3) {
    let src1 = Math.floor(Math.random() * deckOfCards.length) + 1;
    let src2 = Math.floor(Math.random() * deckOfCards.length) + 1;
    document.querySelectorAll("img")[0].src = deckOfCards[src1].src;
    document.querySelectorAll("img")[1].src = deckOfCards[src2].src;
    user_score.innerText = +user_score.innerText+deckOfCards[src1].value;
    computer_score.innerText = +computer_score.innerText+deckOfCards[src2].value;
    +attempts.innerText++;
    if (+attempts.innerText == 3) {
      setTimeout(() => {
        if (+user_score.innerText > +computer_score.innerText) {
          return confirm(`${user.innerText} won!\nPress Ok to reload the page;)`) ? document.location.reload() : undefined;
        } else if (+user_score.innerText < +computer_score.innerText) {
          return confirm("Computer won!\nPress Ok to reload the page;(") ? document.location.reload() : undefined;
        }
        else {
          return confirm("Nobody won!\nPress Ok to reload the page!") ? document.location.reload() : undefined;
        }
      }, 200);
    }
  }
});
