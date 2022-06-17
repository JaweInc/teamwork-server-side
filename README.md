Project Overview

TeamWork​ is an app for collaboration of employees within a company.

Tools

● Server-side Framework: Node/Express 

● Linting Library: ESLint

● Style Guide: Airbnb 

● Testing Framework: Mocha or Jasmine 

● Database: PostgreSQL

Goal:

Set up the node/express server and RESTful API, then persist the data with PostgreSQL.

What Technologies Is Needed:

NodeJS/Express Server-side programming
ESLint Linting Library, Airbnb style guide
Mocha Unit Testing Framework
PostgreSQL Database
TravisCI Continuous Integration 
Coveralls Coverage Status
GitHub Projects Project Management Board
GitHub Track changes over time in the project

Required Features of the App

Bear in mind that Markdown has only very basic support for tables, so things like table styles or merged cells will not work.

Admin can create an employee user account.
Admin/Employees can sign in.
Employees can post gifs.
Employees can write and post articles.
Employees can edit their articles.
Employees can delete their articles.
Employees can delete their gifs post.
Employees can comment on other colleagues' article post.
Employees can comment on other colleagues' gif post.
Employees can view all articles and gifs, showing the most recently posted articles or gifs first.
Employees can view a specific article.
Employees can view a specific gif post.

Getting Started

Prerequisites for installation

Node js
Express
Git

Installation

Clone this repository into your local machine:

 git clone https://github.com/JaweInc/teamwork-server-side.git

Navigate to directory from terminal:

 cd teamwork-server-side

Install dependencies:



npm init

npm install nodemon

npm install express

npm install eslint --save-dev
npm init @eslint/config

npm install eslint --save-dev

To start the application:

npm start
or
nodemon index

Use postman to test all endpoints on port 3000.
Test

Run Mocha test with:

npm run test
