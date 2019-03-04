module.exports = function(app) {


  var sorteio = app.controllers.sorteio;

    app.get('/sorteio', sorteio.appSorteioIndex);


    app.get('/mural', sorteio.appMuralIndex);
}
