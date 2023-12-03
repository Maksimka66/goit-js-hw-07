const sub = document.querySelector('.login-form');

sub.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const objOfValues = {
    email: '',
    password: '',
  };

  if (email === '' || password === '') {
    alert('All form fields must be filled in!');
  } else {
    objOfValues.email = email.trim();
    objOfValues.password = password.trim();
    console.log(objOfValues);
    sub.reset();
  }
});
