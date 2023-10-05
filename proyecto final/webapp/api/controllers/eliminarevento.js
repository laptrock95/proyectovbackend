/* eslint-disable linebreak-style */
module.exports = {
  friendlyName: 'View eiminiar',
  description: 'Display "nombre" page.',
  inputs: {
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

    //let id = this.req.query.id;
    const id = this.req.params.id;
    console.log(id);

    await Eventos.destroyOne({ id: id });





    return exits.success('/administracion');

  }
};
