//Отвечает за взаимодействие с NewsAPI

export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  //возвращает список новостей на основе запроса
  getNews(query, fromDate, currentDate){
    const url = this.options.url + 'q=' + query + '&from=' + fromDate + "&to=" + currentDate + '&' + "pageSize=100&" + this.options.apikey;
    const req = new Request(url);

    return fetch(req)
      .then(function(response) {
          return response.json()
      })
      .then((res) => res.articles)
      .catch((err) => console.log(err));
  }
}
