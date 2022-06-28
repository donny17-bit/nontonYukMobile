import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';
import Seat from '../../components/Seat';

function Order(props) {
  const render = [0];
  const {dataOrder} = props.route.params;
  // console.log(dataOrder);
  const date = `${dataOrder.dateBooking.getDate()}-${dataOrder.dateBooking.getMonth()}-${dataOrder.dateBooking.getFullYear()}`;
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);

  const handlePay = () => {
    props.navigation.navigate('Payment', {
      dataOrder: {
        ...dataOrder,
        seat: selectedSeat,
        totalPayment: selectedSeat.length * dataOrder.price,
      },
    });
  };

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = () => {
    console.log(selectedSeat);
  };

  useEffect(() => {
    // console.log(props.route.params.dataOrder);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={render}
        renderItem={({item}) => (
          <>
            <View style={styles.container}>
              <Text style={styles.title}>Choose Your Seat</Text>
              <View style={styles.containerSeat}>
                <FlatList
                  data={listSeat}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <Seat
                      seatAlphabhet={item}
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      selectSeat={handleSelectedSeat}
                    />
                  )}
                />
              </View>
              <Text style={[styles.title, {marginTop: 40}]}>Order Info</Text>
              <View style={styles.formContainerTop}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={
                      dataOrder.premiere == 'hiflix'
                        ? require('../../assets/hiflix.png')
                        : dataOrder.premiere == 'ebv.id'
                        ? require('../../assets/ebv.id.png')
                        : require('../../assets/CineOne21.png')
                    }
                  />
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: '600',
                      color: '#14142B',
                      marginVertical: 10,
                    }}>
                    {dataOrder.premiere} Cinema
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#14142B',
                      marginBottom: 10,
                    }}>
                    {dataOrder.name}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: 20,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '400', color: '#6B6B6B'}}>
                    {date}
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: '#14142B'}}>
                    {dataOrder.timeBooking}WIB
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '400', color: '#6B6B6B'}}>
                    One ticket price
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: '#14142B'}}>
                    Rp {dataOrder.price}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginBottom: 30,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '400', color: '#6B6B6B'}}>
                    Seat choosed
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: '#14142B'}}>
                    {selectedSeat.map(item => `${item}, `)}
                  </Text>
                </View>
              </View>
              <View style={styles.formContainerBottom}>
                <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
                  Total Payment
                </Text>
                <Text
                  style={{color: '#5F2EEA', fontSize: 18, fontWeight: '700'}}>
                  Rp {dataOrder.price * selectedSeat.length}
                </Text>
              </View>
              <TouchableOpacity onPress={handlePay} style={styles.button}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  Checkout now
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
          </>
        )}
      />
    </SafeAreaView>
  );
}

export default Order;

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
  button: {
    backgroundColor: '#5F2EEA',
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 15,
  },
  formContainerTop: {
    marginTop: 20,
    borderRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'white',
    paddingTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#D6D8E7',
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  formContainerBottom: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  formContainer: {
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  title: {color: '#14142B', fontSize: 18, fontWeight: '600'},
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  containerSeat: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
  },
});
