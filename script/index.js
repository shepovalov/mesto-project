const formElement = document.querySelector('.popup__form');

let editBtn = document.querySelector('.user-info__edit-button');
let closeBtn = document.querySelectorAll('.popup__close');

let popup = document.querySelector('.popup');
let userName = document.querySelector('.user-info__header');
let userJob = document.querySelector('.user-info__job');
let popupNameInput = document.querySelector('.popup__input_type_name');
let popupJobInput = document.querySelector('.popup__input_type_link-url');
let placesList = document.querySelector('.places-list');
let rootElement = document.querySelector('.root');
let addCardsBtn = document.querySelector('.user-info__button');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

addPopup()  
// обработчики

editBtn.addEventListener('click', () => {
    popup.classList.add('popup_open');
});

closeBtn[0].addEventListener('click', () => {
    popup.classList.remove('popup_open');
});

popupNameInput.setAttribute('value', userName.textContent);
popupJobInput.setAttribute('value', userJob.textContent);

// сохранение полей

function formSubmitHandler (evt) {
    evt.preventDefault();

    userName.textContent = popupNameInput.value;
    userJob.textContent =  popupJobInput.value;  
}

formElement.addEventListener('submit', formSubmitHandler);

// добавление карточек

function addCards () {
    placesList.insertAdjacentHTML('afterbegin', `
    <li class="place-card">
        <img src="${initialCards[i].link}" alt="${initialCards[i].name}" class="place-card__image">
        <div class="place-card__description">
            <h2 class="place-card__name">${initialCards[i].name}</h2>
            <button type="button" aria-label="Like" class="place-card__like-icon"></button>
        </div>
    </li>
    `)
};

for(i = 0; initialCards.length > i; i++) {
    addCards();
};

// добавление popup

addCardsBtn.addEventListener('click', () => {
    if(popup) {
        popup.parentNode.removeChild(popup);
    }
    addPopup();
});
console.log(closeBtn)
closeBtn[1].addEventListener('click', () => {
    popup.classList.remove('popup_open');
});

