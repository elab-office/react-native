import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Button from './components/Button';
import CardSection from './components/CardSection';
import Loader from './components/Loader';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBgNLfb6lkoxqEBdmlVBm487tr2QU3ugo',
      authDomain: 'auth-ec3f8.firebaseapp.com',
      databaseURL: 'https://auth-ec3f8.firebaseio.com',
      storageBucket: 'auth-ec3f8.appspot.com',
      messagingSenderId: '680495307201',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button text='Log out' onPress={ () => firebase.auth().signOut() } />
          </CardSection> );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Loader size="large" /></CardSection>;
    }
  }

  render() {
    const { loggedIn } = this.state;

    return (
      <View>
        <Header headerText='Authentication' />
        { this.renderContent() }
      </View>
    );
  }
}

export default App;