'use strict';

const form = document.querySelector('.hero-container__form');
const emailInput = document.querySelector('.hero-container__form__input');


// Show success outline:
const showSuccess = function(input) {
  const form = input.closest('.hero-container__form');
  form.classList.add('success');
}

// Show input error message:
const showError = function(input, message) {
  const form = input.closest('.hero-container__form');
  console.log(form);
  form.classList.add('error');
  const small = form.querySelector('.hero-container__form__msg');
  small.textContent = message;
}

// Check email is valid:
const checkEmail = function(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) showSuccess(input);
    else showError(input, 'Oops! Please check your email');
}


// EVENT LISTENERS:
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (emailInput.value === '') showError(emailInput, 'Oops! Please check your email');
  else checkEmail(emailInput);
  
  emailInput.value = '';
});







