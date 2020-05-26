import Popup from './js/components/Popup.js';
import Header from './js/components/Header.js';
import NewCardList from './js/components/NewCardList.js';
import NewsCard from './js/components/NewsCard.js';
import Form from './js/components/Form.js';
import MainApi from './js/api/MainApi.js';
import Auth from './js/components/Auth.js';
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
const popupMiniMenuButton = document.querySelector('.header__mini-menu');
const popupMiniButtonAutorize = document.querySelector('.popup-mini-menu__button_authorize');
const popupMiniButton = document.querySelector('.popup-mini-menu__button');
const headerButtonAutorize = document.querySelector('.header__button_authorize');
const headerButtonLogout = document.querySelector('.header__button_logout');
const popupLoginClose = document.querySelector('.popup-login__close');
const registerLink = document.querySelector('.popup__link_register');
const loginLink = document.querySelector('.popup__link_login');
const loginSuccessLink = document.querySelector('.popup-signup-success__link_login');
const popupSignupClose = document.querySelector('.popup-signup__close');
const popupSignupSuccessClose = document.querySelector('.popup-signup-success');
const popupMiniMenuClose = document.querySelector('.popup-mini-menu__close');

const validation = new FormValidator(errorMessages);
const popup = new Popup(validation);

// слушатели открытия попапов
popupMiniMenuButton.addEventListener('click', popup.open);

headerButtonAutorize.addEventListener('click', popup.open);
popupMiniButtonAutorize.addEventListener('click', popup.open);
loginLink.addEventListener('click', popup.open);
loginSuccessLink.addEventListener('click', popup.open);
registerLink.addEventListener('click', popup.open);


// слушатели закрытия попапов
popupLoginClose.addEventListener('click', popup.close);
popupSignupClose.addEventListener('click', popup.close);
popupSignupSuccessClose.addEventListener('click', popup.close);
popupMiniMenuClose.addEventListener('click', popup.close);


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




const auth = new Auth();
const header = new Header();

headerButtonLogout.addEventListener('click', () => {
  auth.logout();
  header.unauthorized();
  window.location.replace('http://localhost:8080/');
});

popupMiniButton.addEventListener('click', () => {
  auth.logout();
  header.unauthorized();
  window.location.replace('http://localhost:8080/');
});

if (auth.loginCheck()) {
  header.loggedIn(localStorage.getItem('name'));
} else {
  header.unauthorized();
}

const api = new MainApi();

// работа кнопки логина в попапе логин
const buttonLogin = document.querySelector('.popup-login__button');
buttonLogin.addEventListener('click', function(event) {
  event.preventDefault();

  const email = document.querySelector('.popup__input_type_email');
  const password = document.querySelector('.popup__input_type_pasword');
  const errorServer = document.querySelector('#error-login');

  api.signin(email.value, password.value)
  .then((result) => {
    if (!result) {
      errorServer.textContent = ("No response from server");
    } else if (result.token) {
      auth.signin(result.token, result.name, result._id);
      header.loggedIn(localStorage.getItem('name'));
      popup.close(event);
      window.location.replace('http://localhost:8080/');
    } else {
      errorServer.textContent = (result.message);
    }
  });
})




// работа кнопки логина в попапе signup
const buttonSignup = document.querySelector('.popup-signup__button');
buttonSignup.addEventListener('click', function(event) {
  event.preventDefault();

  const email = document.querySelector('.popup-signup__input_type_email');
  const password = document.querySelector('.popup-signup__input_type_pasword');
  const name = document.querySelector('.popup-signup__input_type_name');
  const errorServer = document.querySelector('#error-server');

  api.signup(email.value, password.value, name.value)
  .then((result) => {
    if (!result) {
      errorServer.textContent = ("No response from server");
    } else if (result.ok) {
      popup.close(event);
    } else {
      errorServer.textContent = (result.message);
    }
  });
})

// вызов функции отключения кнопки Вход в логин-попапе
loginButtonDisabler();

// вызов функции отключения кнопки регистрация в Signup-попапе
signupButtonDisabler();


const options = {
  "url": 'https://praktikum.tk/news/v2/everything?',
  "apikey": 'apiKey=48801e62dbcf41f7a0237706da6230e7'
};



const newsApi = new NewsApi(options);
const newscard = new NewsCard(api, auth);

const articles = document.querySelector('.articles');
const newsCardList = new NewCardList(articles, newscard);


const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  const searchInput = document.querySelector('.search__input');
  const searchContainer = document.querySelector('.search-results');
  const searchLoader = document.querySelector('.search-results__loading');
  const searchNoResult = document.querySelector('.search-results__no-results');
  const searchResultButton = document.querySelector('.search-results__button');
  const searchArticles = document.querySelector('.articles');

  if (!searchInput.value) {
    console.log('Please, type any keyword for searching');
  } else {
    searchContainer.classList.remove('disabled');
    searchLoader.classList.remove('disabled');
    searchArticles.textContent = '';
    searchResultButton.classList.add('disabled');
    searchNoResult.classList.add('disabled');



    let resultsArticles = [];


    newsApi.getNews(searchInput.value, date(7), date(0))

    .then((res) => {
      let result = res;

      if (result.length === 0){
        searchLoader.classList.add('disabled');
        searchNoResult.classList.remove('disabled');
      }
      else if (result) {
        newsCardList.renderResults(result);
        searchLoader.classList.add('disabled');
        searchNoResult.classList.add('disabled');
        searchArticles.classList.remove('disabled');
        searchResultButton.classList.remove('disabled');

        resultsArticles = result;
      }
    })
    .catch((err) => {
      searchLoader.classList.add('disabled');
      searchNoResult.classList.remove('disabled');
      console.log(err);
    });


  }
})

