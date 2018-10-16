import React, { PureComponent, Component } from 'react'
import { render } from 'react-dom'

class Bookshelf extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover">
                      {book.imageLinks && <div className="book-cover-image" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>}
                    </div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf || 'none'} onChange={e => this.props.onChangeBook(book, e.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  {book.authors && <div className="book-authors">{book.authors[0]}</div>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf