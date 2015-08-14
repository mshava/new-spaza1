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
				res.render('Products', {
					products : results
				});	 
			});

		})
	};
	exports.showpopularPdt = function(req, res, next) {
		req.getConnection(function(err, connection) {

			if (err)
				return next (err);
					connection.query('SELECT SUM(quantity) as totalqty, name FROM sales s INNER JOIN products p ON s.prod_id = p.id GROUP BY name ORDER BY SUM(quantity) DESC LIMIT 0, 1' ,[],function (err, results) {
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
				
					connection.query('SELECT SUM(quantity) as totalqty, name FROM sales s INNER JOIN products p ON s.prod_id = p.id GROUP BY name ORDER BY SUM(quantity) ASC LIMIT 0, 1' ,[],function (err, results) {
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
	
	/*
	exports.showcategories = function(req, res, next) {

		console.log(req.query);
			console.log("---> " + req.query);

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
	*/


	exports.showearningsPerPdt = function(req, res, next) {
		req.getConnection(function(err, connection) {
			if (err)
			   return next (err);
		       var query = "SELECT products.name, sum(sales.price * sales.quantity) as earningsPerProduct FROM sales INNER JOIN products ON sales.prod_id = products.id GROUP BY products.name ORDER BY sum(sales.price) DESC;";
		       connection.query(query ,[],function (err, results) {
				if (err){
					return (err); 
				}
			    res.render('product_earnings', {
				    products : results
			
				});	
		    });			
		})
	};

	exports.showmostProfPdt = function(req, res, next) {
		req.getConnection(function(err, connection) {
			if (err)
			return next (err);
			var query = "SELECT products.name, sum(sales.price * sales.quantity) as earningsPerProduct FROM sales INNER JOIN products ON sales.prod_id = products.id GROUP BY products.name ORDER BY earningsPerProduct DESC LIMIT 0,1;";
		    connection.query(query,[],function (err, results)	{
			if (err) {
				return (err);
			}
		    res.render('profitable_product',{
				products : results

			});	
		});	
				
	})
};									