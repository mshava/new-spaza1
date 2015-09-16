CREATE TABLE users (
id int not null auto_increment,
email_address varchar(100),
username varchar(50),
password varchar(16),
role varchar(20),
primary key(id)
);
