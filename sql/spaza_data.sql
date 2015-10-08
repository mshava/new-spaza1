INSERT INTO suppliers (supplier)
SELECT distinct stock_purchases_csv.shop
FROM stock_purchases_csv;

INSERT INTO sales (sale_date,quantity,price,prod_id)
SELECT sales_csv.date,sales_csv.no_sold,sales_csv.sales_price,products.id
FROM sales_csv
INNER JOIN products
ON products.name = sales_csv.stock_item;

INSERT INTO purchases(purchase_date,quantity,cost,prod_id,suppliers_id)
SELECT sales_csv.date,sales_csv.no_sold,sales_csv.sales_price,products.id,suppliers.id
INNER JOIN products
ON products.name = sales_csv.stock_item;


INSERT INTO categories (name) VALUES ("Bakery");
INSERT INTO categories (name) VALUES ("Bulk");
INSERT INTO categories (name) VALUES ("Confectionary");
INSERT INTO categories (name) VALUES ("Cosmetics");
INSERT INTO categories (name) VALUES ("Fruits");
INSERT INTO categories (name) VALUES ("Cold Beverages");
INSERT INTO categories (name) VALUES ("Canned Food");
INSERT INTO categories (name) VALUES ("Valentines Goodies");
INSERT INTO categories (name) VALUES ("Soup");

INSERT INTO products (name,cat_id) VALUES ("Milk 1l",29);
INSERT INTO products (name,cat_id) VALUES ("Imasi",29);
INSERT INTO products (name,cat_id) VALUES ("Bread",20);
INSERT INTO products (name,cat_id) VALUES ("Chakalaka Can",26);
INSERT INTO products (name,cat_id) VALUES ("Gold Dish Vegetable Can",26);
INSERT INTO products (name,cat_id) VALUES ("Fanta 500ml",25);
INSERT INTO products (name,cat_id) VALUES ("Coke 500ml",25);
INSERT INTO products (name,cat_id) VALUES ("Cream Soda 500ml",25);
INSERT INTO products (name,cat_id) VALUES ("Iwisa Pap 5kg",21);
INSERT INTO products (name,cat_id) VALUES ("Top Class Soy Mince",28);
INSERT INTO products (name,cat_id) VALUES ("Shampoo 1 litre",23);
INSERT INTO products (name,cat_id) VALUES ("Soap Bar",23);
INSERT INTO products (name,cat_id) VALUES ("Bananas-loose",24);
INSERT INTO products (name,cat_id) VALUES ("Apples-loose",24);
INSERT INTO products (name,cat_id) VALUES ("Mixed sweets 5s",22);
INSERT INTO products (name,cat_id) VALUES ("Heart Chocolate",22);
INSERT INTO products (name,cat_id) VALUES ("Rose (plastic)",27);
INSERT INTO products (name,cat_id) VALUES ("Valentine Cards",27);