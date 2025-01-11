import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FootballLoader from '../../componets/atoms/FootballLoader';
import ExerciseListView from '../../componets/molecules/ExerciseListView';
import styles from './styles';
import NavBar from '../../componets/atoms/NavBar';

const HomeScreen = (props: any) => {
  const [skillData, setSkillData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  const navigateToDetails = (skill: any) => {
    console.log('pressed', skill);
    props.navigation.navigate('Details', {skill});
  };

  const renderItem = ({item}: any) => {
    return (
      <ExerciseListView
        data={item}
        onPress={navigateToDetails}
        isFromSubSkillScreen={false}
      />
    );
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
        <View style={{flex: 1, width: '100%'}}>
          <NavBar/>
          <FlatList data={skillData} renderItem={renderItem} />
        </View>
      ) : (
        errorView()
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
