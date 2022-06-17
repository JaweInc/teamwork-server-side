CREATE DATABASE teamwork_db;

CREATE TABLE teamwork_admin (
    id SERIAL PRIMARY KEY,
);

CREATE TABLE teamwork_employee (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    gender VARCHAR(10),
    jobRole VARCHAR(200),
    department VARCHAR(200),
    address VARCHAR(255)
);

/* ALTER TABLE gif_comment ADD uploaded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP; */

CREATE TABLE employee_gif (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    image VARCHAR(255),
    title VARCHAR(255),
    uploaded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_article (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    title VARCHAR(255),
    article TEXT,
    uploaded DATIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE article_comment (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    article_id INT,
    comment TEXT,
    uploaded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE gif_comment (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    gif_id INT,
    comment TEXT
    uploaded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

