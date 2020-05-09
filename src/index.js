import Popup from './js/components/Popup.js';
import Header from './js/components/Header.js';
import NewCardList from './js/components/NewCardList.js';
import NewsCard from './js/components/NewsCard.js';
import Form from './js/components/Form.js';
import MainApi from './js/api/MainApi.js';
import NewsApi from './js/api/NewsApi.js';
import {constant} from './js/constants/constants.js';
import {date} from './js/utils/date.js';
import {loginButtonDisabler, signupButtonDisabler} from './js/utils/date.js';
import FormValidator from './js/utils/FormValidator.js';
import './pages/index.css';


//ошибки валидации
const errorMessages = {
  'signup-email': 'Это обязательное поле',
  'name': 'Это обязательное поле',
  'signup-password': 'Это обязательное поле',
  'length': 'Должно быть от 2 до 30 символов',
  'login-email': 'Это обязательное поле',
  'login-password': 'Это обязательное поле'
}

// константы открытия и закрытия попапа

const headerButton = document.querySelector('.header__button');
const popupLoginClose = document.querySelector('.popup-login');
const registerLink = document.querySelector('.popup__link_register');
const loginLink = document.querySelector('.popup__link_login');
const popupSignupClose = document.querySelector('.popup-signup');

const validation = new FormValidator(errorMessages);
const popup = new Popup(validation);

// слушатели открытия попапов
headerButton.addEventListener('click', popup.open);
loginLink.addEventListener('click', popup.open);
registerLink.addEventListener('click', popup.open);

// слушатели закрытия попапов
popupLoginClose.addEventListener('click', popup.close);
popupSignupClose.addEventListener('click', popup.close);


// валидация полей в форме регистрации

const signupEmail = document.querySelector('#signup-email');
const signupPassword = document.querySelector('#signup-password');
const signupName = document.querySelector('#name');

signupEmail.addEventListener('input', function() {
  popup.validateEmail(validation);
});

signupPassword.addEventListener('input', function() {
  popup.validatePassword(validation);
});

signupName.addEventListener('input', function() {
  popup.validateName(validation);
});

// валидация полей в форме авторизации

const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');

loginEmail.addEventListener('input', function() {
  popup.validateLoginEmail(validation);
});

loginPassword.addEventListener('input', function() {
  popup.validateLoginPassword(validation);
});

// работа кнопки логина в попапе логин
const buttonLogin = document.querySelector('.popup-login__button');
buttonLogin.addEventListener('click', function(event) {
  console.log('login button pushed');
  popup.close(event);
})

// работа кнопки логина в попапе signup
const buttonSignup = document.querySelector('.popup-signup__button');
buttonSignup.addEventListener('click', function(event) {
  console.log('signup button pushed');
  popup.close(event);
})

// вызов функции отключения кнопки Вход в логин-попапе
loginButtonDisabler();

// вызов функции отключения кнопки регистрация в Signup-попапе
signupButtonDisabler();

