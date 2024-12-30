import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FootballLoader from '../../componets/atoms/FootballLoader';
import ExerciseListView from '../../componets/molecules/ExerciseListView';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const HomeScreen = () => {
  const [skillData, setSkillData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore()
          .collection('skills')
          .doc('1hDFOBtH7ieob0KTK4w8')
          .get();

        if (snapshot.exists) {
          setSkillData([snapshot.data()]);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching Firestore data: ', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({item}: any) => {
    console.log('propsss-->>>');
    return <ExerciseListView data={item} />;
  };

  console.log(skillData);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <FootballLoader />
      ) : skillData ? (
        <FlatList data={skillData} renderItem={renderItem} />
      ) : (
        <View style={styles.errorView}>
          <Image style={styles.oopsImage} source={require('../../assets/images/oops.png')}/>
        <Text style={styles.noDataText}>Oops, Something went wrong...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
