var express = require("express"),

        exphbs = require("express-handlebars"),

		mysql = require("mysql"),

		myConnection = require("express-myconnection"),

		products = require("./routes/products");    

var spaza-app = express();

var dbOptions = {
		host : "localhost",
		user : "root",
		password : "2197832",
		port : 3306,
		database : "products"
};

app.engine("handlebars", exphbs({defaultLayout : "main"}));

app.set("view engine", "handlebars");


app.use(express.static(__dirname + "/public"));

app.use(myConnection(mysql, dbOptions, "single"));

app.use(bodyParser.urlencoded({ extended : false}))

app.use(bodyParser.json())


app.get("/", products.show);
app.get("/products", products.show);
app.get("/products/edit/:id", products.get);
app.post("/products/update/:id", products.update);
app.post("/products/add/:id", products.add);

app.get("/products/delete/:id", products.delete);

app.get("/products", spaza-app.showProductList);

app.get("/popularPdt", spaza-app.showpopularPdt);

app.get("/leastPdt", spaza-app.showleastPdt);



app.listen(3000, function () {
	console.log("express-handlebars example server listerning on: 3000");
});