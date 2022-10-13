import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import imageNotFound from './images/imageNotFound.png'


class Book extends React.Component {
    render() {

    const { book, imageURL, title, authors , changeBookshelf } = this.props
    const thumbnailValidated = imageURL ? imageURL.thumbnail : imageNotFound
    const titleValidated = title ? title : "Title not available"
    const authorsValidated = authors ? authors : "Authors not available"

      return (
        <div className="book">
          <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${thumbnailValidated})`}}></div>
              <div className="book-shelf-changer">
              <BookShelfChanger
              changeBookshelf = { changeBookshelf }
              book = { book }
              />
              </div>
          </div>
          <div className="book-title">{titleValidated}</div>
          <div className="book-authors">{authorsValidated}</div>
        </div>
      )
    }
  }

  export default Book


