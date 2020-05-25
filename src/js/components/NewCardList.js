// Класс списка карточек новостей

export default class NewsCardList {
  constructor(cardList, newscard){
    this.cardList = cardList;
    this.newscard = newscard;
  }

  // принимает массив экземпляров карточек и отрисовывает их
  renderResults(res) {
    let articles = [];
    articles = res;

    const newscards = this;
    const searchResultButton = document.querySelector('.search-results__button');


    /* if (!searchResultButton.getAttribute('listener') === true) {
      searchResultButton.setAttribute('listener', 'true');
      console.log('ставим слушатель'); */
      searchResultButton.addEventListener('click', function(event) {
        event.preventDefault();
        newscards.renderMore(articles);
      })
    /* } */


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

  renderMore(res) {
    let articles = [];
    articles = res;

    console.log('click');


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

  renderSaved(res) {
    let articles = [];
    articles = res;

    for (let i = 0; i < articles.data.length; i++) {
      if (articles.data[i].owner === localStorage.getItem('_id')) {
        this.newscard.create(articles.data[i]);
       /*  this.articleTitlesSet(articles.data[i]); */
      }
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

  articleTitlesSet(cardData) {
    let keywords = document.querySelectorAll('.saved-articles__keyword-text');
    let keywordsArray = [];

    for (let i=0; i<keywords.length; i++) {
      keywordsArray.push(keywords[i].textContent);
    }

    let lastNum = keywordsArray.length.toString().slice(-1);

    if (keywordsArray.length === 0) {
      document.querySelector('.counter').textContent = `, у вас нет сохранённых статей`;
      document.querySelector('.saved-articles__keywords').textContent = 'Добавляйте статьи с главной страницы в закладки, чтобы позже их прочитать'
    } else if (keywords.length > 100) {
      document.querySelector('.counter').textContent = `, у вас больше 100 сохраненных статей`;
    } else if (keywords.length >5 && keywords.length <21 ) {
      document.querySelector('.counter').textContent = `, у вас ${keywords.length} сохраненных статей`;
    } else if (keywords.length === 1) {
      document.querySelector('.counter').textContent = `, у вас 1 сохранённая статья`;
    } else if (lastNum >1 && lastNum <5) {
      document.querySelector('.counter').textContent = `, у вас ${keywords.length} сохраненные статьи`;
    } else {
      document.querySelector('.counter').textContent = `, у вас ${keywords.length} сохраненных статей`;
    }

    var  count = {};
    keywordsArray.forEach(function(i) { count[i] = (count[i]||0) + 1;});

    const unordered = Object.entries(count).map(([key, value]) => [key, value]);


    const ordered = unordered.sort((prev, next) => next[1] - prev[1]);

    const specialKeywords = document.querySelectorAll('.special-keyword');

    specialKeywords[0].textContent = ordered[0][0];
    specialKeywords[1].textContent = ', ' + ordered[1][0];
    if (ordered.length > 3) {
      specialKeywords[2].textContent = ' и ' + (ordered.length-2) + ' другим';
    } else if (ordered.length === 3) {
      specialKeywords[2].textContent = ' и ' + ordered[2][0];
    } else {
      specialKeywords[2].textContent = '';
    }
  }
}