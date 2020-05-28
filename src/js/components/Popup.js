// Класс попапа

export default class Popup {
  constructor(errorMessage, api, header, auth) {
    this.errorMessage = errorMessage;
    this.api = api;
    this.header = header;
    this.auth = auth;
  }

  // валидация signup email
  validateEmail() {
    const signupEmail = document.querySelector('#signup-email');
    this.errorMessage.isEmail(signupEmail);
  }

  // валидация login email
  validateLoginEmail() {
    const loginEmail = document.querySelector('#login-email');
    this.errorMessage.isEmail(loginEmail);
  }

  // валидация signup password
  validatePassword() {
    const signupPassword = document.querySelector('#signup-password');
    this.errorMessage.length(signupPassword);
  }

  // валидация login password
  validateLoginPassword() {
    const loginPassword = document.querySelector('#login-password');
    this.errorMessage.length(loginPassword);
  }

  // валидация имени
  validateName() {
    const signupName = document.querySelector('#name');
    this.errorMessage.length(signupName);
  }

  // открывает попапов в зависимости от event target
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

    else if (event.target.classList.contains('header__menu-logo')) {
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

  // закрытие попапа в зависимости от event target
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

  // отправка на сервер информации для корректной авторизации
  login(event) {
    const email = document.querySelector('.popup__input_type_email');
    const password = document.querySelector('.popup__input_type_pasword');
    const errorServer = document.querySelector('#error-login');

    this.disableInputs();
    this.api.signin(email.value, password.value)
    .then((result) => {
      if (!result) {
        this.enableInputs();
        errorServer.textContent = ("No response from server");
      } else if (result.token) {
        this.auth.signin(result.token, result.name, result._id);
        this.header.loggedIn(localStorage.getItem('name'));
        this.close(event);
        window.location.replace('../');
      } else {
        this.enableInputs();
        errorServer.textContent = (result.message);
      }
    });
  }

  // отправка на сервер информации для корректной регистрации
  signup(event) {
    const email = document.querySelector('.popup-signup__input_type_email');
    const password = document.querySelector('.popup-signup__input_type_pasword');
    const name = document.querySelector('.popup-signup__input_type_name');
    const errorServer = document.querySelector('#error-server');

    this.disableInputs();
    this.api.signup(email.value, password.value, name.value)
    .then((result) => {
      if (!result) {
        this.enableInputs();
        errorServer.textContent = ("No response from server");
      } else if (result.ok) {
        this.close(event);
      } else {
        this.enableInputs();
        errorServer.textContent = (result.message);
      }
    });
  }

  // отключает ввод в инпут во время отправки запроса на сервер
  disableInputs() {
    const inputs = document.querySelectorAll('.popup__input');
    for (let i=0; i<inputs.length; i++) {
      inputs[i].setAttribute('disabled', true);
    }
  }

  // включает ввод в инпут
  enableInputs() {
    const inputs = document.querySelectorAll('.popup__input');
    for (let i=0; i<inputs.length; i++) {
      inputs[i].removeAttribute('disabled', true);
    }
  }
}
