/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
module.exports = {
  friendlyName: 'Procesar imagen',

  inputs: {},

  exits: {
    success: {
      statusCode: 302,
      description: 'Redirecciona a la página de administración.',
      responseType: 'redirect'
    },
    noFile: {
      description: 'No se ha proporcionado ninguna imagen.',
      responseType: 'badRequest'
    },
    uploadError: {
      description: 'Ocurrió un error al procesar la imagen.',
      responseType: 'badRequest'
    }
  },

  fn: async function (inputs, exits) {
    // Obtener la imagen del request
    const imagen = this.req.file('imagen');

    // Verificar si se proporcionó una imagen
    if (!imagen) {
      throw {noFile: true};
    }

    // Guardar la imagen en el directorio de assets/images
    imagen.upload({
      dirname: require('path').resolve(sails.config.appPath, 'assets/images'),
      saveAs: function(file, cb) {
        cb(null, file.filename);
      }
    }, (err, files) => {
      if (err) {
        return exits.uploadError(err);
      }

      // Verificar que files tenga elementos antes de intentar acceder a ellos
      if (Array.isArray(files) && files.length > 0) {
        // Obtener la ruta de la imagen subida
        const rutaImagen = files[0].fd;

        // Devolver la vista con los datos necesarios
        return exits.success('/administracion');
      } else {
        // Si no hay elementos en files, devolver un error
        return exits.uploadError('No se pudo obtener la ruta de la imagen subida.');
      }
    });
  }
};
