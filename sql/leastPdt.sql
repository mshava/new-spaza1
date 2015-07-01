SELECT 	item , 
		SUM(qty) as qty
FROM purchases
GROUP BY item
ORDER BY qty ASC
LIMIT 0, 1
