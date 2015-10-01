
Alter TABLE users 
add constraint fk_user_role foreign key(users_role) references role(roles)
