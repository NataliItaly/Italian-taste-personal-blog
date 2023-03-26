const desertsList = ['abruzzo', "apulia", "aosta valley", "basilicata", 'calabria', 'campania', 'lazio', 'liguria', 'lombardy', 'marches', 'molise', 'piedmont', 'sardinia', 'sicily', 'trentino', 'tuscany', 'umbria', 'veneto'];

const desertsCardsWrapper = document.getElementById(
  "deserts-cards-wrapper"
);

const desertsCardsBtn = document.getElementById("deserts-cards-btn");

renderCards(
  desertsList,
  "deserts",
  desertsCardsWrapper,
  "deserts from",
  "italian desert from"
);

let isAllDesertCards = false;
const desertsCards = document.querySelectorAll(".deserts-card");

desertsCardsBtn.addEventListener("click", function () {
  if (!isAllDesertCards) {
    this.textContent = "Show less";
  } else {
    this.textContent = "Show more";
  }
  showCards(isAllDesertCards, desertsCards);
  isAllDesertCards = !isAllDesertCards;
});



