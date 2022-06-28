import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Ticket(props) {
  console.log(props.route.params.data);
  const {data} = props.route.params;
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=https://project-nontonyuk.herokuapp.com/${data.id}`;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <Image source={{uri: qr}} style={styles.image} />
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1.5}}>
                <Text style={styles.subtitle}>Movie</Text>
                <Text style={styles.content}>{data.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.subtitle}>Category</Text>
                <Text style={styles.content}>{data.category}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1.5}}>
                <Text style={styles.subtitle}>Date</Text>
                <Text style={styles.content}>{data.date.slice(0, 10)}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.subtitle}>Time</Text>
                <Text style={styles.content}>{data.time.slice(0, 5)}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1.5}}>
                <Text style={styles.subtitle}>Count</Text>
                <Text style={styles.content}>{data.counts}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.subtitle}>Seats</Text>
                <Text style={styles.content}>{data.counts}</Text>
              </View>
            </View>
            <View style={styles.price}>
              <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                Total
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                Rp {data.totalPayment}
              </Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  price: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#F5F6F8',
  },
  commonText: {
    color: '#6E7191',
    fontSize: 12,
    fontWeight: '400',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 30,
  },
  subtitle: {color: '#AAAAAA', fontWeight: '600', fontSize: 12},
  content: {
    color: '#14142B',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 20,
  },
  footer: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  image: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 60,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
