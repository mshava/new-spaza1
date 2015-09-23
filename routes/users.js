exports.checkUser = function (req, res,next) {
	if(req.session.user === true){
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

exports.showUsers = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err)
			return next(err);
		var query = 'SELECT  * from users';
		connection.query(query, [], function(err, results) {
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