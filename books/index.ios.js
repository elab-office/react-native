// Import-ovati odgovarajuce module
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import BookList from './src/components/BookList';

// Kreairati komponentu
const App = () => {
  return (
    <View>
      <Header headerText='Books' />
      <BookList />
    </View>
  );
};

// Prikazati komponentu (Render it)
AppRegistry.registerComponent('books', () => App);

