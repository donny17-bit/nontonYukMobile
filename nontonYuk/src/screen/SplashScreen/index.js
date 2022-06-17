import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function SplashScreen(props) {
  useEffect(() => {
    const token = false;
    // props.navigation.navigate('AuthScreen');
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1000);
  }, []);

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
}

export default SplashScreen;
