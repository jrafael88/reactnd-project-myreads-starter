import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  onChangeBook = async (book, shelf) => {
    await BooksAPI.update(book, shelf)
      .then((item) => {
        this.setState((state) => {
          const newBook = Object.assign({}, book, { shelf })
          const filteredBooks = state.books.filter(myBook => myBook.id !== book.id);
          return {
            books: [...filteredBooks, newBook]
          }
        })
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} onChangeBook={this.onChangeBook} />
        )} />

        <Route exact path='/search' render={() => (
          <SearchBooks books={this.state.books} onChangeBook={this.onChangeBook} />
        )} />
      </div>
    )
  }
}

export default BooksApp
