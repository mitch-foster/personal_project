DROP TABLE IF EXISTS blog, users;

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
INSERT INTO users (firstname, lastname, username, email, auth0id)
VALUES ('Joe', 'Foster', null, null, null);
INSERT INTO users (firstname, lastname, username, email, auth0id)
VALUES ('Bob', 'Foster', null, null, '1');

CREATE TABLE blog (
    postid serial primary key,
    image text,
    title varchar(50), 
    teaser text,
    date text,
    authorid INTEGER references users(id),
    text text
);


INSERT into blog (image, title, teaser, date, authorid, text)
VALUES (null, 'Second blog post', 'This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post.', 'Aug 15, 2017', 1, 'Content for post 2');
INSERT into blog (image, title, teaser, date, authorid, text)
VALUES (null, 'Second blog post', 'This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post.', 'Aug 15, 2017', 1, 'Content for post 2');
INSERT into blog (image, title, teaser, date, authorid, text)
VALUES (null, 'Second blog post', 'This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post.', 'Aug 15, 2017', 1, 'Content for post 2');
INSERT into blog (image, title, teaser, date, authorid, text)
VALUES (null, 'Second blog post', 'This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post.', 'Aug 15, 2017', 1, 'Content for post 2');
INSERT into blog (image, title, teaser, date, authorid, text)
VALUES (null, 'Second blog post', 'This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post.', 'Aug 15, 2017', 1, 'Content for post 2');
INSERT into blog (image, title, teaser, date, authorid, text)
VALUES (null, 'Second blog post', 'This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post.', 'Aug 15, 2017', 1, 'Content for post 2');
INSERT into blog (image, title, teaser, date, authorid, text)
VALUES (null, 'Second blog post', 'This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post.', 'Aug 15, 2017', 1, 'Content for post 2');
INSERT into blog (image, title, teaser, date, authorid, text)
VALUES (null, 'Second blog post', 'This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post. This is the teaser to the blog post.', 'Aug 15, 2017', 1, 'Content for post 2');


INSERT into blog (image, title, date, authorid, text)
VALUES (null, 'Title of the Blog Post', 'Jul 19, 2017', 1, '<h1>Heading for blog post:</h1><p><br></p><p>This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com.</p>');