var express = require('express');
var exphbs = require('express-handlebars');
var Products = require('./nelisa_products');
var products = new Products('./Nelisa Sales History.csv');
//var itemArr = products.productList('./Nelisa Sales History.csv');
var group = products.groupItems();
var mostPop = products.mostPopularPdt(group);
//console.log(mostPop);
var leastPop = products.leastPopularPdt(group);
//var groupItems = products.groupItems();
var category = products.groupCat(group);
var mostPopCat = products.mostPopularCat(category);
//console.log(leastPop);
var leastPopCat = products.leastPopularCat(category);
//console.log(leastPop);
var app = express ();
// create a route
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.get('/', function(req, res){
res.render("index");
});
app.get("/products", function (req, res) {
var productList = [];
for (key in group){
productList.push({
name:key,
qty:group[key]
});
}
res.render("products", {products :productList});
});
app.get("/popular", function (req, res) {
res.render("popular_products", {product : mostPop});
});
app.get("/least", function (req, res) {
res.render("least_products", {product : leastPop});
});
app.get("/popular_category", function (req, res) {
var popCat = [];
for (key in mostPopCat){
popCat.push({
name:key,
qty:mostPopCat[key]
});
}
res.render("popular_category", {products : popCat});
});
app.get("/least_category", function (req, res) {
var popCat = [];
for (key in leastPopCat){
popCat.push({
name:key,
qty:leastPopCat[key]
});
}
res.render("least_category", {products : popCat});
});
app.get("/category", function (req, res) {
var popCat = [];
for (key in category){
popCat.push({
name:key,
qty:category[key]
});
}
res.render("category", {products : popCat});
});
app.get('/persona', function(req, res){
res.render("persona");
});
app.get('/site_help', function(req, res){
res.render("site_help");
});
var port = process.env.PORT || 8080;
var server = app.listen(port,function(){
var host = server.address().address;
var port =server.address().port;
console.log('Example app listening at http://%s:%s',host,port);
});