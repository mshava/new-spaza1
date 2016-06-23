SELECT products.name, sum(sales_price * sales.no_sold) as earningsPerProduct
FROM sales
INNER JOIN products
	ON sales.prod_id =products.id
GROUP BY products.name ORDER BY sum(sales_price) DESC;
