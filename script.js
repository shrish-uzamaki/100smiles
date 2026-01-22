// JavaScript form validation for CP1406 requirements
function validateForm(event){
  event.preventDefault();

  const errorsEl = document.getElementById('errors');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const service = document.getElementById('service');
  const date = document.getElementById('date');
  const time = document.getElementById('time');

  // clear previous
  if (errorsEl) errorsEl.innerHTML = '';
  document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

  const errors = [];

  // helpers
  const markInvalid = (el, msg) => {
    if (el) el.classList.add('invalid');
    errors.push(msg);
  };

  if (!name || name.value.trim().length < 2){
    markInvalid(name, 'Please enter your full name.');
  }

  const emailValue = email ? email.value.trim() : '';
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  if (!emailOk){
    markInvalid(email, 'Please enter a valid email address.');
  }

  const phoneValue = phone ? phone.value.trim() : '';
  if (phoneValue && phoneValue.replace(/[^0-9]/g,'').length < 8){
    markInvalid(phone, 'Phone number should be at least 8 digits (or leave it blank).');
  }

  if (!service || service.value.trim() === ''){
    markInvalid(service, 'Please choose a service.');
  }

  if (!date || date.value.trim() === ''){
    markInvalid(date, 'Please choose a date.');
  }

  if (!time || time.value.trim() === ''){
    markInvalid(time, 'Please choose a time.');
  }

  if (errors.length){
    if (errorsEl){
      errorsEl.innerHTML = '<strong>Please fix the following:</strong><ul>' +
        errors.map(e => '<li>' + e + '</li>').join('') +
        '</ul>';
    }
    return false;
  }

  // success
  window.location.href = 'thank-you.html';
  return true;
}
