The APi was built using Node.js, Express framework to structure, PostgreSQL and Knex to database connections.

# Modules use:
Docker - Docker provides an abstraction and automation layer for operating system virtualization on Windows and Linux.

Cors - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Express - Framework Node.js.

Knex - A SQL Query Builder for Javascript.

Jest - A delightful JavaScript Testing Framework with a focus on simplicity.

Nodemon - A utility that will monitor for any changes in your source and automatically restart your server.

Supertest - Super-agent driven library for testing node.js HTTP servers using a fluent API.

Cross-env - Run scripts that set and use environment variables across platforms.

# Database:
```
This project used a PostgreSQL database

This project are online on Docker Hub:
oliveirabalsa/api-luizalabs_app
https://hub.docker.com/repository/docker/oliveirabalsa/api-luizalabs_app

```
# Commands:
```
1- docker-compose up => To install all project dependencies
2- npm run test => For test authentication


in header set "Authorization" that i sent on the email.

```
# Endpoint Router:
```
  BASE URL:
  http://localhost:3000

  CUSTOMERS
  
  get /api/customer
  post /api/customer
  get /api/customer/id
  delete /api/customer/id
   
  PRODUCTS
  
  get /api/product
  post /api/product
  get /api/product/id
  delete /api/product/id
  
  CUSTOMER PRODUCTS
  
  get /api/customer/id/product

```

# Post customer:

```
Example => /customer

    {
        "id": 1,
        "name": "Leonardo",
        "email": "leo@leo.com"
    }



```
# Get by Id:
```
Example => /customer/1

[
    {
        "id": 1,
        "name": "leo",
        "email": "leo@leo.com"
    }
]

```
# Get all:
```
Example => /customer?page=1

[
    {
        "id": 1,
        "name": "Leonardo",
        "email": "leo@leo.com"
    },
    {
        "id": 2,
        "name": "Teste",
        "email": "teste@leo.com"
    },
]

```


# Post product:
```
Example => /product

{
   "title": "Produto teste",
   "price": 22.50,
   "image": "http://img.com.br",
   "brand": "teste",
   "reviewScore": 1,
   "customer_id": 1
}

```


# Get customer products:
```
Example => /customer/1/product

[
    {
        "id": 1,
        "name": "Leonardo",
        "email": "leo@leo.com"
    }
]

```





