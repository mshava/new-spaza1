var bcrypt = require('bcrypt');
exports.login = function (req, res){
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        username :input.username,
        password :input.password
    }
        if(req.session.user ){
<<<<<<< HEAD
           user.username = req.session.user;
            res.render('loggedIn', {
                    user: req.session.user,
                    admin:admin
=======
            data.username = req.session.user;
            res.render('home', {
                    user: req.session.user
                    //admin:admin
>>>>>>> 1fa7707663a1f7100664570412ab584c449c4865
            });

        }
        else{
            res.render('login');
        }
};

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
            Username: input.username,
            Password: input.password,
            User_role: 'read-only'

        };

        //bcrypt the password===
        bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(input.password, salt, function(err, hash) {
        // Store hash in your password DB. 
            data.Password = hash;
            connection.query('insert into Users set ?', data, function(err, results) {
                if (err)
                    console.log("Error inserting : %s ", err);

                    res.redirect('/?status=user_created');

                });
            });
        });
    });
};

exports.adminSignup = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) {
            return next(err);
        }

        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            Username: input.username,
            Password: input.password,
            User_role: input.key,
        };

        admin = 'admin';

        //bcrypt the password===
        bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(input.password, salt, function(err, hash) {
            // Store hash in your password DB. 
            data.Password = hash;
            connection.query('insert into Users set ?', data, function(err, results) {
                if (err)
                console.log("Error inserting : %s ", err);
                if(input.key == admin){                      

                    res.redirect('/?status=user_created');
                }
                else{
                    res.redirect('/admin_signup');
                }
            });
        });
        });
    });
};


exports.userLogin = function(req, res, next) {
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        username :input.username,
        password :input.password
    }
    
    req.getConnection(function(err, connection) {
        if (err)
            return next(err)

            connection.query('SELECT * from users WHERE username=?', [data.username], function(err, users) {

            var user = users[0];

<<<<<<< HEAD
                bcrypt.compare(data.password, data.password, function(err, pass) {
=======
                bcrypt.compare(input.password, users.password, function(err, pass) {
>>>>>>> 1fa7707663a1f7100664570412ab584c449c4865

            
                if (err) {
                    console.log(err);
                }
                console.log(users);

                if (data.password === users[0].password) {
                    req.session.user = data.username;
                    req.session.role =  users.User_role;
                    res.render("home")
                } 
                else {
                    return res.redirect('/login');
                }
            });
        });
    });
};
<<<<<<< HEAD

=======
>>>>>>> 1fa7707663a1f7100664570412ab584c449c4865


/*
var bcrypt = require('bcrypt');
exports.login = function (req, res){
        if(req.session.user ){
           user.username = req.session.user;
            res.render('loggedIn', {
                    user: req.session.user,
                    admin:admin
            });

        }
        else{
            res.render('login');
        }
};
exports.userCheck = function (req, res, next) {
    console.log(req.path);
        if (req.session.user){
            next();
            }else{
                res.redirect("/")
    }
}
exports.signup = function(req, res, next) {
    req.getConnection(function(err, connection) {
            if (err) {
                return next(err);
                }
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        Username: input.username,
        Password: input.password,
        User_role: 'read-only'
};
//bcrypt the password===
            bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(input.password, salt, function(err, hash) {
// Store hash in your password DB.
            data.Password = hash;
            connection.query('insert into users set ?', data, function(err, users) {
                user = users[0];
                    if(input.username === user.Username){
                        res.redirect('/sign_up',{msg: "Username already exits, please try again!"});
                        }
                        if (err)
                    console.log("Error inserting : %s ", err);
                    res.redirect('/?status=user_created');
                });
            });
        });
    });
};
exports.adminSignup = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) {
            return next(err);   
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            username: input.username,
            password: input.password,
            user_role: input.key,
            };
            admin = 'admin';
//bcrypt the password===
            bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(input.password, salt, function(err, hash) {
// Store hash in your password DB.
            data.password = hash;
            connection.query('insert into users set ?', data, function(err, results) {
                    if (err)
                        console.log("Error inserting : %s ", err);
                    if(input.key == admin){
                        res.redirect('/?status=user_created');
                    }else{
                        res.redirect('/admin_signup');
                    }
                });
            });
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
                    return res.redirect("index")
            } else {
                return res.redirect('/');
                }
            })
        })
    })
};
*/
