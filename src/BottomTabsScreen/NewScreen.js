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
import image from '../../constant/image';
import {blog} from '../../constant/data';

const NewScreen = ({navigation}) => {
  const handleNavigation = item => {
    navigation.navigate('SingleNewScreen', {item});
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View>
        <BackTopbar name={'News'} />
      </View>
      <ScrollView style={{marginHorizontal: SIZES.width * 0.07}}>
        <View style={{height: 110, marginTop: 40, borderRadius: 5}}>
          <Image source={image.blog3} style={styles.banner} />
        </View>
        <View style={{marginTop: 5}}>
          <Text style={styles.boxTitle}>
            Don’t destroy greenery and don’t spoil scenery
          </Text>
          <Text style={styles.boxSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          {blog.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  alignItems: 'center',
                  width: '48%',
                  marginBottom: 30,
                }}
                onPress={() => handleNavigation(item)}>
                <View style={{width: '100%', borderRadius: 5}}>
                  <Image source={item.image} style={styles.imageStyle} />
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={styles.boxTitle}>{item.title}</Text>
                  <Text style={styles.boxSubtitle}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  boxTitle: {
    fontSize: SIZES.width * 0.029,
    fontWeight: '500',
    color: COLORS.black,
    marginBottom: SIZES.width * 0.01,
  },
  boxSubtitle: {
    fontSize: SIZES.width * 0.023,
    color: '#525560',
    marginBottom: SIZES.width * 0.01,
  },
  imageStyle: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});
