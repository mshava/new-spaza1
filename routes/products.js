exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT * FROM categories', [], function(err, results1) {
			connection.query('SELECT * FROM products', [], function(err, results) {
	        	if (err) return next(err);

	    		res.render( 'addProducts', {
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
            res.redirect('/addProducts');
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
          	res.redirect('/addProducts');
    	});	
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM products WHERE cat_id = ?', [id], function(err,rows){
			if(err){
    			console.log("Error Selecting : %s ",err );
			}
			res.redirect('/products');
		});
	});
};

