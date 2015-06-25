/*
SELECT `item` , sum( `qty` )
FROM `purchases`
GROUP BY item
ORDER BY sum( qty ) DESC
LIMIT 0 , 1

*/

SELECT 	item , 
		SUM(qty) as qty
FROM purchases
GROUP BY item
ORDER BY qty DESC
LIMIT 0, 1
