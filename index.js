var express = require("express"),
    exphbs = require("express-handlebars"),
    mysql = require("mysql"),
    bodyParser = require("body-parser"),
    myConnection = require("express-myconnection"),
    spaza = require("./routes/spaza");    
    

    Products = require("./routes/products");
    //categories = require("./routes/spaza");
    categories = require("./routes/categories");
    addPurchases = require("./routes/purchases")
    addProducts = require("./routes/products");
    sales = require("./routes/sales");

        
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
app.use(bodyParser.json())


//app.get("/",products.show);
app.get("/addProducts", Products.showProductList);


//app.get("/add",Products.show)
app.get("/addProducts/edit/:id", Products.get);
app.get("/addProducts/add/:id", Products.showAdd);
app.post("/addProducts/update/:id", Products.update);
app.get("/addProducts/delete/:id", Products.delete);

app.get("/popular_products", Products.showpopularPdt);
app.get("/least_products", Products.showleastPdt);
//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);
//app.post("/products/add/:id", products.add);
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

app.get("/categories", categories.show);
app.get("/addCategories", categories.show);
app.get("/addCategories/edit/:id", categories.get);
app.post("/addCategories/add", categories.add)
app.post("/addCategories/update/:id", categories.update);
app.get("/addCategories/delete/:id", categories.delete);

app.get("/popular_category",spaza.showmostPopCat);
app.get("/least_category",spaza.showleastPopCat);
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
//app.get("/addPurchases",addPurchases.show);
//app.post("/addPurchases/update/:id", addPurchases.update);
app.post("/addPurchases/add/:id", addPurchases.add);
//app.get("/addPurchases/delete/:id", addPurchases.delete);

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

