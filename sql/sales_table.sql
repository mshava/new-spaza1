

create table sales (
id int not null auto_increment,
prod_id int,
sale_date date,
quantity int(11),
price decimal(10.2),
primary key (id),
foreign key (prod_id) references products(id)
)
