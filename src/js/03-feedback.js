const emailInput = document.querySelector('input');

const textInput = document.querySelector('textarea');

const submit = document.querySelector('.feedback-form');

populateTextarea();

emailInput.addEventListener('input', onEmailInput);

function onEmailInput(event) {
  const email = event.currentTarget.value;
  localStorage.setItem('feedback-form-state', email);
}

textInput.addEventListener('input', onTextInput);

function onTextInput(event) {
  const text = event.currentTarget.value;
  localStorage.setItem('text', text);
}

submit.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const info = localStorage.getItem('feedback-form-state');
  console.log(info);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    console.log(savedMessage);
    emailInput.value = savedMessage;
  }
}
