import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import {COLORS, SIZES} from '../constant';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const DashboardthreeComponent = () => {
  const navigation = useNavigation();

  const boxesData = [
    {
      id: 1,
      image: require('../assets/images/new-1.jpeg'),
      title: 'Single Metric Tonne Offset',
      subtitle: 'Buy 500 Credits with 15 tons CO2',
      price: 'USD 5',
    },
    {
      id: 2,
      image: require('../assets/images/new-2.jpeg'),
      title: 'Single Metric Tonne Offset',
      subtitle: 'Buy 500 Credits with 15 tons CO2',
      price: 'USD 5',
    },
    {
      id: 3,
      image: require('../assets/images/new-3.jpeg'),
      title: 'Single Metric Tonne Offset',
      subtitle: 'Buy 500 Credits with 15 tons CO2',
      price: 'USD 5',
    },
    {
      id: 4,
      image: require('../assets/images/new-4.jpeg'),
      title: 'Single Metric Tonne Offset',
      subtitle: 'Buy 500 Credits with 15 tons CO2',
      price: 'USD 5',
    },
    // Add more items as needed
  ];

  return (
    <ScrollView horizontal style={styles.scrollView} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {boxesData.map((box, index) => (
          <TouchableOpacity key={box.id} style={styles.boxContainer}>
            <Image source={box.image} style={{width:140, height:90, resizeMode:'cover',borderRadius:4}} />
            <View style={{marginTop:10}}>
              <Text style={styles.boxTitle}>{box.title}</Text>
              <Text style={styles.boxSubtitle}>{box.subtitle}</Text>
            </View>
            
              
            </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.width * 0.06,
    marginTop: SIZES.width * 0.05,
    height:170
    
  },
  boxContainer: {
    marginLeft: 10,
    width: 140,
    height: 170,
  },
  box: {
    height: SIZES.height * 0.17,
    borderRadius: 7,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '50%',
    borderRadius: 7,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'flex-end', // Align the content to the bottom
    alignItems: 'center', // Center horizontally
  },
  textBox: {
    padding: SIZES.width * 0.025,
    borderRadius: 10,
    width: '100%',
  },
  boxTitle: {
    fontSize: SIZES.width * 0.028,
    fontWeight: '400',
    color: COLORS.black,
    marginBottom: SIZES.width * 0.01,
  },
  boxSubtitle: {
    fontSize: SIZES.width * 0.019,
    color: '#525560',
    marginBottom: SIZES.width * 0.01,
  },
  boxPrice: {
    fontSize: SIZES.width * 0.045,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  boxImage:{
    resizeMode:'cover'
  }
});

export default DashboardthreeComponent;
