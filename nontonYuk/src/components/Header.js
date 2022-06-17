import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Header(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={style.header}>
      <View>
        <Image source={require('../assets/Vector.png')} />
      </View>
      <TouchableOpacity onPress={openDrawer}>
        <Image source={require('../assets/Group.png')} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
});
