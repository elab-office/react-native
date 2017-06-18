import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import BookDetail from './BookDetail';

class BookList extends Component {
  state = { books: [] };

  componentWillMount() {
    axios.get('https://private-f364e-booksapi11.apiary-mock.com/books')
      .then(response => this.setState({ books: response.data }));
  }

  renderBooks() {
    return this.state.books.map((book, key) =>
      <BookDetail key={ key } book={ book } />
    );
  }

  render() {
    return (
      <ScrollView>
        { this.renderBooks() }
      </ScrollView>
    );
  }
}

export default BookList;