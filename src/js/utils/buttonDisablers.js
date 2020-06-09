
//функция отключения кнопки Вход в логин-попапе
export function loginButtonDisabler() {
  const formLogin = document.forms.login;
  const buttonLogin = formLogin.querySelector('.popup-login__button');

  // добавляем слушатель для инпута формы
  formLogin.addEventListener('input', function (event) {
    const email = document.querySelector('.popup__input_type_email');
    const password = document.querySelector('.popup__input_type_pasword');
    const passwordError = document.querySelector('#error-login-password');
    const emailError = document.querySelector('#error-login-email');

    // проверяем на соблюдение условий
    if (email.value.length === 0 || password.value.length === 0) {
      buttonLogin.setAttribute('disabled', true);
      buttonLogin.classList.add('popup__button_disabled');
    }
    else if (passwordError.textContent.length > 0 || emailError.textContent.length > 0) {
      buttonLogin.setAttribute('disabled', true);
      buttonLogin.classList.add('popup__button_disabled');
    }
    else {
      buttonLogin.removeAttribute('disabled');
      buttonLogin.classList.remove('popup__button_disabled');
    }
  });
}

//функция отключения кнопки регистрация в Signup-попапе
export function signupButtonDisabler() {
  const formSignup = document.forms.signup;
  const buttonSignup = formSignup.querySelector('.popup-signup__button');

  // добавляем слушатель для инпута формы
  formSignup.addEventListener('input', function () {
    const email = document.querySelector('.popup-signup__input_type_email');
    const password = document.querySelector('.popup-signup__input_type_pasword');
    const name = document.querySelector('.popup-signup__input_type_name');
    const passwordError = document.querySelector('#error-signup-password');
    const emailError = document.querySelector('#error-signup-email');
    const nameError = document.querySelector('#error-name');

    // проверяем на соблюдение условий
    if (email.value.length === 0 || password.value.length === 0 || name.value.length === 0) {
      buttonSignup.setAttribute('disabled', true);
      buttonSignup.classList.add('popup__button_disabled');
    }
    else if (passwordError.textContent.length > 0 || emailError.textContent.length > 0 || nameError.textContent.length > 0) {
      buttonSignup.setAttribute('disabled', true);
      buttonSignup.classList.add('popup__button_disabled');
    }
    else {
      buttonSignup.removeAttribute('disabled');
      buttonSignup.classList.remove('popup__button_disabled');
    }
  });
}
