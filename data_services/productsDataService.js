const queryService = require('./data_services/query-service');
const Promise = require('bluebird');
const productDataService = require('./data_services/productDataService');

module.exports = function(connection) {
  const queryService = new queryService(connection);
  
  this.showProducts = function() {
    return queryService.executeQuery('SELECT * FROM products');
  };

  this.showProducts = function() {
      return queryService.executeQuery('SELECT * FROM categories');
  };

  this.addProducts = function(data) {
    return queryService.executeQuery('INSERT INTO products set ?', data);
  };

  this.getProducts = function(id) {
      return queryService.executeQuery('SELECT * FROM products WHERE id = ?' id);
  };

  this.updateProducts = function(id) {
    return queryService.executeQuery('SELECT * FROM products WHERE id = ?', id);
  };

};
