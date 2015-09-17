exports.login = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    username : input.username,
                    password : input.password
            };
        	connection.query('insert into users set', data, function(err, results) {
                            if (err)
                    console.log("Error inserting : %s ",err );
                    }
         		res.send('login', {
					login: data
					});
    }); 
});               