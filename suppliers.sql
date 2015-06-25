INSERT INTO suppliers (shop,date,item,qty,cost,total_cost)
SELECT stock_purchases_csv.shop,stock_purchases_csv.date,stock_purchases_csv.item,stock_purchases_csv.quantity,stock_purchases_csv.cost,stock_purchases_csv.total_cost
FROM stock_purchases_csv;