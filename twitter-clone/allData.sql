


INSERT INTO follows (User1Id,User2Id) VALUES (1,2);
INSERT INTO follows (User1Id,User2Id) VALUES (2,1);
INSERT INTO follows (User1Id,User2Id) VALUES (4,1);
INSERT INTO follows (User1Id,User2Id) VALUES (1,4);
INSERT INTO follows (User1Id,User2Id) VALUES (3,2);

INSERT INTO post (PostId,UserId,PostText,Likes,Timestamp) VALUES (1,1,"Hey guys!",'0',"2022-04-26 12:00:00");
INSERT INTO post (PostId,UserId,PostText,Likes,Timestamp) VALUES (2,4,"Welcome!",'3',"2022-04-25 20:15:12");

INSERT INTO user (UserId,FirstName,LastName,Password,IsAdmin) VALUES (1,'John','Doe','password',false);
INSERT INTO user (UserId,FirstName,LastName,Password,IsAdmin) VALUES (2,'James','Delroy','password1',false);
INSERT INTO user (UserId,FirstName,LastName,Password,IsAdmin) VALUES (3,'Jamie','Flake','password2',true);
INSERT INTO comment (Text,PostId,UserId) VALUES ("This is a test",4,1);