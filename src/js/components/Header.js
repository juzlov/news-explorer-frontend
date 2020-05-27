// Класс, отвечающий за логику работы шапки сайта.

export default class Header {
  constructor() {
    this.header = document.querySelector('header');
    this.button = this.header.querySelectorAll('.header__button');
    this.buttonName = this.header.querySelector('.header__button_name');
    this.miniMenuButtonName = document.querySelector('.popup-mini-menu__button_name');
    this.miniMenuButton = document.querySelectorAll('.popup-mini-menu__button');
    this.savedArticles = this.header.querySelectorAll('.header__navigation-list_item');
    this.miniSavedArticles = document.querySelectorAll('.popup-mini-menu__navigation-list_item');
  }

  // выполняется в случае, если пользователь успешно авторизовался
  loggedIn(name) {
    this.buttonName.textContent = name;

    if (!document.querySelector('.page-favourite')){
      this.button[0].classList.remove('disabled');
      this.button[1].classList.add('disabled');
      this.savedArticles[1].classList.remove('disabled');

      this.miniMenuButtonName.textContent = name;
      this.miniMenuButton[0].classList.remove('disabled');
      this.miniMenuButton[1].classList.add('disabled');
      this.miniSavedArticles[1].classList.remove('disabled');
    }
    else {
      document.querySelector('.name').textContent = name;
    }
  }

  // выполняется для неавторизованных пользователей
  unauthorized() {
    this.button[0].classList.add('disabled');
    this.button[1].classList.remove('disabled');
    this.savedArticles[1].classList.add('disabled');
  }
}