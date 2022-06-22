import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function Profile(props) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text
          style={{
            color: '#14142B',
            fontSize: 14,
            fontWeight: '400',
          }}>
          Detail Account
        </Text>
        <Text
          style={{
            color: '#AAAAAA',
            fontSize: 14,
            fontWeight: '400',
          }}>
          Order History
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.infoContainerTop}>
          <Image
            source={require('../../assets/Rectangle-119.png')}
            style={{
              borderRadius: 136 / 2,
              height: 136,
              width: 136,
              resizeMode: 'cover',
              marginTop: 30,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#14142B',
              marginTop: 30,
            }}>
            Jonas El Rodriguez
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#4E4B66',
              marginTop: 10,
              marginBottom: 30,
            }}>
            Moviegoers
          </Text>
        </View>
        <View style={styles.infoContainerBottom}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#14142B',
            fontSize: 18,
            fontWeight: '600',
            marginVertical: 30,
          }}>
          Account Settings
        </Text>
        <View style={styles.formContainer}>
          <Text style={styles.formHeader}>Details Information</Text>
          <Text style={styles.formTitle}>Full Name</Text>
          <TextInput style={styles.input} value={'Jonas'} />
          <Text style={styles.formTitle}>Email</Text>
          <TextInput style={styles.input} value={'Jonas'} />
          <Text style={styles.formTitle}>Phone Number</Text>
          <TextInput style={styles.input} value={'Jonas'} />
        </View>
        <TouchableOpacity style={styles.buttonUpdate}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '700',
            }}>
            Update Changes
          </Text>
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <Text style={styles.formHeader}>Account and Privacy</Text>
          <Text style={styles.formTitle}>New Password</Text>
          <TextInput style={styles.input} value={'Jonas'} />
          <Text style={styles.formTitle}>Confirm</Text>
          <TextInput style={styles.input} value={'Jonas'} />
        </View>
        <TouchableOpacity style={styles.buttonUpdate}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '700',
            }}>
            Update Changes
          </Text>
        </TouchableOpacity>
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

export default Profile;

const styles = StyleSheet.create({
  commonText: {
    color: '#6E7191',
    fontSize: 12,
    fontWeight: '400',
  },
  footer: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  formHeader: {
    color: '#14142B',
    fontSize: 16,
    fontWeight: '400',
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
    marginBottom: 30,
    paddingBottom: 10,
  },
  input: {
    color: '#4E4B66',
    height: 48,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 12,
  },
  formTitle: {color: '#696F79', fontWeight: '400', fontSize: 14},
  button: {
    backgroundColor: '#5F2EEA',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 10,
    width: 160,
  },
  buttonUpdate: {
    marginVertical: 30,
    backgroundColor: '#5F2EEA',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 10,
    // width: 160,
  },
  infoContainerBottom: {
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  infoContainerTop: {
    marginTop: 20,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  formContainer: {
    borderRadius: 16,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#ffff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
