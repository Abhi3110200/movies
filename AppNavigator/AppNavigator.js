import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import SearchScreen from '../Screens/SearchScreen';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {

    const [fontsLoaded] = useFonts({
        'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return null; 
    }
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Splash' component={SplashScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Search' component={SearchScreen}/>
            <Stack.Screen name='Details' component={DetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator