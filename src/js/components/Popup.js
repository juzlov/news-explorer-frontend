// Класс попапа

export default class Popup {

  // вставляет в попап содержимое, например, форму входа или сообщение об успешной регистрации
  setContent() {

  }

  // очищает содержимое попапа
  clearContent() {

  }

  // открывает попап
  open(event) {
    event.preventDefault();

    if (event.target.classList.contains('popup__link_register')) {
      const popupSignup = document.querySelector('.popup-signup');
      popupSignup.classList.toggle('popup_is-opened');
    }

    else if (event.target.classList.contains('header__button')) {
      const popupLogin = document.querySelector('.popup-login');
      popupLogin.classList.toggle('popup_is-opened');
    }

    else if (event.target.classList.contains('popup__link_login')) {
      const popupLogin = document.querySelector('.popup-login');
      popupLogin.classList.toggle('popup_is-opened');
    }
  }

  //закрывает попап
  close(event) {
    event.preventDefault();
    if (event.target.classList.contains('popup-signup__close')) {
      const popupSignup = document.querySelector('.popup-signup');
      popupSignup.classList.toggle('popup_is-opened');
    }

    else if (event.target.classList.contains('popup-login__close')) {
      const popupLogin = document.querySelector('.popup-login');
      popupLogin.classList.toggle('popup_is-opened');
    }
  }
}