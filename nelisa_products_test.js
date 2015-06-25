var assert = require("assert");

var Products = require("./nelisa_products");

describe("Find most popular product in file", function(){

    it('should return a list of product objects', function() {

        var products = new Products();
        var list = products.productList('./Nelisa Sales History.csv');
           console.log(list)
        assert.equal(449, list.length);
        
        assert.equal("Imasi", list[2].itemName);
        assert.equal(1, list[2].soldItem);

    });

    it('should return itemMap', function(){

        var products = new Products('./Nelisa Sales History.csv');
        //most_popular_product.mostPopularProduct(function(err, most_popular_product){

            var listOfProducts  = [
            {itemName: 'Milk', soldItem: 142},
            {itemName: 'Imasi', soldItem: 125},
            {itemName: 'Bread', soldItem: 130},
            {itemName: 'Chakalaka Can', soldItem: 94},
            {itemName: 'Gold Dish Vegetable Curry  Can', soldItem: 86},
            {itemName: 'Fanta 500ml', soldItem: 94},
            {itemName: 'Coke 500ml', soldItem: 159},
            {itemName: 'Cream Soda 500ml', soldItem: 75},
            {itemName: 'Iwisa Pap 5kg', soldItem: 47},
            {itemName: 'Top Class Soy Mince', soldItem: 98},
            {itemName: 'Shampoo 1l', soldItem: 26},
            {itemName: 'Soap Bar', soldItem: 50},
            {itemName: 'Bananas - loose', soldItem: 114},
            {itemName: 'Apples', soldItem: 114},
            {itemName: 'Mixed Sweets 5s', soldItem: 172},
            {itemName: 'Heart Chocolates', soldItem: 20},
            {itemName: 'Rose (plastic)', soldItem: 14},
            {itemName: 'Valentine Cards', soldItem: 14}
            ];

            var expectedMap = {'Milk': 142,'Imasi': 125,'Bread': 130,'Chakalaka Can': 94,'Gold Dish Vegetable Curry  Can': 86,'Fanta 500ml': 94,'Coke 500ml': 159,'Cream Soda 500ml': 75,'Iwisa Pap 5kg': 47,'Top Class Soy Mince': 98,'Shampoo 1l': 26,'Soap Bar': 50,'Bananas - loose': 114,'Apples': 114,'Mixed Sweets 5s': 172,'Heart Chocolates': 20,'Rose (plastic)': 14,'Valentine Cards': 14};
            var productMap = products.groupItems(listOfProducts);
               console.log(listOfProducts);
            assert.deepEqual(expectedMap, productMap);

           
    });


    it('should return the most popular product', function(){

        var products = new Products();

        var lists = { 
                 'Milk': 142,
                 'Imasi': 125,
                 'Bread': 130,
                 'Chakalaka Can': 94,
                 'Gold Dish Vegetable Curry  Can': 86,
                 'Fanta 500ml': 94,
                 'Coke 500ml': 159,
                 'Cream Soda 500ml': 75,
                 'Iwisa Pap 5kg': 47,
                 'Top Class Soy Mince': 98,
                 'Shampoo 1l': 26,
                 'Soap Bar': 50,
                 'Bananas - loose': 114,
                 'Apples': 114,
                 'Mixed Sweets 5s': 172,
                 'Heart Chocolates': 20,
                 'Rose (plastic)': 14,
                 'Valentine Cards': 14  
              };

        var result = {name: 'Mixed Sweets 5s', amt: 172};
        var productsResults = products.mostPopularPdt(lists);
              console.log(productsResults);
            assert.deepEqual(result, productsResults);

    });

it('should return the least popular product', function(){

        var products = new Products();
        var lists = { 
                 'Milk': 142,
                 'Imasi': 125,
                 'Bread': 130,
                 'Chakalaka Can': 94,
                 'Gold Dish Vegetable Curry  Can': 86,
                 'Fanta 500ml': 94,
                 'Coke 500ml': 159,
                 'Cream Soda 500ml': 75,
                 'Iwisa Pap 5kg': 47,
                 'Top Class Soy Mince': 98,
                 'Shampoo 1l': 26,
                 'Soap Bar': 50,
                 'Bananas - loose': 114,
                 'Apples': 114,
                 'Mixed Sweets 5s': 172,
                 'Heart Chocolates': 20,
                 'Rose (plastic)': 14,
                 'Valentines Cards': 14 
              };

        var result = {name: 'Rose (plastic)', amt: 14};
        var productsResults = products.leastPopularPdt(lists);
              console.log(productsResults);
            assert.deepEqual(result, productsResults);

    });
});

