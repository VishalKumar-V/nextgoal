import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../styles/colors';

interface IProps {
  data: any;
  onPress: any;
  isFromSubSkillScreen: boolean;
}

const ExerciseListView = (props: IProps) => {
  const onCardPressed = () => {
    props.onPress(props.data);
  };

  const noOfExerciseView = () => {
    return (
      <View style={styles.exercise}>
        <Text style={styles.noOfExercise}>
          {props.data.noOfItems} exercises
        </Text>
      </View>
    );
  };

  const skillNameView = () => {
    const style = !props.isFromSubSkillScreen
      ? styles.skillText
      : styles.subSkillText;
    return (
      <Text style={style}>
        {!props.isFromSubSkillScreen
          ? props.data.skillName
          : props.data.subSkill}
      </Text>
    );
  };

  const iconStyle = !props.isFromSubSkillScreen ? {} : styles.subSkillIcon;
  return (
    <TouchableOpacity style={styles.container} onPress={onCardPressed}>
      <FastImage
        style={[styles.iconStyle, iconStyle]}
        source={{
          uri: props.data.image,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.innerContainer}>
        <View>
          {skillNameView()}
          {!props.isFromSubSkillScreen && noOfExerciseView()}
        </View>
        <View>
          <Image
            style={styles.arrowStyle}
            source={require('../../assets/images/right.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
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
    width: 90,
  },
  noOfExercise: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    top: 1,
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
  subSkillIcon: {
    width: 60,
    height: 60,
    borderRadius: 60,
    margin: 16,
  },
  subSkillText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: colors.white,
  },
});
