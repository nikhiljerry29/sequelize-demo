CREATE DATABASE users;
USE users;

CREATE TABLE user_details (
	id INTEGER,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email_address VARCHAR(100),
    user_password VARCHAR(500),
    createdAt DATE,
	updatedAt DATE,
    PRIMARY KEY (id)
);

-- Gig.update({ title : 'Looking for Android Developer' }, {
-- 		where: {
-- 			id: 1
-- 		}
-- });