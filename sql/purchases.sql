INSERT INTO purchases (date,qty,sales_price,prod_id,suppliers_id)
SELECT sales_csv.date,sales_csv.no_sold,sales_csv.sales_price,products.id,sales_csv.shop
FROM sales_csv
INNER JOIN products
ON products.name = sales_csv.stock_item;