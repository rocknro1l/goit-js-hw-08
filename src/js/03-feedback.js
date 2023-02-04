import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onDataInput, 500));

const userData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onDataInput(event) {
  userData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (form.email.value === '' || form.message.value === '') {
    return alert('All fields must be filled!');
  }

  const savedData = localStorage.getItem(STORAGE_KEY);
  console.log(JSON.parse(savedData));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  form.email.value = userData.email || '';
  form.message.value = userData.message || '';
}
populateTextarea();
