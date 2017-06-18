import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/Header';
import TechnologyList from './components/TechnologyList';

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <View style={{ flex: 1 }}>
        <Header headerText='Tech Info' />
        <TechnologyList />
      </View>
    </Provider>
  );
};

export default App;