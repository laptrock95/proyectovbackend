/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
document.addEventListener('DOMContentLoaded', (event) => {
  if (typeof mensaje !== 'undefined') {
    document.getElementById('nombre').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('reserva-container').style.display = 'none';
    document.getElementById('reservar-otro-container').style.display = 'block';
  } else {
    document.getElementById('reserva-container').style.display = 'block';
    document.getElementById('reservar-otro-container').style.display = 'none';
  }
});
