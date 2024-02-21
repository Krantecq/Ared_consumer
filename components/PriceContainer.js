import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../constant';
import {
  ShowComponent,
  HideComponent,
} from '../src/SvgComponent/ShowHideComponent';

const PriceContainer = ({navigation}) => {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Hello Shyam Kiran</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: SIZES.width * 0.01}}>
        <Text style={styles.title2}>Your carbon emission</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.price}>19.1</Text>
        <Text style={styles.price2}> TON CO</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.btncontainer}
          onPress={() => console.log('')}
          activeOpacity={0.8}>
          <Text style={styles.btnTitle}>Neutralise Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PriceContainer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.width * 0.0765,
    alignItems: 'center',
  },
  title: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '300',
    marginBottom: SIZES.width * 0.015,
  },
  title2: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '300',
  },
  price: {
    color: COLORS.black,
    fontSize: 37,
    fontWeight: '600',
    lineHeight: SIZES.width * 0.102,
    letterSpacing: -0.5,
    marginTop: SIZES.width * 0.02,
    fontFamily: 'Inter-Medium',
  },
  boxContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    marginTop: SIZES.width * 0.01,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  price2: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: SIZES.width * 0.102,
    letterSpacing: -0.5,
    marginTop: SIZES.width * 0.02,
    fontFamily: 'Inter-Regular',
  },
  btn: {
    width: '100%',
    height: SIZES.width * 0.122,
    backgroundColor: COLORS.btn,
    marginTop: SIZES.width * 0.052,
    borderRadius: 5,
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '600',
  },
  btncontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
