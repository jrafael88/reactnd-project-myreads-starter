import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf';

const ListBooks = ({books, onChangeBook}) => {
  const wantToRead = books.filter(book => book.shelf === 'wantToRead');
  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
  const read = books.filter(book => book.shelf === 'read');

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf onChangeBook={onChangeBook} books={currentlyReading} title={'Currently Reading'} />
          <Bookshelf onChangeBook={onChangeBook} books={wantToRead} title={'Want to Read'} />
          <Bookshelf onChangeBook={onChangeBook} books={read} title={'Read'} />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks