var bcrypt = require("bcrypt");

var hash = '$2a$10$G4ls01GekTqVLvNw8979Kupn9VueMBEB4dEf1f';
var pass = '123456';
bcrypt.compare(pass, hash, function(err, pass) {

  if (pass){
    console.log("pass");
  }
});

/*
var bcrypt = require('bcrypt');
var hash = '$2a$10$JQiGXT9FkqDK9Fs1IWrkdOnTsH5Sb8cMnc7i0MUL8QuXu/Q7LZiTK';
var pass = 'password';

bcrypt.compare(pass, hash, function(err, pass){
  if (pass){
    console.log(pass);
  }
  else{
    console.log(err);
  }
})
*/
