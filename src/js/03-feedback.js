import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
console.log('2');
form.addEventListener('input', throttle(onDataInput, 500));

const userData = {};

function onDataInput(event) {
  userData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const savedData = localStorage.getItem(STORAGE_KEY);
  console.log(JSON.parse(savedData));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  console.log(savedMessage);

  if (savedMessage) {
    const userData = JSON.parse(savedMessage);
    console.log(userData);
    form.email.value = userData.email;
    form.message.value = userData.message;
  }
  return;
}
populateTextarea();
