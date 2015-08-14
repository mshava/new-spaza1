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

//app.get("/",products.show);
app.get("/products", products.showProductList);
app.get("/products/add/:id", products.showAdd);
<<<<<<< HEAD
//app.get("/add",products.show);
app.get("/products/edit/:id", products.get);
=======
app.post("/products/add/",products.add);
>>>>>>> 1e537577b94e568018f4b6da3eefc9ab31d36868
app.post("/products/update/:id", products.update);
app.get("/products/delete/:id", products.delete);

app.get("/popular_products", products.showpopularPdt);
app.get("/least_products", products.showleastPdt);
//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);

//app.get("/products/delete/:id", products.delete);

//app.get("/categories", categories.show);
app.get("/sales",sales.show);
app.get("/sales/update/:id", sales.get);
app.get("/sales/edit/:id", sales.showEdit);
//app.get("/sales/update/:id", sales.get)
app.get("/sales/add/", sales.showAdd);
app.post("/sales/add/", sales.addsale);
app.post("/sales/edit/", sales.salesUpdate);
app.post("/sales/update/",sales.salesUpdate);
app.get("/sales/delete/:id",sales.delete);


app.get("/categories", categories.show);
app.post("/categories/add", categories.add);
app.get("/categories/edit/:id", categories.get);
app.post("/categories/update/:id",categories.update);
app.get("/categories/delete/:id",categories.delete);

app.get("/popular_category",categories.showmostPopCat);
app.get("/least_category",categories.showleastPopCat);

app.get("/product_earnings",spaza.showearningsPerPdt);
app.get("/profitable_product",spaza.showmostProfPdt);


app.get("/addPurchases",addPurchases.show);
app.get("/addPurchases/add/", addPurchases.showAdd);
app.post("/addPurchases/add/",addPurchases.add);
//app.post("/addPurchases/update/:id", addPurchases.update);
//app.post("/addPurchases/add/:id", addPurchases.add);
//app.get("/addPurchases/delete/:id", addPurchases.delete);


app.get('/suppliers',suppliers.show);
app.post('/suppliers/update/',suppliers.update);
app.post('/suppliers/add/:id',suppliers.add);
app.get('/suppliers/delete/:id', suppliers.delete);
app.get('/suppliers_edit/', suppliers.get);



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

