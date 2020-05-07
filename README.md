# News-explorer (Frontend)
News-explorer (Frontend) is fronted part of News Explorer project, developed as part of [Yandex-Praktikum](https://praktikum.yandex.ru/) training program.

Version 0.1.0

## About

This project is an independent frontend part that can be linked to the [News-explorer API](https://github.com/juzlov/news-explorer-api)

Главная идея сайта - находить самые свежие статьи на любую тему и сохранять их в своем личном кабинете.
На данном этапе разработки сверстаны две страницы - главная страница и страница с сохраненными статьями.

На следующем этапе ожидаются реализация работы сайта с внешним API, правильная работа всех кнопок, авторизация пользователей, открытие и закрытие попапов.

Для просмотра выключенных блоков, в файле ./src/pages/index.css удалите у класса .disabled строку "display: none;" - скрытые блоки станут видимыми.

## Used in project
- **HTML**
- **CSS**
- **Webpack**

## How to start
Please, before start check versions of following components:
npm version - 6.13.4

1. Clone project:
```
git clone https://github.com/juzlov/news-explorer-frontend.git
```

2. Run local server
```
npm run dev
```

Building the current version:
```
npm run build
```

Deploy on Github Pages:
```
npm run deploy
```
