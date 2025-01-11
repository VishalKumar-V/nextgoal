import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailScreen';
import VideoPlayerScreen from '../screens/PlayerScreen/Player';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();
const NavContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: Platform.OS === 'android' ? 'ios_from_left' : 'flip',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animationDuration: 1000,
            animation: Platform.OS === 'android' ? 'ios_from_left' : 'flip',
          }}
        />
        <Stack.Screen
          name="PlayerScreen"
          component={VideoPlayerScreen}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animationDuration: 1000,
            animation: Platform.OS === 'android' ? 'ios_from_left' : 'flip',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavContainer;
