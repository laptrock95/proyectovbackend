/* eslint-disable linebreak-style */
module.exports = {
  friendlyName: 'View enreget',
  description: 'Display "emregente" page.',
  inputs: {
    // eslint-disable-next-line camelcase
    id_funcion : {
      type: 'string'
    },
  },
  exits: {
    success: {
      viewTemplatePath: 'pages/ventana-emergente'
    },
    notFound: {
      description: 'No se encontró la función especificada'
    }
  },
  fn: async function (inputs, exits) {
    try {
      const funcion = await Funciones.findOne({ id: inputs.id_funcion });
      if (!funcion) {
        return exits.notFound();
      }
      const evento = await Eventos.findOne({ id: funcion.eventos2023 });
      return exits.success({ funcion, evento });
    } catch (err) {
      console.error(err);
      return exits.serverError(err);
    }
  }
};
