// Класс, отвечающий за логику работы шапки сайта.

export default class Header {
  constructor() {
    this.header = document.querySelector('header');
    this.button = this.header.querySelectorAll('.header__button');
    this.buttonName = this.header.querySelector('.header__button_name');
    this.savedArticles = this.header.querySelectorAll('.header__navigation-list_item');
  }

  loggedIn(name) {
    this.buttonName.textContent = name;
    this.button[0].classList.remove('disabled');
    this.button[1].classList.add('disabled');
    this.savedArticles[1].classList.remove('disabled');
  }

  unauthorized() {
    this.button[0].classList.add('disabled');
    this.button[1].classList.remove('disabled');
    this.savedArticles[1].classList.add('disabled');
  }
}