## **Project Overview**

TeamWork​ is an app for collaboration of employees within a company.

## **Goal:**

Set up the node/express server and RESTful API, then persist the data with PostgreSQL.

## **What Technologies Is Needed:**

* NodeJS/Express Server-side programming
* ESLint Linting Library, Airbnb style guide
* Mocha Unit Testing Framework
* PostgreSQL Database
* TravisCI Continuous Integration
* Coveralls Coverage Status
* GitHub Projects Project Management Board
* GitHub Track changes over time in the project

## **Required Features of the App**

1. Admin can create an employee user account.
2. Admin/Employees can sign in.
3. Employees can post gifs.
4. Employees can write and post articles.
5. Employees can edit their articles.
6. Employees can delete their articles.
7. Employees can delete their gifs post.
8. Employees can comment on other colleagues' article post.
9. Employees can comment on other colleagues' gif post.
10. Employees can view all articles and gifs, showing the most recently posted articles or gifs first.
11. Employees can view a specific article.
12. Employees can view a specific gif post.

## **Getting Started**

### **Prerequisites for installation**

* Node js
* Express
* Git

### **Installation**

* Clone this repository into your local machine:

```plaintext
 git clone https://github.com/JaweInc/teamwork-server-side.git
```

* Navigate to directory from terminal:

```plaintext
 cd teamwork-server-side
```

* Install dependencies:

```plaintext
npm init
```

```plaintext
npm install nodemon
```

```plaintext
npm install express
```

```plaintext
npm install eslint --save-dev
npm init @eslint/config
```

```plaintext
npm install eslint --save-dev
```

* To start the application:

```plaintext
npm start
or
nodemon index
```

* Use postman to test all endpoints on port 3000.
* Test

Run Mocha test with:

```plaintext
npm run test
```
