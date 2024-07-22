import { View, Text, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import {StatusBar} from 'expo-status-bar'
const SplashScreen = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.timing(
            fadeAnim,{
            toValue: 1,
            duration: 2000,
            useNativeDriver: true}).start(()=>{
                setTimeout(() => {
                navigation.navigate('Home')
            }, 3000)
        })   
    },[fadeAnim,navigation])
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000'
    }}>
        <Animated.View style={{opacity:fadeAnim}}>
            <Text style={{
                fontSize: 45,
                fontFamily:'Bold',
                color: '#fff'
            }}>Movies</Text>
            <StatusBar style='light'/>
        </Animated.View>
    </View>
  )
}

export default SplashScreen