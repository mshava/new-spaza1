exports.show = function (req, res, next) {
	req.getConnection(function(err, connection) {
			if (err)
				return next(err);
		var query = "SELECT DATE_FORMAT(purchases.date,'%d %b %y') as date,purchases.qty,purchases.sales_price, products.name as name from purchases,products where products.id = purchases.prod_id order by purchases.date DESC";
		connection.query(query,[], function(err, purchases) {
			if (err)
				return next(err);
				console.log(purchases);
		var query = 'SELECT * FROM suppliers';
		connection.query(query,[], function(err, supply) {
			res.render('addPurchases', {
				purchases : purchases,
				suppliers : supply
				});
			});
		});
	});
};
exports.showAdd = function (req, res, next) {
	req.getConnection(function(err, connection) {
		if (err)
			return next(err);
	var query = "SELECT DATE_FORMAT(purchases.date,'%d %b %y') as date,purchases.qty,purchases.sales_price, products.name as name from purchases,products where products.id = purchases.prod_id order by purchases.date DESC";
	connection.query(query,[], function(err, purchases) {
		if (err)
			return next(err);
			console.log(purchases);
	var query = 'SELECT * FROM suppliers';
	connection.query(query,[], function(err, supply) {
		res.render('addPurchaseScreen', {
			purchases : purchases,
			suppliers : supply
				});
			});
		});
	});
};
exports.add = function (req, res, next) {
	req.getConnection(function(err, connection) {
		if (err){
			return next(err);
		}
	var input = JSON.parse(JSON.stringify(req.body));
	var data = {
			prod_id:input.id,
			Purchases_date: input.date,
			Purchases_price: input.price,
			Suppliers_id:input.id,
			qty:input.qty
			};
		console.log(data);
	connection.query('insert into purchases set ?',data,function(err,results) {
		if (err){
			return next(err)
			}
			res.redirect('addPurchases');
		});
	});
};