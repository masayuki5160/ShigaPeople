import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import AreasListScreen from './Areas/AreasListScreen';
import ShigaNewsComponent from './Shiga/ShigaNewsComponent';
import OtsuNewsViewModel from './Otsu/OtsuNewsViewModel';
import ShigaNewsWebViewScreen from './Shiga/ShigaNewsWebViewScreen';

const Stack = createStackNavigator();

export default function areaStackScreen() {
    return(
      <Stack.Navigator initialRouteName='AreasListScreen'>
        <Stack.Screen name='AreasListScreen' component={AreasListScreen}/>
        <Stack.Screen name='ShigaNewsComponent' component={ShigaNewsComponent}/>
        <Stack.Screen name='OtsuNewsViewModel' component={OtsuNewsViewModel}/>
        <Stack.Screen name='ShigaNewsWebViewScreen' component={ShigaNewsWebViewScreen}/>
      </Stack.Navigator>
    );
  }