DROP TABLE IF EXISTS blog, users;

CREATE TABLE users (
    id serial primary key,
    firstname varchar(30),
    lastname varchar(50),
    username varchar(30),
    email text,
    auth0id text,
    admin boolean
);

INSERT INTO users (firstname, lastname, username, email, auth0id)
VALUES ('Joe', 'Foster', null, null, null);
INSERT INTO users (firstname, lastname, username, email, auth0id)
VALUES ('Bob', 'Foster', null, null, '1');
INSERT INTO users (firstname, lastname, username, email, auth0id)
VALUES ('Mitch', 'Foster', 'mitchfoster3', 'mitchfoster3@gmail.com', 'WwCqJpCVVnOnbQksfXDXAy8KfF5b54m1');

CREATE TABLE blog (
    postid serial primary key,
    image text,
    title varchar(50), 
    date date,
    authorid INTEGER references users(id),
    text text
);

INSERT into blog (image, title, date, authorid, text)
VALUES (null, 'Title of the Blog Post', 'jul 19, 2017', 1, 'This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com.');

INSERT into blog (image, title, date, authorid, text)
VALUES (null, 'Second blog post', 'aug 15, 2017', 1, 'Content for post 2');
