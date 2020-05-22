// Отвечает за взаимодействие с написанным мной Node.js API

export default class MainApi {
  constructor(headers, email, password, name, keyword, title, text, date, source, link, image, owner){
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
    this.headers = headers;
  }

  // регистрирует нового пользователя
  signup(email, password, name){
    return fetch(('http://localhost:3000/signup'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
          {
              "email": `${email}`,
              "password": `${password}`,
              "name": `${name}`
          })
    })
    .then((res) => {
      if (!res.ok) {
        return res.json()
      } else {
        return res;
      }
    }).then((result) => result)
      .catch((err) => console.log(err));
  }

  // аутентифицирует пользователя на основе почты и пароля
  signin(email, password){
    return fetch(('http://localhost:3000/signin'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
          {
              "email": `${email}`,
              "password": `${password}`
          })
    })
    .then((res) => res.json())
    .then((result) => result)
      .catch((err) => console.log(err));
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
  removeArticle(id) {
    return fetch(('http://localhost:3000/articles/' + id), {
      method: 'DELETE',
      headers: {
        credentials: 'include',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
            "_id": `${localStorage.getItem('_id')}`
        })
    })
    .then((res) => res.json())
    .then((result) => result)
      .catch((err) => console.log(err));
  }

  // добавляет статью в избранное
  faveArticle(keyword, title, text, date, source, link, image) {
    return fetch(('http://localhost:3000/articles'), {
      method: 'POST',
      headers: {
        credentials: 'include',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
          {
              "keyword": `${keyword}`,
              "title": `${title}`,
              "text": `${text}`,
              "date": `${date}`,
              "source": `${source}`,
              "link": `${link}`,
              "image": `${image}`,
              "_id": `${localStorage.getItem('_id')}`
          })
    })
    .then((res) => res.json())
    .then((result) => result)
      .catch((err) => console.log(err));
  }
}