import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../utils/axios';

function DrawerContent(props) {
  const [data, setData] = useState();
  const [image, setImage] = useState({
    uri: 'https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1655978291~hmac=238a0f3dd589e12f106cf1cf6f4a8b4d',
  });

  const getUser = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      console.log(id);
      const result = await axios.get(`user/${id}`);
      setData(result.data.data[0]);
      console.log(result.data.data[0]);
      if (result.data.data[0].image) {
        setImage({
          uri: `https://res.cloudinary.com/dusoicuhh/image/upload/v1652761552/${result.data.data[0].image}`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };

  useEffect(() => {
    if (!data) {
      console.log('get user data');
      // get user data
      getUser();
    } else {
      return;
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <View style={styles.avatar}>
            <Image
              style={{
                height: 40,
                width: 40,
                resizeMode: 'cover',
                borderRadius: 20,
              }}
              source={image}
            />
          </View>
          <View style={styles.biodata}>
            <Text style={styles.title}>{data ? data.firstName : ''}</Text>
            <Text style={styles.caption}>{data ? data.lastName : ''}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
    color: 'black',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'black',
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
