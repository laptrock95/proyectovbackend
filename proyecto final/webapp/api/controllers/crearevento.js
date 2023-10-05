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
    nombre: {
      type: 'string',
      required: true,
      description: 'El ID del evento.'
    },
    lugar: {
      type: 'string',
      required: true,
      description: 'El ID del evento.'
    },
    time: {
      type: 'string',
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

  },
  exits: {
    success: {
      rstatusCode: 302,
      description: 'Redirecciona a la página de administración.',
      responseType: 'redirect'
    },
    error: {

    }
  },
  fn: async function (inputs, exits) {
    const nombre = inputs.nombre;
    const hora = inputs.time;
    const asientos = inputs.asientos;
    const salas = inputs.sala;

    console.log('num de evento', nombre);
    console.log('num de funcion', hora);
    console.log('num de asientos ', asientos);
    console.log('sala ', salas);

    let existingEvent = await Eventos.findOne({ nombre: nombre });
    if (!existingEvent) {
      // si no exisite, crea el nuevo evento
      existingEvent = await Eventos.create({
        nombre: inputs.nombre,
      }).meta({fetch: true});
    }

    // Comprueba si el lugar ya existe
    let lugar = await Lugar.findOne({ nombre: inputs.lugar });
    if (!lugar) {
      // Si no existe, crea un nuevo registro
      lugar = await Lugar.create({
        nombre: inputs.lugar,
      }).meta({fetch: true});
    }

    // Comprueba si la sala ya existe en ese lugar
    let sala = await Salas.findOne({
      num_sala: salas,
      lugar: lugar.id
    });
    if (!sala) {
      // Si no existe, crea un nuevo registro
      sala = await Salas.create({
        num_sala: salas,
        lugar: lugar.id
      }).meta({fetch: true});
    }

    // Comprueba si ya existe una función en la misma hora con la misma sala y lugar
    let existingFuncion = await Funciones.findOne({
      hora: hora,
      salas: sala.id,
      eventos2023:existingEvent.id,

    });

    if (existingFuncion) {
      // si ya existe una función en la misma hora con la misma sala y lugar, devuelve un error
      return exits.error('Ya existe una función en la misma hora con la misma sala y lugar.');
    }

    // si no existe, crea la nueva función de cine utilizando los IDs existentes
    let funcion = await Funciones.create({
      hora: hora,
      asientos_disp: asientos,
      eventos2023: existingEvent.id,
      salas: sala.id
    }).meta({fetch: true});

    return exits.success('/administracion');
  }
};