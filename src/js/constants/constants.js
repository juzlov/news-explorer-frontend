// ошибки валидации
export const ERROR_MESSAGES = {
  'signup-email': 'Это обязательное поле',
  'name': 'Это обязательное поле',
  'signup-password': 'Это обязательное поле',
  'length': 'Должно быть от 2 до 30 символов',
  'login-email': 'Это обязательное поле',
  'login-password': 'Это обязательное поле'
}

// опции для запроса с внешнейго API
export const OPTIONS = {
  "url": 'https://praktikum.tk/news/v2/everything?',
  "apikey": 'apiKey=48801e62dbcf41f7a0237706da6230e7',
  "server": 'https://api.news-explore.tk/'
};

// константы открытия и закрытия попапа
const popupMiniMenuButton = document.querySelector('.header__mini-menu');
const popupMiniButtonAuthorize = document.querySelector('.popup-mini-menu__button_authorize');
const popupMiniButton = document.querySelector('.popup-mini-menu__button');
const headerButtonAuthorize = document.querySelector('.header__button_authorize');
const headerButtonLogout = document.querySelector('.header__button_logout');
const popupLoginClose = document.querySelector('.popup-login__close');
const registerLink = document.querySelector('.popup__link_register');
const loginLink = document.querySelector('.popup__link_login');
const loginSuccessLink = document.querySelector('.popup-signup-success__link_login');
const popupSignupClose = document.querySelector('.popup-signup__close');
const popupSignupSuccessClose = document.querySelector('.popup-signup-success');
const popupMiniMenuClose = document.querySelector('.popup-mini-menu__close');

// константы секций со статьями внутри
const savedArticles = document.querySelector('.saved-articles');
const articles = document.querySelector('.articles');

// константы полей в форме регистрации
const signupEmail = document.querySelector('#signup-email');
const signupPassword = document.querySelector('#signup-password');
const signupName = document.querySelector('#name');

// константы полей в форме регистрации
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');

// константы кнопок
const searchButton = document.querySelector('.search__button');
const buttonSignup = document.querySelector('.popup-signup__button');
const buttonLogin = document.querySelector('.popup-login__button');
const headerButton = document.querySelector('.header__button');
const searchResultButton = document.querySelector('.search-results__button');

export {popupMiniMenuButton, popupMiniButtonAuthorize, popupMiniButton, headerButtonAuthorize,
  headerButtonLogout, popupLoginClose, registerLink, loginLink, loginSuccessLink, popupSignupClose,
  popupSignupSuccessClose, popupMiniMenuClose, articles, signupEmail, signupPassword, signupName,
  loginEmail, loginPassword, buttonLogin, searchButton, buttonSignup, headerButton, savedArticles, searchResultButton};