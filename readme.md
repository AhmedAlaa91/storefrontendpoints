STOREFRONT  

ENVIRONMENT VARIABLES A

create an environemnt file  .env at the root of the project:

POSTGRES_HOST=127.0.0.1
POSTGRES_DB=store_db
POSTGRES_DB_TEST=store_db_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=*******
ENV =dev
BCRYPT_PASSWORD=your-secret-PASSWORD
SALT_ROUNDS=10
TOKEN_SECRET=******

# to test the app
npm run test 

# to run the app
 npm run start 


# APIs 

# you need to create user to generate token  , i created user method first then added token method to check the token

# for the users model

1- Index [token required]


![Screenshot](./screenshots/picture1.png)




2-Show [token required]

![Screenshot](./screenshots/picture2.png)


3- Create N[token required]

![Screenshot](./screenshots/picture3.png)




# products model

1-	Index


![Screenshot](./screenshots/picture4.png)



2-	Show 


![Screenshot](./screenshots/picture5.png)

3-	Create [token required]


![Screenshot](./screenshots/picture6.png)





# order model

1-	Current Order by user (args: user id)[token required]


![Screenshot](./screenshots/picture7.png)

