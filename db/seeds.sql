USE photojenia_db;


INSERT INTO users (screen_name, first_name, last_name, email)
VALUES ("smattis", "steve", "mattis", "steve@example.com");

INSERT INTO users (screen_name, first_name, last_name, email)
VALUES ("thallmen", "cam", "hallmen", "cam@example.com");

INSERT INTO users (screen_name, first_name, last_name, email)
VALUES ("kneve327", "kiara", "perez", "kiara@example.com");


INSERT INTO posts (post_header, post_body, UserId)
VALUES ("Introduction", "Greetings to all!", 1);

INSERT INTO posts (post_header, post_body, UserId)
VALUES ("Hello", "Just wanted to say hello!", 2);

INSERT INTO posts (post_header, post_body, UserId)
VALUES ("Project 2", "BAAAAAABEEE SNAAAAAAAAKES!", 3);


INSERT INTO comments (comment_body, PostID)
VALUES ("check", 1);

INSERT INTO comments (comment_body, PostID)
VALUES ("check2", 2);

INSERT INTO comments (comment_body, PostID)
VALUES ("check3", 3);