/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': { view: 'pages/homepage' },
  'GET /': { action: 'view-inicio' },


  'GET /reservar': { view: 'pages/reservar' },

  'POST /procesar': {
    action: 'reservar'

  },


  'GET /login': { view: 'pages/ingreso' },


  'POST /login': {
    action: 'autenticacion',

  },
  'GET /logout': { action: 'cerrarsesion' },

  'GET /administracion': [
    { action: 'admin' }
  ],


  'GET /editar': { action: 'editar' },
  'POST /actualizar-evento': { action: 'actualizarnombreevento' },
  'GET /eliminar-evento/:id': { action: 'eliminarevento' },
  'GET /eliminar-funcion/:id/:funcion': { action: 'eliminarfuncion' },
  'GET /crear-evento': { view: 'pages/nuevoevento' },




  'POST /subir': { action: 'upload' },
  'POST /crearevento': { action: 'crearevento' },








  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
