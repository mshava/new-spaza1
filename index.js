var express = require("express"),

        exphbs = require("express-handlebars"),

        mysql = require("mysql"),

        bodyParser = require("body-parser"),

        myConnection = require("express-myconnection"),

        spaza = require("./routes/spaza");    

        products = require("./routes/spaza");
        categories = require("./routes/spaza");
        sales = require("./routes/spaza");

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

app.use(myConnection(mysql, dbOptions, "single"));

app.use(bodyParser.urlencoded({ extended : false}))

app.use(bodyParser.json())


app.get("/products", products.showProductList);
app.get("/",function (req, res){

res.render("index");
 });

app.get("/products", products.showProductList);
//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);
//app.post("/products/add/:id", products.add);
//app.get("/products/delete/:id", products.delete);

app.get("/popular_products", spaza.showpopularPdt);
app.get("/least_products", spaza.showleastPdt);
//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);
//app.post("/products/add/:id", products.add);
//app.get("/products/delete/:id", products.delete);

app.get("/categories", spaza.showcategories);
app.get("/popular_category",spaza.showmostPopCat);
app.get("/least_category",spaza.showleastPopCat);
//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);
//app.post("/products/add/:id", products.add);
//app.get("/products/delete/:id", products.delete);

app.get("/product_earnings",spaza.showearningsPerPdt);
//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);
//app.post("/products/add/:id", products.add);
//app.get("/products/delete/:id", products.delete);

//app.get();


app.listen(3000, function () {
    console.log("express-handlebars example server listerning on: 3000");
});

