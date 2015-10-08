var bcrypt = require('bcrypt');

exports.userCheck = function (req, res, next) {


    console.log(req.path);
    if (req.session.user){
        next(); 
    }
    else{
        res.redirect("index")
    }

}

exports.signup = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) {
            return next(err);
        }

        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            username: input.username,
            password: input.password,
            user_role: 'read-only'

        };

        //bcrypt the password===
        bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(input.password, salt, function(err, hash) {
        // Store hash in your password DB. 
            data.password = hash;
            console.log("hash.lenght");
            console.log(hash);
             connection.query('insert into Users set ?', data, function(err, results) {
                if (err)
                    console.log("Error inserting : %s ", err);

                    res.redirect('/?status=user_created');

                });
            });
        });
    });
};

exports.get = function (req, res , next){
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        username : input.username,
        password : input.password
        }    
    req.getConnection(function (err, connection){
        if (err)
            return next(err)
        var query = "SELECT * From users WHERE username =?";
        connection.query(query,[data.username],function (err, results){
                console.log(results);
                res.redirect("/login");
        });
    });    
};

exports.userLogin = function(req, res, next) {
    var input = JSON.parse(JSON.stringify(req.body));
    var username = input.username;
        req.getConnection(function(err, connection) {
            if (err)
                return next(err)
            connection.query('SELECT * from users WHERE username=?', [username], function(err, users) {
            var user = users[0];
                bcrypt.compare(input.password, user.password, function(err, pass) {
            if (err) {
                console.log(err);
                }
            if (pass) {
                req.session.user = username;
                req.session.role = user.User_role;
                    return res.redirect('/categories')
            } else {
                return res.redirect('/');
                }
            })
        })
    })
};