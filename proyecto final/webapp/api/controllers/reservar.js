/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
module.exports = {
  friendlyName: 'Procesar reserva',
  description: 'Procesa la reserva del usuario y muestra el mensaje de confirmación',
  inputs: {
    evento: {
      type: 'number',
      required: true,
      description: 'El ID del evento.'
    },
    funcion: {
      type: 'number',
      required: true,
      description: 'El ID de la función de cine.'
    },
    asientos: {
      type: 'number',
      required: true,
      description: 'El número de asientos a reservar.'
    },
    sala: {
      type: 'number',
      required: true,
      description: 'El número de la sala'
    },
    telefono: {
      type: 'number',
      required: true,

      description: 'El nombre del usuario que hace la reserva'
    },
    email: {
      type: 'string',
      required: true,
      description: 'El correo electrónico del usuario que hace la reserva'
    }
  },
  exits: {
    success: {
      viewTemplatePath: 'pages/reservar',
      description: 'Muestra la vista de reservar con el formulario y mensaje si existe'
    },
    error: {
      description: 'Ha ocurrido un error en la reserva'
    }
  },
  fn: async function (inputs, exits) {
    const email = inputs.email;
    const emailRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailRegex.test(email);

    if (!isEmailValid) {
      const error = `El correo electrónico no es válido.`;
      return exits.error(error);
    }

    const eventoId = inputs.evento;
    const funcionId = inputs.funcion;
    const asientos = inputs.asientos;
    const salas = inputs.sala;
    const telefono = inputs.telefono;
    const correo = inputs.email;

    console.log('num de evento', eventoId);
    console.log('num de funcion', funcionId);
    console.log('num de asientos ', asientos);
    console.log('telefono ', telefono);
    console.log('correo ', correo);
    console.log('sala ', salas);
    let creado=await Invitados.create({
      telefono: inputs.telefono,
      correo: inputs.email,
      asientos: asientos,
      funcion: funcionId,
      sala: salas,
      evento: eventoId,
    }).meta({fetch: true});


    // Obtener la función correspondiente
    const funcion = await Funciones.findOne({ id: funcionId });
    console.log(funcion);

    // Restar el número de asientos reservados del total de asientos disponibles
    const asientosDisponibles = funcion.asientos_disp - asientos;

    // Actualizar el campo asientos_disponibles en la tabla funciones
    await Funciones.updateOne({  id: funcionId })
  .set({ asientos_disp: asientosDisponibles });


    // Simulación de reserva exitosa
    const reservaExitosa = true;

    if (reservaExitosa) {
      const mensaje = `Reserva exitosa para ${asientos} asientos en la función ${funcionId} del evento ${eventoId}.`;

      // Renderizar la vista
      return exits.success({mensaje:mensaje});
    } else {
      const error = `Ha ocurrido un error en la reserva.`;
      return exits.error(error);
    }
  }
};