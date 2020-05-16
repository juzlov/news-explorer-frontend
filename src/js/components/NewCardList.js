// Класс списка карточек новостей

export default class NewsCardList {
  constructor(cardList, newscard){
    this.cardList = cardList;
    this.newscard = newscard;
  }

  // принимает массив экземпляров карточек и отрисовывает их
  renderResults(res) {
    console.log(res);
    res.forEach(element => {
      this.newscard.create(element);
    });
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
  addCard(element) {
    /*this.card.text = element.description;
    this.card.date = element.publishedAt;
    this.card.source = element.source.name;
    this.card.title = element.title;
    this.card.link = element.url;
    this.card.image = element.urlToImage;
    this.card.keyword = element.keyword;

    this.newscard.create(this.card);*/
  }
}