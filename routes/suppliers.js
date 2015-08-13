

exports.show = function (req, res, next) {
		req.getConnection(function(err, connection){
				if (err)
					return next(err);
		connection.query('SELECT DISTINCT shop FROM suppliers', [], function(err, results) {
					res.render('suppliers', {
						suppliers: results,
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
			};
		connection.query('insert into suppliers set ?', data, function(err, results) {
				if (err)
			console.log("Error inserting : %s ",err );
				res.redirect('/suppliers');
		});
	});
};
exports.get = function(req, res, next){
		var id = req.params.id;
		req.getConnection(function(err, connection){
		connection.query('SELECT * FROM suppliers WHERE id = ?', [id], function(err,rows){
				if(err){
			console.log("Error Selecting : %s ",err );
			}
		res.render('suppliers_edit',{page_title:"Edit Customers - Node.js", data : rows[0]});
		});
	});
};
exports.update = function(req, res, next){
		var data = JSON.parse(JSON.stringify(req.body));
		var id = req.params.id;
		req.getConnection(function(err, connection){
			connection.query('UPDATE suppliers SET ? WHERE Id = ?', [data, id], function(err, rows){
					if (err){
				console.log("Error Updating : %s ",err );
					}
				res.redirect('/suppliers');
		});
	});
};
exports.delete = function(req, res, next){
		var Id = req.params.Id;
			req.getConnection(function(err, connection){
			connection.query('DELETE FROM Suppliers WHERE Id = ?', [Id], function(err,rows){
					if(err){
				console.log("Error Selecting : %s ",err );
					}
				res.redirect('/suppliers');
		});
	});
};