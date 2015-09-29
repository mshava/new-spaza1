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
/*
exports.get = function(req, res, next){
	//var Id = req.params.User_role;
	var data = {
              firstname : input.firstname,
              username : input.username,
              email : input.email
		req.getConnection(function(err, connection){
			connection.query('SELECT * FROM Users WHERE User_role = ?', [data], function(err,rows){
					if(err){
					console.log("Error Selecting : %s ",err );
					}
			res.render('users_edit',{page_title:"Edit Customers - Node.js", data : rows[3]});
		});
	});
};
*/
//updating a user
exports.admin = function(req, res, next) {
	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;
		req.getConnection(function(err, connection) {
			connection.query('UPDATE Users SET User_role = "admin" WHERE ID = ?', id, function(err, rows) {
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
			connection.query('UPDATE Users SET User_role = "read-only" WHERE ID = ?', id, function(err, rows) {
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
	var Id = req.params.id;
		req.getConnection(function(err, connection){
			connection.query('DELETE FROM Users WHERE Id = ?', [id], function(err,rows){
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
             role: input.role
        };
        connection.query('insert into users set ?', data, function(err, results) {
            if (err)
            console.log("Error inserting : %s ",err );
          //res.redirect('/addProducts');
           res.redirect('/signup');
          });
    });
};