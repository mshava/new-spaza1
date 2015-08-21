



INSERT INTO purchases (purchase_date,quantity,cost,prod_id,supp_id)
SELECT stock_purchases_csv.date,stock_purchases_csv.quantity,stock_purchases_csv.cost,products.id,suppliers.id
FROM stock_purchases_csv,products,suppliers
WHERE stock_purchases_csv.item = products.name 
AND stock_purchases_csv.shop = suppliers.supplier;
