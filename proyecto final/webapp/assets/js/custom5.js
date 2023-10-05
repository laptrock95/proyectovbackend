/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line camelcase
function editarEvento(eventoId) {

  const url = `/editar?eventoId=${encodeURIComponent(eventoId)}`;
  window.location.href = url;


}
function confirmarEliminacion(id) {
  if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
    // Si el usuario hace clic en "Aceptar", redirige a la ruta de eliminación con el id del evento
    window.location.href = '/eliminar-evento/' + id;
  }
}
function eliminarFuncion(id,funcion) {
  if (confirm('¿Estás seguro de que deseas eliminar esta funcion?')) {
    // Si el usuario hace clic en "Aceptar", redirige a la ruta de eliminación con el id del evento
    window.location.href = '/eliminar-funcion/' + id+'/'+ funcion;
  }
}
