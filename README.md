# My-Reads
App allows user to select and categorize books based on the read actions(currently read, read, want to read). The application is built on ReactJS.

## Requirements
* npm

## How to Run
1. [Download](https://github.com/Saipavithra/books_degree-master.zip) or [Clone](https://github.com/Saipavithra/books_degree.git) the Repository.
2. Run `npm install` to install project dependencies.
3. Run `npm start` to start the application.
4. Use your browser to access `localhost:3000`.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend

* getAll()
* update()
* search()


### Function getAll()

Method Signature:
 getAll()

Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.


### Function update(book, shelf)

Method Signature:
 update(book, shelf)

book: <Object> containing at minimum an id attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
Returns a Promise which resolves to a JSON object containing the response data of the POST request

### Function search(query, maxResults)

Method Signature:
 search(query)

query: <String> returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
