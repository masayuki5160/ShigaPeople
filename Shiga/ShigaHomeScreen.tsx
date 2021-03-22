import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import ShigaNewsScreen from './ShigaNewsScreen';
import ShigaNewsWebViewScreen from './ShigaNewsWebViewScreen';

const Stack = createStackNavigator();

export default function ShigaHomeScreen() {
    return(
        <Stack.Navigator initialRouteName='ShigaNewsScreen'>
            <Stack.Screen name='ShigaNewsScreen' component={ShigaNewsScreen}/>
            <Stack.Screen name='ShigaNewsWebViewScreen' component={ShigaNewsWebViewScreen}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
        flex: 1
    },
  });