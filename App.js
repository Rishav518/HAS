import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from "twrnc"
import LoginScreen from './screens/login';
import RestaurantsScreen from './screens/restaurants';

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center bg-gray-200`}>
      <RestaurantsScreen/>
      </SafeAreaView>
  );
}
