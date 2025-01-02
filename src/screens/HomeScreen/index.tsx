import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FootballLoader from '../../componets/atoms/FootballLoader';
import ExerciseListView from '../../componets/molecules/ExerciseListView';
import styles from './styles';

const HomeScreen = () => {
  const [skillData, setSkillData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('skills')
      .onSnapshot(querySnapshot => {
        const user: any[] = [];

        querySnapshot.forEach(documentSnapshot => {
          user.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(user);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  console.log('userr-->>>>', users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore()
          .collection('skills')
          .onSnapshot(querySnapshot => {
            const user: any[] = [];

            querySnapshot.forEach(documentSnapshot => {
              user.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });

            setSkillData(user);
            setLoading(false);
          });
      } catch (error) {
        console.error('Error fetching Firestore data: ', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({item}: any) => {
    console.log('propsss-->>>');
    return <ExerciseListView data={item} />;
  };

  const errorView = () => {
    return (
      <View style={styles.errorView}>
        <Image
          style={styles.oopsImage}
          source={require('../../assets/images/oops.png')}
        />
        <Text style={styles.noDataText}>Oops, Something went wrong...</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <FootballLoader />
      ) : skillData ? (
        <FlatList data={skillData} renderItem={renderItem} />
      ) : (
        errorView()
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
