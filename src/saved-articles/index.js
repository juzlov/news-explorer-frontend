import '../pages/index.css';
import Auth from '../js/components/Auth.js';
import Header from '../js/components/Header.js';
import NewCardList from '../js/components/NewCardList.js';
import NewsCard from '../js/components/NewsCard.js';
import MainApi from '../js/api/MainApi.js';

import {constant} from '../js/constants/constants.js';
import {date} from '../js/utils/date.js';

const headerButton = document.querySelector('.header__button');

const auth = new Auth();
const header = new Header();

headerButton.addEventListener('click', () => {
  auth.logout();
  window.location.replace('http://localhost:8080/');
});

if (auth.loginCheck()) {
  header.loggedIn(localStorage.getItem('name'));
} else {
  window.location.replace('http://localhost:8080/');
}



const api = new MainApi();

const newscard = new NewsCard(api);

const articles = document.querySelector('.saved-articles');
const newsCardList = new NewCardList(articles, newscard);

function getArticles() {
  api.getArticles()
  .then((res) => {
    newsCardList.renderSaved(res);
    newsCardList.articleTitlesSet();
  })
};

getArticles();

/* const newsApi = new NewsApi(options);
const newscard = new NewsCard(api);

const articles = document.querySelector('.articles');
const newsCardList = new NewCardList(articles, newscard); */

