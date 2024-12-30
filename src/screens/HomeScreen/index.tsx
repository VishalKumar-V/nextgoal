import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';
import FootballLoader from '../../componets/atoms/FootballLoader';

const FirestoreExample = () => {
  const [skillData, setSkillData] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkImage = () => {
    fetch(
      'https://drive.google.com/uc?export=download&id=1BmI1kmWC5oRsKgw-XMNbuY3ItyyeaHh0',
    )
      .then(response => {
        if (response.ok) {
          console.log('File is accessible:', response);
        } else {
          console.log('File is not accessible:', response);
        }
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
  };

  useEffect(() => {
    // Fetch data from the 'skills' collection
    checkImage();
    const fetchData = async () => {
      try {
        const snapshot = await firestore()
          .collection('skills') // Your collection name
          .doc('1hDFOBtH7ieob0KTK4w8') // Your document ID
          .get();

        if (snapshot.exists) {
          setSkillData(snapshot.data()); // Set document data to state
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching Firestore data: ', error);
      } finally {
        setTimeout(()=> {
          setLoading(false);
        }, 2000)
      }
    };
    fetchData();
  }, []);
  console.log('skillll', skillData);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {loading ? (
        <FootballLoader/>
      ) : skillData ? (
        <>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {skillData.skillName}
          </Text>
          <FastImage
            style={{width: 60, height: 60}}
            source={{
              uri: 'https://drive.usercontent.google.com/download?id=1BmI1kmWC5oRsKgw-XMNbuY3ItyyeaHh0&export=download',
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={{fontSize: 16}}>
            Number of Items: {skillData.noOfItems}
          </Text>
        </>
      ) : (
        <Text>No Data Found</Text>
      )}
    </View>
  );
};

export default FirestoreExample;
