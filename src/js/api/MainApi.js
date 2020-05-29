// Отвечает за взаимодействие с написанным Node.js API

export default class MainApi {
  constructor(options){
    this.options = options;
  }

  // регистрирует нового пользователя
  signup(email, password, name){
    return fetch((this.options.server + 'signup'), {
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
  }

  // аутентифицирует пользователя на основе почты и пароля
  signin(email, password){
    return fetch((this.options.server + 'signin'), {
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
  }

  // забирает все статьи
  getArticles() {
    return fetch((this.options.server + 'articles/'), {
      method: 'GET',
      headers: {
        credentials: 'include',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((result) => result)
  }

  // удаляет статью
  removeArticle(id) {
    return fetch((this.options.server + 'articles/' + id), {
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
  }

  // добавляет статью в избранное
  faveArticle(keyword, title, text, date, source, link, image) {
    return fetch((this.options.server + 'articles'), {
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
  }
}
