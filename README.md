# ITommey-test

# Task
The backend side will manage product, with REST over HTTP API request:

1. Create Web Server App using Express.js or Hapi to handle product data
2. Backend side should use SQL database engine such: Postgres/SQL Server/MySQL wrapped with ORM
3. For ORM library, please use Sequelize/Knex for migration, seeding, and data processing (CRUD). Prevent using sql script directly!
4. Create migration for product schema with fields:
```
- id: BIGINT
- name: VARCHAR
- qty: INT
- picture: TEXT with Base64 value
- expiredAt: DATE YYYY-MM-DD
- isActive: BOOLEAN
```

5. Don't forget to seed it with some initial data.
6. HTTP response and request body payload should formated in JSON format
7. Describe your endpoint as a REST, this is available endpoints for manage product:
```
- Add product: /POST /product
- Get products: /GET /product
- Get product by id: /GET /product/:id
- Remove product by id: /DELETE /product/:id
- Update product by id: /PUT /product/:id
```

8. With REST specification:
```
- For getting product should returned with true value in isActive field
- Filtering product by specific criteria, sorter and pagination product is optional.
- While deleting product, we use "soft delete" with set isActive field to false
- Post a product always set isActive value to true
- Updating product should block isActive value from body payloads
```

9. Endpoint of logging activity, unit testing, and Swagger API docs are optional
10. Write clean and effective code for example: proper project structure, exception handling, parameterize config, etc.
11. Push your work to your GitHub repository, make sure your repository accessible to public.

assigment:

CRUD:
[x] add product 
[x] get all product
[x] get product by id
[x] soft delete 
[x] edit product

spesification:
[x] picture: TEXT with Base64 value
[x] expiredAt: DATE YYYY-MM-DD
[x] pegination (optional)
[x] sorter
[x] Filtering product by specific criteria
[x] Post a product always set isActive value to true
[x] Updating product should block isActive value from body payloads
[x] For getting product should returned with true value in isActive field

optional: 
[] unit testing
[] Swagger API docs
[] Endpoint of logging activity