module.exports = function(app) {

  var nomes = app.controllers.nomes;

  app.get('/', nomes.appIndex);

  app.get('/lista', nomes.appLista);

  app.get('/reset', nomes.appResetStatus);


  app.get('/nomes', nomes.searchAll);



  app.post ('/nomes/reset', nomes.reset);

  app.post ('/nomes/incluir', nomes.insert);

  //app.delete ('/nomes/:id', nomes.delete);

  app.post ('/nomes/att', nomes.marcaAusente);

  app.delete ('/nomes/delete/:id', nomes.delete);

}
