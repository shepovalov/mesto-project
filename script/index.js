const formElement = document.querySelector('.popup__form')

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

let editBtn = document.querySelector('.user-info__edit-button');
let closeBtn = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

let userName = document.querySelector('.user-info__header');
let userJob = document.querySelector('.user-info__job');

let popupNameInput = document.querySelector('.popup__input_type_name');
let popupJobInput = document.querySelector('.popup__input_type_link-url');

editBtn.addEventListener('click', () => {
    popup.classList.add('popup_open');
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('popup_open');
});

popupNameInput.setAttribute('value', userName.textContent);
popupJobInput.setAttribute('value', userJob.textContent);

function formSubmitHandler (evt) {
    evt.preventDefault();

    userName.textContent = popupNameInput.value;
    userJob.textContent =  popupJobInput.value;  
}

formElement.addEventListener('submit', formSubmitHandler);