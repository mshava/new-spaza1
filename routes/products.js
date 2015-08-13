	exports.showProductList = function(req, res, next) {

		req.getConnection(function(err, connection) {
				
			if (err)
				return next (err);
	
			connection.query('SELECT products.name,categories.name as category_name FROM products,categories WHERE products.cat_id = categories.id',[],function (err, products) {
				connection.query('SELECT name FROM categories ',[],function (err, categories) {
				connection
				if (err){
					console.log(err);
					return (err);
				}
				//console.log(results.length);
				res.render('Products', {
					products : products,
					categories : categories
				});	 
			});
			});
		})
	};

	exports.showAdd = function(req, res, next) {

		req.getConnection(function(err, connection) {
				
			if (err)
				return next (err);
	
			connection.query('SELECT * FROM categories',[],function (err, results) {
				if (err){
					console.log(err);
					return (err);
				}
				console.log(results.length);
				res.render('add', {
					categories : results
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
	
exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT * FROM categories', [], function(err, results1) {
			connection.query('SELECT * FROM products', [], function(err, results) {
	        	if (err) return next(err);

	    		res.render( 'Products', {
	    			products : results,
	    			categories : results1
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
            name : input.name,
            cat_id : input.cat_id
        };
		connection.query('insert into products set ?', data, function(err, results) {
            if (err)
            console.log("Error inserting : %s ",err );
            res.redirect('/products');
      	});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM products WHERE id = ?', [id], function(err,rows){
			if(err){
    			console.log("Error Selecting : %s ",err );
			}
			res.render('edit_products',{page_title:"Edit Customers - Node.js", data : rows[0]});      
		}); 
	});
};

exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    var input = JSON.parse(JSON.stringify(req.body));
		var data = {
            name : input.name
        };
    req.getConnection(function(err, connection){
        connection.query('UPDATE products SET ? WHERE id = ?', [data, id], function(err, rows){
    		if (err){
              	console.log("Error Updating : %s ",err );
    		}
          	res.redirect('/products');
    	});	
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM products WHERE id = ?', [id], function(err,rows){
			if(err){
    			console.log("Error Selecting : %s ",err );
			}
			res.redirect('/products');
		});
	});
};

