/* eslint-disable linebreak-style */
module.exports = {
  friendlyName: 'Cerrar sesión',
  description: 'Borrar la sesión del usuario y redireccionar a la página de inicio de sesión.',
  exits: {
    success: {
      responseType: 'redirect'
    }
  },
  fn: async function (_, exits) {
    // Borrar el usuario autenticado de la sesión
    delete this.req.session.usuarioAutenticado;

    // Redirigir a la página de inicio de sesión
    return exits.success('/login');
  }
};
