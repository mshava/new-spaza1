SELECT sales.prod_id as id,products.name as name from sales,products WHERE products.id = sales.prod_id group by name; 