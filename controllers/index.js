module.exports = function (app) {


    var IndexController = {

      appResetStatus: function (req, res) {
          res.render('reset/index');
        },

      appIndex: function (req, res) {
          res.render('index/index');
        },

    };

    return IndexController;
};
