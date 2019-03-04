const mysql = require('mysql');

    var user = "DB USER";
    var pass = "DB PASS";
    var host = "DB HOST";
    var db = "DB";
    pool = 'mysql://' + user + ':' + pass + '@' + host + '/' + db + '?debug=true&timezone=1557';


module.exports = {
    connection: function() {
    return mysql.createConnection(pool);
    }
};
