exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err)
			return next(err);
		connection.query('SELECT name FROM products', [], function(err, results1) {
			connection.query('SELECT sales.prod_id as id,products.name as name from sales,products WHERE products.id = sales.prod_id group by name', [], function(err, results) {
	        	if (err) 
	        		return next(err);
		//var query = 'SELECT name from products';
		//var query = 'SELECT sales.prod_id as id,products.name as name from sales,products WHERE products.id = sales.prod_id group by name';
		//connection.query(query, [], function(err, results1){
		    //connection.query(query, [], function(err, results) {
			//if (err) 
				//return next(err);
				//console.log(products);

			
			

			//console.log(req.query);
			//console.log("---> " + req.query);


			//if(req.query.error === "true" ){
				//result.error = "Can't delete category..."
			//}

				res.render( 'addSale', {
					sales : results,
					products : results1
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
			prod_id : input.prod_id,
			sales_date : input.sales_date,
			no_sold : input.no_sold,
			sales_price : input.sales_price

		};
		connection.query('insert into sales set ?', data, function(err, results) {
			if (err)
		console.log("Error inserting : %s ",err );
			res.redirect('/addSale');
			
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM sales WHERE id = ?', [id], function(err,rows){
			if(err){
		        console.log("Error Selecting : %s ",err );
			}
		    res.render('edit',{page_title:"Edit Customers - Node.js", data : rows[0]});
		});
	});
};

exports.update = function(req, res, next){
	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;
	var input = JSON.parse(JSON.stringify(req.body));
	     var data = {
	     	name : input.name,
	     	sales_date : input.sales_date
	     }
	req.getConnection(function(err, connection){
		connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err){
		       console.log("Error Updating : %s ",err );
			}
		    res.redirect('/addSale');
		});
	});
};
exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
	    connection.query('DELETE FROM sales WHERE Id = ?', [id], function(err,rows){
	        if(err){
	            console.log("Error Selecting : %s ",err );
	            return res.redirect('/categories?error=true&msg=category_linked');
		    }
		    else{
	        	res.redirect('/addSale');
	        }
		});
	});
};
