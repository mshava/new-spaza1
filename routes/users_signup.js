var bcrypt = require('bcrypt');

exports.show = function (req, res, next) {
		req.getConnection(function(err, connection){
			if (err)
			return next(err);
		//var isAdmin = req.session.role === "admin";
		//var readOnly = req.session.role !== "admin";
			connection.query('SELECT * from users', [], function(err, results, fields) {
				res.render('signup', {
					users: results
					//in_ca: isAdmin,
					//action:readOnly
			});
		});
	});
};



//updating a user
exports.admin = function(req, res, next) {
	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;
		req.getConnection(function(err, connection) {
			connection.query('UPDATE users SET user_role = "admin" WHERE id = ?', id, function(err, rows) {
					if (err) {
					console.log("Error Updating : %s ", err);
					}
			res.redirect('/signup');
		});
	});
};
exports.notAdmin = function(req, res, next) {
	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;
		req.getConnection(function(err, connection) {
			connection.query('UPDATE Users SET User_role = "read-only" WHERE id = ?', id, function(err, rows) {
					if (err) {
					console.log("Error Updating : %s ", err);
					}
			res.redirect('/signup');
		});
	});
};
exports.update = function(req, res, next){
	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;
		req.getConnection(function(err, connection){
			connection.query('UPDATE users SET ? WHERE id = ?', [data, id], function(err, rows){
					if (err){
					console.log("Error Updating : %s ",err );
					}
			res.redirect('/signup');
		});
	});
};
exports.delete = function(req, res, next){
	var id = req.params.id;
		req.getConnection(function(err, connection){
			connection.query('DELETE FROM users WHERE id = ?', [id], function(err,rows){
					if(err){
					console.log("Error Selecting : %s ",err );
					}
			res.redirect('/signup');
		});
	});
};

exports.get = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
             
             name : input.name,
             username : input.username,
             password : input.password,
             user_role: input.user_role
        };
        //bcrypt the password===
        bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(input.password, salt, function(err, hash) {
        // Store hash in your password DB. 
            data.password = hash;
            console.log("onwaba");
            console.log(hash);
        connection.query('insert into users set ?', data, function(err, results) {
            if (err)
            console.log("Error inserting : %s ",err );
          //res.redirect('/addProducts');
           res.redirect('/signup');
          });
    });
    });
    });
};