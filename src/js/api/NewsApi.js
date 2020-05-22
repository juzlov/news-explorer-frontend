//Отвечает за взаимодействие с NewsAPI

export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  //возвращает список новостей на основе запроса
  getNews(query, dateRange){
    const url = this.options.url + 'q=' + query + '&from=' + dateRange + '&' + "pageSize=100&" + this.options.apikey;
    const req = new Request(url);

    return fetch(req)
      .then(function(response) {
          return response.json()
      })
      .then((res) => res.articles);
  }
}