import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

const NavBar = (props: any) => {
  return (
    <LinearGradient
      colors={['#666', '#999']}
      start={{x: 0, y: 0}} // Top-left
      end={{x: 1, y: 1}}
      style={styles.container}>
      <Text style={styles.headerTextColor}>
        {props.title ? props.title : 'Skills'}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextColor: {
    color: colors.black,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    marginTop: 4,
  },
});

export default NavBar;
