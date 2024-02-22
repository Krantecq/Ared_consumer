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
import {Act, report} from '../../constant/data';
import image from '../../constant/image';
import {ArrowComponent} from '../SvgComponent/HomeIconComponent';

const ReportScreen = ({navigation}) => {
  const handleNavigation = () => {
    navigation.navigate('ProjectScreen');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View>
        <BackTopbar name={'Impact Report'} />
      </View>
      <ScrollView style={{marginHorizontal: SIZES.width * 0.07}}>
        <View style={{marginTop: 40, alignItems: 'center'}}>
          <Text style={styles.text2}>
            We are all aware that climate change is impacting our everyday lives
          </Text>
        </View>
        <View style={styles.container}>
          {report.map((item, index) => {
            return (
              <View
                key={index}
                style={styles.mainContainer2}
                onPress={() => console.log('item')}>
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
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <Text style={styles.text1}>
            But if we take the action, we can reverse all of these
          </Text>
          <View style={{marginTop: 40}}>
            <Image
              source={image.bottomtext}
              style={{width: 200, height: 30, resizeMode: 'contain'}}
            />
            <TouchableOpacity style={styles.flexBox} onPress={handleNavigation}>
              <Text style={styles.title5}>Neutralise Now</Text>
              <View style={styles.title6}>
                <ArrowComponent />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  text2: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight: '300',
  },
  text1: {fontSize: 14, color: '#000', textAlign: 'center'},
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 30,
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
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 5,
  },
  title5: {
    fontSize: SIZES.width * 0.04,
    fontWeight: '400',
    color: '#03C666',
    fontFamily: 'Quicksand-Medium',
  },
});
