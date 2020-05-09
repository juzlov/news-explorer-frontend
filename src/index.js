import Popup from './js/components/Popup.js';
import Header from './js/components/Header.js';
import NewCardList from './js/components/NewCardList.js';
import NewsCard from './js/components/NewsCard.js';
import Form from './js/components/Form.js';
import MainApi from './js/api/MainApi.js';
import NewsApi from './js/api/NewsApi.js';
import {constant} from './js/constants/constants.js';
import {date} from './js/utils/date.js';
import './pages/index.css';


// константы открытия и закрытия попапа
const popup = new Popup;
const headerButton = document.querySelector('.header__button');
const popupLoginClose = document.querySelector('.popup-login');
const registerLink = document.querySelector('.popup__link_register');
const loginLink = document.querySelector('.popup__link_login');
const popupSignupClose = document.querySelector('.popup-signup');

// слушатели открытия попапов
headerButton.addEventListener('click', popup.open);
loginLink.addEventListener('click', popup.open);
registerLink.addEventListener('click', popup.open);

// слушатели закрытия попапов
popupLoginClose.addEventListener('click', popup.close);
popupSignupClose.addEventListener('click', popup.close);
