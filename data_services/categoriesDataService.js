const QueryService = require("../data_services/query-service");
const Promise = require('bluebird');
const categoriesDataService = require("../data_services/categoriesDataService");

module.exports = function(connection) {
  const queryService = new QueryService();
  this.showCategories = function() {
      return queryService.executeQuery('SELECT  * FROM categories');
  };

  this.showMostPopCat = function() {
    return queryService.executeQuery('SELECT  categories.name, sum(sales.quantity) as totalqty FROM sales INNER JOIN products ON sales.prod_id = products.id INNER JOIN categories ON products.cat_id = categories.id GROUP BY categories.name ORDER BY totalqty DESC LIMIT 0,1; ');
  };

  this.addCategories = function(data) {
    return.executeQuery('INSERT INTO categories set ?', data);
  };

  this.getCategories = functiono(id) {
    return queryService.executeQuery('SELECT * FROM categories WHERE id = ?', id);
  };

  this.updateCategories = function(data, id) {
    return queryService.executeQuery('UPDATE categories set WHERE id = ?', data, id);
  };

  this.deleteCategories = function(id) {
    return queryService.executeQuery('DELETE FROM categories WHERE id = ?', id);
  };

};
