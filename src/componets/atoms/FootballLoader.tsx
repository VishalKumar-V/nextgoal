import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import footballAnimation from '../../assets/lottie/footballAnimation.json';

const FootballLoader = () => {
  return (
    <View style={[styles.container]}>
      {' '}
      <LottieView
        source={footballAnimation}
        autoPlay
        loop
        style={styles.animation}
        resizeMode="contain"
      />
      <Text style={styles.text}>{'Getting ready...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 90,
    width: 150,
    alignSelf: 'center',
  },
  animation: {
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
    backgroundColor: '#000',
    borderRadius: 50,
  },
  text: {
    marginTop: 2,
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FootballLoader;
