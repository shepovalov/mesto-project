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

popupNameInput.setAttribute('placeholder', userName.textContent);
popupJobInput.setAttribute('placeholder', userJob.textContent);


