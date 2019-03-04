module.exports = function(app) {

  var index = app.controllers.index;

  app.get('/', index.appIndex);

  app.get('/reset', index.appResetStatus);


}
