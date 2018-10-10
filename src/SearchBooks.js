import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf';
import { search } from './BooksAPI';

class SearchBooks extends Component {

  state = {
    results: []
  }
  
  search = async query => {
    if (!query) return this.clearSearch();
    const results = await search(query);
    if (results.error) return this.clearSearch();
    const resultsMap = results.map(result => {
      return Object.assign({}, result);
    });

    this.setState({
      results: resultsMap
    });
  }

  clearSearch = () => {
    this.setState({
      results: []
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={e => this.search(e.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <Bookshelf onChangeBook={this.props.onChangeBook} books={this.state.results} title={'Results'} />
        </div>
      </div>
    )
  }
}

export default SearchBooks