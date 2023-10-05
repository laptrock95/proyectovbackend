/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
const formElement = document.querySelector('form');
const inputElement = document.querySelector('input[name="imagen"]');
const buttonElement = document.querySelector('button[type="submit"]');

buttonElement.addEventListener('click', (event) => {
  event.preventDefault();
  if (!inputElement.files[0]) {
    alert('Debe seleccionar una imagen para subir');
    return;
  }
  const file = inputElement.files[0];
  const formData = new FormData();

  formData.append('imagen', file);

  axios.post(formElement.action, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});
