/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import BackTopbar from '../../components/BackTopbar';
import {Act} from '../../constant/data';
import image from '../../constant/image';

const ActScreen = () => {
  const handleNavigation = () => {
    console.log('');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View>
        <BackTopbar name={'Why Act'} />
      </View>
      <ScrollView style={{marginHorizontal: SIZES.width * 0.07}}>
        <View style={{marginTop: 40, alignItems: 'center'}}>
          <Text style={styles.text1}>You have made a great impact</Text>
          <Text style={styles.text2}>By neutralising 1 Carbon Credit</Text>
        </View>
        <View style={styles.container}>
          {Act.map((item, index) => {
            return (
              <View
                key={index}
                style={styles.mainContainer2}
                onPress={() => console.log(item)}>
                <View style={{width: 20, height: 20, marginTop: 15}}>
                  <Image
                    source={item.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{marginTop: 8}}>
                  <Text
                    style={{
                      fontSize: 7,
                      color: '#1D493E',
                      textAlign: 'center',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#1D493E',
                      textAlign: 'center',
                    }}>
                    {item.point}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{marginTop: 15, alignItems: 'center'}}>
          <Text style={styles.text1}>Let’s keep doing the great work</Text>
          <View style={{flexDirection: 'row', gap: 30, marginTop: 20}}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image source={image.pdf} style={styles.image} />
              <Text style={styles.buttonText}>
                Download your{'\n'} impact report in pdf
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image source={image.reporticon} style={styles.image} />
              <Text style={styles.buttonText}>
                Download your{'\n'} impact report in pdf
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  text2: {
    fontSize: 21,
    color: '#00EA77',
    paddingTop: 10,
    textAlign: 'center',
  },
  text1: {fontSize: 14, color: '#000', textAlign: 'center'},
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  mainContainer2: {
    width: 100,
    height: 95,
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    marginBottom: 20,
    padding: 5,
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 10,
    color: '#000',
  },
  image: {width: 35, height: 35, resizeMode: 'contain'},
});
