module.exports = function(app) {


  var visitantes = app.controllers.visitantes;

    app.get('/visitantes', visitantes.appVisitantesIndex);

    app.delete ('/visitantes/delete', visitantes.deleteVisitantes);


}
