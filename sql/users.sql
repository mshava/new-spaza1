drop table if exists users;
CREATE table users(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	name VARCHAR(100),
	username VARCHAR(45),
	password VARCHAR(45),
	user_role VARCHAR(45)
	);