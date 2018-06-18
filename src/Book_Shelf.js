import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component{
    update_book = (book, shelf) => {
        this.props.onChangeShelf(book, shelf)
      }
    render(){
        
        return(
            <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book, index) => (<Book book={book} key={index} onUpdate={(shelf) => {
              this.update_book(book, shelf)
            }}/>))}
          </ol>
        </div>
      </div>
        )
 
    }
}
export default BookShelf;