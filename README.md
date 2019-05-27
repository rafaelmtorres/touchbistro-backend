# TouchBistro backend application

Backend application part of the Fullstack challenge for TouchBistro. Must be used with:

https://github.com/rafaelmtorres/touchbistro-backend

**Author:** Rafael Torres
**E-mail:** rafaelmtorres@gmail.com

### Overview

This is a simple backend application responsible for finding the median of generated primes numbers.

**Important**: In order to run the UI you must run the backend application first. Please, see instructions in the corresponding README file. 

* Javascript
* Node.js
* Express
* Supertest
* Mocha
* Chai
* Nodemon
* Sinon 

### Pre-requisites

To be able to run the application you must have the following installed:

* Node
* npm
* Run https://github.com/rafaelmtorres/touchbistro-backend

Installation steps are out of the scope of this document.

## Running the app:

In the project directory, you can run:

### `npm start`

Opens a REST client and go to: http://localhost:9000/touchbistro/v1/prime/median

Send a body content of: 

{
	"number" : ANY_NUMBER
}

It will return an object like this:

{
    "median": [
        7,
        11
    ]
}

### `npm test`

To run the application tests use the command above.
