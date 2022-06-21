import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import {StyleSheet} from 'react-native';
import axios from '../../utils/axios';

function Profile(props) {
  const [data, setData] = useState([]);
  const month = [
    {name: 'January', id: 1},
    {name: 'February', id: 2},
    {name: 'March', id: 3},
    {name: 'April', id: 4},
    {name: 'May', id: 5},
    {name: 'June', id: 6},
    {name: 'July', id: 7},
    {name: 'August', id: 8},
    {name: 'September', id: 9},
    {name: 'October', id: 10},
    {name: 'November', id: 11},
    {name: 'December', id: 12},
  ];

  const getMoviesByMonth = async bulan => {
    try {
      const result = await axios.get(
        `movie?searchRelease=${bulan}&limit=10&page=1`,
      );
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMonth = bulan => {
    getMoviesByMonth(bulan);
    // const handleChangeForm = (text, name) => {
    //   setForm({...form, [name]: text});
    // };
  };

  const handleDetail = id => {
    props.navigation.navigate('DetailMovie', {id: id});
  };

  useEffect(() => {
    // default temporary
    getMoviesByMonth('5');
  }, []);

  return (
    <View>
      <View style={{padding: 20}}>
        <View style={{paddingTop: 20}}>
          <Text style={styles.title}>List Movie</Text>
        </View>
        <View style={styles.container}>
          <FlatList
            data={month}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View
                style={{
                  paddingTop: 20,
                  flexDirection: 'row',
                  marginEnd: 10,
                }}>
                <Button
                  title={item.name}
                  color="#5F2EEA"
                  onPress={e => handleMonth(`${item.id}`)}
                />
              </View>
            )}
          />
        </View>
        {/* <View style={styles.container}> */}
        <FlatList
          style={{marginBottom: 300}}
          numColumns={2}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.imageCard}>
              <Image
                source={{
                  uri: `https://res.cloudinary.com/dusoicuhh/image/upload/v1652761552/${item.image}`,
                }}
                style={{
                  width: 120,
                  height: 180,
                  resizeMode: 'cover',
                }}
              />
              <Text
                style={{
                  paddingTop: 10,
                  color: 'black',
                  fontSize: 14,
                  fontWeight: '600',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  paddingTop: 10,
                  color: '#A0A3BD',
                  fontSize: 11,
                  fontWeight: '300',
                }}>
                {item.category}
              </Text>
              <View style={{paddingTop: 20}}>
                <Button
                  title="Details"
                  style={{borderColor: '#5F2EEA'}}
                  onPress={e => handleDetail(item.id)}
                />
              </View>
            </View>
          )}
        />
        {/* </View> */}
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // paddingTop: 20,
    paddingBottom: 20,
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
  title: {
    color: '#14142B',
    fontSize: 18,
    fontWeight: '600',
  },
  imageCard: {
    padding: 10,
    marginEnd: 15,
    marginBottom: 15,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  footer: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  commonText: {
    color: '#6E7191',
    fontSize: 12,
    fontWeight: '400',
  },
});
