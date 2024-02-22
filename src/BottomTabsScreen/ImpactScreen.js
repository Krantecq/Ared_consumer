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
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constant';
import BackTopbar from '../../components/BackTopbar';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const heading = ['PR Template', 'Ads', 'Resources'];

const ImpactScreen = () => {
  const [option, setOptions] = useState('PR Template');
  const handleOption = item => {
    setOptions(item);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View>
        <BackTopbar name={'Share your impact'} />
      </View>
      <ScrollView style={{marginHorizontal: SIZES.width * 0.07}}>
        <View style={{marginTop: 40, alignItems: 'center'}}>
          <Text style={styles.text2}>
            We want to inspire everyone to take actions to save our planet.
            That’s why we need to shout out loud, kindly find the list of tools,
            ads, press release etc, you can use the way you want
          </Text>
        </View>
        <View style={styles.flexBox}>
          {heading.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: '33.3%',
                  borderBottomWidth: 1,
                  paddingVertical: 5,
                  borderBottomColor: option === item ? '#00EA77' : '#000',
                }}
                onPress={() => handleOption(item)}>
                <Text
                  style={[
                    styles.text2,
                    {color: option === item ? '#00EA77' : '#000'},
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImpactScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  text2: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 20,
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});
