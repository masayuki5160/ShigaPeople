import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import AreasListScreen from './Areas/AreasListScreen';
import ShigaNewsComponent from './Shiga/ShigaNewsComponent';
import OtsuNewsScreen from './Otsu/OtsuNewsScreen';

const Stack = createStackNavigator();

export default function areaStackScreen() {
    return(
      <Stack.Navigator initialRouteName='AreasListScreen'>
        <Stack.Screen name='AreasListScreen' component={AreasListScreen}/>
        <Stack.Screen name='ShigaNewsComponent' component={ShigaNewsComponent}/>
        <Stack.Screen name='OtsuNewsScreen' component={OtsuNewsScreen}/>
      </Stack.Navigator>
    );
  }