[![Build Status](https://travis-ci.com/khuynh92/08-rest.svg?branch=master)](https://travis-ci.com/khuynh92/08-rest)

## 08-rest

Travis: https://travis-ci.com/khuynh92/08-rest
Heroku: khoa-08-rest.herokuapp.com
PR: https://github.com/khuynh92/08-rest/pull/1

in order to run this app:

 1. clone this repository

 2. in your root folder, create a .env file and set PORT to your desired port.
     example:
      `PORT = 3000` 
3. in your terminal, locate where you cloned this repository, and then type the command:
      `npm start`
4. in your broswer go to 
`http://localhost:<YOURPORTHERE>`

5. Here, you can test different RESTful routes to ensure GET requests are working for `/api/v1/pizza`
    `http://localhost::<YOURPORTHERE>/api/v1/pizza?id=hello world!`

6. To test POST, use your choice of of tools that makes requests to servers (httpie, postman). Make sure to send an object body, or a 400 error will appear. POST requests will only work on api/v1/pizza.

7. To test POST, use your choice of of tools that makes requests to servers (httpie, postman). Make sure to send an object body, or a 400 error will appear. If no id query is passed, a 404 error will appear. POST requests will only work on pathnames with id queries api/v1/pizza/?id=youridhere.

8. To test DELETE, use your choice of of tools that makes requests to servers (httpie, postman). If no id query is passed, a 404 error will appear. DELETE requests will only work on pathnames with id queries: api/v1/pizza/?id=youridhere.



