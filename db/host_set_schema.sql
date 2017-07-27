CREATE TABLE users (
    id serial primary key,
    firstname varchar(30),
    lastname varchar(50),
    username varchar(30),
    email text,
    admin boolean,
    auth0id text
);

INSERT INTO users (firstname, lastname, username, email, admin, auth0id)
VALUES ('Mitch', 'Foster', 'mitchfoster3', 'mitchfoster3@gmail.com', true, 'WwCqJpCVVnOnbQksfXDXAy8KfF5b54m1');

CREATE TABLE blog (
    postid serial primary key,
    image text,
    title varchar(50), 
    teaser text,
    date text,
    authorid INTEGER references users(id),
    text text
);


