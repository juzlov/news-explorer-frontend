// класс валидации формы
export default class FormValidator {
  constructor(words) {
    this.words = words;
  }

  length(element) {
    this.resetError(element);
    const errorElement = document.querySelector(`#error-${element.id}`);

    if (element.validity.tooShort) {
      element.classList.add('input-container__invalid');
      errorElement.textContent = 'Значение слишком короткое';
    }

    if (element.validity.valueMissing) {
      element.classList.add('input-container__invalid');
      errorElement.textContent = 'Это поле должно быть заполнено';
    }
  }

  isEmail(element) {
    this.resetError(element);
    const errorElement = document.querySelector(`#error-${element.id}`);

    if (element.validity.patternMismatch) {
      element.classList.add('input-container__invalid');
      errorElement.textContent = 'Введите email в правильном формате';
    }

    if (element.validity.valueMissing) {
      element.classList.add('input-container__invalid');
      errorElement.textContent = 'Это поле должно быть заполнено';
    }
  }

  resetError(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);

    element.classList.remove('input-container__invalid');
    errorElement.textContent = '';
  }
}