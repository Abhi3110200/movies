import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
const DetailScreen = ({route}) => {
    const {movie}=route.params;
    const navigation = useNavigation();
    const [isFavourite,setIsFavourite]=useState(false);
  return (

    <ScrollView style={{
        flex:1,
        backgroundColor:'#000000',
    }}>

        <SafeAreaView style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            position:'absolute',
            zIndex: 20,
            width:'100%',
            paddingHorizontal:20,
            marginTop:10            
        }}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{
                
            }}>
                <Entypo name="chevron-left" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setIsFavourite(!isFavourite)} style={{
            }}>
                <AntDesign name="heart" size={24} color={isFavourite ? "red":"white"} />
            </TouchableOpacity>

        </SafeAreaView>

        <View style={{
            
        }}>
            <Image source={{ uri: movie.image?.original }} style={{
                width: '100%',
                height: 500,
                resizeMode:'cover'
            }}/>

        <LinearGradient
        // Button Linear Gradient
            colors={['transparent', 'rgba(23,23,23,0.9)', 'black']}
            start={{x:0.5,y:0}}
            end={{x:0.5,y:1}}
            style={{
               position:'absolute',
                width:'100%',
                height:400,
                bottom:0
            }}/>           

        </View>

        <View style={{
            marginTop:-70,
            paddingHorizontal:20,
            gap:5
        }}>
            <Text style={{
                color:'white',
                fontSize:30,
                fontFamily:'Bold',
                textAlign:'center'
            }}>{movie?.name}</Text>

            <Text style={{
                color:'gray',
                fontSize:16,
                fontFamily:'Medium',
                textAlign:'center'
            }}>{movie?.status} • {movie?.schedule?.days ? movie?.schedule?.days : 'Not Decided Yet'} •  {movie?.runtime ? movie?.runtime : '0'} Min</Text>

            <View style={{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Text style={{
                color:'gray',
                fontSize:16,
                fontFamily:'Medium',
                textAlign:'center'
            }}>{movie?.genres[0]} •</Text>
                <Text style={{
                color:'gray',
                fontSize:16,
                fontFamily:'Medium',
                textAlign:'center'
            }}> {movie?.genres[1]}</Text>
            </View>

            

            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    paddingBottom:5,
                    marginTop:5,
                }}
            > 
            <Text  style={{
                color:'white',
                fontSize:17,
                fontFamily:'Bold',
            }}>⭐ Rating : <Text style={{
                fontFamily:'Regular'
            }}>{movie?.rating?.average ? movie?.rating?.average : '5'}</Text>  </Text>
            <Text  style={{
                color:'white',
                fontSize:17,
                fontFamily:'Bold',
            }}>Language : <Text style={{
                fontFamily:'Regular'
            }}>{movie?.language}</Text>  </Text>
            </View>

            <Text style={{
                color:'white',
                fontSize:20,
                fontFamily:'Bold',
            }}>Summary</Text>
            
            <Text style={{
                color:'gray',
                fontSize:14,
                fontFamily:'Regular',
            }}>{movie.summary ? movie.summary.replace(/<[^>]+>/g, '') : 'No summary available'}</Text>

            <Text  style={{
                color:'white',
                fontSize:17,
                fontWeight:'bold',
                marginBottom:5
            }}>Released In : <Text style={{
                fontFamily:'Regular'
            }}>{movie?.premiered}</Text>  </Text>    


            <TouchableOpacity style={{
                backgroundColor:'white',
                padding:10,
                marginBottom:20,
                borderRadius:15
            }}>
                <Text style={{
                    color:'black',
                    fontSize:17,
                    textAlign:'center',
                    fontFamily:'Medium'
                }}>Watch Now</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default DetailScreen