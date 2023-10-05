

module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },
  fn: async function (inputs, exits) {
    try {
      const funciones = await Funciones.find().populate('eventos2023').populate('salas');
      const eventos= await Eventos.find();
      const lugar= await Lugar.find();
      //const salas= await Salas.find();
      const salas = await Salas.find().populate('lugar');


      return exits.success({ funciones,eventos,lugar, salas });
    } catch (err) {
      console.error(err);
      return exits.serverError(err);

    }
  },



};
