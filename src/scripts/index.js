  //функция отключения кнопки редактировать в попапе 1+
 export function placeButtonDisabler(event) {
    const formNew = document.forms.new;
    const button = formNew.querySelector('.popup__button');

    formNew.addEventListener('input', function (event) {
      let names = document.querySelector('.popup__input_type_name');
      let links = document.querySelector('.popup__input_type_link-url');

      if (names.value.length === 0 || links.value.length === 0) {
        button.setAttribute('disabled', true);
        button.classList.add('popup__button_disabled');
      }
      else {
        button.removeAttribute('disabled');
        button.classList.remove('popup__button_disabled');
      }
    });
  }
 
  //функция отключения кнопки редактировать в попапе 2+
  export function editButtonDisabler() {
    const formEdit = document.forms.edit;
    const button = formEdit.querySelector('.popup__button');

    formEdit.addEventListener('input', function () {
      let author = document.querySelector('.popup__input_type_author-name');
      let about = document.querySelector('.popup__input_type_about');

      if (author.value.length <= 1 || about.value.length <= 1) {
        button.setAttribute('disabled', true);
        button.classList.add('popup__button_disabled');
      }
      else {
        button.removeAttribute('disabled');
        button.classList.remove('popup__button_disabled');
        return true;
      }
    });
  }

  //функция смены имени +
  export function changeName(name, about) {
    return (document.querySelector('.user-info__name').textContent = name), (document.querySelector('.user-info__job').textContent = about);
  }

  //функция отображения значений по умолчанию в попапе +
  export function formDefault() {
    let author = document.querySelector('.popup__input_type_author-name');
    let authorDefault = document.querySelector('.user-info__name').innerHTML;
    author.value = authorDefault;


    let about = document.querySelector('.popup__input_type_about');
    let aboutDefault = document.querySelector('.user-info__job').innerHTML;
    about.value = aboutDefault;
  }