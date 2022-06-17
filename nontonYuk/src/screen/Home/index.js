import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {StyleSheet} from 'react-native';

function HomeScreen(props) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleViewAll = () => {
    props.navigation.navigate('Register', {
      screen: 'Register',
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{color: '#A0A3BD', paddingTop: 30, fontSize: 14}}>
          Nearest Cinema, Newest Movie,
        </Text>
        <Text style={styles.title}>Find out now!</Text>
      </View>
      <View
        style={{backgroundColor: 'white', paddingTop: 50, paddingBottom: 100}}>
        <Image
          style={{
            height: 400,
            width: windowWidth,
          }}
          source={require('../../assets/Group-13.png')}
        />
      </View>
      <View style={styles.showing}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text
            style={{
              color: '#752EEA',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Now Showing
          </Text>
          <TouchableOpacity onPress={handleViewAll}>
            <Text
              style={{
                color: '#752EEA',
                fontSize: 14,
                fontWeight: '600',
              }}>
              view all
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderColor: 'black',
            padding: 10,
            borderWidth: 1,
            top: 20,
            width: 145,
          }}>
          <Image
            style={
              {
                // height: 400,
                // width: windowWidth,
              }
            }
            source={require('../../assets/Rectangle-119.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#752EEA',
    fontSize: 34,
    fontWeight: '700',
  },
  showing: {
    backgroundColor: '#D6D8E7',
    padding: 20,
    paddingTop: 48,
    paddingBottom: 48,
  },
});
