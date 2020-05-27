// Класс карточки новости

export default class NewsCard {
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
  }

  // устанавливает слушатели для вновь созданных карточек
  setEventListener() {
    const article = this.article;
    const date = this.date;
    const image = this.image;
    const keyword = this.keyword;
    const link = this.link;
    const source = this.source;
    const text = this.text;
    const title = this.title;

    if (this.auth.loginCheck()) {
      this.favButtonListener(article, keyword, title, text, date, source, link, image);
    } else {
      this.favMessageListener(article);
    }
  }

  // слушатель вывода сообщения о необходимости авторизации
  favMessageListener(article) {
    const loginMessage = article.querySelector('.articles__login-message');
    const favButton = article.querySelector('.articles__article-fav-container');

    favButton.addEventListener('mouseover', function(event) {
      loginMessage.classList.remove('disabled');
    })
  }

  // слушатель кнопки добавления статьи в избранное
  favButtonListener(article, keyword, title, text, date, source, link, image) {
    const favButton = article.querySelector('.articles__article-fav-container');
    const api = this.api;

    favButton.addEventListener('click', function(event) {
      event.preventDefault();
      const favIcon = article.querySelector('.articles__article-fav-button');

      if (!event.target.classList.contains('articles__article-fav-icon_liked')) {
        api.faveArticle(keyword, title, text, date, source, link, image)
        .then((result) => {
          if (result) {
            article.setAttribute('id', result.data._id);
            favIcon.classList.remove('articles__article-fav-icon');
            favIcon.classList.add('articles__article-fav-icon_liked');
          }
        })
      } else {
        api.removeArticle(article.id)
        .then((result) => {
          if (result) {
            favIcon.classList.remove('articles__article-fav-icon_liked');
            favIcon.classList.add('articles__article-fav-icon');
          }
        })
        .catch((err) => console.log(err));
      }
    })
  }

  // слушатель кнопки удаления карточки из избранного на странице с сохраненными статьями
  trashButtonListener(article) {
    const trashButton = article.querySelector('.saved-articles__trash-container');
    const api = this.api;

    trashButton.addEventListener('click', function(event) {
      event.preventDefault();

      api.removeArticle(article.id)
      .then((result) => {
        if (result) {
          article.parentElement.removeChild(article);
        }
      })
      .catch((err) => console.log(err));
    })
  }

  // создание карточки
  create(card) {

    // создание карточки для главной страницы
    if (!document.querySelector('.page-favourite')){
      const date = new Date(card.publishedAt);

      this.text = card.description;
      this.date = date.toLocaleDateString('ru', {day: 'numeric', month: 'long', year: 'numeric' });
      this.source = card.source.name;
      this.title = card.title;
      this.link = card.url;
      this.image = card.urlToImage;
      this.keyword = document.querySelector('#keyword').value;

      if (!this.image) {
        this.image = 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/6fe6f228202371.5637141eb4d67.jpg';
      }

      let articles = document.querySelector('.articles');

      this.article = document.createElement('div');
      let articleText = document.createElement('p');
      let articleDate = document.createElement('p');
      let articleSource = document.createElement('p');
      let articleTitle = document.createElement('p');
      let articleLink = document.createElement('a');
      let articleImage = document.createElement('img');
      let articleTopside = document.createElement('div');
      let articleBottom = document.createElement('div');
      let articleFavContainer = document.createElement('div');
      let articleFavButton = document.createElement('button');
      let loginMessage = document.createElement('button');

      this.article.classList.add('articles__article');

      articleText.classList.add('articles__article-text');
      articleDate.classList.add('articles__article-date');
      articleSource.classList.add('articles__article-source');
      articleTitle.classList.add('articles__article-title');
      articleLink.classList.add('link', 'articles__article-link');
      articleImage.classList.add('articles__article-image');
      articleTopside.classList.add('articles__article-topside');
      articleBottom.classList.add('articles__article-bottom');
      articleFavContainer.classList.add('articles__article-fav-container');
      articleFavButton.classList.add('articles__article-fav-button', 'articles__article-fav-icon', 'link');
      loginMessage.classList.add('articles__login-message', 'disabled', 'link');

      articleImage.src = this.image;
      articleText.textContent = this.text;
      articleDate.textContent = this.date;
      articleSource.textContent = this.source;
      articleTitle.textContent = this.title;
      articleLink.href = this.link;
      articleLink.target = '_blank';
      loginMessage.textContent = 'Войдите, чтобы сохранять статьи';

      articleTopside.appendChild(articleImage);
      articleTopside.appendChild(loginMessage);
      articleTopside.appendChild(articleFavContainer);
      articleFavContainer.appendChild(articleFavButton);

      articleBottom.appendChild(articleDate);
      articleBottom.appendChild(articleTitle);
      articleBottom.appendChild(articleText);
      articleBottom.appendChild(articleSource);

      articleLink.appendChild(articleTopside);
      articleLink.appendChild(articleBottom);

      this.article.appendChild(articleLink);
      articles.appendChild(this.article);

      this.setEventListener();
    }
    // создание карточки для страницы с сохраненными статьями
    else {
      this.text = card.text;
      this.date = card.date;
      this.source = card.source;
      this.title = card.title;
      this.link = card.link;
      this.image = card.image;
      this.keyword = card.keyword;
      this.id = card._id;

      let articles = document.querySelector('.saved-articles-list__container');

      this.article = document.createElement('div');
      let articleText = document.createElement('p');
      let articleDate = document.createElement('p');
      let articleSource = document.createElement('p');
      let articleTitle = document.createElement('p');
      let articleLink = document.createElement('a');
      let articleImage = document.createElement('img');
      let articleKeyword = document.createElement('p');
      let articleTopside = document.createElement('div');
      let articleBottom = document.createElement('div');
      let articleTrashContainer = document.createElement('div');
      let articleTrashButton = document.createElement('button');

      this.article.classList.add('articles__article');

      articleText.classList.add('articles__article-text');
      articleDate.classList.add('articles__article-date');
      articleSource.classList.add('articles__article-source');
      articleTitle.classList.add('articles__article-title');
      articleLink.classList.add('link', 'articles__article-link');
      articleImage.classList.add('articles__article-image');
      articleKeyword.classList.add('saved-articles__keyword-text');
      articleTopside.classList.add('articles__article-topside');
      articleBottom.classList.add('articles__article-bottom');
      articleTrashContainer.classList.add('saved-articles__trash-container');
      articleTrashButton.classList.add('saved-articles__trash-button', 'saved-articles__trash-icon', 'link');

      articleImage.src = this.image;
      articleText.textContent = this.text;
      articleDate.textContent = this.date;
      articleSource.textContent = this.source;
      articleTitle.textContent = this.title;
      articleLink.href = this.link;
      articleLink.target = '_blank';
      articleKeyword.textContent = this.keyword;

      articleTopside.appendChild(articleImage);
      articleTopside.appendChild(articleTrashContainer);
      articleTopside.appendChild(articleKeyword);
      articleTrashContainer.appendChild(articleTrashButton);

      articleBottom.appendChild(articleDate);
      articleBottom.appendChild(articleTitle);
      articleBottom.appendChild(articleText);
      articleBottom.appendChild(articleSource);

      articleLink.appendChild(articleTopside);
      articleLink.appendChild(articleBottom);

      this.article.appendChild(articleLink);
      articles.appendChild(this.article);

      this.article.setAttribute('id', this.id);

      this.trashButtonListener(this.article);
    }
  }
}
