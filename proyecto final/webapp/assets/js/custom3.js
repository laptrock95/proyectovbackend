/* eslint-disable linebreak-style */

// Selecciona el elemento que contiene el mensaje
const mensaje = document.querySelector('#mensaje');

// Oculta el mensaje después de 5 segundos
setTimeout(() => {
  mensaje.style.display = 'none';
}, 5000);
