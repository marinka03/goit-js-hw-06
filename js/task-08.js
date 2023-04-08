const form = document.querySelector(".login-form");
form.addEventListener("submit", dataSending);

function dataSending(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const result = {};

  if (email.value && password.value) {
    result[email.attributes.name.value] = email.value;
    result[password.attributes.name.value] = password.value;
    console.dir(result);
  } else {
    alert("Всі поля повинні бути заповнені!");
  }
  form.reset();
}
