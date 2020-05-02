import '../pages/index.css';
import {placeButtonDisabler, editButtonDisabler, changeName, formDefault} from './index.js';

const placesList = document.querySelector('.places-list');
const userInfoButton = document.querySelector('.user-info__button');
const userInfoButtonEdit = document.querySelector('.user-info__button_edit');
const popupCloseNew = document.querySelector('.popup-new__close');
const popupCloseEdit = document.querySelector('.popup-edit__close');
const popupCloseImage = document.querySelector('.popup-image__close');
const author = document.querySelector('#author');
const about = document.querySelector('#about');
const errorMessages = {
'author': 'Это обязательное поле',
'about': 'Это обязательное поле',
'length': 'Должно быть от 2 до 30 символов'
}
const initialCards = [];

const userinfo = new UserInfo(author.value, about.value);
const imagecard = new PopUpImageCard;
const newcard = new PopUpNewCard;
const validation = new FormValidator(errorMessages);
const popupEditCard = new PopUpEditCard(validation);

const serverUrl = NODE_ENV === 'development' ? 'http' : 'https';

export const api = new Api({
    baseUrl: '://praktikum.tk/cohort7',
    headers: {
    authorization: '0c961df6-89b0-435f-8c24-258dd9cf0d90',
    'Content-Type': 'application/json'
    }
}, userinfo,  initialCards, serverUrl) ;

const renderCard = new Card('', '', '', '', initialCards, api);
const cardlist = new CardList(placesList, initialCards, api, renderCard);

api.getNameFromServer();
cardlist.getInitialCards();

const popupNew = document.querySelector('.popup-new');
const popupEdit = document.querySelector('.popup-edit');

const popupNewButton = document.querySelector('.popup-new__button');
const popupEditButton = document.querySelector('.popup-edit__button');


//слушатель для кнопки редактирования карточки
popupEditButton.addEventListener('click', function (event) {
    event.preventDefault();
    const nameTyped = document.querySelector('.popup__input_type_author-name');
    const aboutTyped = document.querySelector('.popup__input_type_about');

    api.changeServerName(nameTyped.value, aboutTyped.value);
    popupEdit.classList.toggle('popup_is-opened');
  });

//слушатель для кнопки создания новой карточки
popupNewButton.addEventListener('click', function (event) {
    event.preventDefault();

    cardlist.addNewCard(document.forms.new.name.value, document.forms.new.link.value);
    popupNew.classList.toggle('popup_is-opened');
});

author.addEventListener('input', function() {
    popupEditCard.validateName(validation);
});

about.addEventListener('input', function() {
    popupEditCard.validateAbout(validation);
});

placesList.addEventListener('click', imagecard.open);
popupCloseImage.addEventListener('click', imagecard.close);

userInfoButton.addEventListener('click', newcard.open);
popupCloseNew.addEventListener('click', newcard.close);

userInfoButtonEdit.addEventListener('click', popupEditCard.open);
popupCloseEdit.addEventListener('click', popupEditCard.close);

placeButtonDisabler(event);
editButtonDisabler();
formDefault();
