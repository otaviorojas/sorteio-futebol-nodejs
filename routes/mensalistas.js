module.exports = function(app) {

  var mensalistas = app.controllers.mensalistas;

    app.get('/mensalistas', mensalistas.appMensaisIndex);



}
