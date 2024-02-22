import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import image from '../constant/image';

const data = [
  {
    id: '1',
    image: image.globe2,
    title: 'Why Act?',
  },
  {
    id: '2',
    image: image.report,
    title: 'Your\nimpact Report',
  },
  {
    id: '3',
    image: image.share,
    title: 'Share your\nimpact',
  },
];

const DashboardthreeComponent = () => {
  const navigation = useNavigation();
  const handleNavigation = item => {
    if (item.id === '1') {
      navigation.navigate('ActScreen');
    } else if (item.id === '2') {
      navigation.navigate('ImpactScreen');
    } else navigation.navigate('ReportScreen');
  };
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.mainContainer}
            onPress={() => handleNavigation(item)}>
            <View
              style={{
                width: Platform.OS === 'ios' ? 30 : 35,
                height: Platform.OS === 'ios' ? 30 : 35,
                marginTop: 15,
              }}>
              <Image
                source={item.image}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
            </View>
            <View style={{marginTop: 8}}>
              <Text
                style={{fontSize: 10, color: '#1D493E', textAlign: 'center'}}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DashboardthreeComponent;

const styles = StyleSheet.create({
  container: {
    // height: SIZES.height * 0.13,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    backgroundColor: '#eafff5',
    borderRadius: 10,
  },
});
