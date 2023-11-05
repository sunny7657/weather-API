const elements = {
  form: document.querySelector('.js-search'),
  formContainer: document.querySelector('.js-form-container'),
  search: document.querySelector('.js-search-btn'),
  addField: document.querySelector('.js-add-btn'),
  removeField: document.querySelector('.js-remove-btn'),
};

elements.addField.addEventListener('click', handlerAddField);
elements.removeField.addEventListener('click', handlerRemoveField);

function handlerAddField(evt) {
  evt.preventDefault();
  elements.formContainer.insertAdjacentHTML(
    'beforeend',
    '<input type="text" name="country" />'
  );
}

function handlerRemoveField(evt) {
  evt.preventDefault();
  const { children, lastElementChild } = elements.formContainer;
  if (children.length === 1) {
    return;
  }
  lastElementChild.remove();
}
