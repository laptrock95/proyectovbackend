/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/**
 * adminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  friendlyName: 'Autenticación de usuario',
  description: 'Autenticar a un usuario y redireccionar a la página de administración si es válido.',
  inputs: {
    nombre: {
      type: 'string',
      required: true,
      description: 'El nombre de usuario.'
    },
    contraseña: {
      type: 'string',
      required: true,
      description: 'La contraseña del usuario.'
    },
  },
  exits: {
    success: {
      statusCode: 302,
      description: 'Redirecciona a la página de administración.',
      responseType: 'redirect'
    },
    invalid: {
      responseType: 'view',
      viewTemplatePath: 'pages/ingreso'
    }
  },
  fn: async function (inputs, exits) {
    const nombre = inputs.nombre;
    const contraseña = inputs.contraseña;


    const usuario = await Usuario.findOne({nombre: nombre, password: contraseña});

    if (!usuario) {
      const error = 'Usuario o contraseña incorrectos';
      return exits.invalid({ message: error });
    }

    // Guardar el usuario autenticado en la sesión
    this.req.session.usuarioAutenticado = usuario;
    console.log(usuario);
    return exits.success('/administracion');
  }
};
