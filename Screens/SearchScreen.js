import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MovieCard from './components/MovieCard';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

const SearchScreen = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  

  const handleSearch = (term) => {
    if (term.length > 0) {
      axios.get(`https://api.tvmaze.com/search/shows?q=${term}`)
        .then(response => setResults(response.data))
        .catch(error => console.error(error));
    }
    else{
        setResults([]);
    }
  };
  return (
    <View style={{
        backgroundColor:'#000000',
        flex:1,
        paddingTop:80
    }}>

    <SafeAreaView style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            position:'absolute',
            zIndex: 20,
            width:'100%',
            paddingHorizontal:20,
            marginTop:15            
        }}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{
            }}>
                <Entypo name="chevron-left" size={26} color="white" />
            </TouchableOpacity>
            
        </SafeAreaView>

        <View>

            <TextInput placeholder='Search Movies...' placeholderTextColor={'white'}  style={{
            height:40,
            backgroundColor:'#313030',
            borderRadius:10,
            paddingLeft:10,
            color:'white',
            fontSize:16,
            fontFamily:'Regular',
            marginHorizontal:15,
            marginBottom:15
            }}
            value={searchTerm}
            onChangeText={term => {
                setSearchTerm(term);
                handleSearch(term);
                console.log(term);
            }}
        />

            {searchTerm.length > 0 && (
                <TouchableOpacity onPress={() => {
                    setSearchTerm('');
                    setResults([]);
                }} style={{
                    position:'absolute',
                    right:25,
                    top:10,
                }}>
                    <Entypo name="cross" size={24} color="white" />
                </TouchableOpacity>
            )}  
        </View>
      


      <View style={{
        height:1,
        backgroundColor:'#343333'
      }}/>

        <FlatList 
            numColumns={2}
            columnWrapperStyle={{justifyContent:'space-between'}}
            data={results}
            keyExtractor={(item) => item.show.id.toString()}
            renderItem={({item})=>(
                <TouchableOpacity onPress={() => navigation.navigate('Details', {movie: item.show})} style={{
                    padding:10, 
                    }}>
                        <MovieCard movie={item?.show}/>
                </TouchableOpacity>
                )}
        />
    </View>
  )
}

export default SearchScreen