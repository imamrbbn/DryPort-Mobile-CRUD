import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

const Stack = createStackNavigator()

import store from './src/stores'
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen'
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Splash'
            component={SplashScreen}
            options={{
              headerShown: false
            }}/>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              headerShown: false
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
