	Exports.showProductList = function(req, res, next) {
		
		req.getConnection(function(err, connection) {
				
				if (err)

				return next (err);
	
	connect.quiry('SELECT *
					FROM `products`
					LIMIT 0 , 1')

	[], function (err, results) {
		
		if (err)  return (err);

	res.render('products', {
		
		product : results

					});	 
				});
			});
		};


	Exports.showpopularPdt = function(req, res, next) {

		req.getConnection(function(err, connection) {

				if (err)

				return next (err);
	
	connect.quiry('SELECT 	item , 
					SUM(qty) as qty
					FROM purchases
					GROUP BY item
					ORDER BY qty ASC
					LIMIT 0, 1')				

	[],function (err, results) {

		if (err) return (err);

	res.render('products', {

		products : results

					});	
				}); 
			});
		};

	Exports.showleastPdt = function(req, res, next) {

		req.getConnection(function(err, connection) {

				if (err)

				return next (err);
				
	connect.quiry('SELECT 	item , 
					SUM(qty) as qty
					FROM purchases
					GROUP BY item
					ORDER BY qty ASC
					LIMIT 0, 1
					')			
	
	[],function (err, results) {

		if (err) return (err);

	res.render('products', {

		products : results

					});	
				});	
			});
		};	