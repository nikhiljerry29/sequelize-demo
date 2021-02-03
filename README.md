# Sequelize-Demo with Authentication

This is the sequelize demo using MySql Database user authentication application using Node.js, Express, Passport, Sequelize, EJS and using bcrypt encryption.

## Usage

1. Run the [MySql scripts](/models/Query.sql) in your local or cloud MySql server.

2. Create ".env" file and add your MySql URI (MYSQLURI), salting variable (SALTROUNDS) and secret string for pasport (SECRET).

```sh
$ npm install
# Installing the application
```

```sh
$ node app.js
# Or run with Nodemon
$ nodemon app.js
```

Default Port :: [8080](http://localhost:8080)