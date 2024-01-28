import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'twrnc';

const Login = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (buttonPressed) => {
    if (buttonPressed === '=' && input) {
      calculateResult();
      return;
    }
    setInput((prevInput) => (prevInput + buttonPressed));
  };

  const calculateResult = () => {
    let answer = input;
    try {
      answer = eval(input);
    } catch (error) {
      answer = 'Error';
    }
    setResult(answer);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center bg-blue-600 w-full`}>
      <View style={tw`bg-white w-80 rounded-xl`}>
        <View style={tw`p-4`}>
          <Text style={tw`text-2xl text-right`}>{input || '0'}</Text>
          <Text style={tw`text-lg text-gray-500 text-right mt-2`}>{result}</Text>
        </View>
        <View style={tw`flex-wrap flex-row`}>
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((button) => (
            <TouchableOpacity
              key={button}
              style={tw`w-1/4 items-center p-4 border`}
              onPress={() => button === 'C' ? clearInput() : handleInput(button)}
            >
              <Text style={tw`text-lg`}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
