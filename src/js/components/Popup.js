// Класс попапа

export default class Popup {
  constructor(errorMessage) {
    this.errorMessage = errorMessage;
  }


  // методы валидации полей
  validateEmail() {
    const signupEmail = document.querySelector('#signup-email');
    this.errorMessage.isEmail(signupEmail);
  }

  validateLoginEmail() {
    const loginEmail = document.querySelector('#login-email');
    this.errorMessage.isEmail(loginEmail);
  }

  validatePassword() {
    const signupPassword = document.querySelector('#signup-password');
    this.errorMessage.length(signupPassword);
  }

  validateLoginPassword() {
    const loginPassword = document.querySelector('#login-password');
    this.errorMessage.length(loginPassword);
  }

  validateName() {
    const signupName = document.querySelector('#name');
    this.errorMessage.length(signupName);
  }

  // вставляет в попап содержимое, например, форму входа или сообщение об успешной регистрации
  setContent() {

  }

  // очищает содержимое попапа
  clearContent() {

  }

  // открывает попап
  open(event) {
    event.preventDefault();
    const popupSignup = document.querySelector('.popup-signup');
    const popupLogin = document.querySelector('.popup-login');
    const popupMiniMenu = document.querySelector('.popup-mini-menu');
    const popupSuccess = document.querySelector('.popup-signup-success');

    if (event.target.classList.contains('popup__link_register')) {
      popupSignup.classList.toggle('popup_is-opened');
      popupLogin.classList.remove('popup_is-opened');
    }

    else if (event.target.classList.contains('header__button')) {
      popupLogin.classList.toggle('popup_is-opened');
      popupSignup.classList.remove('popup_is-opened');
    }

    else if (event.target.classList.contains('popup-mini-menu__button_authorize')) {
      popupLogin.classList.toggle('popup_is-opened');
      popupMiniMenu.classList.remove('popup_is-opened');
    }

    else if (event.target.classList.contains('header__mini-menu')) {
      popupMiniMenu.classList.toggle('popup_is-opened');
    }

    else if (event.target.classList.contains('popup__link_login')) {
      popupLogin.classList.toggle('popup_is-opened');
      popupSignup.classList.remove('popup_is-opened');
      popupSuccess.classList.remove('popup_is-opened');
    }

    else if (event.target.classList.contains('popup-signup-success__link_login')) {
      popupLogin.classList.toggle('popup_is-opened');
      popupSignup.classList.remove('popup_is-opened');
      popupSuccess.classList.remove('popup_is-opened');
    }
  }

  //закрывает попап
  close(event) {
    event.preventDefault();
    const popupSignup = document.querySelector('.popup-signup');
    const popupLogin = document.querySelector('.popup-login');
    const popupSuccess = document.querySelector('.popup-signup-success');
    const popupMiniMenu = document.querySelector('.popup-mini-menu');

    if (event.target.classList.contains('popup-signup__close')) {
      popupSignup.classList.toggle('popup_is-opened');
    }

    else if (event.target.classList.contains('popup-login__close')) {
      popupLogin.classList.toggle('popup_is-opened');
    }

    else if (event.target.classList.contains('popup-signup__button')) {
      popupSignup.classList.remove('popup_is-opened');
      popupSuccess.classList.add('popup_is-opened');
    }

    else if (event.target.classList.contains('popup-login__button')) {
      popupLogin.classList.remove('popup_is-opened');
    }

    else if (event.target.classList.contains('popup-mini-menu__close')) {
      popupMiniMenu.classList.toggle('popup_is-opened');
    }

    else if (event.target.classList.contains('popup-signup-success__close')) {
      popupSuccess.classList.toggle('popup_is-opened');
    }
  }
}