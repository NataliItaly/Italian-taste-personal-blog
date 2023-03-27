const vegetablesList = [
  "pumpkin",
  "tomatoes",
  "carrots",
  "zucchini",
  "eggplant",
  "garlic",
  "leek",
  "onion",
  "parsley",
  "beans",
  "artichoke",
  "broccoli",
  "beet",
  "hot pepper",
  "cabbage",
  "lettuce",
  "sweet pepper",
  "asparagus",
];

const vegetablesCardsWrapper = document.getElementById(
  "vegetables-cards-wrapper"
);

const vegetablesCardsBtn = document.getElementById('vegetables-cards-btn');

renderCards(
  vegetablesList,
  'vegetables',
  vegetablesCardsWrapper,
  "",
  "the picture with fresh"
  );

let isAllVegetableCards = false;
const vegetablesItems = document.querySelectorAll(".vegetables-item");

vegetablesCardsBtn.addEventListener("click", function() {
  if (!isAllVegetableCards) {
    this.textContent = "Show less";
  }
  else {
    this.textContent = "Show more";
  }
  showCards (isAllVegetableCards, vegetablesItems);
  isAllVegetableCards = !isAllVegetableCards;
});





