import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class Search extends React.Component {

state = {
    searchInfo: {
        results:[],
        query: ' '
    },
    updatedResults: [],
    error: null,
}

makeSearchRequest = event => {
    const query = event.target.value.trim()
    if(query.length === 0) {
        this.setState ({updatedResults:[]})
    }
    else {
        BooksAPI.search(query).then(res => {
            this.setState ({ searchInfo: { query: query }, updatedResults: res})
            return res
        })
        .then(res => this.updateShelf(res))
    }
}

updateShelf = (res) => {
    const searchResults = Array.isArray(res) ? res : []
    const results = searchResults.map(book => {

        book.shelf = 'none'
        this.props.myBooks.map(myBook => {
            if(book.id === myBook.id) {
                book.shelf = myBook.shelf;
                // console.log('book', book)
            }
        })
        return book;
    })

    this.setState({updatedResults:results})
}

render(){
    const { showSearchPage } = this.props
    console.log("this.state.updatedResults", this.state.updatedResults)

    return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link to="/">
            <button className="close-search" onClick={showSearchPage}>Close</button>
            </Link>
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type= {this.state.query}
                      onChange = {(e) => {this.makeSearchRequest(e); }}
                      placeholder="Search by title or author"/>
                </div>
            </div>

            <div className="search-books-results">
                {!Array.isArray(this.state.updatedResults) || this.state.updatedResults.length === 0  ?
                    (<div>
                    No results found
                    </div>
                    ) : (
                    <ol className="books-grid">
                        {this.state.updatedResults.map(book => {
                        return (
                            <li key ={book.id}>
                                <Book
                                imageURL={book.imageLinks}
                                title={book.title}
                                authors={book.authors}
                                changeBookshelf={this.props.changeBookshelf}
                                book={book}
                                />
                            </li>)}
                        )}
                    </ol>
                    )
                }
           </div>
        </div>
    )}
}

export default Search