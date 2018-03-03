DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INTEGER NOT NULL,
    stock_quantity INTEGER default 0,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Teddy Bear', 'Toys', 15, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Baseball', 'Sports', 7, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Thor Ragnarok', 'Movies', 20, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Black Panther', 'Movies', 20, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Coffee', 'Food', 15, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Penut Butter', 'Food', 5, 86);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('PJ Mask T-Shirt', 'Kids CLothing', 11, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('MY Little Pony Dress', 'Kids Clothing', 14, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Carpet Cleaner', 'Cleaning products', 9, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Scrub Brush', 'Cleaning products', 5, 16);