/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
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
    const funcion = this.req.params.funcion;

    console.log(id);
    console.log(funcion);

    // Obtener la función correspondiente
    const revocados = await Invitados.findOne({ id: id });
    const funciones = await Funciones.findOne({ id: funcion });
    console.log(revocados);
    console.log(funciones);


    // sumar el número de asientos reservados del total de asientos disponibles
    const asientosnuevos = funciones.asientos_disp + revocados.asientos;
    console.log(asientosnuevos);


    // Actualizar el campo asientos_disponibles en la tabla funciones
    await Funciones.updateOne({  id: funcion })
   .set({ asientos_disp: asientosnuevos });
    await Invitados.destroyOne({ id: id });


    //await Invitados.destroyOne({ id: id });





    return exits.success('/administracion');

  }
};
