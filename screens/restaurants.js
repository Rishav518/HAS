import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import tw from 'twrnc';

const RestaurantsScreen = () => {

  return (
    <View style={tw`flex-1 p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Restaurants</Text>
    </View>
  );
};

export default RestaurantsScreen;
