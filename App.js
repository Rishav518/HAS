import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from "twrnc"
import Login from './screens/login';

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center bg-gray-200`}>
      <Login/>
      </SafeAreaView>
  );
}
