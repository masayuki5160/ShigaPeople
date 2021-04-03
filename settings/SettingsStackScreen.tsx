import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import SettingViewModel from './SettingsViewModel';
import OtsuNewsViewModel from '../otsu/OtsuNewsViewModel';
import NotificationsViewModel from './notifications/NotificationsViewModel';

const Stack = createStackNavigator();

export default function SettingsStackScreen() {
    return(
      <Stack.Navigator initialRouteName='SettingViewModel'>
        <Stack.Screen
          name='SettingViewModel'
          component={SettingViewModel}
          options={{headerTitle: '設定'}}
        />
        <Stack.Screen
          name='OtsuNewsViewModel'
          component={OtsuNewsViewModel}
          options={{headerTitle: '大津市の情報'}}
        />
        <Stack.Screen
          name='NotificationsViewModel'
          component={NotificationsViewModel}
          options={{headerTitle: 'プッシュ通知設定'}}
        />
      </Stack.Navigator>
    );
  }