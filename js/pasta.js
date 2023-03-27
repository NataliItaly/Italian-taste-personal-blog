const pastaList = [
  "Spaghetti with tomato sause",
  "Penne rigate with ragout",
  "Spaghetti al pesto with dry tomatoes",
  "Pasta cacio cheese and pepper",
  "Pasta al pesto di genovese",
  "Homemade tordellini",
  "Pici with garlic sause",
  "Hot italian lasagna",
  "Tagliatelle with ragout of boar",
  "Spaghetti with seafood",
  "Linguine and speck",
  "Pici with garlic sause"
];

const pastaCardsWrapper = document.getElementById(
  "pasta-cards-wrapper"
);

const pastaCardsBtn = document.getElementById("pasta-cards-btn");

renderCards(
  pastaList,
  "pasta",
  pastaCardsWrapper,
  "",
  "the picture with fresh"
);

let isAllPastaCards = false;
const pastaItems = document.querySelectorAll(".pasta-item");

pastaCardsBtn.addEventListener("click", function () {
  if (!isAllPastaCards) {
    this.textContent = "Show less";
  } else {
    this.textContent = "Show more";
  }
  showCards(isAllPastaCards, pastaItems);
  isAllPastaCards = !isAllPastaCards;
});
