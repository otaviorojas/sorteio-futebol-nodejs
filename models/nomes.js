module.exports = function(app) {

  function buildSearchQueryAll(params) {

      var query = 'select * from nomes';

         var searchParams = []
         console.log(params);
        if (params.status) {
             searchParams.push("status != '" + params.status + "'");
         }

         if (params.mensalista) {
             searchParams.push("mensalista = '" + params.mensalista + "'");
         }

           if (searchParams.length > 0) {
               query = query + " WHERE " + searchParams.join(" AND ") + " order by nome asc";
           } else {
             query = query + " order by nome asc";
           }


      return query
  }
//------------------------------------------------------------------------------------------------------------------------
        function createJogador(params, callback) {

          var query = 'INSERT INTO nomes SET ?';

            app.connection.query(query, params, function(err, result) {
                if (err) return callback(err);

                app.connection.query("SELECT * FROM nomes WHERE id=" + result.insertId, function(err, resp) {
                    callback(null, resp[0]);
                });
            });
        }

//-------------------------------------------------------------------------------------------------------------------------------

  var NomeModel = {

    searchAll: function(params, next) {

                var query = buildSearchQueryAll(params)

                app.connection.query(query, function(err, resp) {
                    if (err) return err;

                    next(null, resp);
                });
            },

      marcaAusente: function(params, next) {

          var query = 'update nomes set status = "ausente" where id in('+ params.id+')';

         app.connection.query(query, function(err, resp) {
             if (err) return err;

             next(null, resp);
               });
           },

       delete: function(params, next) {

           var query = 'delete from nomes where id = '+ params.id+'';

          app.connection.query(query, function(err, resp) {
              if (err) return err;

              next(null, resp);
                });
            },


       create: function(params, next) {

               createJogador(params, function(err, response) {

                   if (err) return next(err);

                   next(null, response);

               });
          },

        resetStatus: function(next) {

          var query = 'update nomes set status = "presente";';

         app.connection.query(query, function(err, resp) {
             if (err) return err;

             next(null, resp);
               });
           },

    }

    return NomeModel;
}
