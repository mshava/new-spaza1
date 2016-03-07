const QueryService = require("../data_services/query-service");
const Promise = require('bluebird');
const categoriesDataService = require("../data_services/categoriesDataService");

module.exports = function(connection) {
  const queryService = new QueryService();
  this.showCategories = function() {
      return queryService.executeQuery('SELECT  * FROM categories');
  };
};
