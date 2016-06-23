var bcrypt = require('bcrypt');

exports.userCheck = function (req, res, next) {


    console.log(req.path);
    if (req.session.user){
        next();
    }
    else{
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
            username: input.username,
            user_role: 'read-only'

        };
        console.log(input.password);

        //bcrypt the password===
        bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(input.password, salt, function(err, hash) {
        // Store hash in your password DB.
            data.password = hash;
            console.log("hash", hash);
            console.log("data.password", data.password);

             connection.query('insert into users set ?', data, function(err, results) {
                if (err)
                    console.log("Error inserting : %s ", err);

                    res.redirect('/?status=user_created');

                });
            });
        });
    });
};

exports.userLogin = function(req, res, next) {
    var input = JSON.parse(JSON.stringify(req.body));
    var username = input.username
    var pass = input.password
        req.getConnection(function(err, connection) {
            if (err)
                return next(err)
            connection.query('SELECT * from users WHERE username = ?', [username], function(err, users) {
            var user = users[0];
            if (user === undefined){
              return res.redirect('/');
            }else{


            console.log(user)
                bcrypt.compare(pass, user.password, function(err, pass) {
                  console.log(pass);
            if (pass) {
                req.session.user = username;
                req.session.role = user.User_role;
                    return res.redirect('/home')
            } else {
                return res.redirect('/');
                }
            })
          };
        })
    })
};
