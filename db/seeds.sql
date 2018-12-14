USE photojenia_db;


INSERT INTO users (screen_name, first_name, last_name, email)
VALUES ("smattis", "steve", "mattis", "steve@example.com");

INSERT INTO users (screen_name, first_name, last_name, email)
VALUES ("thallmen", "cam", "hallmen", "cam@example.com");

INSERT INTO users (screen_name, first_name, last_name, email)
VALUES ("kneve327", "kiara", "perez", "kiara@example.com");


INSERT INTO posts (post_header, post_body, giphy_URL, UserId)
VALUES ("Introduction", "Greetings to all!", "https://media.giphy.com/media/1108D2tVaUN3eo/giphy.gif", 1);

INSERT INTO posts (post_header, post_body, giphy_URL, UserId)
VALUES ("Hello", "Just wanted to say hello!", "https://media.giphy.com/media/l0HlSH2gsSrxJySnS/giphy.gif", 2);

INSERT INTO posts (post_header, post_body, giphy_URL, UserId)
VALUES ("Project 2", "BAAAAAABEEE SNAAAAAAAAKES!", "https://media.giphy.com/media/l3q30uBosqKse324U/giphy.gif", 3);


INSERT INTO comments (comment_body, PostID)
VALUES ("check", 1);

INSERT INTO comments (comment_body, PostID)
VALUES ("check2", 2);

INSERT INTO comments (comment_body, PostID)
VALUES ("check3", 3);