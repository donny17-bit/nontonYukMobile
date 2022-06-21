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

  const handleDetail = () => {
    props.navigation.navigate('DetailMovie');
  };

  useEffect(() => {
    // default temporary
    getMoviesByMonth('3');
  }, []);

  return (
    <View>
      <View style={{padding: 20}}>
        <View style={{paddingTop: 20}}>
          <Text style={styles.title}>List Movie</Text>
        </View>
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
        <View style={{flexDirection: 'row', top: 60, paddingBottom: 100}}>
          <View style={styles.imageCard}>
            <Image source={require('../../assets/Rectangle-119.png')} />
            <Text
              style={{
                paddingTop: 10,
                color: 'black',
                fontSize: 14,
                fontWeight: '600',
              }}>
              Spider-man
            </Text>
            <Text
              style={{
                paddingTop: 10,
                color: '#A0A3BD',
                fontSize: 11,
                fontWeight: '300',
              }}>
              Action, Adventure, Sci-Fi
            </Text>
            <View style={{paddingTop: 20}}>
              <Button
                title="Details"
                style={{borderColor: '#5F2EEA'}}
                onPress={handleDetail}
              />
            </View>
          </View>
          <View style={styles.imageCard}>
            <Image source={require('../../assets/Rectangle-119.png')} />
            <Text
              style={{
                paddingTop: 10,
                color: 'black',
                fontSize: 14,
                fontWeight: '600',
              }}>
              Spider-man
            </Text>
            <Text
              style={{
                paddingTop: 10,
                color: '#A0A3BD',
                fontSize: 11,
                fontWeight: '300',
              }}>
              Action, Adventure, Sci-Fi
            </Text>
            <View style={{paddingTop: 20}}>
              <Button
                title="Details"
                style={{borderColor: '#5F2EEA'}}
                onPress={handleDetail}
              />
            </View>
          </View>
        </View>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <Image source={require('../../assets/Tickitz-2.png')} />
        <View style={{paddingTop: 20, paddingBottom: 40}}>
          <Text style={styles.commonText}>
            Stop waiting in line. Buy tickets
          </Text>
          <Text style={styles.commonText}>
            conveniently, watch movies quietly.
          </Text>
        </View>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
          Explore
        </Text>
        {/* link */}
        <View style={{paddingTop: 20, flexDirection: 'row'}}>
          <Text
            style={{
              flex: 1,
              color: '#6E7191',
              fontSize: 14,
              fontWeight: '400',
            }}>
            Home
          </Text>
          <Text
            style={{
              flex: 2,
              color: '#6E7191',
              fontSize: 14,
              fontWeight: '400',
            }}>
            List Movie
          </Text>
        </View>
        <Text
          style={{
            paddingTop: 40,
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
          }}>
          Our Sponsor
        </Text>
        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <Image
            source={require('../../assets/ebv.id.png')}
            style={{marginRight: 20}}
          />
          <Image
            source={require('../../assets/CineOne21.png')}
            style={{marginRight: 20, marginTop: 10}}
          />
          <Image
            source={require('../../assets/hiflix.png')}
            style={{marginRight: 20}}
          />
        </View>
        <Text
          style={{
            paddingTop: 50,
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
          }}>
          Follow us
        </Text>
        <View style={{paddingTop: 20, flexDirection: 'row'}}>
          <Image
            source={require('../../assets/facebook.png')}
            style={{marginRight: 20}}
          />
          <Image
            source={require('../../assets/instagram.png')}
            style={{marginRight: 20}}
          />
          <Image
            source={require('../../assets/twitter.png')}
            style={{marginRight: 20}}
          />
          <Image
            source={require('../../assets/youtube.png')}
            style={{marginRight: 20}}
          />
        </View>
        <Text
          style={{
            color: '#6E7191',
            fontSize: 13,
            fontWeight: '400',
            paddingTop: 50,
          }}>
          © 2020 Tickitz. All Rights Reserved.
        </Text>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  title: {
    color: '#14142B',
    fontSize: 18,
    fontWeight: '600',
  },
  imageCard: {
    padding: 10,
    marginEnd: 20,
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
