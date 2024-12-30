import React from 'react';
import {Image, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface IProps {
  data: any;
}

const ExerciseListView = (props: IProps) => {
  console.log('propsss-->>>');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
      }}>
      <FastImage
        style={{width: 80, height: 80, borderRadius: 10, margin: 16}}
        source={{
          uri: 'https://drive.usercontent.google.com/download?id=1BmI1kmWC5oRsKgw-XMNbuY3ItyyeaHh0&export=download',
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 280,
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'Poppins-Bold',
              color: '#fff',
            }}>
            {props.data.skillName}
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Bold',
                color: '#000',
              }}>
              {props.data.noOfItems} exercises
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{height: 32, width: 32, tintColor: 'gray'}}
            source={require('../../assets/images/right.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default ExerciseListView;
