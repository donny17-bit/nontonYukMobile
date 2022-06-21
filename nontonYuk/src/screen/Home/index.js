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

function HomeScreen(props) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [data, setData] = useState([]);
  const [nowShowing, setNowShowing] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
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

  const [text, onChangeText] = React.useState(null);

  const getMovies = async () => {
    try {
      const result = await axios.get('movie?limit=10&page=1');
      // setData(result.data.data);
      setNowShowing(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviesByMonth = async bulan => {
    try {
      const result = await axios.get(
        `movie?searchRelease=${bulan}&limit=10&page=1`,
      );
      setUpcoming(result.data.data);
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

  const handleViewAll = () => {
    props.navigation.navigate('ListMovie');
  };

  useEffect(() => {
    getMovies();
    // default temporary
    getMoviesByMonth('3');
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{color: '#A0A3BD', paddingTop: 30, fontSize: 14}}>
          Nearest Cinema, Newest Movie,
        </Text>
        <Text style={styles.title}>Find out now!</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: 50,
          paddingBottom: 100,
        }}>
        <Image
          style={{
            height: 400,
            width: windowWidth,
            resizeMode: 'contain',
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
        <FlatList
          data={nowShowing}
          horizontal={true}
          keyExtractor={item => item.id}
          style={{paddingBottom: 20}}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', paddingTop: 20}}>
              <View style={[styles.imageCard, {backgroundColor: 'white'}]}>
                <Image
                  source={{
                    uri: `https://res.cloudinary.com/dusoicuhh/image/upload/v1652761552/${item.image}`,
                  }}
                  style={{
                    width: 125,
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
                    onPress={handleDetail}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.container}>
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
            Upcoming Movies
          </Text>
          <TouchableOpacity onPress={handleViewAll}>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#5F2EEA'}}>
              view all
            </Text>
          </TouchableOpacity>
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
          <FlatList
            data={upcoming}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageCard}>
                <Image
                  source={{
                    uri: `https://res.cloudinary.com/dusoicuhh/image/upload/v1652761552/${item.image}`,
                  }}
                  style={{
                    width: 125,
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
                    onPress={handleDetail}
                  />
                </View>
              </View>
            )}
          />
        </View>
        <View style={{paddingTop: 100}}>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Text style={{color: '#4E4B66', fontSize: 14, fontWeight: '400'}}>
              Be the vanguard of the
            </Text>
          </View>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Text style={{color: '#5F2EEA', fontSize: 32, fontWeight: '700'}}>
              Moviegoers
            </Text>
          </View>
          <SafeAreaView style={{paddingTop: 30}}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeText}
              value={text}
            />
          </SafeAreaView>
          <View style={{paddingTop: 20}}>
            <Button title="Join now" color="#5F2EEA" style={{flex: 1}} />
          </View>
          <View style={{alignItems: 'center', padding: 40}}>
            <Text style={styles.commonText}>
              By joining you as a Tickitz member,
            </Text>
            <Text style={styles.commonText}>we will always send you the</Text>
            <Text style={styles.commonText}>latest updates via email .</Text>
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
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  footer: {
    padding: 20,
    paddingTop: 50,
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
    paddingBottom: 40,
  },
  imageBorder: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    width: 145,
    marginEnd: 20,
  },
  imageCard: {
    padding: 10,
    marginEnd: 20,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 6,
    alignItems: 'center',
  },
  input: {
    height: 64,
    // margin: 20,
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  commonText: {
    color: '#6E7191',
    fontSize: 12,
    fontWeight: '400',
  },
});
