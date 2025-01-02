import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../styles/colors';

interface IProps {
  data: any;
}

const ExerciseListView = (props: IProps) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.iconStyle}
        source={{
          uri: props.data.image,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.skillText}>{props.data.skillName}</Text>
          <View style={styles.exercise}>
            <Text style={styles.noOfExercise}>
              {props.data.noOfItems} exercises
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.arrowStyle}
            source={require('../../assets/images/right.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default ExerciseListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    alignItems: 'center',
  },
  skillText: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: colors.white,
    marginBottom: 4,
  },
  exercise: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 4,
  },
  noOfExercise: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  arrowStyle: {
    height: 32,
    width: 32,
    tintColor: 'gray',
  },
  iconStyle: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 16,
  },
});
