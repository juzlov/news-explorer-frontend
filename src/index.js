import Popup from './js/components/Popup.js';
import Header from './js/components/Header.js';
import NewCardList from './js/components/NewCardList.js';
import NewsCard from './js/components/NewsCard.js';
import MainApi from './js/api/MainApi.js';
import Auth from './js/components/Auth.js';
import NewsApi from './js/api/NewsApi.js';
import {ERROR_MESSAGES, OPTIONS, POPUP_MINI_MENU_BUTTON, POPUP_MINI_BUTTON_AUTHORIZE, POPUP_MINI_BUTTON, HEADER_BUTTON_AUTHORIZE,
  HEADER_BUTTON_LOGOUT, POPUP_LOGIN_CLOSE, REGISTER_LINK, LOGIN_LINK, LOGIN_SUCCESS_LINK, POPUP_SIGNUP_CLOSE,
  POPUP_SIGNUP_SUCCESS_CLOSE, POPUP_MINI_MENU_CLOSE, ARTICLES, SIGNUP_EMAIL, SIGNUP_PASSWORD, SIGNUP_NAME,
  LOGIN_EMAIL, LOGIN_PASSWORD, BUTTON_LOGIN, SEARCH_BUTTON, BUTTON_SIGNUP} from './js/constants/constants.js';
import {date} from './js/utils/date.js';
import {loginButtonDisabler, signupButtonDisabler} from './js/utils/buttonDisablers.js';
import FormValidator from './js/components/FormValidator.js';
import './pages/index.css';

const api = new MainApi(OPTIONS);
const auth = new Auth();
const header = new Header();
const validation = new FormValidator(ERROR_MESSAGES);
const popup = new Popup(validation, api, header, auth);
const newsApi = new NewsApi(OPTIONS);
const newscard = new NewsCard(api, auth);
const newsCardList = new NewCardList(ARTICLES, newscard, newsApi, date);

// слушатели открытия попапов
POPUP_MINI_MENU_BUTTON.addEventListener('click', popup.open);
HEADER_BUTTON_AUTHORIZE.addEventListener('click', popup.open);
POPUP_MINI_BUTTON_AUTHORIZE.addEventListener('click', popup.open);
LOGIN_LINK.addEventListener('click', popup.open);
LOGIN_SUCCESS_LINK.addEventListener('click', popup.open);
REGISTER_LINK.addEventListener('click', popup.open);

// слушатели закрытия попапов
POPUP_LOGIN_CLOSE.addEventListener('click', popup.close);
POPUP_SIGNUP_CLOSE.addEventListener('click', popup.close);
POPUP_SIGNUP_SUCCESS_CLOSE.addEventListener('click', popup.close);
POPUP_MINI_MENU_CLOSE.addEventListener('click', popup.close);

// валидация полей в форме регистрации
SIGNUP_EMAIL.addEventListener('input', function() {
  popup.validateEmail(validation);
});

SIGNUP_PASSWORD.addEventListener('input', function() {
  popup.validatePassword(validation);
});

SIGNUP_NAME.addEventListener('input', function() {
  popup.validateName(validation);
});

// валидация полей в форме авторизации
LOGIN_EMAIL.addEventListener('input', function() {
  popup.validateLoginEmail(validation);
});

LOGIN_PASSWORD.addEventListener('input', function() {
  popup.validateLoginPassword(validation);
});

// работа кнопки логина в попапе логин
BUTTON_LOGIN.addEventListener('click', function(event) {
  event.preventDefault();
  popup.login(event);
})

// работа кнопки регистрации в попапе signup
BUTTON_SIGNUP.addEventListener('click', function(event) {
  event.preventDefault();
  popup.signup(event);
})

// слушатель кнопки поиска статей
SEARCH_BUTTON.addEventListener('click', function(event) {
  event.preventDefault();
  newsCardList.search();
})

// слушатель кнопки logout
HEADER_BUTTON_LOGOUT.addEventListener('click', () => {
  auth.logout();
  header.unauthorized();
  window.location.replace('../');
});

// слушатель кнопки logout в мини-попапе
POPUP_MINI_BUTTON.addEventListener('click', () => {
  auth.logout();
  header.unauthorized();
  window.location.replace('../');
});

// проверка авторизации и смена хэдера
if (auth.loginCheck()) {
  header.loggedIn(localStorage.getItem('name'));
} else {
  header.unauthorized();
}

// вызов функции отключения кнопки Вход в логин-попапе
loginButtonDisabler();

// вызов функции отключения кнопки регистрация в Signup-попапе
signupButtonDisabler();