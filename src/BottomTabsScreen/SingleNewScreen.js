/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import Svg, {Path, Circle} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import image from '../../constant/image';

const SingleNewScreen = ({route, navigation}) => {
  const data = route.params.item;
  console.log(data);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.transparent} />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={data.image}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.5)']}
            style={styles.gradient}>
            <View
              style={{
                position: 'absolute',
                left: 20,
                top: Platform.OS === 'ios' ? 40 : 10,
              }}>
              <TouchableOpacity
                style={{
                  width: SIZES.width * 0.12,
                  height: SIZES.height * 0.09,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={SIZES.width * 0.09}
                  height={SIZES.height * 0.09}
                  viewBox="0 0 30 30"
                  fill="none">
                  <Circle
                    cx="15"
                    cy="15"
                    r="14.75"
                    stroke="#FFFFFF"
                    strokeWidth="0.5"
                  />
                  <Path
                    d="M20.2981 15.1704H9.3606"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M14.8293 20.6392L9.3606 15.1704L14.8293 9.70166"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: 'absolute',
                left: 25,
                bottom: SIZES.width * 0.05,
                width: '95%',
              }}>
              <Text style={styles.title}>{data.title}</Text>
              <View style={styles.authorContainer}>
                <Text style={{color: COLORS.white, fontSize: 12}}>Author</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{marginHorizontal: SIZES.width * 0.051, marginTop: 20}}>
          <Text style={styles.description}>
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
            vitae. Scelerisque eget accumsan, non in. Posuere magna erat
            bibendum amet, nisi eu id.
          </Text>
          <Text style={[styles.description, {marginTop: 20}]}>
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
            vitae. Scelerisque eget accumsan, non in. Posuere magna erat
            bibendum amet, nisi eu id.
          </Text>
          <Text style={[styles.description, {marginTop: 20}]}>
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
            vitae. Scelerisque eget accumsan, non in. Posuere magna erat
            bibendum amet, nisi eu id.
          </Text>
          <Text style={[styles.description, {marginTop: 20}]}>
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
            vitae. Scelerisque eget accumsan, non in. Posuere magna erat
            bibendum amet, nisi eu id.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleNewScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: SIZES.width,
    height: 296,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.05,
    fontWeight: '400',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  authorContainer: {
    borderWidth: 1,
    width: 80,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderColor: COLORS.white,
    borderRadius: 5,
    marginTop: 10,
  },
  description: {
    fontSize: SIZES.width * 0.03,
    fontWeight: '500',
    color: '#525560',
    lineHeight: SIZES.width * 0.05,
  },
});
