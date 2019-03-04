
  var porta = 8080;
  var app = require('./config/express')();
  var dbConnection = require('./config/dbConnection');
  app.connection =  dbConnection.connection();


const path = require('path')
const PORT = process.env.PORT || 8080

if (!module.parent) {
  app.listen(PORT, function () {
    console.log(`Rodando na porta ${ PORT }`);
  });
}


module.exports = app;
