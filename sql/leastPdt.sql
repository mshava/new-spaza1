
SELECT SUM(no_sold) as totalqty, name
FROM sales s
INNER JOIN products p
ON s.prod_id = p.id
GROUP BY name
ORDER BY SUM(no_sold) ASC
LIMIT 0, 1
