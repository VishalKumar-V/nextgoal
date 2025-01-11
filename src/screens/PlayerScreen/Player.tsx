import React, {useState} from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
import {colors} from '../../styles/colors';
import Video from 'react-native-video';
import NavBar from '../../componets/atoms/NavBar';

const VideoPlayerScreen = (props: any) => {
  const getWidth = Dimensions.get('screen').width;
  const getHeight = Dimensions.get('screen').height / 3;
  const subSkillName = props.route.params.data.subSkill;

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.black,
        flex: 1,
        alignItems: 'center',
      }}>
      <NavBar title={subSkillName} />
      <View
        style={{
          width: getWidth,
          height: getHeight,
          backgroundColor: colors.black,
        }}>
        <Video
          source={{
            uri: 'https://drive.usercontent.google.com/download?id=1HJFtQGe_uiycrY8g0e6nN8TmgNKN34xh&export=download',
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          controls={true}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          width: 400,
          height: 200,
          alignSelf: 'center',
          alignContent: 'center',
        }}>
        <Text
          style={{
            color: colors.white,
            fontFamily: 'Poppins-Bold',
            alignSelf: 'center',
            fontWeight: '800',
            fontSize: 32,
          }}>
          {'Short Passing'}
        </Text>
        <Text
          style={{
            color: colors.white,
            fontFamily: 'Poppins-Medium',
            alignSelf: 'center',
            fontSize: 16,
            margin: 16,
          }}>
          {'Enjoy the video on YouTube!'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VideoPlayerScreen;
