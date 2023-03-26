function renderRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber > 9 ? randomNumber : `0${randomNumber}`;
}

function renderDate() {
  let date = `${renderRandomNumber(1, 30)}.${renderRandomNumber(
    1,
    12
  )}.${renderRandomNumber(2020, 2023)}`;
  return date;
}

function renderCards(arr, element, parent, titleText, altText) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i][0].toUpperCase() + arr[i].slice(1);
    let li = document.createElement("li");
    li.classList.add(`block-grid__item`, `${element}-card`);

    if (i > 5) {
      li.classList.add("card_hidden");
    }

    let liText = `
          <a href="" class="block-grid__link card">
            <h3 class="card__title">${titleText} ${item}</h3>
            <p class="card__date">
              <time class="card__time">${renderDate()}</time>
            </p>
            <div class="card__image-wrapper">
              <img
                src="./images/${element}/cards/${arr[i]}.jpg"
                alt="${altText} ${arr[i]}"
                class="card__image"
              />
            </div>
          </a>
        `;
    li.insertAdjacentHTML("afterbegin", liText);
    parent.append(li);
  }
}

function showCards(check, cards) {
  if (!check) {
    console.log('f')
    cards.forEach((card) => card.classList.remove("card_hidden"));
  } else {
    console.log('t')
    cards.forEach((card, index) => {
      if (index > 5) {
        card.classList.add("card_hidden");
      }
    });
  }
}

