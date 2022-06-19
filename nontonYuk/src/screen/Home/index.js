import React from 'react';
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
} from 'react-native';
import {StyleSheet} from 'react-native';

function HomeScreen(props) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [text, onChangeText] = React.useState(null);

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
        <View style={{flexDirection: 'row'}}>
          <View style={styles.imageBorder}>
            <Image source={require('../../assets/Rectangle-119.png')} />
          </View>
          <View style={styles.imageBorder}>
            <Image source={require('../../assets/Rectangle-119.png')} />
          </View>
        </View>
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
        <View style={{top: 20, flexDirection: 'row'}}>
          <Button title="September" color="#5F2EEA" style={{flex: 2}} />
        </View>
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
              <Button title="Details" style={{borderColor: '#5F2EEA'}} />
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
              <Button title="Details" style={{borderColor: '#5F2EEA'}} />
            </View>
          </View>
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
    paddingBottom: 70,
  },
  imageBorder: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    top: 20,
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
