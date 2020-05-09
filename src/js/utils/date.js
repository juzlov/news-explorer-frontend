export function date(event) {console.log(event.date)};

//функция отключения кнопки Вход в логин-попапе
export function loginButtonDisabler() {
  const formLogin = document.forms.login;
  const buttonLogin = formLogin.querySelector('.popup-login__button');

  formLogin.addEventListener('input', function (event) {
    let email = document.querySelector('.popup__input_type_email');
    let password = document.querySelector('.popup__input_type_pasword');
    let passwordError = document.querySelector('#error-login-password');
    let emailError = document.querySelector('#error-login-email');

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

  formSignup.addEventListener('input', function () {
    let email = document.querySelector('.popup-signup__input_type_email');
    let password = document.querySelector('.popup-signup__input_type_pasword');
    let name = document.querySelector('.popup-signup__input_type_name');
    let passwordError = document.querySelector('#error-signup-password');
    let emailError = document.querySelector('#error-signup-email');
    let nameError = document.querySelector('#error-name');

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