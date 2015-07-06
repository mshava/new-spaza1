exports.showcategories = function(req, res, next) {

		req.getConnection(function(err, connection) {

				if (err)

				return next (err);
				
	connection.query('SELECT * FROM `categories`',[] ,function (err, results) {

		if (err){ 
		console.log("....." + results.length);	
			return (err);
		}	

	res.render('categories', {

		categories : results

					});	
				});	
			
			})
		};		