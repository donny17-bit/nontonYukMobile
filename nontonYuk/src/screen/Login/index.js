import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import styles from './style';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen(props) {
  // const handleLogin = () => {
  //   props.navigation.navigate('AppScreen', {
  //     screen: 'Home',
  //   });
  // };

  const handleRegister = () => {
    props.navigation.navigate('Register');
  };

  const handleLogin = async () => {
    try {
      console.log(form);
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('id', result.data.data.id);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);

      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.title}>
          <Image source={require('../../assets/Vector.png')} />
        </View>
        <View style={styles.form}>
          <View
            style={{
              left: 20,
              paddingTop: 20,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 26,
                fontWeight: '600',
              }}>
              Sign In
            </Text>
          </View>
          <View style={{left: 20, paddingBottom: 30, paddingRight: 20}}>
            <Text
              style={{
                color: 'gray',
                fontSize: 15,
                fontWeight: '400',
              }}>
              Sign in with your data that you entered during your registration
            </Text>
          </View>
          <View style={{left: 20, top: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '400',
              }}>
              Email
            </Text>
          </View>
          <SafeAreaView>
            <TextInput
              placeholder="Input your email ..."
              style={styles.input}
              onChangeText={text => handleChangeForm(text, 'email')}
            />
          </SafeAreaView>
          <View style={{left: 20, top: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '400',
              }}>
              Password
            </Text>
          </View>
          <SafeAreaView>
            <TextInput
              placeholder="Input your password ..."
              style={styles.input}
              onChangeText={text => handleChangeForm(text, 'password')}
            />
          </SafeAreaView>
        </View>
        <View style={{padding: 20}}>
          <Button title="Sign In" color="#5F2EEA" onPress={handleLogin} />
        </View>
        <View
          style={{
            paddingBottom: 10,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#8692A6'}}>Forgot your password? </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={{color: 'blue'}}>Reset now</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingBottom: 50,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#8692A6'}}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={{color: 'blue'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'blue',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   container2: {
//     backgroundColor: 'red',
//   },
//   textHeader: {
//     color: 'white',
//   },
// });

export default LoginScreen;
