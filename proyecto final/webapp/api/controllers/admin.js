/* eslint-disable linebreak-style */
//* @description :: Server-side actions for handling incoming requests.
//* @help        :: See https://sailsjs.com/docs/concepts/actions
//*/
module.exports = {
  friendlyName: 'View administracion',
  description: 'Display "administracion" page.',
  inputs: {

  },
  exits: {
    success: {
      viewTemplatePath: 'pages/administracion'
    },
    invalid: {
      responseType: 'view',
      viewTemplatePath: 'pages/ingreso'
    },
    blocked: {
      responseType: 'view',
      viewTemplatePath: 'pages/bloqueado'
    }
  },
  fn: async function (inputs, exits) {
    const funciones = await Funciones.find().populate('eventos2023').populate('salas');
    const eventos= await Eventos.find();
    const lugar= await Lugar.find();
    const salas = await Salas.find().populate('lugar');
    const invitados=await Invitados.find().populate('sala').populate('evento').populate('funcion');

    return exits.success({
      funciones,eventos,lugar, salas,invitados
    });
  }
};


