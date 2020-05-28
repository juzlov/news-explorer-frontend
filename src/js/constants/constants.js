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
const POPUP_MINI_MENU_BUTTON = document.querySelector('.header__mini-menu');
const POPUP_MINI_BUTTON_AUTHORIZE = document.querySelector('.popup-mini-menu__button_authorize');
const POPUP_MINI_BUTTON = document.querySelector('.popup-mini-menu__button');
const HEADER_BUTTON_AUTHORIZE = document.querySelector('.header__button_authorize');
const HEADER_BUTTON_LOGOUT = document.querySelector('.header__button_logout');
const POPUP_LOGIN_CLOSE = document.querySelector('.popup-login__close');
const REGISTER_LINK = document.querySelector('.popup__link_register');
const LOGIN_LINK = document.querySelector('.popup__link_login');
const LOGIN_SUCCESS_LINK = document.querySelector('.popup-signup-success__link_login');
const POPUP_SIGNUP_CLOSE = document.querySelector('.popup-signup__close');
const POPUP_SIGNUP_SUCCESS_CLOSE = document.querySelector('.popup-signup-success');
const POPUP_MINI_MENU_CLOSE = document.querySelector('.popup-mini-menu__close');

// константы секций со статьями внутри
const SAVED_ARTICLES = document.querySelector('.saved-articles');
const ARTICLES = document.querySelector('.articles');

// константы полей в форме регистрации
const SIGNUP_EMAIL = document.querySelector('#signup-email');
const SIGNUP_PASSWORD = document.querySelector('#signup-password');
const SIGNUP_NAME = document.querySelector('#name');

// константы полей в форме регистрации
const LOGIN_EMAIL = document.querySelector('#login-email');
const LOGIN_PASSWORD = document.querySelector('#login-password');

// константы кнопок
const SEARCH_BUTTON = document.querySelector('.search__button');
const BUTTON_SIGNUP = document.querySelector('.popup-signup__button');
const BUTTON_LOGIN = document.querySelector('.popup-login__button');
const HEADER_BUTTON = document.querySelector('.header__button');

export {POPUP_MINI_MENU_BUTTON, POPUP_MINI_BUTTON_AUTHORIZE, POPUP_MINI_BUTTON, HEADER_BUTTON_AUTHORIZE,
  HEADER_BUTTON_LOGOUT, POPUP_LOGIN_CLOSE, REGISTER_LINK, LOGIN_LINK, LOGIN_SUCCESS_LINK, POPUP_SIGNUP_CLOSE,
  POPUP_SIGNUP_SUCCESS_CLOSE, POPUP_MINI_MENU_CLOSE, ARTICLES, SIGNUP_EMAIL, SIGNUP_PASSWORD, SIGNUP_NAME,
  LOGIN_EMAIL, LOGIN_PASSWORD, BUTTON_LOGIN, SEARCH_BUTTON, BUTTON_SIGNUP, HEADER_BUTTON, SAVED_ARTICLES};