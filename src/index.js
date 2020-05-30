import Popup from './js/components/Popup.js';
import Header from './js/components/Header.js';
import NewCardList from './js/components/NewCardList.js';
import NewsCard from './js/components/NewsCard.js';
import MainApi from './js/api/MainApi.js';
import Auth from './js/components/Auth.js';
import NewsApi from './js/api/NewsApi.js';
import {ERROR_MESSAGES, OPTIONS, popupMiniMenuButton, popupMiniButtonAuthorize, popupMiniButton, headerButtonAuthorize,
  headerButtonLogout, popupLoginClose, registerLink, loginLink, loginSuccessLink, popupSignupClose,
  popupSignupSuccessClose, popupMiniMenuClose, articles, signupEmail, signupPassword, signupName,
  loginEmail, loginPassword, buttonLogin, searchButton, buttonSignup, searchResultButton} from './js/constants/constants.js';
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
const newsCardList = new NewCardList(articles, newscard, newsApi, date);

// слушатели открытия попапов
popupMiniMenuButton.addEventListener('click', popup.open);
headerButtonAuthorize.addEventListener('click', popup.open);
popupMiniButtonAuthorize.addEventListener('click', popup.open);
loginLink.addEventListener('click', popup.open);
loginSuccessLink.addEventListener('click', popup.open);
registerLink.addEventListener('click', popup.open);

// слушатели закрытия попапов
popupLoginClose.addEventListener('click', popup.close);
popupSignupClose.addEventListener('click', popup.close);
popupSignupSuccessClose.addEventListener('click', popup.close);
popupMiniMenuClose.addEventListener('click', popup.close);

// валидация полей в форме регистрации
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
loginEmail.addEventListener('input', function() {
  popup.validateLoginEmail(validation);
});

loginPassword.addEventListener('input', function() {
  popup.validateLoginPassword(validation);
});

// работа кнопки логина в попапе логин
buttonLogin.addEventListener('click', function(event) {
  event.preventDefault();
  popup.login(event);
})

// работа кнопки регистрации в попапе signup
buttonSignup.addEventListener('click', function(event) {
  event.preventDefault();
  popup.signup(event);
})

// слушатель кнопки поиска статей
searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  newsCardList.search();
})

// слушатель кнопки logout
headerButtonLogout.addEventListener('click', () => {
  auth.logout();
  header.unauthorized();
  window.location.replace('./');
});

// слушатель кнопки logout в мини-попапе
popupMiniButton.addEventListener('click', () => {
  auth.logout();
  header.unauthorized();
  window.location.replace('./');
});

// слушатель кнопки показать еще
searchResultButton.addEventListener('click', newsCardList.renderMore);

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

