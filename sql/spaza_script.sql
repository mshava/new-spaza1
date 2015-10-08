drop table if exists purchases;
drop table if exists sales;
drop table if exists suppliers;
drop table if exists categories;
drop table if exists products;
drop table if exists users;

create table products (id int not null auto_increment,
						cat_id int, 
						name varchar(100),
						primary key(id),
						foreign key(cat_id) references categories(id)
						);

create table purchases (id int not null auto_increment,
						prod_id int not null,
						supp_id int not null,
						purchase_date,
						cost int(11),
						quantity int(11),
						primary key(id),
						foreign key(prod_id) references  products(id),
						foreign key(supp_id) references suppliers(id)
						);

create table sales (id int not null auto_increment,
						prod_id int,
						sale_date date,
						quantity int(11),
						price decimal(10.2),
						primary key (id),
						foreign key (prod_id) references products(id)
						);

create table suppliers (id int not null auto_increment,
						suppliers varchar(100),
						primary key(id)
						);

create table categories (id int not null auto_increment,
						prod_id int,
						categories varchar(100),
						primary key(id)
						foreign key(prod_id) references products(id) 
						);
create table users (id int not null primary key auto_increment,
						name varchar(100),
						username varchar(100),
						password varchar(100),
						user_role varchar(100)
						);