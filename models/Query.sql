CREATE DATABASE codegig;
USE codegig;

CREATE TABLE gigs(
	id SERIAL,
    title VARCHAR(200),
    technologies VARCHAR(200),
    budget VARCHAR(30),
    gigs_description TEXT,
    contact_email VARCHAR(50),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY (id)
);

-- Gig.update({ title : 'Looking for Android Developer' }, {
-- 		where: {
-- 			id: 1
-- 		}
-- });