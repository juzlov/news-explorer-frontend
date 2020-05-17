// Класс карточки новости

export default class NewsCard {
  // отвечает за отрисовку иконки карточки
  renderIcon() {
    // иконка незалогиненного пользователя

    // активная иконка залогиненного

    // неактивная иконка залогиненного

  }

  create(card) {

    this.text = card.description;
    this.date = card.publishedAt;
    this.source = card.source.name;
    this.title = card.title;
    this.link = card.url;
    this.image = card.urlToImage;
    this.keyword = card.keyword;

    let articles = document.querySelector('.articles');

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
    let articleFavContainer = document.createElement('div');
    let articleFavButton = document.createElement('button');

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
    articleFavContainer.classList.add('articles__article-fav-container');
    articleFavButton.classList.add('articles__article-fav-button', 'articles__article-fav-icon', 'link');


    articleImage.src = this.image;
    articleText.textContent = this.text;
    articleDate.textContent = this.date;
    articleSource.textContent = this.source;
    articleTitle.textContent = this.title;
    articleLink.href = this.link;

    articleTopside.appendChild(articleImage);
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


    /*this.setEventListener();*/

  }
}
