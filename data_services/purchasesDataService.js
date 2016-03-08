const QueryService = require('./data_services/query-service');
const Promise = require('bluebird');
const purchasesDataServices = require('./data_services/purchasesDataServices');

module.exports = function(connection) {
  const queryService = new QueryService(connection);
  this.showPurchases = function(){
    return queryService.executeQuery("SELECT DATE_FORMAT(purchase_date,'%d %b %y') as date,purchases.quantity,purchases.cost as price, products.name as name from purchases,products where products.id = purchases.prod_id order by purchases_date DESC");
  };

  this.showPurchases = function() {
    return queryService.executeQuery('SELECT * FROM purchases');
  };

  this.showAddPurchases = function() {
    return queryService.executeQuery('SELECT purchases.id as id,DATE_FORMAT(purchases.purchase_date,'%d %b %y') as date,purchases.quantity as quantity,purchases.cost as price, products.name as product from purchases,products where products.id = purchases.prod_id order by purchases.purchase_date DESC');
  };

  this.addPurchases = function() {
    return queryService.executeQuery('SELECT purchases.id as id,DATE_FORMAT(purchases.purchase_date,'%d %b %y') as date,purchases.quantity as quantity,purchases.cost as price, products.name as product from purchases,products where products.id = purchases.prod_id order by purchases.purchase_date DESC');
  };

};
