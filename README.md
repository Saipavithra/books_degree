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

Backend server is provided by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform required backend operations.

### Function getAll()
* Returns a JSON object containing a collection of book objects from the backend.

### Function update(book, shelf)
* Update returns a JSON object which has the response HTTP POST.
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  

### Function search(query, maxResults)
* Returns JSON object containing a collection of book objects.
* query: `<String>`
* maxResults: `<Integer>` maxSearchResults are set to 20 based.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


