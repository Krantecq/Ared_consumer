/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import {COLORS, SIZES} from '../../constant';
const {width, height} = Dimensions.get('window');
import Svg, {G, Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';

export const slides = [
  {
    id: '2',
    image: require('../../assets/images/img-1.png'),
    title: 'Track Your Impact',
    description: 'Calculate your\ncarbon footprints seamlessly.',
  },
  {
    id: '1',
    image: require('../../assets/images/img-2.png'),
    title: 'Explore Sustainable Projects',
    description:
      'Neutralise your carbon footprints by investing in global sustainability projects',
  },

  {
    id: '3',
    image: require('../../assets/images/img-3.png'),
    title: 'Track Your Impact',
    description:
      'Your action will make a significant impact on the environment.',
  },
];

const NewOnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animatedOffset] = useState(new Animated.Value(0));

  console.log('Se', SIZES.width * 0.9);

  const size = SIZES.width * 0.24;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const ref = React.useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      console.log('offset', offset);
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      navigation.replace('NewLoginScreen');
    }
  };

  const desiredOffsets = [33, 66, 100];

  const getDesiredOffset = () => {
    if (currentSlideIndex < desiredOffsets.length) {
      return desiredOffsets[currentSlideIndex];
    }
    return 0;
  };

  const offset = getDesiredOffset();

  const Slide = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={item?.image}
            style={{width: '95%', height: '100%', resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.spaceContainer} />

        <View style={styles.circleContainer}>
          <View
            style={{
              marginHorizontal: SIZES.width * 0.06,
              position: 'absolute',
              top: 250,
            }}>
            <View style={{marginBottom: SIZES.width * 0.26}}>
              <Text
                style={{
                  fontFamily: 'skia',
                  fontSize: SIZES.width * 0.08,
                  lineHeight: SIZES.width * 0.12,
                  color: '#1D493E',
                  fontWeight: '100',
                }}>
                {item?.description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const Footer = () => {
    if (currentSlideIndex === slides.length - 1) {
      // Check if it's the last slide
      return (
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: SIZES.width * 0.18,
            left: SIZES.width * 0.051,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={goToNextSlide}
            style={{
              width: SIZES.width - SIZES.width * 0.1,
              height: SIZES.width * 0.14,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.width * 0.8,
            }}>
            <Text style={{color: '#1D493E', fontSize: SIZES.width * 0.051}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    // Original circle design
    return (
      <View
        style={{
          position: 'absolute',
          right: SIZES.width * 0.051,
          alignItems: 'center',
          justifyContent: 'center',
          bottom: SIZES.width * 0.18,
        }}>
        <Svg width={size} height={size}>
          <G rotation="-90" origin={center}>
            <Circle
              stroke={'#33FF9B'}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <Circle
              stroke={'#000'}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (circumference * offset) / 100}
              fill={'#33FF9B'}
            />
          </G>
        </Svg>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={goToNextSlide}
          style={styles.btn}>
          <Icon name="right" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        bounces={false}
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default NewOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    height: SIZES.height,
    width: width,
  },
  spaceContainer: {
    height: '25%',
  },
  circleContainer: {
    height: '75%',
    backgroundColor: '#33FF9B',
    position: 'relative',
    borderTopRightRadius: SIZES.width * 0.83,
    justifyContent: 'center',
  },
  imageContainer: {
    width: '70%',
    height: '50%',
    position: 'absolute',
    left: SIZES.width * 0.15,
    top: SIZES.width * 0.17,
    zIndex: 1,
    // backgroundColor: '#000',
  },
  btn: {
    position: 'absolute',
    width: SIZES.width * 0.211,
    height: SIZES.width * 0.211,
    borderRadius: SIZES.width * 0.13,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
