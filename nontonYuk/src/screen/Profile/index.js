import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import modal
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {getUserId} from '../../stores/action/user';
import axios from '../../utils/axios';

function Profile(props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState('profile');
  const [data, setData] = useState();
  const [booking, setBooking] = useState({
    scheduleId: '',
  });
  const [schedule, setSchedule] = useState({1: ''});
  const [movie, setMovie] = useState({});
  const [imgClicked, setImgClicked] = useState(false);
  const [formInfo, setFormInfo] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
  });
  const [formPass, setFormPass] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [image, setImage] = useState({
    uri: 'https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1655978291~hmac=238a0f3dd589e12f106cf1cf6f4a8b4d',
  });

  const handleDetailInfo = (text, name) => {
    console.log(text);
    setFormInfo({...formInfo, [name]: text});
  };

  const handlePassword = (text, name) => {
    console.log(text);
    setFormPass({...formPass, [name]: text});
  };

  const handleUpdateInfo = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      await axios.patch(`user/profile/${id}`, formInfo);
      getUser();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePass = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      console.log(id);
      console.log(formPass);
      const result = await axios.patch(`user/password/${id}`, formPass);
      console.log(result.data);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setFormInfo({
      firstName: '',
      lastName: '',
      noTelp: '',
    });
    setFormPass({
      newPassword: '',
      confirmPassword: '',
    });
  };

  const getUser = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      const result = await axios.get(`user/${id}`);
      setData(result.data.data);
      setImage({
        uri: `https://res.cloudinary.com/dusoicuhh/image/upload/v1652761552/${result.data.data[0].image}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getBooking = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      const result = await axios.get(`booking/user/${id}`);
      setBooking(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSchedule = async () => {
    try {
      // console.log(booking);
      booking.map(async item => {
        const id = item.scheduleId;
        console.log(id);
        const result = await axios.get(`schedule/${id}`);
        if (result.data.data[0].movieId) {
          setMovie({...movie, [result.data.data[0].movieId]: ''});
          // setCountMovie([...countMovie, result.data.data[0].movieId]);
        }
        setSchedule({
          ...schedule,
          [result.data.data[0].id]: result.data.data[0],
        });
      });
    } catch (error) {
      console.log('get schedule error');
    }
  };

  const getMovie = async () => {
    try {
      Object.keys(movie).map(async (item, index) => {
        console.log(item);
        const result = await axios.get(`movie/${item}`);
        setMovie({...movie, [item]: result.data.data[0]});
        // console.log(result.data.data[0]);
      });
    } catch (error) {
      console.log('get movie error');
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

  const handleTicket = (item, movie) => {
    console.log(item);
    // console.log(movie);
    props.navigation.navigate('Ticket', {
      data: {
        id: item.id,
        time: item.timeBooking,
        totalPayment: item.totalPayment,
        date: item.dateBooking,
        name: movie.name,
        category: movie.category,
        counts: item.totalTicket,
      },
    });
  };

  const handleOpenCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    console.log(result);
  };

  const handleOpenGalery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    console.log(result);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    console.log('use effect jalan');
    getUser();
    getBooking();
    getSchedule();
    getMovie();
  }, []);

  const profileActive = (
    <View style={styles.container}>
      <View style={styles.infoContainerTop}>
        <TouchableOpacity onPress={() => setImgClicked(true)}>
          <Image
            source={image}
            style={{
              borderRadius: 136 / 2,
              height: 136,
              width: 136,
              resizeMode: 'cover',
              marginTop: 30,
            }}
          />
        </TouchableOpacity>
        {imgClicked ? (
          <View>
            <TouchableOpacity
              onPress={toggleModal}
              style={[styles.button, {marginVertical: 10}]}>
              <Text style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                Change Image
              </Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible} style={styles.view}>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 20,
                  alignItems: 'center',
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleOpenGalery}>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                    Open Galery
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, {marginVertical: 20}]}
                  onPress={handleOpenCamera}>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                    Open Camera
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: 'red'}]}
                  onPress={toggleModal}>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity
              onPress={() => setImgClicked(false)}
              style={[
                styles.button,
                {
                  marginBottom: 20,
                  backgroundColor: 'red',
                },
              ]}>
              <Text style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#14142B',
            marginTop: 30,
          }}>
          {data ? `${data[0].firstName} ${data[0].lastName}` : ''}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#4E4B66',
            marginTop: 10,
            marginBottom: 30,
          }}>
          {data ? data[0].noTelp : ''}
        </Text>
      </View>
      <View style={styles.infoContainerBottom}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
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
        <Text style={styles.formTitle}>First Name</Text>
        <TextInput
          style={styles.input}
          value={formInfo.firstName}
          onChangeText={text => handleDetailInfo(text, 'firstName')}
        />
        <Text style={styles.formTitle}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={formInfo.lastName}
          onChangeText={text => handleDetailInfo(text, 'lastName')}
        />
        <Text style={styles.formTitle}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={formInfo.noTelp}
          onChangeText={text => handleDetailInfo(text, 'noTelp')}
        />
      </View>
      <TouchableOpacity style={styles.buttonUpdate} onPress={handleUpdateInfo}>
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
        <TextInput
          style={styles.input}
          value={formPass.newPassword}
          onChangeText={text => handlePassword(text, 'newPassword')}
        />
        <Text style={styles.formTitle}>Confirm</Text>
        <TextInput
          style={styles.input}
          value={formPass.confirmPassword}
          onChangeText={text => handlePassword(text, 'confirmPassword')}
        />
      </View>
      <TouchableOpacity style={styles.buttonUpdate} onPress={handleUpdatePass}>
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
  );

  const historyActive = (
    <View style={styles.container}>
      <FlatList
        data={booking}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={{padding: 20}}>
              <Image
                source={
                  schedule[item.scheduleId].premiere === 'hiflix'
                    ? require('../../assets/hiflix.png')
                    : schedule[item.scheduleId].premiere === 'ebv.id'
                    ? require('../../assets/ebv.id.png')
                    : require('../../assets/CineOne21.png')
                }
              />
              <Text
                style={{
                  color: '#AAAAAA',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 20,
                  marginBottom: 10,
                }}>
                {`${item.dateBooking.slice(0, 10)} at ${item.timeBooking.slice(
                  0,
                  5,
                )}WIB`}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: '600',
                  marginBottom: 20,
                }}>
                {movie[schedule[item.scheduleId].movieId].name}
              </Text>
            </View>
            <View
              style={{
                padding: 20,
                borderTopColor: '#DEDEDE',
                borderTopWidth: 1,
              }}>
              {item.statusUsed === 'active' ? (
                <TouchableOpacity
                  style={styles.btnTicket}
                  onPress={() =>
                    handleTicket(item, movie[schedule[item.scheduleId].movieId])
                  }>
                  <Text
                    style={{color: 'white', fontSize: 14, fontWeight: '700'}}>
                    Ticket in active
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  disabled
                  style={[styles.btnTicket, {backgroundColor: 'gray'}]}>
                  <Text
                    style={{color: 'white', fontSize: 14, fontWeight: '700'}}>
                    Ticket used
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setActiveMenu('profile')}>
                <Text
                  style={
                    activeMenu === 'profile'
                      ? styles.headerActive
                      : styles.headerNotActive
                  }>
                  Detail Account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveMenu('history')}>
                <Text
                  style={
                    activeMenu === 'history'
                      ? styles.headerActive
                      : styles.headerNotActive
                  }>
                  Order History
                </Text>
              </TouchableOpacity>
            </View>
            {activeMenu === 'profile' ? profileActive : historyActive}
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
          </>
        )}
      />
    </SafeAreaView>
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
    paddingTop: 20,
    paddingBottom: 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerActive: {
    color: '#14142B',
    fontSize: 14,
    fontWeight: '400',
    borderBottomColor: '#5F2EEA',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  headerNotActive: {
    color: '#AAAAAA',
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 20,
  },
  btnTicket: {
    backgroundColor: '#00BA88',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
