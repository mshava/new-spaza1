var express = require("express"),
    exphbs = require("express-handlebars"),
    mysql = require("mysql"),
    bodyParser = require("body-parser"),
    myConnection = require("express-myconnection"),
    spaza = require("./routes/spaza");    
    

    products = require("./routes/products");
    categories = require("./routes/categories");
    addPurchases = require("./routes/purchases")
    //addProducts = require("./routes/products");
    sales = require("./routes/sales");
    suppliers = require("./routes/suppliers");

        
var app = express();

var dbOptions = {
    host : "localhost",
    user : "root",
    password : "2197832",
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

//app.get("/",products.show);
app.get("/products", products.showProductList);
app.get("/products/add/:id", products.showAdd);
//app.get("/add",products.show);
app.get("/products/edit/:id", products.get);
app.post("/products/update/:id", products.update);
app.get("/products/delete/:id", products.delete);

app.get("/popular_products", products.showpopularPdt);
app.get("/least_products", products.showleastPdt);
//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);

//app.get("/products/delete/:id", products.delete);

//app.get("/categories", categories.show);
app.get("/sales",sales.show);
//app.get("/addSale/edit/:id", addSale.get);
app.get("/sales/edit/:id", sales.showEdit);
app.get("/sales/add/", sales.showAdd);
app.post("/sales/add/", sales.addsale);
app.post("/sales/edit/:id", sales.salesUpdate);
app.post("/sales/update/:id",sales.salesUpdate);
app.get("/sales/delete/:id",sales.delete);


//shows categories from spaza.js function
//app.get("/categories", spaza.showcategories);

//add categories from categories.js functions and also show them
/*
app.get("/addCategories",function (req, res){
    res.send("/addCategories");
    res.render("/addCategories");
 });

app.post("/addCategories", function (req, res){
    //res.render("addCategories");
    console.log(req.body);
    res.redirect('/categories')  
});
*/

app.get("/categories", categories.show);
app.post("/categories/add", categories.add);
app.get("/categories/edit/:id", categories.get);
app.post("/categories/update/:id",categories.update);
app.get("/categories/delete/:id",categories.delete);
/*
app.get("/addCategories", categories.show);
app.post("/addCategories/add", categories.add)
app.post("/addCategories/update/:id", categories.update);
app.get("/addCategories/delete/:id", categories.delete);
*/

app.get("/popular_category",categories.showmostPopCat);
app.get("/least_category",categories.showleastPopCat);
//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);
//app.post("/products/add/:id", products.add);
//app.get("/products/delete/:id", products.delete);

app.get("/product_earnings",spaza.showearningsPerPdt);
app.get("/profitable_product",spaza.showmostProfPdt);
//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);
//app.post("/products/add/:id", products.add);
//app.get("/products/delete/:id", products.delete);

app.get("/addPurchases",addPurchases.show);
app.get("/addPurchases/add/:id", addPurchases.showAdd);
//app.get("/addPurchases",addPurchases.show);
//app.post("/addPurchases/update/:id", addPurchases.update);
app.post("/addPurchases/add/:id", addPurchases.add);
//app.get("/addPurchases/delete/:id", addPurchases.delete);


app.get('/suppliers',suppliers.show);
app.post('/suppliers/update/:id',suppliers.update);
app.post('/suppliers/add',suppliers.add);
app.get('/suppliers/delete/:id', suppliers.delete);
app.get('/suppliers_edit/:id', suppliers.get);



//app.get();

app.get("/",function (req, res){
res.render("index");
});


var port = process.env.PORT || 8080;       
   //start the server
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
       console.log('Example app listening at http://%s:%s', host, port);
});

