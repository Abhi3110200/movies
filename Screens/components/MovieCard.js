import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const MovieCard = ({movie}) => {

    const placeholderImage = 'https://via.placeholder.com/100x150?text=No+Image';
  return (
    <View style={{
        padding:5,
        borderRadius:15
    }}>
      <Image source={{uri:movie.image?.medium || placeholderImage}} style={{
        width: 150,
        height: 200,
        resizeMode:'cover',
        borderRadius:15
      }}/>
      <View style={{
        marginTop:5,
        paddingLeft:5
      }}>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>

            <Text style={{
                color:'#fff',
                fontSize:16,
                fontFamily:'Medium'
            }}>{movie.name.substr(0,13)}</Text>
            <Text style={{
                color:'gray',
                fontFamily:'Regular'
            }}>⭐ {movie?.rating?.average ? movie?.rating?.average : '5'}</Text>
        </View>
        <Text style={{
                color:'#fff',
                width:'90%',
                fontFamily:'Regular',
                marginTop:-5
            }}>{movie?.genres[0]}
        </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between',
            alignItems:'center'
        }}>
            <Text style={{
                    color:'gray',
                    fontFamily:'Regular'
                }}>{movie.language ? movie.language : 'null'}</Text>
            <Text style={{
                    color:'gray',
                    fontFamily:'Regular'
            }}>{movie?.schedule?.time ? movie?.schedule?.time : '00:00'}</Text>
        </View>

        {/* <Pressable style={{
            backgroundColor:'gray',
            padding:10,
            marginTop:10,
            borderRadius:10
        }}>
            <Text style={{
                textAlign:'center',
                fontSize:14,
                fontWeight:'bold'
            }}>Watch Now</Text>
        </Pressable> */}
      </View>
    </View>
  )
}

export default MovieCard