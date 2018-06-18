import React, {Component} from 'react'
import BookShelf from './Book_Shelf'
import Book from './Book'
import {Link} from 'react-router-dom'

import Book_Search from './Book_Search'


class Listing_Books extends Component{
    render()
    {
    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                <BookShelf books={this.props.Books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" onChangeShelf={this.props.onChange} />
                <BookShelf books={this.props.Books.filter((book) => (book.shelf === "read"))} title="Read" onChangeShelf={this.props.onChange} />
                <BookShelf books={this.props.Books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" onChangeShelf={this.props.onChange} />
                
                </div>
         
            </div> 
            <div className="open-search">
            <Link
            to="/search"
            >Search
            </Link>
            </div>
        </div>
      )
    }
}
export default Listing_Books;

