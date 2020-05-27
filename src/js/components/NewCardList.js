// Класс списка карточек новостей

export default class NewsCardList {
  constructor(cardList, newscard, newsapi, date){
    this.cardList = cardList;
    this.newscard = newscard;
    this.newsapi = newsapi;
    this.date = date;
  }

  // принимает массив экземпляров карточек и отрисовывает их
  renderResults(res) {
    let articles = [];
    articles = res;

    let numberOfArticles = document.querySelectorAll('.articles__article');
    this.searchResultButton = document.querySelector('.search-results__button');
    let newscards = this;

    function render() {
      newscards.renderMore(articles);
    }

    this.searchResultButton.addEventListener('click', render);

    if (numberOfArticles.length < articles.length) {
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
    let numberOfArticles = document.querySelectorAll('.articles__article');

    if (numberOfArticles.length < articles.length) {
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
      }
    }
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

    let counter = {};
    keywordsArray.forEach(function(i) { counter[i] = (counter[i]||0) + 1;});
    const unordered = Object.entries(counter).map(([key, value]) => [key, value]);
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

  search () {
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

      this.newsapi.getNews(searchInput.value, this.date(7), this.date(0))
      .then((res) => {
        let result = res;

        if (result.length === 0){
          searchLoader.classList.add('disabled');
          searchNoResult.classList.remove('disabled');
        }
        else if (result) {
          this.renderResults(result);
          searchLoader.classList.add('disabled');
          searchNoResult.classList.add('disabled');
          searchArticles.classList.remove('disabled');
          searchResultButton.classList.remove('disabled');
        }
      })
      .catch((err) => {
        searchLoader.classList.add('disabled');
        searchNoResult.classList.remove('disabled');
        console.log(err);
      });
    }
  }
}