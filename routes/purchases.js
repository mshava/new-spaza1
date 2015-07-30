exports.show = function (req, res, next) {
	req.getConnection(function(err, connection) {
		if (err)
			return next(err);
		var query = 'SELECT  purchases.date,purchases.qty,purchases.sales_price, products.name as name from purchases,products where products.id = purchases.prod_id order by purchases.date DESC';	
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
/*
	exports.get = function (req, res, next) {
		req.getConnection(function(err, connection) {
			if (err){
				return next(err);	
			}
			var purchaseId = Number(req.params.purchase_id);
			var purchasesQuery ='SELECT * from Purchases p where p.Id = ?',
			//connection.query([purchasesQuery],[purchaseId],function(err, purchases)	{
				//if (err){
					//return next(err);
				//}
				//var query = 'SELECT * from Suppliers';
				//connection.query( query,[], function(err, supply) {
				//	if (err)
				//		return next(err);	
					//var supplier =  purchases.length > 0 ? purchases[0] : {};
					//var List_suppliers = supply.map(function(storedSupplier);
					//	var supplierResults = {
					//		Id : storedSuppliers_id,
					//		Name : storedSuppliers_name,
					//		selectedSupplier : storedSupplier.id === supplier.suppliers_id
					//	};	
					//	return supplierResults;
					//});
					//var supplyData = {
					//	supply : suppList,
					//	supplier: supply.length > 0 ? supply[0] : {},
					//	suppliers: suppList	
					//};				
					//connection.query(function(err, results) {
						//connection.query('SELECT * FROM purchases where id = ?',[id],function(err,rows) {
						//	if(err){
						//		console.log("Error Selecting : %s ",err );
						//	}
						//	res.render('addPurchases',{page_title:"Edit Customers - Node.js", data : rows[0]});
						//}
					//});

					//});
				//});
			//};
*/