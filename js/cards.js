const cardsGenerateBtn = document.getElementById('ingredients-generation-btn');
const ingredientsCards = document.querySelectorAll('.ingredients-card');

cardsGenerateBtn.addEventListener('click', function() {
    ingredientsCards.forEach((card) =>
      card.classList.toggle("visually-hidden_temporary")
    );
    cardsGenerateBtn.classList.toggle("button_cliked");
    if (cardsGenerateBtn.classList.contains('button_cliked')) {
        cardsGenerateBtn.textContent = 'Show less'
    }
    else {
        cardsGenerateBtn.textContent = "Find more vegetables";
    }
});