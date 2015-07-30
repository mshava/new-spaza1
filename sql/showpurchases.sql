SELECT  purchases.date,purchases.qty,purchases.sales_price, products.name
from purchases,products
where products.id = purchases.prod_id
order by purchases.date;