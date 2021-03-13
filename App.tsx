import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ShigaNewsScreen } from './Shiga/ShigaNewsScreen';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ShigaNews'
          component={ShigaNewsScreen}
          options={{
            title: '滋賀'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}