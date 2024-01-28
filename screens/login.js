// Import necessary modules
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const json = await response.json();
      if (response.status === 200) {
        Alert.alert("Success", "Logged in successfully");
        // Handle successful login here
      } else {
        Alert.alert("Login Failed", json.message);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert("Error", "An error occurred during login");
    }
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-200`}>
      <TextInput
        style={tw`border border-gray-400 w-80 p-2 mb-4`}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={tw`border border-gray-400 w-80 p-2 mb-4`}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={tw`bg-blue-500 w-80 p-3 items-center`}
        onPress={handleLogin}
      >
        <Text style={tw`text-white font-bold`}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
