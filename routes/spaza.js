	exports.showProductList = function(req, res, next) {
		
		req.getConnection(function(err, connection) {
				
				if (err)

				return next (err);
	
	connection.query('SELECT * FROM `products`')

	, function (err, results) {
		
		if (err)  return (err);

	res.render('products', {
		
		products : results

					});	 
				};
			});
		};


	exports.showpopularPdt = function(req, res, next) {

		req.getConnection(function(err, connection) {

				if (err)

				return next (err);
	
	connection.query('SELECT item , SUM(qty) as qty FROM purchases GROUP BY item ORDER BY qty ASC LIMIT 0, 1')				

	,function (err, results) {

		if (err) return (err);

	res.render('popular_products', {

		products : results

					});	
				}; 
			});
		};

	exports.showleastPdt = function(req, res, next) {

		req.getConnection(function(err, connection) {

				if (err)

				return next (err);
				
	connection.query('SELECT 	item , SUM(qty) as qty FROM purchases GROUP BY item ORDER BY qty ASC LIMIT 0, 1')			
	
	,function (err, results) {

		if (err) return (err);

	res.render('products', {

		products : results

					});	
				};	
			});
		};	

	exports.showCategories = function(req, res, next) {

		req.getConnection(function(err, connection) {

				if (err)

				return next (err);
				
	connection.query('SELECT * FROM `stock_purchases_csv` LIMIT 0 , 1')			
	
	,function (err, results) {

		if (err) return (err);

	res.render('categories', {

		categories : results

					});	
				};	
			});
		};		