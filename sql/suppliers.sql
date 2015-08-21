
INSERT INTO suppliers (supplier)
SELECT distinct stock_purchases_csv.shop
FROM stock_purchases_csv;