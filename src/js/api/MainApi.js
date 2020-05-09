// Отвечает за взаимодействие с написанным мной Node.js API

export default class MainApi {
  constructor(email, password, name, keyword, title, text, date, source, link, image, owner){
    this.email = email;
    this.password = password;
    this.name = name;
    this.keyword = keyword;
    this.title = title;
    this.text = text;
    this.date = date;
    this.source = source;
    this.link = link;
    this.image = image;
    this.owner = owner;
  }

  // регистрирует нового пользователя
  signup(){

  }

  // аутентифицирует пользователя на основе почты и пароля
  signin(){

  }

  // возвращает информацию о пользователе
  getUserData(){

  }

  // забирает все статьи
  getArticles() {

  }

  // создаёт статью
  createArticle(){

  }

  // удаляет статью
  removeArticle() {

  }
}