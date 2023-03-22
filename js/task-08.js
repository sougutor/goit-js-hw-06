const refs = {
  form: document.querySelector('.login-form'),
  inputs: document.querySelectorAll('input'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (refs.inputs[0].value === '' || refs.inputs[1].value === '') {
    alert(`Усі поля повинні бути заповнені!`);
    return;
  }
  const form = event.currentTarget.elements;
  const valueForm = {
    mail: form.email.value,
    password: form.password.value,
  };
  console.log(valueForm);
  event.currentTarget.reset();
}
