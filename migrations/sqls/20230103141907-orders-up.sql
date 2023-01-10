/* Replace with your SQL commands *//* Replace with your SQL commands */
CREATE TABLE orders ( id SERIAL PRIMARY KEY,
 user_id integer , CONSTRAINT order_user_fk FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
   status varchar(20));


     

