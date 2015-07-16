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

		products : results

					});	
				});	
			
			})
		};		


exports.showmostPopCat = function(req, res, next) {

	req.getConnection(function(err, connection) {

		if (err)

		return next (err);
	connection.query('SELECT SUM(sales.no_sold) FROM sales s INNER JOIN products p ON s.prod_id = p.id INNER JOIN categories ON p.cat_id = categories.id GROUP BY categories.name ORDER BY sum(sales.no_sold) DESC LIMIT 0,1; ',[],function (err, results) {

		if (err){
		console.log("...." + results.length);
			return (err);	
		}
	res.render('mostPopCat', {

	    products : results
	
					});	
				});		
			
			})
		};		