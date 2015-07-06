	exports.showProductList = function(req, res, next) {

		req.getConnection(function(err, connection) {
				
			if (err)
				return next (err);
	
			connection.query('SELECT * FROM products',[],function (err, results) {
				if (err){
					console.log(err);
					return (err);
				}
				
				console.log(results.length);


				res.render('products', {
					products : results
				});	 
			});

		})
	};


	exports.showpopularPdt = function(req, res, next) {

		req.getConnection(function(err, connection) {

			if (err)
				return next (err);
	
	connection.query('SELECT SUM(no_sold) as totalqty, name FROM sales s INNER JOIN products p ON s.prod_id = p.id GROUP BY name ORDER BY SUM(no_sold) DESC LIMIT 0, 1' ,[],function (err, results) {

		if (err){ 
			console.log(err);
			return (err);
		}

			res.render('popular_products', {
				products : results

					});	
				}); 
			
			})
		};

	exports.showleastPdt = function(req, res, next) {

		req.getConnection(function(err, connection) {

				if (err)

				return next (err);
				
	connection.query('SELECT SUM(no_sold) as totalqty, name FROM sales s INNER JOIN products p ON s.prod_id = p.id GROUP BY name ORDER BY SUM(no_sold) ASC LIMIT 0, 1' ,[],function (err, results) {

		if (err){
		console.log(err); 
			return (err);
		}	
	
		console.log("....." + results.length);

		res.render('least_products', {
			products : results

					});	
				});	
			
			})
		};	

	
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
	connection.query('SELECT  categories.name, sum(sales.no_sold) as totalqty FROM sales INNER JOIN products ON sales.prod_id = products.id INNER JOIN categories ON products.cat_id = categories.id GROUP BY categories.name ORDER BY totalqty DESC LIMIT 0,1; ',[],function (err, results) {

		if (err){
		//console.log("...." + results.length);
			return (err);	
		}
	res.render('popular_category', {

	    products : results
	
					});	
				});		
			
			})
		};	


exports.showleastPopCat = function(req, res, next) {

	req.getConnection(function(err, connection) {

		if (err)

		return next (err);
	connection.query('SELECT  categories.name, sum(sales.no_sold) as totalqty FROM sales INNER JOIN products ON sales.prod_id = products.id INNER JOIN categories ON products.cat_id = categories.id GROUP BY categories.name ORDER BY totalqty ASC LIMIT 0,1; ',[],function (err, results) {

		if (err){
		//console.log("...." + results.length);
			return (err);	
		}
	res.render('least_category', {

	    products : results
	
					});	
				});		
			
			})
		};					