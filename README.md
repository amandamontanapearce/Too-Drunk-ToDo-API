
# CRUD Warmup Server

This is the second part of a 3-part warmup series where you will build a de-coupled Full Stack App.

You'll be using express to create a JSON API, and you'll deploy the API to heroku.

# Getting Started

Fork/clone this repo. Make a pull request when finished.

### Generate an Express App

```
express .
```

Create a folder in the root called `api`

All of your CRUD endpoints will exist inside of the `api` folder.

### Connecting to your DB

* Copy the `knexfile.js` from your DB warmup into the root of this folder.
* Create a folder called db with a `knex.js` file inside that uses the connection information from `knexfile.js` and exports a connected instance of knex

### Signup

For the user table created in the DB warmup, you will only need a POST route to create a user:

Method: `POST`

Endpoint: `/auth/signup`
* Creates a user in the user table IFF a user with the given username does not exist in the DB.
  * Hash the password with bcrypt
* Responds with the ID of the user if the user was created.
* Responds with an error message and an error status code if the user is already in the DB.

### CRUD

Your API should include full CRUD routes for the other resources in your DB.

Each resource endpoint should begin with: `/api/resourceName`

* `GET` `/api/resourceName`
  * Respond with all rows in DB
* `GET` `/api/resourceName/:id`
  * Respond with a single row from DB
* `POST` `/api/resourceName`
  * Inserts a row into the DB with the data from the body of the request
* `PUT` `/api/resourceName/:id`
  * Updates a single row in the DB with the data from the body of the request
* `DELETE` `/api/resourceName/:id`
  * Deletes a single row in the DB

## Testing your API

You use a tool like `postman` to test your API endpoints.

# Deploy!

Go to the heroku dashboard and copy the git url from the heroku app you created in the DB warmup.

Add the heroku remote to this repo:

`git remote add heroku your-heroku-git-url-here`

Add/commit your changes, then push to heroku:

`git push heroku master`

# Too-Drunk-ToDo-App
