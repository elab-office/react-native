import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Loader from './Loader';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonClick() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( this.onLoginSuccess.bind(this) )
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then( this.onLoginSuccess.bind(this) )
          .catch( this.onLoginFail.bind(this) );
      });
  }

  onLoginFail() {
     this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            placeholder= 'user@gmail.com'
            label= 'Email'
            value={ this.state.email }
            onChangeText={ email => this.setState({ email: email }) } />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={ true }
            placeholder= 'password'
            label= 'Password'
            value={ this.state.password }
            onChangeText={ password => this.setState({ password: password }) } />
        </CardSection>

        <Text style={ styles.errorStyle }>
          { this.state.error }
        </Text>

        <CardSection>
          { loading ? <Loader size='small' /> : <Button text='Log in' onPress={ this.onButtonClick.bind(this) } /> }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