it('should return the most popular category', function(){

        var products = new Products();

           var productMap = {
             'Milk 1l': 142,
             'Imasi': 125,
             'Bread': 130,
             'Chakalaka Can': 94,
             'Gold Dish Vegetable Curry Can': 86,
             'Fanta 500ml': 94,
             'Coke 500ml': 159,
             'Cream Soda 500ml':75 ,
             'Iwisa Pap 5kg': 47,
             'Top Class Soy Mince':98 ,
             'Shampoo 1 litre':26 ,
             'Soap Bar': 50,
             'Bananas - loose': 114,
             'Apples - loose': 114,
             'Mixed Sweets 5s': 172,
             'Heart Chocolates': 20,
             'Rose (plastic)': 14,
             'Valentine Cards': 14
        }
        
           
        var catMap = {
          'Dairy Products': 267,
          'Bakery': 130,
          'Bulk': 47,
          'Confectionery': 192,
          'Cosmetics': 76,
          'Fruits': 128,
          'Cold Beverages': 328,
          'Canned Food': 180,
          'Valentines Goodies': 28,
          'Soup': 98 }

           var result = {name: 'Cold Beverages', amt:328};
           var mostPopularCategory = products.mostPopularCat(catMap);
                console.log(mostPopularCategory);
           assert.deepEqual(result, mostPopularCategory);      
    });

    it('should return the least popular category', function(){

        var products = new Products();

            var productMap = {
             'Milk 1l': 142,
             'Imasi': 125,
             'Bread': 130,
             'Chakalaka Can': 94,
             'Gold Dish Vegetable Curry Can': 86,
             'Fanta 500ml': 94,
             'Coke 500ml': 159,
             'Cream Soda 500ml':75 ,
             'Iwisa Pap 5kg': 47,
             'Top Class Soy Mince':98 ,
             'Shampoo 1 litre':26 ,
             'Soap Bar': 50,
             'Bananas - loose': 114,
             'Apples - loose': 114,
             'Mixed Sweets 5s': 172,
             'Heart Chocolates': 20,
             'Rose (plastic)': 14,
             'Valentine Cards': 14
        }
        
        var catMap = {
          'Dairy Products': 267,
          'Bakery': 130,
          'Bulk': 47,
          'Canfectionery': 192,
          'Cosmetics': 76,
          'Fruits': 128,
          'Cold Beverages': 328,
          'Canned Food': 180,
          'Valentines Goodies': 28,
          'Soup': 98 }

           
           var result = {name: 'Valentines Goodies', amt:28};
           var leastPopularCategory = products.leastPopularCat(catMap);
             console.log(leastPopularCategory);
           assert.deepEqual(result, leastPopularCategory);      
    });
    
    /* 
     it('Should return the total earnings per product',function(){
        
        var Products = require("./nelisa_products")
        var product = new Products();
        
            var productMap = {
                       'Milk 1l': 142,
                       'Imasi': 125,
                       'Bread': 130,
                       'Chakalaka Can': 94,
                       'Gold Dish Vegetable Curry Can': 86,
                       'Fanta 500ml': 94,
                       'Coke 500ml': 159,
                       'Cream Soda 500ml':75 ,
                       'Iwisa Pap 5kg': 47,
                       'Top Class Soy Mince':98 ,
                       'Shampoo 1 litre':26 ,
                       'Soap Bar': 50,
                       'Bananas - loose': 114,
                       'Apples - loose': 114,
                       'Mixed Sweets 5s': 172,
                       'Heart Chocolates': 20,
                       'Rose (plastic)': 14,
                       'Valentine Cards': 14
                    }
});

             
              var expectedMap = {
                 
                               'Shampoo 1 litre':780
                               'Iwisa Pap 5kg':1410 
                               'Imasi':3125 
                               'Top Class Soy Mince':1176 
                               'Bread':1560 
                               'Milk 1l':1420 
                               'Chakalaka Can':940 
                               'Cream Soda 500ml':600 
                               'Fanta 500ml':658 
                               'Coke 500ml':1113
                               'Soap Bar':300 
                               'Mixed sweets 5s':455 
                               'Rose (plastic)':210 
                               'Valentine Cards':56 

              };
            
              var earningsPerProduct = products.earningsPerProduct(productMap);
              var result = (expectedMap);
              console.log(earningsPerProduct);     
              assert.deepEqual(expectedMap, earningsPerProduct);
     });     

     */