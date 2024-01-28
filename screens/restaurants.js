import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import tw from 'twrnc';

const RestaurantsScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3000/restaurants');
        if (!response.ok) {
          throw new Error('Failed to fetch restaurants');
        }

        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={tw`flex-1 p-4`}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.restaurant_id.toString()}
        renderItem={({ item }) => (
          <View style={tw`mb-6 bg-white p-4 rounded-md shadow-md`}>
            <Image 
              style={tw`w-full h-40 mb-2`}
              source={{ uri: item.image }} 
            />
            <Text style={tw`text-xl font-bold mb-2`}>{item.name}</Text>
            <Text style={tw`text-gray-500 mb-2`}>{item.location}</Text>
            <Text style={tw`text-gray-700`}>{item.cuisine_type}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RestaurantsScreen;
