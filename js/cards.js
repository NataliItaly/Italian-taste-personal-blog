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
    li.classList.add(`block-grid__item`, `${element}-item`);

    if (i > 5) {
      li.classList.add("card_hidden");
    }

    let a = document.createElement("a");
    a.classList.add(`card`, `${element}-card`);
    a.href = "#";

    let imgSrc = `./images/${element}/cards/${arr[i]}.jpg`;
    let imgAlt = `${altText} ${arr[i]}`;
    let title = `${titleText} ${item}`;
    let aText = `
            <h3 class="card__title">${title}</h3>
            <p class="card__date">
              <time class="card__time">${renderDate()}</time>
            </p>
            <div class="card__image-wrapper">
                <img
                src="${imgSrc}"
                alt="${imgAlt}"
                class="card__image">
            </div>
            `;

    a.insertAdjacentHTML("afterbegin", aText);
    a.addEventListener("click", function (event) {
      event.preventDefault();
      generateSingleCard(title, imgSrc, imgAlt);
    });

    li.append(a);
    parent.append(li);
  }
}

function showCards(check, cards) {
  if (!check) {
    cards.forEach((card) => card.classList.remove("card_hidden"));
  } else {
    console.log("t");
    cards.forEach((card, index) => {
      if (index > 5) {
        card.classList.add("card_hidden");
      }
    });
  }
}
