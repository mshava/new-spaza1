const express      = require('express'),
      exhbs        = require('express-handlebars'),
      cookieParser = require('cookie-parser'),
      session      = require('express-session'),
      bodyParser   = require('body-parser'),
      mysql        = require('mysql'),
      connectionProvider = require('connection-provider'),
      compression  = require('compression');

app = express();

const NewDataService = require("service.js");



const dbOptions = {
  host      : 'localhost',
  user      : 'admin',
  password  : 'password',
  port      : 3306,
  database  : 'impact_app'
};

const serviceSetupCallBack = function(connection){

	sakhileDataService : NewDataService(connection)

};

app.engine("handlebars", exphbs({defaultLayout : "main"}));
app.set("view engine", "handlebars"); 
app.use(express.static(__dirname + "/public")); 
 // allows you to use mysql from the http request
app.use(connectionProvider(dbOptions, serviceSetupCallBack)); 
 //gives the request the ability to handle form parameters
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json());
app.use(session ({
        secret:'sakonwa',
        cookie:{maxAge:600000},
        resave: false,
        saveUninitialized:true,
     }))  


var port = process.env.PORT || 5000;       
    //start the server
var server = app.listen(port, function() {
   var host = server.address().address;
   var port = server.address().port;
      console.log('Example app listening at http://%s:%s', host, port);
});