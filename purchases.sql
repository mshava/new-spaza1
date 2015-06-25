INSERT INTO purchases (day,date,item,qty,sales_price,prod_id)
SELECT sales_csv.day,sales_csv.date,sales_csv.stock_item,sales_csv.no_sold,sales_csv.sales_price,products.id
FROM sales_csv
INNER JOIN products
ON products.name = sales_csv.stock_item;