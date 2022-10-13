import React from 'react';
import BookShelf from './BookShelf';
import  { Link } from 'react-router-dom';

class BookShelfContainer extends React.Component {

  bookShelves = [{id: 1, type:'currentlyReading', name: 'Currently Reading'},
  {id: 2, type:'read', name: 'Read'},
  {id: 3, type:'wantToRead', name: 'Want to Read'},]


    render(){
      const {books, changeBookshelf } = this.props

      return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.bookShelves.map(shelf => {
                  const bookByShelfName = books.filter(book => book.shelf === shelf.type);
                    return (
                        <BookShelf 
                        key ={shelf.id}
                        books = {bookByShelfName} 
                        shelfTitle = {`${shelf.name}`}
                        changeBookshelf = { this.props.changeBookshelf } 
                        />
                    )}
                  )}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
              <button>Add a book</button>
              </Link>
            </div>
        </div>
      )
        
    }
  }

export default BookShelfContainer


              