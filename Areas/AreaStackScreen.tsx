import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import AreasListScreen from './AreasListScreen';
import OtsuNewsViewModel from '../otsu/OtsuNewsViewModel';
import MaibaraNewsViewModel from '../maibara/MaibaraNewsViewModel';
import ShigaNewsWebViewScreen from '../shiga/ShigaNewsWebViewScreen';

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
          name='OtsuNewsViewModel'
          component={OtsuNewsViewModel}
          options={{headerTitle: '大津市の情報'}}
        />
        <Stack.Screen
          name='MaibaraNewsViewModel'
          component={MaibaraNewsViewModel}
          options={{headerTitle: '米原市の情報'}}
        />
        <Stack.Screen
          name='ShigaNewsWebViewScreen'
          component={ShigaNewsWebViewScreen}
          options={{headerTitle: ''}}
        />
      </Stack.Navigator>
    );
  }