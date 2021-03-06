import '../pages/index.css';
import Auth from '../js/components/Auth.js';
import Header from '../js/components/Header.js';
import NewCardList from '../js/components/NewCardList.js';
import NewsCard from '../js/components/NewsCard.js';
import MainApi from '../js/api/MainApi.js';
import Popup from '../js/components/Popup.js';
import { popupMiniMenuButton, popupMiniButton, popupMiniMenuClose, headerButton, savedArticles, OPTIONS} from '../js/constants/constants.js';
import {date} from '../js/utils/date.js';

const api = new MainApi(OPTIONS);
const auth = new Auth();
const header = new Header();
const popup = new Popup();
const newscard = new NewsCard(api);
const newsCardList = new NewCardList(savedArticles, newscard, header, date, api);


// слушатель кнопки logout
headerButton.addEventListener('click', () => {
  auth.logout();
  window.location.replace('././');
});

// проверка авторизации и смена хэдера
if (auth.loginCheck()) {
  header.loggedIn(localStorage.getItem('name'));
} else {
  window.location.replace('././');
}

// слушатель открытия мини-попапа
popupMiniMenuButton.addEventListener('click', popup.open);

// слушатель закрытия мини-попапа
popupMiniMenuClose.addEventListener('click', popup.close);

// слушатель кнопки logout в мини-попапе
popupMiniButton.addEventListener('click', () => {
  auth.logout();
  window.location.replace('././');
});

// вызов функции загрузки первоначальных карточек
newsCardList.getArticles();

