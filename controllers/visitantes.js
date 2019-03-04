module.exports = function (app) {


  var Visitante = app.models.visitantes;


  var VisitanteController = {


     appVisitantesIndex: function (req, res) {
            res.render('visitantes/visitantes');
          },


      deleteVisitantes: function(req, res) {
        var params = req.params;

        console.log(params);

          Visitante.deleteVisitantes(params, function(err, requests) {
              if (err) { return err; }

              res.status(200)
                 .json(requests);
               });
        },



}
    return VisitanteController;
};
