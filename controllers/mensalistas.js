module.exports = function (app) {


  var Mensalista = app.models.mensalistas;


  var MensaisController = {

    appMensaisIndex: function (req, res) {
           res.render('mensalistas/mensalistas');
         },

}
    return MensaisController;
};
