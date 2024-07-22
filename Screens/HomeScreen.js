import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import axios from 'axios'
import MovieCard from './components/MovieCard'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const HomeScreen = ({navigation}) => {
    const [movies, setMovies] = useState([]);
    

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);
    
  return (
    <View style={{
        flex: 1,
        backgroundColor:'#000000',
        paddingHorizontal:15
    }}>
        <SafeAreaView style={{
            marginTop:10,
            marginBottom:10,
        }}>
            <StatusBar style='light'/>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
            }}>
                <Ionicons name="menu" size={30} color="white" />
                
                <Text style={{
                    color: '#fff',
                    fontSize: 30,
                    fontFamily:'Bold'
                }}>Movies</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                    <FontAwesome name="search" size={25} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>

            <Text style={{
                color: '#fff',
                marginBottom:5,
                fontSize:20,
                fontFamily:'Medium'
            }}>Trending Now</Text>

            <FlatList 
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{justifyContent:'space-between'}}
            data={movies}
            keyExtractor={(item) => item.show.id.toString()}
            renderItem={({item})=>(
                <TouchableOpacity onPress={() => navigation.navigate('Details', {movie: item.show})} style={{
                    paddingTop:10
                    }}>
                        <MovieCard movie={item?.show}/>
                </TouchableOpacity>
                )}
            />
    </View>
  )
}

export default HomeScreen