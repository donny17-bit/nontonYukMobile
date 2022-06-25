import React from 'react';
import MainStackNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import stores from './src/stores';
import {Text, View} from 'react-native';

const {store, persistor} = stores;

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainStackNavigator />
        {/* <View>
        <Text>hail</Text>
      </View> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
