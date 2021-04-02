import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import SettingScreen from './SettingsScreen';
import OtsuNewsViewModel from '../otsu/OtsuNewsViewModel';

const Stack = createStackNavigator();

export default function SettingsStackScreen() {
    return(
      <Stack.Navigator initialRouteName='SettingScreen'>
        <Stack.Screen
          name='SettingScreen'
          component={SettingScreen}
          options={{headerTitle: '設定'}}
        />
        <Stack.Screen
          name='OtsuNewsViewModel'
          component={OtsuNewsViewModel}
          options={{headerTitle: '大津市の情報'}}
        />
      </Stack.Navigator>
    );
  }