module.exports = function (app) {


    var Nome = app.models.nomes;

    var NomeController = {

      appLista: function (req, res) {
           res.render('nomes/lista');
         },

      appResetStatus: function (req, res) {
          res.render('reset/index');
        },

      appIndex: function (req, res) {
          res.render('index/index');
        },

      searchAll: function(req, res) {
        var params = req.query;

         Nome.searchAll(params, function(err, requests) {
             if (err) { return err; }

              res.status(200)
                  .json(requests);
                });
        },

        marcaAusente: function(req, res) {

          var params2 = req.body;

          console.log(params2);

            Nome.marcaAusente(params2, function(err, requests) {
                if (err) { return err; }

                  res.redirect('back');
                 });

          },

          delete: function(req, res) {
            var params = req.params;

            console.log(params);

              Nome.delete(params, function(err, requests) {
                  if (err) { return err; }

                  res.status(200)
                     .json(requests);
                   });
            },


        insert: function(req, res) {

           var body = req.body;

           console.log(body);

           Nome.create(body, function(err, request) {
            if (err) { return err; }

              res.sendStatus(200);

          });

        },

        reset: function(req, res) {

           Nome.resetStatus(function(err, request) {
            if (err) { return err; }

              res.sendStatus(200);

            });
         },

    };

    return NomeController;
};
