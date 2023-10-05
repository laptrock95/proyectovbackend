/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line camelcase
function mostrarMensaje(eventoId, funcionId, asientosDisponibles, num_sala) {
  if(asientosDisponibles<=0){
    alert(`funcion agotada`);
    return;
  }
  const asientos = parseInt(prompt(`Ingrese el número de asientos que desea reservar (hay ${asientosDisponibles} disponibles):`));
  console.log(`Valor de asientos: ${asientos}`);
  if (asientos != null) {
    if (isNaN(asientos) || asientos < 1) {
      alert('Debe ingresar un número válido de asientos.');
    } else if (asientos > asientosDisponibles) {
      alert(`No hay suficientes asientos disponibles. Solo quedan ${asientosDisponibles} asientos.`);
      return;
    } else {
      const confirmacion = confirm(`¿Está seguro que desea reservar ${asientos} asientos?`);
      if (confirmacion) {
        const url = `/reservar?evento=${encodeURIComponent(eventoId)}&funcion=${encodeURIComponent(funcionId)}&asientos=${encodeURIComponent(asientos)}&sala=${encodeURIComponent(num_sala)}`;
        window.location.href = url;
      }
    }
  }
}

