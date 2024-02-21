/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, images} from '../../constant';
import PriceContainer from '../../components/PriceContainer';
import DashboardthreeComponent from '../../components/DashboardthreeComponent';
import DashboardDistributer from '../../components/DashboardDistributer';
import ProjectContainer from '../../components/ProjectContainer';
import {project} from '../../constant/data';
import NewTopBar from '../../components/NewTopBar';
import TopNavbar from '../../components/TopNavbar';
import image from '../../constant/image';

const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ImageBackground
        source={image.bg1}
        style={{flex: 1}}
        imageStyle={styles.bg1}>
        <View>
          <Image source={images.bg2} style={styles.bg2} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainBoxContainer}>
            <View>
              <TopNavbar />
            </View>
            <View style={{marginTop: 20}}>
              <PriceContainer />
            </View>
          </View>
          <View
            style={[styles.mainContainer, {marginTop: SIZES.height * 0.03}]}>
            <DashboardthreeComponent />
          </View>

          <View style={{marginTop: SIZES.height * 0.023}}>
            <View style={styles.mainContainer}>
              <Text style={styles.title}>Top projects</Text>
              <TouchableOpacity>
                <Text
                  style={[styles.title, {color: '#00EA77', fontWeight: '400'}]}>
                  More
                </Text>
              </TouchableOpacity>
            </View>
            <ProjectContainer data={project} />
          </View>
          <View
            style={{
              marginTop: 0,
            }}>
            <View style={styles.mainContainer}>
              <Text style={styles.title}>Top News</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('NewScreen')}>
                <Text
                  style={[styles.title, {color: '#00EA77', fontWeight: '400'}]}>
                  More
                </Text>
              </TouchableOpacity>
            </View>
            <DashboardDistributer />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    marginHorizontal: SIZES.width * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '300',
    color: '#000',
  },
  mainBoxContainer: {
    width: '100%',
  },

  bg2: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    right: -10,
    top: 50,
  },
  bg1: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: 110,
    left: -25,
  },
});
