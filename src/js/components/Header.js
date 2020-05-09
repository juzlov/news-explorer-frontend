// Класс, отвечающий за логику работы шапки сайта.

export default class Header {
  constructor(color) {
    this.color = color;
  }

  // при вызове перерисовывает шапку в зависимости от переданного аргумента — объекта props
  render(props) {
    this.props = props;

    // залогинен ли пользователь
    console.log(this.props.isLoggedIn);
    // имя, которое отображается в шапке залогиненного пользователя
    console.log(this.props.userName);
  }
}