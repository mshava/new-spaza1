<<<<<<< HEAD
INSERT INTO purchases (date,qty,sales_price,prod_id,suppliers_id)
SELECT sales_csv.date,sales_csv.no_sold,sales_csv.sales_price,products.id,sales_csv.shop
FROM sales_csv
INNER JOIN products
ON products.name = sales_csv.stock_item;
=======




INSERT INTO purchases (purchase_date,quantity,cost,prod_id,supp_id)
SELECT stock_purchases_csv.date,stock_purchases_csv.quantity,stock_purchases_csv.cost,products.id,suppliers.id
FROM stock_purchases_csv,products,suppliers
WHERE stock_purchases_csv.item = products.name 
AND stock_purchases_csv.shop = suppliers.supplier;
>>>>>>> ab4b96d189e21087bd9f666b7a658e7223a600c9
