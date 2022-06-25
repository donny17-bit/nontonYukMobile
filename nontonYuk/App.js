import React from 'react';
import {View, Text} from 'react-native';
import MainStackNavigator from './src/navigation';
import {Provider} from 'react-redux';
import stores from './src/stores';
const {persistor, store} = stores;

function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}

export default App;
