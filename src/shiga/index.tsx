import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import ShigaNewsViewModel from './ShigaNewsViewModel';
import WebViewScreen from '../common/WebViewScreen';

const Stack = createStackNavigator();
const headerTitleName = '滋賀県の情報';

export default function ShigaStackScreen() {
  return (
    <Stack.Navigator initialRouteName="ShigaNewsViewModel">
      <Stack.Screen
        name="ShigaNewsViewModel"
        component={ShigaNewsViewModel}
        options={{ headerTitle: headerTitleName }}
      />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} options={{ headerTitle: '' }} />
    </Stack.Navigator>
  );
}
