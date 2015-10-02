var express = require("express"),
   exphbs = require("express-handlebars"),
   mysql = require("mysql"),
   bcrypt = require('bcrypt'),
   cookieParser = require('cookie-parser'),
   cookieSession = require('cookie-session'),
   session = require('express-session'), 
   bodyParser = require("body-parser"),
   myConnection = require("express-myconnection"),
   spaza = require("./routes/spaza"),
   users = require("./routes/users"),
   login = require('./routes/login'); 
   products = require("./routes/products");
   categories = require("./routes/categories");
   addPurchases = require("./routes/purchases");
   sales = require("./routes/sales");
   suppliers = require("./routes/suppliers");
   signup = require("./routes/users_signup");
         
var app = express();
 
var dbOptions = {
     host : "localhost",
     user : "root",
     password : "amila",
     port : 3306,
     database : "sakonwaba"
 };
 
app.engine("handlebars", exphbs({defaultLayout : "main"}));
app.set("view engine", "handlebars"); 
app.use(express.static(__dirname + "/public")); 
 // allows you to use mysql from the http request
app.use(myConnection(mysql, dbOptions, "single")); 
 //gives the request the ability to handle form parameters
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json());
app.use(session ({
        secret:'sakonwa',
        cookie:{maxAge:600000},
        resave: false,
        saveUninitialized:true,
     }))  

app.get("/Products",users.checkUser,products.showProductList); 
app.get("/Products",users.checkUser, products.showProductList);
app.get("/products/edit/:id",users.checkUser, products.get);
app.get("/products/add/:id",users.checkUser, products.showAdd);
app.post("/products/add/",users.checkUser,products.add);
app.post("/products/update/:id", users.checkUser,products.update);
app.get("/products/delete/:id", users.checkUser,products.delete); 
app.get("/popular_products", users.checkUser,products.showpopularPdt);
app.get("/least_products", users.checkUser,products.showleastPdt);

app.get("/sales",sales.show);
app.get("/sales/update/:id",users.checkUser, sales.get);
app.get("/sales/edit/:id", users.checkUser,sales.showEdit);
app.get("/sales/update/:id", users.checkUser,sales.get)
app.get("/sales/add/", users.checkUser,sales.showAdd);
app.post("/sales/add/", users.checkUser,sales.addsale);
app.post("/sales/edit/", users.checkUser,sales.salesUpdate);
app.post("/sales/update/",users.checkUser,sales.salesUpdate);
app.post("/sales/update/:id",users.checkUser,sales.salesUpdate);
app.get("/sales/delete/:id",users.checkUser,sales.delete);
  
app.get("/categories",users.checkUser, categories.show);
app.post("/categories/add", users.checkUser,categories.add);
app.get("/categories/edit/:id", users.checkUser,categories.get);
app.post("/categories/update/:id",users.checkUser,categories.update);
app.get("/categories/delete/:id",users.checkUser,categories.delete); 
app.get("/popular_category",users.checkUser,categories.showmostPopCat);
app.get("/least_category",users.checkUser,categories.showleastPopCat);
 
app.get("/product_earnings",users.checkUser,spaza.showearningsPerPdt);
app.get("/profitable_product",users.checkUser,spaza.showmostProfPdt);
 
app.get("/purchases", users.checkUser,addPurchases.show);
app.get("/purchases/add/", users.checkUser,addPurchases.showAdd);
app.get("/purchases/edit/:id", users.checkUser,addPurchases.showEdit);
app.get("/purchases/update/:id", users.checkUser,addPurchases.update);
app.post("/purchases/add/",users.checkUser,addPurchases.add);
app.post("/purchases/update/", users.checkUser,addPurchases.update);
app.post("/purchases/add/:id", users.checkUser,addPurchases.add);
app.get("/purchases/delete/:id", users.checkUser,addPurchases.delete);
app.get("/addPurchases",users.checkUser,addPurchases.show);
 
app.get('/suppliers',users.checkUser,suppliers.show);
app.post('/suppliers/update/:id',users.checkUser,suppliers.update);
app.post('/suppliers/add',users.checkUser,suppliers.add);
app.get('/suppliers_edit/:id', users.checkUser,suppliers.get);
app.get('/suppliers/delete/:id', users.checkUser,suppliers.delete);
 
app.post("/signup",signup.get);
app.post("/signup/update/:id",signup.update);
app.get("/signup/edit/:id",signup.get);
app.get("/signup/delete:id",signup.delete);

app.get("/users", users.checkUser,users.showUsers);
app.get("/users/edit/:id",users.checkUser,users.get);
app.post("/users/update/:id",users.checkUser,users.update);
//app.get("/users/add/",users.add);



app.post("/login", login.userLogin);

app.get('/logout', function (req, res) {
  delete req.session.user;
  res.redirect('/login')
});
 
app.get("/",function (req, res){
  res.render("login", {layout:false});
});
 
app.get("/signup", function (req, res){
  res.render("login", {layout:false});
});
 
var port = process.env.PORT || 8080;       
    //start the server
var server = app.listen(port, function () {
   var host = server.address().address;
   var port = server.address().port;
      console.log('Example app listening at http://%s:%s', host, port);
});