create table categories (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20)
);

CREATE TABLE products (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20),
cat_id INT(11) FOREIGN KEY(cat_id), REFERENCES categories(id)
);

CREATE TABLE sales (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
sales_date DATE,
no_sold INT(11),
sales_price decimal(10.2),
prod_id INT(11) FOREIGN KEY(prod_id), REFERENCES products(id)
);
 
CREATE TABLE suppliers (id INT NOT NULL PRIMARY KEY AUTO AUTO_INCREMENT,
shop VARCHAR(20)
date date,
item VARCHAR(20),
qty INT(11),
cost DECIMAL(10.2),
total_cost decimal(10.2)
);

CREATE TABLE purchases (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
day VARCHAR(10),
date DATE,
item VARCHAR(20),
no_sold INT(11),
sales_price decimal(10.2),
prod_id INT(11) FOREIGN KEY(prod_id), REFERENCES products(id)
);