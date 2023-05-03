function init() {
    const cardButtonContainer = document.querySelector(
        '.card__button--container'
    );
    const cardRateBtn = document.querySelectorAll('.card__rate--btn');
    const cardSubmitBtn = document.querySelector('.card__submit--btn');
    const mainContainer = document.querySelector('.main__container');
    function generateLoadingScreen() {
        mainContainer.innerHTML = ``;
        mainContainer.insertAdjacentHTML(
            'afterbegin',
            `<img style="display: block; width: 35px; margin: 0 auto;" src="https://i.gifer.com/74H8.gif" width="35px" />`
        );
    }

    function generateThankYouHTML(rateNumber) {
        mainContainer.innerHTML = ``;

        mainContainer.insertAdjacentHTML(
            'afterbegin',
            `
    <article class="card main__card--thank-you">

        <div class="card__image--container">
        <img src="./images/illustration-thank-you.svg" alt="icon-star" class="card__img">
        </div>

        <div class="card__body">

        <h1 class="card__title">You selected ${rateNumber} out of 5</h1>

        <h2 class="card__sub--title">Thank you</h2>

        <p class="card__desc">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.</p>

        </div>

    </article>`
        );
    }

    cardButtonContainer.addEventListener('mouseover', function (e) {
        cardRateBtn.forEach((btn) =>
            btn.classList.remove('card__rate--btn--hover')
        );
        if (e.target.classList.contains('card__rate--btn')) {
            e.target.classList.add('card__rate--btn--hover');
        }
    });

    cardButtonContainer.addEventListener('click', function (e) {
        cardRateBtn.forEach((btn) => {
            btn.classList.remove('card__rate--btn--hover');
            btn.classList.remove('card__rate--btn--active');
        });
        if (e.target.classList.contains('card__rate--btn')) {
            rateNumber = e.target.dataset.rate;
            e.target.classList.add('card__rate--btn--active');
        }
    });

    cardSubmitBtn.addEventListener('mouseover', function (e) {
        e.target.classList.add('card__submit--btn--hover');
    });

    cardSubmitBtn.addEventListener('mouseout', function (e) {
        e.target.classList.remove('card__submit--btn--hover');
    });

    cardSubmitBtn.addEventListener('click', function (e) {
        if (rateNumber) {
            generateLoadingScreen();

            setTimeout(function () {
                generateThankYouHTML(rateNumber);
            }, 3000);
        }
    });
}

init();
