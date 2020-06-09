# News-explorer (Frontend)
News-explorer (Frontend) is fronted part of News Explorer project, developed as part of [Yandex-Praktikum](https://praktikum.yandex.ru/) training program.

Version 1.0.3

## About

This project is an independent frontend part linked to the [News-explorer API](https://github.com/juzlov/news-explorer-api)

This is a two-page web application where you can find the latest articles on any topic and save them in your personal account.

- Javascript structure is implemented via Classes
- To update page information, fetch requests are sent to the server
- Fields are validated on client, before sending to the server
- The project built by Webpack

The following functionality is implemented:

- User registration and authorization
- Search for recent articles by keyword
- Adding an article to favorites
- Storing saved user articles on a separate page
- The opening and closing of popups

## Used in project
- **HTML**
- **CSS**
- **Webpack**
- **JavaScript**

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
## Demo

[News-explorer](https://juzlov.github.io/news-explorer-frontend/)

**Main page**
![Main page](https://github.com/juzlov/news-explorer-frontend/blob/master/src/images/frontend_demo_1.PNG)

**Saved articles page**
![Main page](https://github.com/juzlov/news-explorer-frontend/blob/master/src/images/frontend_demo_2.PNG)

**Main page - mobile version**
![Main page](https://github.com/juzlov/news-explorer-frontend/blob/master/src/images/frontend_demo_3.PNG)

**Saved articles page - mobile version**
![Main page](https://github.com/juzlov/news-explorer-frontend/blob/master/src/images/frontend_demo_4.PNG)



