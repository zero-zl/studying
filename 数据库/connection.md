# 数据库连接：
sudo apt install -y mariadb-client

连接demo数据库（maxwit）
mysql -h123.57.240.97 -uadmin -pmaxwit demo1


更改github信息（maxwit）
show tables;
insert into t_user (git_login) values ('conke-hu');
select * from t_user;
