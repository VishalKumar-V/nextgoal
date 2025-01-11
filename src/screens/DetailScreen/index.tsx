import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import FootballLoader from '../../componets/atoms/FootballLoader';
import ExerciseListView from '../../componets/molecules/ExerciseListView';
import NavBar from '../../componets/atoms/NavBar';

const DetailsScreen = (props: any) => {
  const [skillData, setSkillData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const skillName = props.route.params.skill.skillName;
  console.log('skillName-->>>', skillName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore()
          .collection('subSkills')
          .onSnapshot(querySnapshot => {
            const user: any[] = [];

            querySnapshot.forEach(documentSnapshot => {
              user.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
            const data = user.filter(item => {
              return item.skill === skillName;
            });
            setSkillData(data);
            setTimeout(() => {
              setLoading(false);
            }, 3000);
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

  const onPress = (item: any) => {
    props.navigation.navigate('PlayerScreen', {data: item});
  };

  const renderItem = ({item}: any) => {
    return (
      <ExerciseListView
        data={item}
        onPress={onPress}
        isFromSubSkillScreen={true}
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
          <NavBar title={skillName} />
          <FlatList data={skillData} renderItem={renderItem} />
        </View>
      ) : (
        errorView()
      )}
    </SafeAreaView>
  );
};

export default DetailsScreen;
