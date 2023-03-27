function generateSingleCard(title, src, alt) {
  const singleCard = document.createElement("div");
  singleCard.classList.add("single-card");
  singleCardContent = `
            <div class="single-card__wrapper">
                <h2 class="section__title single-card__title">${title}</h3>
                <div class="flex-block-2 flex-block-2_reverse">
                    <div class="flex-block__column single-card__column" id="single-card-text">
                        <p class="single-card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia praesentium unde aut impedit accusantium repudiandae similique sapiente velit, maxime corporis ad veniam nam consectetur facere dolor officia veritatis eos quibusdam
                        </p>
                        <p class="single-card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia praesentium unde aut impedit accusantium repudiandae similique sapiente velit, maxime corporis ad veniam nam consectetur facere dolor officia veritatis eos quibusdam
                        </p>
                        <p class="card__date single-card__text">
                        <time class="card__time">${renderDate()}</time>
                        </p>
                    </div>
                    <div class="flex-block__column single-card__column" id="single-card-img-block">
                        <img
                            src="${src}"
                            alt="${alt}"
                            class="card__image"
                        />
                    </div>
                </div>
                <input type="checkbox" class="single-card__close" id="single-card-close">
                <label for="single-card-close" class="single-card__label">
            </div>
        `;
  singleCard.insertAdjacentHTML("afterbegin", singleCardContent);
  document.body.append(singleCard);

  const checkbox = document.getElementById("single-card-close");
  checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
          singleCard.remove();
        }
    });
}

