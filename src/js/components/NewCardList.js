// Класс списка карточек новостей

export default class NewsCardList {
  constructor(cardList, newscard){
    this.cardList = cardList;
    this.newscard = newscard;
  }

  // принимает массив экземпляров карточек и отрисовывает их
  renderResults(res) {
    const articles = res;

    const numberOfArticles = document.querySelectorAll('.articles__article');

    if (numberOfArticles.length === 0) {
      for (let i = 0; i <= 2; i++) {
        this.newscard.create(articles[i]);
      }
    }
    else if (numberOfArticles.length < articles.length) {
      for (let i = numberOfArticles.length;  i <= (numberOfArticles.length+2); i++) {
        this.newscard.create(articles[i]);
      }
    }
    else if (numberOfArticles.length === articles.length) {
      const searchResultButton = document.querySelector('.search-results__button');
      searchResultButton.classList.add('disabled');
    }
  }

  // отвечает за отрисовку лоудера
  renderLoader() {

  }

  // принимает объект ошибки и показывает ошибку в интерфейсе
  renderError() {

  }

  // отвечает за функциональность кнопки «Показать ещё»
  showMore() {

  }

  // принимает экземпляр карточки и добавляет её в список
  addCard() {

  }
}