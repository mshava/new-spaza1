exports.checkUser = function (req, res,next) {
    if(req.session.user){
		next();
	}
	else{
		res.redirect('/login')
	}
};
exports.login = function(req,res){
	var userData = userService.getUserData();
	res.render('users',userData)
};

exports.logout = function (req, res){
        var msg = "You have logged out";
        delete req.session.user;
        res.render('home',{
                    msg : msg
        });
    };
exports.showUsers = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err)
			return next(err);
		var query = 'SELECT  * from users';
		connection.query(query, [], function (err, results) {
			if (err) 
				return next(err);

			var result = {
				users : results
			};

			console.log(req.query);
			console.log("---> " + req.query);

			//if(req.query.error === "true" ){
				//result.error = "Can't delete category..."
			//}

			res.render( 'users', result);
		});
	});
};
/*
exports.get = function(req, res, next){
 	var input = JSON.parse(JSON.stringify(req.body));
	var id = req.params.user_role;
	var user = users[0];
	var data = {
              username : input.username,
              role : input.users_role,
   						}
		req.getConnection(function(err, connection){
			connection.query('SELECT * FROM users WHERE id = ?', [data], function(err,rows){
				
					if(err){
					console.log("Error Selecting : %s ",err );
					}
			res.render('users_edit',{page_title:"Edit Customers - Node.js", data : rows[3]});
		});
	});
};
*/

exports.get = function(req, res, next){
	var id = req.params.id;
		req.getConnection(function(err, connection){
			connection.query('SELECT * FROM users WHERE id = ?', [id], function(err,rows){
					if(err){
					console.log("Error Selecting : %s ",err );
					}
			res.render('users_edit', {page_title:"Edit Customers - Node.js", data : rows[0]});
		});
	});
};