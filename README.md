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
