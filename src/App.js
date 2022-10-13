import React from 'react'
import './App.css'
import Search from './Search'
// import BookShelf from './BookShelf'
import BookShelfContainer from './BookShelfContainer'
import * as BooksAPI from './BooksAPI'
import { Routes, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false,
    books: []
  }

  componentDidMount (){
    BooksAPI.getAll().then((books) => {
      this.setState ({books})
    })
  }
  
  changeBookshelf = (book, shelfName) => {
      BooksAPI.update(book, shelfName).then(res => {

        //Update the book's new shelf
        book.shelf = shelfName

        //Remove the book from the previous shelf
        const removedBookArray = this.state.books.filter(localBook => localBook.id !== book.id)

        //Combine the book with updated shelf with removed book from the previous shelf
        const newBooksArray = [...removedBookArray, book]
        this.setState({books: newBooksArray})
    })
  }

 
  // handleShowSearch = () => {
  //   this.setState(() => ({showSearchPage: false}))
  // }


  // bookShelves = [{id: 1, type:'currentlyReading', name: 'Currently Reading'},
  //                {id: 2, type:'read', name: 'Read'},
  //                {id: 3, type:'wantToRead', name: 'Want to Read'},]

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={
          <BookShelfContainer 
            books={this.state.books}
            changeBookshelf={this.changeBookshelf}/>}
          />
          <Route path="/search" element={
            <Search 
            myBooks = {this.state.books}
            showSearchPage={this.handleShowSearch}
            changeBookshelf={this.changeBookshelf}       
            />}
          />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
