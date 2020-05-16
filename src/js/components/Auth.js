// Класс, отвечающий за авторизацию

export default class Auth {
  // передача jwt и имени в localStorage
  signin(jwt, name) {
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('name', name);
  }

  // очистка localStorage при выходе
  logout() {
    localStorage.clear();
  }

  // проверка авторизации
  loginCheck() {
    if (localStorage.getItem('jwt')) {
      return true;
    }
  }
}