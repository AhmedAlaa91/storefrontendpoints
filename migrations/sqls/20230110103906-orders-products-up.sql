/* Replace with your SQL commands */

create table orders_products (id SERIAL PRIMARY KEY,quantity integer ,  
    order_id integer , 
CONSTRAINT orders_prod_fk FOREIGN KEY (order_id) REFERENCES  orders(id) ON DELETE CASCADE ON UPDATE CASCADE ,
   prod_id integer , 
CONSTRAINT order_prods_fk FOREIGN KEY (prod_id) REFERENCES  products(id ) ON DELETE CASCADE ON UPDATE CASCADE 