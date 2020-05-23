// Класс карточки новости

export default class NewsCard {

  constructor(api) {
    this.api = api;
  }
  // отвечает за отрисовку иконки карточки
  renderIcon() {
    // иконка незалогиненного пользователя

    // активная иконка залогиненного

    // неактивная иконка залогиненного

  }

  setEventListener() {

    const article = this.article;
    const date = this.date;
    const image = this.image;
    const keyword = this.keyword;
    const link = this.link;
    const source = this.source;
    const text = this.text;
    const title = this.title;

    // добавить проверку на авторизацию

    this.favButtonListener(article, keyword, title, text, date, source, link, image);

    this.favMessageListener(article);
  }

  favMessageListener(article) {
    const loginMessage = article.querySelector('.articles__login-message');
    const favButton = article.querySelector('.articles__article-fav-container');

    favButton.addEventListener('mouseover', function(event) {
      loginMessage.classList.remove('disabled');
    })
  }

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
          } else {
            console.log('dont get res from server')
          }
        })
      }


    })
  }

  trashButtonListener(article) {
    const trashButton = article.querySelector('.saved-articles__trash-container');
    const api = this.api;

    trashButton.addEventListener('click', function(event) {
      event.preventDefault();

      api.removeArticle(article.id)
      .then((result) => {
        if (result) {
          article.parentElement.removeChild(article);
        } else {
          console.log('dont get res from server')
        }
      })
    })
  }




  create(card) {



    if (!document.querySelector('.page-favourite')){
      this.text = card.description;
      this.date = card.publishedAt;
      this.source = card.source.name;
      this.title = card.title;
      this.link = card.url;
      this.image = card.urlToImage;
      this.keyword = document.querySelector('#keyword').value;

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
