import React from 'react';

class BookShelfChanger extends React.Component {
    render() {

    const { changeBookshelf, book } = this.props
    // const selectedValue = 'none'

    return(
    <select onChange={(event) => changeBookshelf(book, event.target.value)}
    defaultValue={book.shelf}
    >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
    )}
}

export default BookShelfChanger

