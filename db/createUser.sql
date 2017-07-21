insert into users (firstname, lastname, username, email, auth0id)
values ($1, $2, $3, $4, $5)
RETURNING *;