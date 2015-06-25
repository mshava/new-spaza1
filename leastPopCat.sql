SELECT  categories.name, sum(sales.no_sold)
FROM sales
INNER JOIN products ON sales.prod_id = products.id
INNER JOIN categories ON products.cat_id = categories.id
GROUP BY categories.name
ORDER BY sum(sales.no_sold) ASC LIMIT 0,1;

