const diaryList = [
  "Plenty of fresh vagetables",
  "Bread with cheese and dry tomatoes",
  "Easy and cheap vellutata",
  "How to cook spaghetti",
  "Fragrant polpettas recipe",
  "Season of bitter chicory",
  "Homemade pizza with tomatoes",
  "Different types of spaghetti",
  "Sweet and crispy pan cake",
  "Risotto with red wine",
  "Italian shortbread cookies",
  "Shrimp on the prickly pear leaf"
];

const diaryCardsWrapper = document.getElementById(
  "diary-cards-wrapper"
);

const diaryCardsBtn = document.getElementById("diary-cards-btn");

renderCards(
  diaryList,
  "main",
  diaryCardsWrapper,
  "",
  "the picture of"
);

let isAllDiaryCards = false;
const diaryCards = document.querySelectorAll(".main-item");

diaryCardsBtn.addEventListener("click", function () {
  if (!isAllDiaryCards) {
    this.textContent = "Show less";
  } else {
    this.textContent = "Show more";
  }
  showCards(isAllDiaryCards, diaryCards);
  isAllDiaryCards = !isAllDiaryCards;
});
