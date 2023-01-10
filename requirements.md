# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
http://localhost:3000/index

- Show
http://localhost:3000/show/:id

- Create [token required]
http://localhost:3000/create

#### Users
- Index [token required]
http://localhost:3000/users
- Show [token required]
http://localhost:3000/users/:id
- Create N[token required]
http://localhost:3000/create

#### Orders
- Current Order by user (args: user id)[token required]
http://localhost:3000/currentorders

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category
products
(
    id integer NOT NULL DEFAULT nextval('products_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    price integer,
    category character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT products_pkey PRIMARY KEY (id)
)

#### User
- id
- firstName
- lastName
- password
users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    firstname character varying(255) COLLATE pg_catalog."default",
    lastname character varying(255) COLLATE pg_catalog."default",
    pwd character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
orders
(
    id integer NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
    user_id integer,
    status character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT orders_pkey PRIMARY KEY (id),
    CONSTRAINT order_user_fk FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
orders_products
(
    id integer NOT NULL DEFAULT nextval('orders_products_id_seq'::regclass),
    quantity integer,
    order_id integer,
    prod_id integer,
    CONSTRAINT orders_products_pkey PRIMARY KEY (id),
    CONSTRAINT order_prods_fk FOREIGN KEY (prod_id)
        REFERENCES public.products (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

