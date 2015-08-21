

create table products (
id int not null auto_increment,
cat_id int,
name varchar(100),
primary key (id),
foreign key(cat_id) references categories(id)
)


