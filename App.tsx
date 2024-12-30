import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavContainer from './src/navigation';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash'

const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
  const init = async () => {
    // …do multiple sync or async tasks
  };

  init().finally(async () => {
    await BootSplash.hide({fade: true});
    console.log('BootSplash has been hidden successfully');
  });
}, []);

  return (
      <NavContainer />
  );
}
export default App;