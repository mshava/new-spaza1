 var fs = require('fs');
module.exports = function(filePath){
this.productList = function(callback){
var linesInFile = fs.readFileSync(filePath, "utf8");
var rows = linesInFile.split('\r');
//console.log(">>>>>>>>>"+rows);
var listOfProducts = [];
rows.forEach(function(row){
var columns = row.split(';');
var currentItem = columns[2];
var numberSold = columns[3];
var salesObj = {
itemName : columns[2],
soldItem: Number(numberSold)
};
listOfProducts.push(salesObj);
});
//console.log(">>>>>>>>>"+listOfProducts);
callback(null, listOfProducts);
}
this.groupItems = function() {
var linesInFile = fs.readFileSync(filePath, "utf8");
var rows = linesInFile.split('\r');
var itemMap = {};
//console.log(">>>>>>>>>"+rows);
// console.log("-------->"+rows);
rows.forEach(function(products) {
var split = products.split(';');
var currentItem = split[2];
var numberSold = split[3];
if(itemMap[currentItem] === undefined){
itemMap[currentItem] = 0;
}
itemMap[currentItem] += Number(numberSold);
});
console.log("______________________________________________" + itemMap);
return itemMap;
};
//Think about creating a list of objects from the csv
//Create a function that find the most popular product, put it in a module and write a unit test.
this.mostPopularPdt = function(itemMap){
//console.log(itemMap);
var mostPopularProduct = {};
var max = 0;
for(var prop in itemMap) {
var value = itemMap[prop];
if(itemMap[prop] > max) {
max = itemMap[prop];
mostPopularProduct = {
name : prop,
amt : max
};
}
}
console.log(mostPopularProduct);
return mostPopularProduct;
};
this.leastPopularPdt = function(itemMap){
var leastPopularProduct = {};
var min = 172;
for(var prop in itemMap) {
var value = itemMap[prop];
if(itemMap[prop] < min) {
min = itemMap[prop];
leastPopularProduct = {
name : prop,
amt : min
}
}
}
console.log(leastPopularProduct);
return leastPopularProduct;
};
this.groupCat = function(itemMap) {
var productCategories = {
'Milk 1l': 'Dairy Products',
'Imasi': 'Dairy Products',
'Bread': 'Bakery',
'Chakalaka Can': 'Canned Food',
'Gold Dish Vegetable Curry Can': 'Canned Food',
'Fanta 500ml': 'Cold Beverages',
'Coke 500ml': 'Cold Beverages',
'Cream Soda 500ml': 'Cold Beverages',
'Iwisa Pap 5kg': 'Bulk',
'Top Class Soy Mince': 'Soup',
'Shampoo 1 litre': 'Cosmetics',
'Soap Bar': 'Cosmetics',
'Bananas - loose': 'Fruit',
'Apples - loose': 'Fruit',
'Mixed Sweets 5s': 'Confectionery',
'Heart Chocolates': 'Confectionery',
'Rose (plastic)': 'Valentines Goodies',
'Valentine Cards': 'Valentines Goodies'
}
var catMap = {};
for(var key in itemMap){
if(catMap[productCategories[key]] === undefined){
catMap[productCategories[key]] = 0;
}
catMap[productCategories[key]] += itemMap[key];
}
console.log(catMap);
return catMap;
/*
categories.forEach(function(categories) {
//get the category for the current product!!!!!!
var category = categories.itemName;
var prodQty = categories.soldItems;
if (catMap[category] === undefined){
catMap[category] = 0;
}
// get the quantity for the current product
//add the qty to the correct category
catMap[category] = catMap[category] + Number(prodQty);
});
console.log("-------------------kjjb,,."+catMap);
return catMap;
};
*/
};
this.mostPopularCat = function(catMap){
var mostPopularCategory = {};
var max = 0;
for(var prop in catMap) {
var value = catMap[prop];
if(catMap[prop] > max){
max = catMap[prop];
mostPopularCategory = {
name: prop,
amt: max
}
}
}
console.log(mostPopularCategory)
return mostPopularCategory;
};
this.leastPopularCat = function(catMap){
var leastPopularCategory = {};
var min = 328;
for(var prop in catMap) {
var value = catMap[prop];
if(value < min) {
min = value;
leastPopularCategory = {
name : prop,
amt : min
}
}
}
console.log(leastPopularCategory);
return leastPopularCategory;
};
};










































