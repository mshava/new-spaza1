
create table purchases(
	id int not null auto_increment,
	prod_id int not null,
	supp_id int not null,
	purchase_date date,
	cost int(11),
	quantity int(11),
	primary key(id),
	foreign key(prod_id) references products(id),
	foreign key(supp_id) references suppliers(id)
)