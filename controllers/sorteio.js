module.exports = function (app) {

  var SorteioController = {

    appSorteioIndex: function (req, res) {
           res.render('sorteio/index');
         },

     appMuralIndex: function (req, res) {
            res.render('mural/mural');
          },
    };

    return SorteioController;
};
