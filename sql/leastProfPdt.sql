SELECT products.name, sum(sales.sales_price * sales.no_sold)
FROM sales
INNER JOIN products ON sales.prod_id = products.id 
GROUP BY products.name
ORDER BY sum(sales.sales_price *sales.no_sold) ASC LIMIT 0,1;