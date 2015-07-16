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

	exports.showearningsPerPdt = function(req, res, next) {
		req.getConnection(function(err, connection) {
			if (err)
			   return next (err);
		       var query = "SELECT products.name, sum(sales.sales_price * sales.no_sold) as earningsPerProduct FROM sales INNER JOIN products ON sales.prod_id = products.id GROUP BY products.name ORDER BY sum(sales.sales_price) DESC;";
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
			var query = "SELECT products.name, sum(sales.sales_price * sales.no_sold) as earningsPerProduct FROM sales INNER JOIN products ON sales.prod_id = products.id GROUP BY products.name ORDER BY earningsPerProduct DESC LIMIT 0,1;";
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