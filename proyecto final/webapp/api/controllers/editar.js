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
  friendlyName: 'View editar',
  description: 'Display "editar" page.',
  inputs: {

  },
  exits: {
    success: {
      viewTemplatePath: 'pages/editar'
    },
    notFound: {
      description: 'No se encontró el evento',
      responseType: 'notFound'
    }
  },
  fn: async function (inputs, exits) {
    const eventoId = this.req.query.eventoId;


    let evento = await Eventos.findOne({id: eventoId});



    return exits.success({evento });

  }
};
