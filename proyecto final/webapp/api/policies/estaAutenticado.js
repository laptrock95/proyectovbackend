/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
module.exports = function(req, res, next) {
  console.log('middleware de autenticación');
  if (req.session.usuarioAutenticado) {
    return next();
  }
  return res.redirect('/login');
};
