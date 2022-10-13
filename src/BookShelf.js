import React from 'react';
import Book from './Book'

class BookShelf extends React.Component {
    render(){
    const { books, shelfTitle, changeBookshelf } = this.props

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {books.map(book => {
                    return (
                      <li key ={book.id}>
                      <Book 
                        imageURL = {book.imageLinks}
                        title = {book.title}
                        authors = {book.authors}
                        changeBookshelf = { changeBookshelf }
                        book = { book }
                      />  
                    </li>
                    )}
                  )}
              </ol>
          </div>
        </div>
      )}
    }

export default BookShelf