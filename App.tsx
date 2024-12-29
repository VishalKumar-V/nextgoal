import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FootballLoader from './src/componets/atoms/FootballLoader';

function App(): React.JSX.Element {
  const getData = async () => {
    const skillCollection = await firestore().collection('skills').get();
    console.log('skillsss===>>>>', skillCollection.docs[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FootballLoader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
