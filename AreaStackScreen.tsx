import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import AreasListScreen from './Areas/AreasListScreen';
import ShigaNewsComponent from './Shiga/ShigaNewsComponent';
import OtsuNewsComponent from './Otsu/OtsuNewsComponent';
import ShigaNewsWebViewScreen from './Shiga/ShigaNewsWebViewScreen';

const Stack = createStackNavigator();

export default function areaStackScreen() {
    return(
      <Stack.Navigator initialRouteName='AreasListScreen'>
        <Stack.Screen name='AreasListScreen' component={AreasListScreen}/>
        <Stack.Screen name='ShigaNewsComponent' component={ShigaNewsComponent}/>
        <Stack.Screen name='OtsuNewsComponent' component={OtsuNewsComponent}/>
        <Stack.Screen name='ShigaNewsWebViewScreen' component={ShigaNewsWebViewScreen}/>
      </Stack.Navigator>
    );
  }