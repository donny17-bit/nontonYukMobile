import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from '../../utils/axios';

function DetailMovie(props) {
  const windowWidth = Dimensions.get('window').width;
  const {id} = props.route.params;
  const [data, setData] = useState({});
  const [releaseDate, setReleaseDate] = useState('');

  const getMoviesById = async () => {
    try {
      const result = await axios.get(`movie/${id}`);
      setData(result.data.data[0]);
      setReleaseDate(result.data.data[0].releaseDate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // default temporary
    getMoviesById();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            paddingTop: 20,
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: 20,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              borderRadius: 8,
            }}>
            <Image
              style={{
                width: windowWidth / 2,
                height: 244,
                resizeMode: 'contain',
              }}
              source={{
                uri: `https://res.cloudinary.com/dusoicuhh/image/upload/v1652761552/${data.image}`,
              }}
            />
          </View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.genre}>{data.category}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 30}}>
          <View style={{flex: 1}}>
            <Text style={styles.subtitle}>Release date</Text>
            <Text style={styles.content}>{releaseDate.slice(0, 10)}</Text>
            <Text style={styles.subtitle}>Duration</Text>
            <Text style={styles.content}>{data.duration}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.subtitle}>Directed by</Text>
            <Text style={styles.content}>{data.director}</Text>
            <Text style={styles.subtitle}>Cast</Text>
            <Text style={styles.content}>{data.cast}</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#D6D8E7', borderBottomWidth: 1}} />
        <View style={{paddingTop: 30, paddingBottom: 30}}>
          <Text
            style={{
              paddingBottom: 20,
              fontWeight: '600',
              fontSize: 16,
              color: '#14142B',
            }}>
            Synopsis
          </Text>
          <Text style={{fontWeight: '400', fontSize: 13, color: '#4E4B66'}}>
            {data.synopsis}
          </Text>
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

export default DetailMovie;

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
    paddingTop: 20,
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
  genre: {
    paddingTop: 20,
    color: '#4E4B66',
    fontWeight: '400',
    fontSize: 16,
  },
  subtitle: {
    color: '#8692A6',
    fontWeight: '400',
    fontSize: 13,
  },
  content: {
    color: '#121212',
    fontWeight: '400',
    fontSize: 16,
    paddingBottom: 30,
  },
  commonText: {
    color: '#6E7191',
    fontSize: 12,
    fontWeight: '400',
  },
});
