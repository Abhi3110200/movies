import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchMovies();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000000', paddingHorizontal: 15 }}>
      <SafeAreaView style={{ marginTop: 10, marginBottom: 10 }}>
        <StatusBar style='light' />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Ionicons name="menu" size={30} color="white" />
          <Text style={{ color: '#fff', fontSize: 30, fontFamily: 'Bold' }}>Movies</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <FontAwesome name="search" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Text style={{ color: '#fff', marginBottom: 5, fontSize: 20, fontFamily: 'Medium' }}>Trending Now</Text>

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      ) : (
        <FlatList
          data={movies}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          keyExtractor={(item) => item.show.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { movie: item.show })}
              style={{ paddingTop: 10 }}
            >
              <MovieCard movie={item.show} />
            </TouchableOpacity>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#ffffff"
            />
          }
        />
      )}
    </View>
  );
};

export default HomeScreen;
