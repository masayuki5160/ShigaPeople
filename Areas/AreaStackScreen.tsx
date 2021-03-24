import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import AreasListScreen from './AreasListScreen';
import ShigaNewsViewModel from '../Shiga/ShigaNewsViewModel';
import OtsuNewsViewModel from '../Otsu/OtsuNewsViewModel';
import ShigaNewsWebViewScreen from '../Shiga/ShigaNewsWebViewScreen';

const Stack = createStackNavigator();

export default function areaStackScreen() {
    return(
      <Stack.Navigator initialRouteName='AreasListScreen'>
        <Stack.Screen
          name='AreasListScreen'
          component={AreasListScreen}
          options={{headerTitle: '各市の情報'}}
        />
        <Stack.Screen
          name='ShigaNewsViewModel'
          component={ShigaNewsViewModel}
          options={{headerTitle: '滋賀県の情報'}}
        />
        <Stack.Screen
          name='OtsuNewsViewModel'
          component={OtsuNewsViewModel}
          options={{headerTitle: '大津市の情報'}}
        />
        <Stack.Screen
          name='ShigaNewsWebViewScreen'
          component={ShigaNewsWebViewScreen}
          options={{headerTitle: ''}}
        />
      </Stack.Navigator>
    );
  }