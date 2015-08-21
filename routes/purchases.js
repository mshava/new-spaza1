exports.show = function (req, res, next) {
	req.getConnection(function(err, connection) {
			if (err)
				return next(err);
		var query = "SELECT DATE_FORMAT(purchases.purchase_date,'%d %b %y') as date,purchases.quantity as quantity,products.name as product from purchases,products where products.id = purchases.prod_id order by purchases.purchase_date DESC";
		connection.query(query,[], function(err, purchases) {
			if (err)
				return next(err);
				//console.log(purchases);
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
	var query = "SELECT DATE_FORMAT(purchases.purchase_date,'%d %b %y') as date,purchases.quantity as quantity,purchases.cost as price, products.name as product from purchases,products where products.id = purchases.prod_id order by purchases.purchase_date DESC";
	connection.query(query,[], function(err, purchases) {
		if (err)
			return next(err);
			//console.log(purchases);
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
		req.getConnection(function(err, connection){
			if (err){
			return next(err);
			}
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			id:input.purchases_id,
			date: input.date,
			sales_price: input.price,
			item:input.qty
			};
		connection.query('insert into purchases set ?', data, function(err, results) {
				if (err)
					console.log(err);
			res.redirect('/purchases');
		});	
	});
};

exports.get = function(req, res, next){
	req.getConnection(function(err, connection){
		if (err){
				return next(err);
				}
			var purchaseid = Number(req.params.purchase_id);
			var purchaseSql = 'SELECT * from purchases p where p.id = ?';
			connection.query(purchaseSql, [purchase_id], function(err, purchases) {
					if (err){
						return next(err);
						}
		
			connection.query('SELECT * FROM products', [], function(err, products) {
					if (err)
						return next(err);

			var purchase = purchases.length > 0 ? purchases[0] : {};
			var productList = products.map(function(product){
				var result = {
					id : product.id,
					name : product.name,
					selectedProduct : product.id === purchase.product_id
					};
					return result;
					});
			var context = {
				products : productList,
				purchase: purchases.length > 0 ? purchases[0] : {},
					};
			res.render('editPurchases', context);
				});
			});
		});
	};

exports.update = function(req, res, next){
	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;
	var qty = req.params.qty;
	var purchase_date = req.params.purchase_date;
	var purchase_price = req.params.purchase_price;
	var prodid = req.params.product_id;
		req.getConnection(function(err, connection){
		connection.query('UPDATE Purchases SET ? WHERE id = ?', [data, id,qty,purchase_date,purchase_price], function(err, rows){
		connection.query('UPDATE products SET ? WHERE id = ?', [data, prod_id], function(err, rows){
				if (err){
		console.log("Error Updating : %s ",err );
		}
		res.redirect('/purchases')

			});
		});
	});
};

exports.delete = function(req, res, next){
	var id = req.params.id;
		req.getConnection(function(err, connection){
			connection.query('DELETE FROM Purchases WHERE id = ?', [id], function(err,rows){
					if(err){
				console.log("Error Selecting : %s ",err );
				}
			res.redirect('/purchases');
		});
	});
};