/*
    var fs = require('fs');

    module.exports = function(){

      this.productList = function(filePath){

        var linesInFile = fs.readFileSync(filePath, "utf8");

        var rows = linesInFile.split('\r');
          //console.log(rows.length);

          var listOfProducts = [];
          
          rows.forEach(function(row){
            var columns = row.split(';');
            var currentItem = columns[2];
            var numberSold = columns[3];

            var salesObj = {
              itemName : columns[2],
              soldItem: Number(columns[3])
            };
            listOfProducts.push(salesObj);
          });

          return listOfProducts;
        }

        this.groupItems = function(products) {
          var itemMap = {};

          products.forEach(function(products) {
            var currentItem = products.itemName;
            var numberSold = products.soldItem;

            if(itemMap[currentItem] === undefined){
              itemMap[currentItem] = 0;
            }

            itemMap[currentItem] = itemMap[currentItem] + Number(numberSold);

          });
          return itemMap;

        };

            //Think about creating a list of objects from the csv
               //Create a function that find the most popular product, put it in a module and write a unit test.
        this.mostPopularPdt = function(itemMap){
                //console.log(itemMap);
                 var mostPopularProduct = {};
                 var max = 0;
                 for(var prop in itemMap) {
                     
                    var value = itemMap[prop];
                    
                    if(itemMap[prop] > max) {
                      max = itemMap[prop];
                      mostPopularProduct = {
                        name : prop,
                        amt  : max
                     };
                 }
               }
               //console.log(mostPopularProduct);
               return mostPopularProduct;
             };

             this.leastPopularPdt = function(itemMap){
               var leastPopularProduct = {};
               var min = 172;
               for(var prop in itemMap) {
                 var value = itemMap[prop];
                 if(itemMap[prop] < min) {
                  min = itemMap[prop];
                  leastPopularProduct = {
                   name : prop,
                   amt  : min
                 }
               }
             }
               //console.log(itemMap);
               return leastPopularProduct;
             };

/*
            this.earningPerProduct = function (){
              var linesInFile = fs.readFileSync(filePath, 'utf8');
              var productLines = linesInFile.split('\r');
              var totalPrices = {};
            productLines.forEach(function(productLines){
              var splitLines = productLines.split(';');
              if(splitLines.length === 5){
            var currentItem = splitLines[2];
            var numberSold = splitLines[3];
            var price = splitLines[4];
            var replaceR = price.replace('R', '');
            var replaceComma = replaceR.replace('','','');
            if(totalPrices[currentItem] === undefined);
                }
                totalPrices[currentItem] = 0;
              }
              totalPrices[currentItem] += Number(numberSold) * Number(replaceComma);
                  }
                });
              return totalPrices;
              };  

             this.mostPopularCat = function(productMap) {

              var productCategories = {
                'Milk 1l': 'Dairy Products',
                'Imasi': 'Dairy Products',
                'Bread': 'Bakery',
                'Chakalaka Can': 'Canned Food',
                'Gold Dish Vegetable Curry Can': 'Canned Food',
                'Fanta 500ml': 'Cold Beverages',
                'Coke 500ml': 'Cold Beverages',
                'Cream Soda 500ml': 'Cold Beverages',
                'Iwisa Pap 5kg': 'Bulk',
                'Top Class Soy Mince': 'Soup',
                'Shampoo 1 litre': 'Cosmetics',
                'Soap Bar': 'Cosmetics',
                'Bananas - loose': 'Fruit',
                'Apples - loose': 'Fruit',
                'Mixed Sweets 5s': 'Confectionery',
                'Heart Chocolates': 'Confectionery',
                'Rose (plastic)': 'Valentines Goodies',
                'Valentine Cards': 'Valentines Goodies'
              }
              var catMap = {};


              for (var product in productMap){

                var category = productCategories[product];

                if (catMap[category] === undefined){
                    catMap[category] = 0;
                }

                var prodQty = productMap[product];

                catMap[category] = catMap[category] + prodQty;

              }

              console.log(catMap);

              //categories.forEach(function(categories) {
          //get the category for the current product!!!!!!
          //var category = categories.itemName;
          //var prodQty = categories.soldItems;

          //if (catMap[category] === undefined){
            //catMap[category] = 0;
          //}
          // get the quantity for the current product
          
          //add the qty to the correct category 
          //catMap[category] = catMap[category] + Number(prodQty); 
        //});

        //console.log(catMap);
        //return catMap
      //};

      var mostPopularCategory = {};
    var max = 0;

    for(var cat in catMap) {
      var value = catMap[cat];
      if(catMap[cat] > max){
        max = catMap[cat];
        mostPopularCategory = {
          name: cat,
          amt: max
        }
      }
    }
    return mostPopularCategory;
  } 


  this.leastPopularCat = function(productMap){

    var productCategories = {
      'Milk 1l': 'Dairy Products',
      'Imasi': 'Dairy Products',
      'Bread': 'Bakery',
      'Chakalaka Can': 'Canned Food',
      'Gold Dish Vegetable Curry Can': 'Canned Food',
      'Fanta 500ml': 'Cold Beverages',
      'Coke 500ml': 'Cold Beverages',
      'Cream Soda 500ml': 'Cold Beverages',
      'Iwisa Pap 5kg': 'Bulk',
      'Top Class Soy Mince': 'Soup',
      'Shampoo 1 litre': 'Cosmetics',
      'Soap Bar': 'Cosmetics',
      'Bananas - loose': 'Fruit',
      'Apples - loose': 'Fruit',
      'Mixed Sweets 5s': 'Confectionery',
      'Heart Chocolates': 'Confectionery',
      'Rose (plastic)': 'Valentines Goodies',
      'Valentine Cards': 'Valentines Goodies'
    }

    var catMap = {};

    //var val = Map[key];
    //var key = productMap[key];

    for (var product in productMap){

      //get the category for the current product!!!!!!
      var category = productCategories[product];

      if (catMap[category] === undefined){
        catMap[category] = 0;
      }
      // get the quantity for the current product
      var prodQty = productMap[product];
      //add the qty to the correct category 
      catMap[category] = catMap[category] + prodQty; 
    }

    console.log(catMap);

    var leastPopularCategory = {};
    var min = 328;

    for(var cat in catMap) {
      var value = catMap[cat];
      if(catMap[cat] < min){
        min = catMap[cat];
        leastPopularCategory = {
          name: cat,
          amt: min
        }
      }
    }
    return leastPopularCategory;
  } 
 };

/*
  var fs = require('fs');
  module.exports = function (filePath){
  this.productNames = function(callback){
  var linesInFile = fs.readFileSync(filePath, 'utf8');  
  var lines = linesInFile.split('r'); 
  var totalProducts = [];
  Lines.forEach = (function(storedLines){
  var product = storedLines.split(';');
  var currentItem = product[2];
  var productTotal = product[3];
  var productMap ={
    itemName : currentItem;
    Solditem : number(productTotal);
  };
  totalProducts.push(productTotal);
  });
  callback(null,productTotal);
  };
  this.groupedItems = function(){
  var linesInFile = fs.readFileSync(filePath, 'utf8');
  var productLine = linesInFile.split('r'); 
  var productCountMap = {};
  productLines.forEach(function(productLine){
  var splitLines = productLine.split(';');
  console.log(splitLines);
  var currentItem = splitLines[2];
  var numberSold = splitLines[3];
  if (productCountMap[currentItem] === undefined);  
  }
  productCountMap[currentItem] = 0;
  } 
  productCountMap[currentItem] += Number(numberSold);
  });
  return productCountMap;
  }


  this.mostPopular = function(productCountMap){
    var mostPopularProduct = {};
      var max = 0;
  for(var prop in productCountMap){
    var value = productCountMap[prop];
      if(value > max){
        max = value;
  mostPopularProduct = {
    mostPopularProduct : prop;
    AmountSold :max
      } 
    }
  }
  console.log(itemMap);
  return mostPopularProduct;
  };


  this.leastPopular = function(){
    var leastPopularProduct = {};
      var min = 172;
  for(var prop in productCountMap){
    var value = productCountMap[prop];
      if(value < min){
        min = value;
    
    leastPopularProduct = {
      leastPopularProduct : prop;
            AmountSold:min
      
      }   
    } 
  }   
  console.log(itemMap);
    return leastPopularProduct;
  };

  this.earningPerProduct = function (){
    var linesInFile = fs.readFileSync(filePath, 'utf8');
    var productLines = linesInFile.split('\r');
    var totalPrices = {};
  productLines.forEach(function(productLines){
    var splitLines = productLines.split(';');
    if(splitLines.length === 5){
  var currentItem = splitLines[2];
  var numberSold = splitLines[3];
  var price = splitLines[4];
  var replaceR = price.replace('R', '');
  var replaceComma = replaceR.replace('','',''.'');
  if(totalPrices[currentItem] === undefined);
      }
      totalPrices[currentItem] = 0;
    }
    totalPrices[currentItem] += Number(numberSold) * Number(replaceComma);
        }
      });
    return totalPrices;
    };  


    this.popularCategory = function () {
      var mostPopularCategory = {};
        var max = 0;
    for(var cat in productCountMap){
      value = productCountMap[cat];
        max = value;
    
    mostPopularCategory = {
      mostPopularCategory :cat;
        AmountSold :max

        } 
      }
    }
    return mostPopularCategory;
  };

    this.leastCategory = function (){
      var leastPopularCategory = {};
        var min = 328;
    for(var cat in productCountMap){
      value = productCountMap[cat];
        min = value;

    leastPopularCategory = {
      leastPopularCategory :cat;
        AmountSold : min
        
        }   
      }     
    }
    return leastPopularCategory;
  };

    this.categoryQtySold = function (productQtySold){
      var categoryMap = {
        'Dairy Products': 267,
            'Bakery': 130,
            'Bulk': 47,
            'Confectionery': 192,
            'Cosmetics': 76,
            'Fruits': 128,
            'Cold Beverages': 328,
            'Canned Food': 180,
            'Valentines Goodies': 28,
            'Soup': 98
      }
    var catStats = {};
    for(var product in prodQtyMap){
      if(catStats[categoryMap[product]] === undefined) {
    catStats[categoryMap[product]] = 0;   
        }
      catStats[categoryMap[product]] += prodQtyMap[product];    
      } 
      return catStats;
    }
  };  




  var fs = require('fs');
  module.exports = function(filePath){
  this.productList = function(callback){
  var linesInFile = fs.readFileSync(filePath, "utf8");
  var rows = linesInFile.split('\r');
  //console.log(">>>>>>>>>"+rows);
  var listOfProducts = [];
  rows.forEach(function(row){
  var columns = row.split(';');
  var currentItem = columns[2];
  var numberSold = columns[3];
  var salesObj = {
  itemName : columns[2],
  soldItem: Number(numberSold)
  };
  listOfProducts.push(salesObj);
  });
  //console.log(">>>>>>>>>"+listOfProducts);
  callback(null, listOfProducts);
  }
  this.groupItems = function() {
  var linesInFile = fs.readFileSync(filePath, "utf8");
  var rows = linesInFile.split('\r');
  var itemMap = {};
  //console.log(">>>>>>>>>"+rows);
  // console.log("-------->"+rows);
  rows.forEach(function(products) {
  var split = products.split(';');
  var currentItem = split[2];
  var numberSold = split[3];
  if(itemMap[currentItem] === undefined){
  itemMap[currentItem] = 0;
  }
  itemMap[currentItem] += Number(numberSold);
  });
  console.log("______________________________________________" + itemMap);
  return itemMap;
  };
  //Think about creating a list of objects from the csv
  //Create a function that find the most popular product, put it in a module and write a unit test.
  this.mostPopularPdt = function(itemMap){
  //console.log(itemMap);
  var mostPopularProduct = {};
  var max = 0;
  for(var prop in itemMap) {
  var value = itemMap[prop];
  if(itemMap[prop] > max) {
  max = itemMap[prop];
  mostPopularProduct = {
  name : prop,
  amt : max
  };
  }
  }
  console.log(mostPopularProduct);
  return mostPopularProduct;
  };
  this.leastPopularPdt = function(itemMap){
  var leastPopularProduct = {};
  var min = 172;
  for(var prop in itemMap) {
  var value = itemMap[prop];
  if(itemMap[prop] < min) {
  min = itemMap[prop];
  leastPopularProduct = {
  name : prop,
  amt : min
  }
  }
  }
  console.log(leastPopularProduct);
  return leastPopularProduct;
  };
  this.groupCat = function(itemMap) {
  var productCategories = {
  'Milk 1l': 'Dairy Products',
  'Imasi': 'Dairy Products',
  'Bread': 'Bakery',
  'Chakalaka Can': 'Canned Food',
  'Gold Dish Vegetable Curry Can': 'Canned Food',
  'Fanta 500ml': 'Cold Beverages',
  'Coke 500ml': 'Cold Beverages',
  'Cream Soda 500ml': 'Cold Beverages',
  'Iwisa Pap 5kg': 'Bulk',
  'Top Class Soy Mince': 'Soup',
  'Shampoo 1 litre': 'Cosmetics',
  'Soap Bar': 'Cosmetics',
  'Bananas - loose': 'Fruit',
  'Apples - loose': 'Fruit',
  'Mixed Sweets 5s': 'Confectionery',
  'Heart Chocolates': 'Confectionery',
  'Rose (plastic)': 'Valentines Goodies',
  'Valentine Cards': 'Valentines Goodies'
  }
  var catMap = {};
  for(var key in itemMap){
  if(catMap[productCategories[key]] === undefined){
  catMap[productCategories[key]] = 0;
  }
  catMap[productCategories[key]] += itemMap[key];
  }
  console.log(catMap);
  return catMap;
  /*
  categories.forEach(function(categories) {
  //get the category for the current product!!!!!!
  var category = categories.itemName;
  var prodQty = categories.soldItems;
  if (catMap[category] === undefined){
  catMap[category] = 0;
  }
  // get the quantity for the current product
  //add the qty to the correct category
  catMap[category] = catMap[category] + Number(prodQty);
  });
  console.log("-------------------kjjb,,."+catMap);
  return catMap;
  };
  
  };
  this.mostPopularCat = function(catMap){
  var mostPopularCategory = {};
  var max = 0;
  for(var prop in catMap) {
  var value = catMap[prop];
  if(catMap[prop] > max){
  max = catMap[prop];
  mostPopularCategory = {
  name: prop,
  amt: max
  }
  }
  }
  console.log(mostPopularCategory)
  return mostPopularCategory;
  };
  this.leastPopularCat = function(catMap){
  var leastPopularCategory = {};
  var min = 328;
  for(var prop in catMap) {
  var value = catMap[prop];
  if(value < min) {
  min = value;
  leastPopularCategory = {
  name : prop,
  amt : min
  }
  }
  }
  console.log(leastPopularCategory);
  return leastPopularCategory;
  };
  
*/


























































































/*
      this.mostPopularCat = function(catMap){
        var mostPopularCategory = {};
        var max = 0;

        for(var prop in catMap) {
          var value = catMap[prop];
          if(catMap[prop] > max){
            max = catMap[prop];
            mostPopularCategory = {
              name: prop,
              amt: max
            }
          }
        }
        //console.log(mostPopularCategory)
        return mostPopularCategory;
      }; 

      this.leastPopularCat = function(catMap){
       var leastPopularCategory = {};
       var min = 328;
       for(var prop in catMap) {
         var value = catMap[prop];
         if(catMap[prop] < min) {
          min = catMap[prop];
          leastPopularCategory = {
           name : prop,
           amt  : min
         }
       }
     }
            // console.log(leastPopularCategory);
            return leastPopularCategory;
          };
        };
      };
      */