exports.show = function (req, res, next) {
	req.getConnection(function(err, connection) {
		if (err)
			return next(err);
					connection.query('',[], function(err, purchases,fields) {
				if (err)
					return next(err);
			connection.query('SELECT * FROM products',[], function(err, product, fields) {
				if (err)
					return next(err);
				res.render('addPurchases', {
				products : 	product,
				purchases : purchases,

				});
			});										
		});
	});
};

exports.add = function (req, res, next) {

}