var express = require("express"),

        exphbs = require("express-handlebars"),

        mysql = require("mysql"),

        bodyParser = require("body-parser"),

        myConnection = require("express-myconnection"),

        spaza = require("./routes/products");    

        products = require("./routes/products");

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

app.use(myConnection(mysql, dbOptions, "single"));

app.use(bodyParser.urlencoded({ extended : false}))

app.use(bodyParser.json())


app.get("/", products.show);
app.get("/products", products.add);

//app.get("/products/edit/:id", products.get);
//app.post("/products/update/:id", products.update);
//app.post("/products/add/:id", products.add);

//app.get("/products/delete/:id", products.delete);

//app.get("/products", spaza.showProductList);

app.get("/popular_products", spaza.showpopularPdt);
//app.get("/leastPdt", spaza.showleastPdt);
//app.get();


app.listen(3000, function () {
    console.log("express-handlebars example server listerning on: 3000");
});

