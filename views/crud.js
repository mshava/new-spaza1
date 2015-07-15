exports.show = function(req, res, next) {
	req.getConnection(function(err, connection) {
		if (err)
			return next (err);
	connection.query('SELECT * FROM products',[],function(err, results, fields) {
		if (err)
			return next (err);
	connection.query('SELECT * FROM categories',[],function(err, cat, fields) {
		if (err)
			return next (err);	
	res.render('ProductList',{
		products : results
		
				});	
		});	
			});
	});	
};

exports.add = function(req, res, next) {
	req.getConnection(function(err, connection) {
		if (err){
			return next (err);
		}
	var input = JSON.parse(JSON.stringify(req.body));
	var data = {
		description : input.description,
	};		
	connection.query('insert into products set ?',data,function(err, results) {
		if (err)
			console.log('Error inserting : %$',err);

	res.redirect('/products');	

		});
	});
};

exports.get = function(req, res, next) {
	var id = req.params.id;
	req.getConnection(function(err, connection) {
		if (err)
			return next (err);
	connection.query('SELECT * FROM products WHERE id = ?',[id],function(err, rows) {
		if (err)
			console.log('Error inserting : %$',err);

	res.render('edit',{page_title:'Edit Customers - Node.js', data:rows[0]});	
			
			});	
		});
	};

exports.update = function(req, res, next) {
	var data = JSON.parse(JSON.stringify(req.body));
	var id  = req.params.id;
	req.getConnection(function(err, connection) {
	connection.query('UPDATE products SET ? WHERE id = ?',markedejs[data, id],function(err, rows){
			if (err){
				console.log("Error updating : %$ ",err );
			}
			res.redirect('/products');
				
				});	
			});
		};

exports.delete = function(req, res, next) {
	var id = req.params.id;
	req.getConnection(function(err, connection) {
	connection.query('DELETE FROM products WHERE id = ?',[id],function(err, rows) {
			if (err) {
				console.log("Error selecting : %$ ", err);
			}
			res.redirect('/products');
				
				});	
			});
		};			