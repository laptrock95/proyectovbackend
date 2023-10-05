/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/**
 * adminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  friendlyName: 'View nombre',
  description: 'Display "nombre" page.',
  inputs: {
    nombre: {
      type: 'string',

      description: 'El nombre de usuario.'
    },
    id: {
      type: 'number',

      description: 'El nombre de usuario.'
    },
  },

  exits: {
    success: {
      rstatusCode: 302,
      description: 'Redirecciona a la página de administración.',
      responseType: 'redirect'

    },
    notFound: {
      description: 'No se encontró el evento',
      responseType: 'notFound'
    }
  },
  fn: async function (inputs, exits) {

    let nombre= inputs.nombre;
    let id = inputs.id;
    console.log(nombre);
    console.log(id);
    await Eventos.updateOne({  id: id })
    .set({ nombre: nombre });





    return exits.success('/administracion');

  }
};

