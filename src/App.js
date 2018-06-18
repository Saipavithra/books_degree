import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as BooksAPI from './Utils/BooksAPI'
import Listing_Books from './Listing_Books'
import Book_Search from './Book_Search'
import Book from './Book'
import {Route} from 'react-router-dom'

class App extends Component {
  state ={
    Books:[]

  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ Books : books})
    })
  }
  
  update_book = (book, shelf) => {
    BooksAPI.update(book,shelf).then(() => {
      this.componentDidMount()
    })
  }
  render(){
    return(
      <div className = "app">
        <Route exact path="/" render={() =>(
          <Listing_Books 
          Books={this.state.Books} 
          onChange={this.update_book}
         />
        )}/>
        <Route path="/search" 
         render={({history}) => (<Book_Search onChange={this.update_book} 
         myBooks={this.state.Books}/>)} 
         />
      </div> 
    )
  }
}


export default App;
