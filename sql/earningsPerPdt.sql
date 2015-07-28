SELECT products.name, sum(sales.price * sales.quantity) as earningsPerProduct 
FROM sales 
INNER JOIN products 
	ON sales.prod_id =products.id 
GROUP BY products.name ORDER BY sum(sales.price) DESC;
