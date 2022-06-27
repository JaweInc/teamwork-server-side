CREATE DATABASE teamwork;

CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    username VARCHAR(200),
    password VARCHAR(200)
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    gender VARCHAR(10),
    jobrole VARCHAR(200),
    department VARCHAR(200),
    address VARCHAR(255),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

/* ALTER TABLE gif_comment ADD uploaded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP; */

CREATE TABLE add_gif (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    image VARCHAR(255),
    title VARCHAR(255),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE add_article (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    title VARCHAR(255),
    article TEXT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE article_comment (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    article_id INT,
    comment TEXT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE gif_comment (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    gif_id INT,
    comment TEXT
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

