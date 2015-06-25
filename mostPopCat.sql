SELECT  categories.name, sum(sales.no_sold)
FROM sales
INNER JOIN products ON sales.prod_id = products.id
INNER JOIN categories ON products.cat_id = categories.id
GROUP BY categories.name
ORDER BY sum(sales.no_sold) DESC LIMIT 0,1;


/*

SELECT 'categories'
FROM `sales`
INNER JOIN products ON sales.prod_id
GROUP BY categories
ORDER BY (
sales.no_sold
) DESC
LIMIT 0 , 1
*/