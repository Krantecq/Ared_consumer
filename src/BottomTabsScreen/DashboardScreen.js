import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import PriceContainer from '../../components/PriceContainer';
import DashboardthreeComponent from '../../components/DashboardthreeComponent';
import DashboardDistributer from '../../components/DashboardDistributer';
import ProjectContainer from '../../components/ProjectContainer';
import {project} from '../../constant/data';
import NewTopBar from '../../components/NewTopBar';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainBoxContainer}>
          {/* <Video
            source={Light}
            style={styles.videoPlayer}
            repeat={true}
            resizeMode="cover"
          /> */}
          <View>
            <NewTopBar />
          </View>
          <View
            style={{
              marginTop: Platform.OS ? SIZES.width * 0.16 : SIZES.width * 0.104,
            }}>
            <PriceContainer />
          </View>
        </View>
        <View style={{marginTop: -SIZES.width * 0.051}}>
          <DashboardthreeComponent />
        </View>
        
        <View style={{marginTop: SIZES.height * 0.023}}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Top projects</Text>
            <TouchableOpacity>
              <Text style={[styles.title, {color: '#000', fontWeight: '400'}]}>
                More
              </Text>
            </TouchableOpacity>
          </View>
          <ProjectContainer data={project} />
        </View>
        <View style={{marginTop: SIZES.height * 0.023}}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Top News</Text>
            <TouchableOpacity>
              <Text style={[styles.title, {color: '#000', fontWeight: '400'}]}>
                More
              </Text>
            </TouchableOpacity>
          </View>
          <DashboardDistributer />
        </View>
      </ScrollView>
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
    color: '#3D3D3D',
  },
  mainBoxContainer: {
    width: '100%',
    height: Platform.OS ? SIZES.width * 1.03 : SIZES.width * 0.8,
    paddingTop: Platform.OS ? SIZES.width * 0.13 : 0,
  },
  videoPlayer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
  },
});
