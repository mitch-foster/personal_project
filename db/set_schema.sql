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
VALUES (null, 'Title of the Blog Post', 'TEASER', 'Jul 19, 2017', 1, '<h1>Heading for blog post:</h1><p><br></p><p>This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com. This is an example of a blog post for the website pscautah.com.</p>');
INSERT into blog (image, title, teaser, date, authorid, text)
VALUES (null, 'Can Netflix Help Me Sleep?', 'Does Netflix and chill really go together?  The average netflix subscriber actually watches over an hour and a half of Netflix a day.  I have a couple friends who think that watching TV helps them sleep.  What do you think?', 'Jul 27th, 2017', 1, '<h2><strong>Does TV help sleep?</strong></h2><p>All electronic devices emit&nbsp;<strong>blue light</strong>&nbsp;that can make you stay up longer than you’d like.&nbsp;They upset your circadian rhythm, or your body’s sense of day and night.&nbsp;That would then stop your body from producing melatonin, the chemical that makes you sleepy.&nbsp;Delaying your sleep by perhaps an hour and a half to an entire hour.&nbsp;That’s why some people can stay up all night without feeling tired.</p><p><br></p><h2><strong>What you should do if you’re watching on your phone</strong></h2><p>If you’re watching TV on your phone then you have an easy option.&nbsp;On iPhones, you can now reduce blue light levels natively so long as you have iOS 9.3. Or higher.&nbsp;Turn on night shift and it’ll do it easy and efficiently.&nbsp;If you use Android or any other OS you’ll have to download a 3rd party app.&nbsp;I have an Android and have found twilight to work great.&nbsp;It even gives you an option to turn your brightness down.</p><p><br></p><h2><strong>If you’re watching on a computer</strong></h2><p>No matter your OS you should be able to download&nbsp;<strong><em>flux</em></strong>.&nbsp;It even works for Linux.&nbsp;It’ll do the exact same thing and even has a new version in beta/trial right now.&nbsp;It’s easy too, you just tell the program what kind of lighting is in your room and it’ll do the rest!</p><p><br></p><h2><strong>If you have an actual TV</strong></h2><p>This is a bit harder.&nbsp;One option is to get&nbsp;<strong><em>orange lens glasses</em></strong>&nbsp;that block blue light.&nbsp;These may be uncomfortable so you could shop around.&nbsp;Remember that the easiest option is probably just to watch TV less.&nbsp;If you could watch one less episode of Grey’s Anatomy a night, how much more productive would you be?</p>');