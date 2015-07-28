SELECT SUM(quantity) as totalqty, name
FROM sales s
INNER JOIN products p
ON s.prod_id = p.id
GROUP BY name
ORDER BY SUM(quantity) DESC
LIMIT 0, 1
